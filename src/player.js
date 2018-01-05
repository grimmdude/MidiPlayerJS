const Utils = require("./utils").Utils;
const Track = require("./track").Track;

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
		this.division;
		this.format;
		this.setIntervalId = false;
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
		this.eventListeners = {};

		if (typeof(eventHandler) === 'function') this.on('midiEvent', eventHandler);
	}

	/**
	 * Load a file into the player (Node.js only).
	 * @param {string} path - Path of file.
	 * @return {Player}
	 */
	loadFile(path) {
		var fs = require('fs');
		this.buffer = fs.readFileSync(path);
		return this.fileLoaded();
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
		return this.setTempo(this.defaultTempo).getDivision().getFormat().getTracks().dryRun();
	}

	/**
	 * Validates file using simple means - first four bytes should == MThd.
	 * @return {boolean}
	 */
	validate() {
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
		this.division = Utils.bytesToNumber(this.buffer.subarray(12, 14));
		return this;
	}

	/**
	 * The main play loop.
	 * @param {boolean} - Indicates whether or not this is being called simply for parsing purposes.  Disregards timing if so.
	 * @return {undefined}
	 */
	playLoop(dryRun) {
		if (!this.inLoop) {
			this.inLoop = true;
			this.tick = this.getCurrentTick();

			this.tracks.forEach(function(track) {
				// Handle next event
				if (!dryRun && this.endOfFile()) {
					//console.log('end of file')
					this.triggerPlayerEvent('endOfFile');
					this.stop();
				} else {
					let event = track.handleEvent(this.tick, dryRun);

					if (dryRun && event) {
						if (event.hasOwnProperty('name') && event.name === 'Set Tempo') {
							// Grab tempo if available.
							this.setTempo(event.data);
						}
						if (event.hasOwnProperty('name') && event.name === 'Program Change') {
							if (!this.instruments.includes(event.value)) {
								this.instruments.push(event.value);
							}
						}
					} else if (event) this.emitEvent(event);
				}

			}, this);

			if (!dryRun) this.triggerPlayerEvent('playing', {tick: this.tick});
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
	 */
	setStartTime(startTime) {
		this.startTime = startTime;
	}

	/**
	 * Start playing loaded MIDI file if not already playing.
	 * @return {Player}
	 */
	play() {
		if (this.isPlaying()) throw 'Already playing...';

		// Initialize
		if (!this.startTime) this.startTime = (new Date()).getTime();

		// Start play loop
		//window.requestAnimationFrame(this.playLoop.bind(this));
		this.setIntervalId = setInterval(this.playLoop.bind(this), this.sampleRate);

		return this;
	}

	/**
	 * Pauses playback if playing.
	 * @return {Player}
	 */
	pause() {
		clearInterval(this.setIntervalId);
		this.setIntervalId = false;
		this.startTick = this.tick;
		this.startTime = 0;
		return this;
	}

	/**
	 * Stops playback if playing.
	 * @return {Player}
	 */
	stop() {
		clearInterval(this.setIntervalId);
		this.setIntervalId = false;
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

		// Need to set track event indexes to the nearest possible event to the specified tick.
		this.tracks.forEach(function(track) {
			track.setEventIndexByTick(tick);
		});
		return this;
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
		this.skipToPercent(seconds / songTime * 100);
		return this;
	}

	/**
	 * Checks if player is playing
	 * @return {boolean}
	 */
	isPlaying() {
		return this.setIntervalId > 0 || typeof this.setIntervalId === 'object';
	}

	/**
	 * Plays the loaded MIDI file without regard for timing and saves events in this.events.  Essentially used as a parser.
	 * @return {Player}
	 */
	dryRun() {
		// Reset tracks first
		this.resetTracks();
		while (!this.endOfFile()) this.playLoop(true);
		this.events = this.getEvents();
		this.totalEvents = this.getTotalEvents();
		this.totalTicks = this.getTotalTicks();
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
	 * Gets song duration in seconds.
	 * @return {number}
	 */
	getSongTime() {
		return this.totalTicks / this.division / this.tempo * 60;
	}

	/**
	 * Gets remaining number of seconds in playback.
	 * @return {number}
	 */
	getSongTimeRemaining() {
		return Math.round((this.totalTicks - this.tick) / this.division / this.tempo * 60);
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
		// Currently assume header chunk is strictly 14 bytes
		return 14 + this.tracks.length * 8 + this.tracks.reduce((a, b) => {return {pointer: a.pointer + b.pointer}}, {pointer: 0}).pointer;
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
			return this.eventsPlayed() == this.totalEvents;
		}

		return this.bytesProcessed() == this.buffer.length;
	}

	/**
	 * Gets the current tick number in playback.
	 * @return {number}
	 */
	getCurrentTick() {
		return Math.round(((new Date()).getTime() - this.startTime) / 1000 * (this.division * (this.tempo / 60))) + this.startTick;
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

exports.Player = Player;
