class Player {
	constructor(eventHandler, buffer) {
		this.sampleRate = 5; // milliseconds
		this.startTime = 0;
		this.buffer = buffer || null;
		this.division;
		this.format;
		this.setIntervalId = null;
		this.tracks = [];
		this.tempo = 120;
		this.startTick = 0;
		this.tick = 0;
		this.lastTick = null;
		this.inLoop = false;
		this.totalTicks = 0;
		this.events = [];
		this.eventListeners = {};

		if (typeof(eventHandler) === 'function') this.on('midiEvent', eventHandler);
	}

	// Only for NodeJS
	loadFile(path) {
		var fs = require('fs');
		this.buffer = fs.readFileSync(path);
		return this.fileLoaded();
	}

	loadArrayBuffer(arrayBuffer) {
		this.buffer = new Uint8Array(arrayBuffer);
		return this.fileLoaded();
	}

	loadDataUri(dataUri) {
		// convert base64 to raw binary data held in a string
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

	getFilesize() {
		return this.buffer ? this.buffer.length : 0;
	}

	fileLoaded() {
		if (!this.validate()) throw 'Invalid MIDI file; should start with MThd';
		return this.getDivision().getFormat().getTracks().dryRun();
	}

	// First four bytes should be MThd
	validate() {
		return Utils.bytesToLetters(this.buffer.slice(0, 4)) === 'MThd';
	}

	getFormat() {
		/*
		MIDI files come in 3 variations:
		Format 0 which contain a single track
		Format 1 which contain one or more simultaneous tracks
		(ie all tracks are to be played simultaneously).
		Format 2 which contain one or more independant tracks
		(ie each track is to be played independantly of the others).
		return Utils.bytesToNumber(this.buffer.slice(8, 10));
		*/

		this.format = Utils.bytesToNumber(this.buffer.slice(8, 10));
		return this;
	}

	// Parses out tracks and places them in this.tracks and initializes this.pointers
	getTracks() {
		this.tracks = [];
		this.buffer.forEach(function(byte, index) {
			if (Utils.bytesToLetters(this.buffer.slice(index, index + 4)) == 'MTrk') {
				var trackLength = Utils.bytesToNumber(this.buffer.slice(index + 4, index + 8));
				this.tracks.push(new Track(this.tracks.length, this.buffer.slice(index + 8, index + 8 + trackLength)));
			}
		}, this);

		return this;
	}

	enableTrack(trackNumber) {
		this.tracks[trackNumber - 1].enable();
		return this;
	}

	disableTrack(trackNumber) {
		this.tracks[trackNumber - 1].disable();
		return this;
	}

	getDivision() {
		this.division = Utils.bytesToNumber(this.buffer.slice(12, 14));
		return this;
	}

	playLoop(dryRun) {
		if (!this.inLoop) {
			this.inLoop = true;
			this.tick = this.getCurrentTick();

			this.tracks.forEach(function(track) {
				// Handle next event
				if (!dryRun && this.endOfFile()) {
					this.triggerPlayerEvent('endOfFile');
					this.stop();

				} else {
					var event = track.handleEvent(this.tick, dryRun);
					if (event && !dryRun) this.emitEvent(event);
				}

			}, this);

			if (!dryRun) this.triggerPlayerEvent('playing', {tick: this.tick});
			this.inLoop = false;
		}

		//window.requestAnimationFrame(this.playLoop.bind(this));
	}

	setStartTime(startTime) {
		this.startTime = startTime;
		console.log(`MidiPlayer.js: setStartTime: ` + this.startTime);
	}

	play() {
		if (this.setIntervalId) {
			console.log('Already playing...');
			return false;
		}

		// Initialize
		if (!this.startTime) {
			this.startTime = (new Date()).getTime();
		}

		// Start play loop
		//window.requestAnimationFrame(this.playLoop.bind(this));
		this.setIntervalId = setInterval(this.playLoop.bind(this), this.sampleRate);

		return this;
	}

	pause() {
		clearInterval(this.setIntervalId);
		this.setIntervalId = false;
		this.startTick = this.tick;
		this.startTime = 0;
		return this;
	}

	stop() {
		clearInterval(this.setIntervalId);
		this.setIntervalId = false;
		this.startTick = 0;
		this.startTime = 0;
		this.resetTracks();
		return this;
	}

	isPlaying() {
		return this.setIntervalId > 0;
	}

	dryRun() {
		// Reset tracks first
		this.resetTracks();
		while (!this.endOfFile()) this.playLoop(true);
		this.events = this.getEvents();
		this.totalTicks = this.getTotalTicks();
		this.startTick = 0;
		this.startTime = 0;

		// Leave tracks in pristine condish
		this.resetTracks();
		//console.log('Song time: ' + this.getSongTime() + ' seconds / ' + this.totalTicks + ' ticks.');

		this.triggerPlayerEvent('fileLoaded', this);
		return this;
	}

	resetTracks() {
		this.tracks.forEach(track => track.reset());
	}

	getEvents() {
		return this.tracks.map(track => track.events);
	}

	getTotalTicks() {
		return Math.max.apply(null, this.tracks.map((track) => track.delta));
	}

	getSongTime() {
		return this.totalTicks / this.division / this.tempo * 60;
	}

	getSongTimeRemaining() {
		return Math.round((this.totalTicks - this.tick) / this.division / this.tempo * 60);
	}

	getSongPercentRemaining() {
		return Math.round(this.getSongTimeRemaining() / this.getSongTime() * 100);
	}

	bytesProcessed() {
		// Currently assume header chunk is strictly 14 bytes
		return 14 + this.tracks.length * 8 + this.tracks.reduce((a, b) => {return {pointer: a.pointer + b.pointer}}, {pointer: 0}).pointer;
	}

	endOfFile() {
		return this.bytesProcessed() == this.buffer.length;
	}

	getCurrentTick() {
		return Math.round(((new Date()).getTime() - this.startTime) / 1000 * (this.division * (this.tempo / 60))) + this.startTick;
	}

	emitEvent(event) {
		// Grab tempo if available.
		if (event.hasOwnProperty('name') && event.name === 'Set Tempo') this.tempo = event.data;
		this.triggerPlayerEvent('midiEvent', event);
	}

	on(playerEvent, fn) {
		if (!this.eventListeners.hasOwnProperty(playerEvent)) this.eventListeners[playerEvent] = [];
		this.eventListeners[playerEvent].push(fn);
		return this;
	}

	triggerPlayerEvent(playerEvent, data) {
		if (this.eventListeners.hasOwnProperty(playerEvent)) this.eventListeners[playerEvent].forEach(fn => fn(data || {}));
		return this;
	}

}

exports.Player = Player;
