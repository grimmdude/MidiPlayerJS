import {Constants} from './constants';
import {Track} from './track';
import {Utils} from './utils';

// Polyfill Uint8Array.forEach: Doesn't exist on Safari <10
if (!Uint8Array.prototype.forEach) {
	Object.defineProperty(Uint8Array.prototype, 'forEach', {
		value: Array.prototype.forEach
	});
}

/**
 * Main player class.  Contains methods to load files, start, stop.
 * @param {function} - Callback to fire for each MIDI event.  Can also be added with on('midiEvent', fn)
 * @param {array} - Array buffer of MIDI file (optional).
 */
class Player {
	constructor(eventHandler, buffer) {
		this.sampleRate = 5; // milliseconds
		this.startTime = 0;
		this.buffer = buffer || null;
		this.midiChunksByteLength = null;
		this.division;
		this.format;
		this.setTimeoutId = false;
		this.scheduledTime = 0;
		this.tracks = [];
		this.instruments = [];
		this.defaultTempo = 120;
		this.tempo = null;
		this.startTick = 0;
		this.tick = 0;
		this.lastTick = null;
		this.inLoop = false;
		this.totalTicks = 0;
		this.events = [];
		this.totalEvents = 0;
		this.tempoMap = [];
		this.loop = false;
		this.eventListeners = {};

		if (typeof(eventHandler) === 'function') this.on('midiEvent', eventHandler);
	}

	/**
	 * Load a file into the player (Node.js only).
	 * @param {string} path - Path of file.
	 * @return {Player}
	 */
	loadFile(path) {
		if (!process.browser) {
			var fs = require('fs');
			this.buffer = fs.readFileSync(path);
			return this.fileLoaded();
		} else {
			throw 'loadFile is only supported on Node.js';
		}
	}

	/**
	 * Load an array buffer into the player.
	 * @param {array} arrayBuffer - Array buffer of file to be loaded.
	 * @return {Player}
	 */
	loadArrayBuffer(arrayBuffer) {
		this.buffer = new Uint8Array(arrayBuffer);
		return this.fileLoaded();
	}

	/**
	 * Load a data URI into the player.
	 * @param {string} dataUri - Data URI to be loaded.
	 * @return {Player}
	 */
	loadDataUri(dataUri) {
		// convert base64 to raw binary data held in a string.
		// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
		var byteString = Utils.atob(dataUri.split(',')[1]);

		// write the bytes of the string to an ArrayBuffer
		var ia = new Uint8Array(byteString.length);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}

		this.buffer = ia;
		return this.fileLoaded();
	}

	/**
	 * Get filesize of loaded file in number of bytes.
	 * @return {number} - The filesize.
	 */
	getFilesize() {
		return this.buffer ? this.buffer.length : 0;
	}

	/**
	 * Sets default tempo, parses file for necessary information, and does a dry run to calculate total length.
	 * Populates this.events & this.totalTicks.
	 * @return {Player}
	 */
	fileLoaded() {
		if (!this.validate()) throw 'Invalid MIDI file; should start with MThd';
		this.defaultTempo = 120;
		return this.setTempo(this.defaultTempo).getDivision().getFormat().getTracks().dryRun();
	}

	/**
	 * Validates file using simple means - first four bytes should == MThd.
	 * @return {boolean}
	 */
	validate() {
		//console.log((this.buffer.subarray(0, 15)));
		return Utils.bytesToLetters(this.buffer.subarray(0, 4)) === 'MThd';
	}

	/**
	 * Gets MIDI file format for loaded file.
	 * @return {Player}
	 */
	getFormat() {
		/*
		MIDI files come in 3 variations:
		Format 0 which contain a single track
		Format 1 which contain one or more simultaneous tracks
		(ie all tracks are to be played simultaneously).
		Format 2 which contain one or more independant tracks
		(ie each track is to be played independantly of the others).
		return Utils.bytesToNumber(this.buffer.subarray(8, 10));
		*/

		this.format = Utils.bytesToNumber(this.buffer.subarray(8, 10));
		return this;
	}

	/**
	 * Parses out tracks, places them in this.tracks and initializes this.pointers
	 * @return {Player}
	 */
	getTracks() {
		this.tracks = [];
		let trackOffset = 0;
		while (trackOffset < this.buffer.length) {
			if (Utils.bytesToLetters(this.buffer.subarray(trackOffset, trackOffset + 4)) == 'MTrk') {
				let trackLength = Utils.bytesToNumber(this.buffer.subarray(trackOffset + 4, trackOffset + 8));
				this.tracks.push(new Track(this.tracks.length, this.buffer.subarray(trackOffset + 8, trackOffset + 8 + trackLength)));
			}

			trackOffset += Utils.bytesToNumber(this.buffer.subarray(trackOffset + 4, trackOffset + 8)) + 8;
		}

		// Get sum of all MIDI chunks here while we're at it
		let trackChunksByteLength = 0;

		this.tracks.forEach((track) => {
			trackChunksByteLength += 8 + track.data.length;
		});

		this.midiChunksByteLength = Constants.HEADER_CHUNK_LENGTH + trackChunksByteLength;
		return this;
	}

	/**
	 * Enables a track for playing.
	 * @param {number} trackNumber - Track number
	 * @return {Player}
	 */
	enableTrack(trackNumber) {
		this.tracks[trackNumber - 1].enable();
		return this;
	}

	/**
	 * Disables a track for playing.
	 * @param {number} - Track number
	 * @return {Player}
	 */
	disableTrack(trackNumber) {
		this.tracks[trackNumber - 1].disable();
		return this;
	}

	/**
	 * Gets quarter note division of loaded MIDI file.
	 * @return {Player}
	 */
	getDivision() {
		this.division = Utils.bytesToNumber(this.buffer.subarray(12, Constants.HEADER_CHUNK_LENGTH));
		return this;
	}

	/**
	 * The main play loop.
	 * @param {boolean} dryRun - Indicates whether or not this is being called simply for parsing purposes.  Disregards timing if so.
	 * @return {undefined}
	 * @private
	 */
	playLoop(dryRun) {
		if (!this.inLoop) {
			this.inLoop = true;
			this.tick = this.getCurrentTick();

			this.tracks.forEach(function(track, index) {
				// Handle next event
				if (!dryRun && this.endOfFile()) {
					if (this.loop) {
						this.resetTracks();
						this.setTempo(this.defaultTempo);
						this.startTick = 0;
						this.startTime = (new Date()).getTime();
						this.tick = 0;
						this.triggerPlayerEvent('endOfFile');
					} else {
						this.stop();
						this.triggerPlayerEvent('endOfFile');
					}
				} else {
					let result = track.handleEvent(this.tick, dryRun);

					if (dryRun && result) {
						if (result.hasOwnProperty('name') && result.name === 'Set Tempo') {
							// Grab tempo if available.
							this.setTempo(result.data);
						}
						if (result.hasOwnProperty('name') && result.name === 'Program Change') {
							if (!this.instruments.includes(result.value)) {
								this.instruments.push(result.value);
							}
						}

					} else if (result) {
						// result is an array of events during playback
						let events = Array.isArray(result) ? result : [result];

						events.forEach(function(event) {
							if (event.hasOwnProperty('name') && event.name === 'Set Tempo') {
								// Grab tempo if available.
								this.setTempo(event.data);
							}

							this.emitEvent(event);
						}, this);
					}
				}

			}, this);

			if (!dryRun && this.isPlaying()) this.triggerPlayerEvent('playing', {tick: this.tick});
			this.inLoop = false;
		}
	}

	/**
	 * Setter for tempo.
	 * @param {number} - Tempo in bpm (defaults to 120)
	 */
	setTempo(tempo) {
		this.tempo = tempo;
		return this;
	}

	/**
	 * Setter for startTime.
	 * @param {number} - UTC timestamp
	 * @return {Player}
	 */
	setStartTime(startTime) {
		this.startTime = startTime;
		return this;
	}

	/**
	 * Start playing loaded MIDI file if not already playing.
	 * @return {Player}
	 */
	play() {
		if (this.isPlaying()) throw 'Already playing...';

		// Initialize
		if (!this.startTime) this.startTime = (new Date()).getTime();

		// Start play loop using drift-correcting setTimeout
		this.scheduledTime = Date.now();
		this.schedulePlayLoop(this.sampleRate);
		return this;
	}

	/**
	 * Schedules the next play loop iteration, correcting for timer drift.
	 * @param {number} delay - Delay in milliseconds before next iteration.
	 * @return {undefined}
	 */
	schedulePlayLoop(delay) {
		this.setTimeoutId = setTimeout(() => {
			this.playLoop();
			if (this.setTimeoutId !== false) {
				this.scheduledTime += this.sampleRate;
				let drift = Date.now() - this.scheduledTime;
				this.schedulePlayLoop(Math.max(0, this.sampleRate - drift));
			}
		}, delay);
	}

	/**
	 * Pauses playback if playing.
	 * @return {Player}
	 */
	pause() {
		clearTimeout(this.setTimeoutId);
		this.setTimeoutId = false;
		this.scheduledTime = 0;
		this.startTick = this.tick;
		this.startTime = 0;
		return this;
	}

	/**
	 * Stops playback if playing.
	 * @return {Player}
	 */
	stop() {
		clearTimeout(this.setTimeoutId);
		this.setTimeoutId = false;
		this.scheduledTime = 0;
		this.startTick = 0;
		this.startTime = 0;
		this.resetTracks();
		return this;
	}

	/**
	 * Skips player pointer to specified tick.
	 * @param {number} - Tick to skip to.
	 * @return {Player}
	 */
	skipToTick(tick) {
		this.stop();
		this.startTick = tick;

		// Set tempo to the value that applies at the target tick
		for (var i = this.tempoMap.length - 1; i >= 0; i--) {
			if (this.tempoMap[i].tick <= tick) {
				this.setTempo(this.tempoMap[i].tempo);
				break;
			}
		}

		// Emit intermediate state-changing events so the consumer's synth is in the correct state
		this.collectStateAtTick(tick).forEach(function(event) {
			this.emitEvent(event);
		}, this);

		// Need to set track event indexes to the nearest possible event to the specified tick.
		this.tracks.forEach(function(track) {
			track.setEventIndexByTick(tick);
		});
		return this;
	}

	/**
	 * Collects the last state-changing MIDI events (Program Change, Controller Change, Pitch Bend)
	 * before the specified tick across all tracks.
	 * @param {number} tick - Target tick to collect state up to.
	 * @return {array} - Array of state events representing the MIDI state at the target tick.
	 */
	collectStateAtTick(tick) {
		var dominated = {};

		this.events.forEach(function(trackEvents) {
			trackEvents.forEach(function(event) {
				if (event.tick >= tick) return;

				var key;
				if (event.name === 'Program Change') {
					key = 'pc:' + event.channel;
				} else if (event.name === 'Controller Change') {
					key = 'cc:' + event.channel + ':' + event.number;
				} else if (event.name === 'Pitch Bend') {
					key = 'pb:' + event.channel;
				}

				if (key) {
					dominated[key] = event;
				}
			});
		});

		return Object.keys(dominated).map(function(key) { return dominated[key]; });
	}

	/**
	 * Skips player pointer to specified percentage.
	 * @param {number} - Percent value in integer format.
	 * @return {Player}
	 */
	skipToPercent(percent) {
		if (percent < 0 || percent > 100) throw "Percent must be number between 1 and 100.";
		this.skipToTick(Math.round(percent / 100 * this.totalTicks));
		return this;
	}

	/**
	 * Skips player pointer to specified seconds.
	 * @param {number} - Seconds to skip to.
	 * @return {Player}
	 */
	skipToSeconds(seconds) {
		var songTime = this.getSongTime();
		if (seconds < 0 || seconds > songTime) throw seconds + " seconds not within song time of " + songTime;
		this.skipToTick(this.secondsToTicks(seconds));
		return this;
	}

	/**
	 * Checks if player is playing
	 * @return {boolean}
	 */
	isPlaying() {
		return this.setTimeoutId !== false;
	}

	/**
	 * Plays the loaded MIDI file without regard for timing and saves events in this.events.  Essentially used as a parser.
	 * @return {Player}
	 */
	dryRun() {
		// Reset tracks first
		this.resetTracks();
		while (!this.endOfFile()) {
			this.playLoop(true);
			//console.log(this.bytesProcessed(), this.midiChunksByteLength);
		}
		this.events = this.getEvents();
		this.totalEvents = this.getTotalEvents();
		this.totalTicks = this.getTotalTicks();
		this.buildTempoMap();
		this.startTick = 0;
		this.startTime = 0;

		// Leave tracks in pristine condish
		this.resetTracks();

		//console.log('Song time: ' + this.getSongTime() + ' seconds / ' + this.totalTicks + ' ticks.');

		this.triggerPlayerEvent('fileLoaded', this);
		return this;
	}

	/**
	 * Resets play pointers for all tracks.
	 * @return {Player}
	 */
	resetTracks() {
		this.tracks.forEach(track => track.reset());
		return this;
	}

	/**
	 * Gets an array of events grouped by track.
	 * @return {array}
	 */
	getEvents() {
		return this.tracks.map(track => track.events);
	}

	/**
	 * Gets all Lyric (FF 05) meta events, optionally filtered to a specific track.
	 * Note: Some MIDI files store lyrics as Text (FF 01) events instead; those are not included here.
	 * @param {number} [trackNumber] - Optional 1-based track number to filter by.
	 * @return {array}
	 */
	getLyrics(trackNumber) {
		return this.events
			.flat()
			.filter(e => e.name === 'Lyric' && (trackNumber == null || e.track === trackNumber));
	}

	/**
	 * Gets total number of ticks in the loaded MIDI file.
	 * @return {number}
	 */
	getTotalTicks() {
		return Math.max.apply(null, this.tracks.map(track => track.delta));
	}

	/**
	 * Gets total number of events in the loaded MIDI file.
	 * @return {number}
	 */
	getTotalEvents() {
		return this.tracks.reduce((a, b) => {return {events: {length: a.events.length + b.events.length}}}, {events: {length: 0}}).events.length;
	}

	/**
	 * Builds a tempo map from all Set Tempo events across all tracks.
	 * @return {Player}
	 */
	buildTempoMap() {
		// Collect all Set Tempo events from all tracks
		var tempoEvents = [];
		this.events.forEach(function(trackEvents) {
			trackEvents.forEach(function(event) {
				if (event.name === 'Set Tempo') {
					tempoEvents.push({tick: event.tick, tempo: event.data});
				}
			});
		});

		// Sort by tick
		tempoEvents.sort(function(a, b) { return a.tick - b.tick; });

		// Build map starting with default tempo
		this.tempoMap = [{tick: 0, tempo: this.defaultTempo}];

		tempoEvents.forEach(function(event) {
			var last = this.tempoMap[this.tempoMap.length - 1];
			if (event.tick === last.tick) {
				// Same tick: update existing entry
				last.tempo = event.tempo;
			} else {
				this.tempoMap.push({tick: event.tick, tempo: event.tempo});
			}
		}, this);

		return this;
	}

	/**
	 * Converts a tick range to seconds using the tempo map.
	 * @param {number} startTick
	 * @param {number} endTick
	 * @return {number}
	 */
	ticksToSeconds(startTick, endTick) {
		var seconds = 0;
		var currentTick = startTick;

		for (var i = 0; i < this.tempoMap.length; i++) {
			var entry = this.tempoMap[i];
			var nextTick = (i + 1 < this.tempoMap.length) ? this.tempoMap[i + 1].tick : endTick;

			// Skip entries entirely before our start
			if (nextTick <= startTick) continue;

			// Clamp segment to our range
			var segStart = Math.max(entry.tick, startTick);
			var segEnd = Math.min(nextTick, endTick);

			if (segStart >= endTick) break;

			var segmentTicks = segEnd - segStart;
			seconds += segmentTicks / this.division / entry.tempo * 60;

			currentTick = segEnd;
		}

		// Handle remaining ticks after last tempo change
		if (currentTick < endTick) {
			var lastEntry = this.tempoMap[this.tempoMap.length - 1];
			seconds += (endTick - currentTick) / this.division / lastEntry.tempo * 60;
		}

		return seconds;
	}

	/**
	 * Converts seconds to a tick position using the tempo map.
	 * @param {number} seconds
	 * @return {number}
	 */
	secondsToTicks(seconds) {
		var remainingSeconds = seconds;
		var currentTick = 0;

		for (var i = 0; i < this.tempoMap.length; i++) {
			var entry = this.tempoMap[i];
			var nextTick = (i + 1 < this.tempoMap.length) ? this.tempoMap[i + 1].tick : Infinity;

			var segmentTicks = nextTick - entry.tick;
			var segmentSeconds = segmentTicks / this.division / entry.tempo * 60;

			if (remainingSeconds <= segmentSeconds) {
				// Target is within this segment
				currentTick = entry.tick + Math.round(remainingSeconds / 60 * entry.tempo * this.division);
				return currentTick;
			}

			remainingSeconds -= segmentSeconds;
			currentTick = nextTick;
		}

		// Should not reach here, but return totalTicks as fallback
		return this.totalTicks;
	}

	/**
	 * Gets song duration in seconds.
	 * @return {number}
	 */
	getSongTime() {
		return this.ticksToSeconds(0, this.totalTicks);
	}

	/**
	 * Gets remaining number of seconds in playback.
	 * @return {number}
	 */
	getSongTimeRemaining() {
		return Math.round(this.ticksToSeconds(this.getCurrentTick(), this.totalTicks));
	}

	/**
	 * Gets remaining percent of playback.
	 * @return {number}
	 */
	getSongPercentRemaining() {
		return Math.round(this.getSongTimeRemaining() / this.getSongTime() * 100);
	}

	/**
	 * Number of bytes processed in the loaded MIDI file.
	 * @return {number}
	 */
	bytesProcessed() {
		return Constants.HEADER_CHUNK_LENGTH + this.tracks.length * 8 + this.tracks.reduce((a, b) => {return {pointer: a.pointer + b.pointer}}, {pointer: 0}).pointer;
	}

	/**
	 * Number of events played up to this point.
	 * @return {number}
	 */
	eventsPlayed() {
		return this.tracks.reduce((a, b) => {return {eventIndex: a.eventIndex + b.eventIndex}}, {eventIndex: 0}).eventIndex;
	}

	/**
	 * Determines if the player pointer has reached the end of the loaded MIDI file.
	 * Used in two ways:
	 * 1. If playing result is based on loaded JSON events.
	 * 2. If parsing (dryRun) it's based on the actual buffer length vs bytes processed.
	 * @return {boolean}
	 */
	endOfFile() {
		if (this.isPlaying()) {
			return this.totalTicks - this.tick <= 0;
		}

		return this.bytesProcessed() >= this.midiChunksByteLength;//this.buffer.length;
	}

	/**
	 * Gets the current tick number in playback.
	 * @return {number}
	 */
	getCurrentTick() {
		if (!this.startTime) return this.startTick;
		var elapsedSeconds = ((new Date()).getTime() - this.startTime) / 1000;
		var startSeconds = this.ticksToSeconds(0, this.startTick);
		return this.secondsToTicks(startSeconds + elapsedSeconds);
	}

	/**
	 * Sends MIDI event out to listener.
	 * @param {object}
	 * @return {Player}
	 */
	emitEvent(event) {
		this.triggerPlayerEvent('midiEvent', event);
		return this;
	}

	/**
	 * Subscribes events to listeners
	 * @param {string} - Name of event to subscribe to.
	 * @param {function} - Callback to fire when event is broadcast.
	 * @return {Player}
	 */
	on(playerEvent, fn) {
		if (!this.eventListeners.hasOwnProperty(playerEvent)) this.eventListeners[playerEvent] = [];
		this.eventListeners[playerEvent].push(fn);
		return this;
	}

	/**
	 * Broadcasts event to trigger subscribed callbacks.
	 * @param {string} - Name of event.
	 * @param {object} - Data to be passed to subscriber callback.
	 * @return {Player}
	 */
	triggerPlayerEvent(playerEvent, data) {
		if (this.eventListeners.hasOwnProperty(playerEvent)) this.eventListeners[playerEvent].forEach(fn => fn(data || {}));
		return this;
	}

}

export {Player};
