class Player {
	constructor(eventHandler, buffer) {
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
		this.JSON = [];

		this.eventHandler = eventHandler;
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
		return this.getDivision().getFormat().getTracks();
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

	getTotalTicks() {
		this.tracks[0].forEach(function(track, index) {
			console.log(index);
		});
	}

	playLoop(exportJSON) {
		if (!this.inLoop) {
			this.inLoop = true;
			this.tick = this.getCurrentTick();
			
			for (let i = 0; i <= this.tracks.length - 1; i++) {
				// Handle next event
				if (this.endOfFile()) {
					console.log('End of file');
					this.stop();

				} else {
					var event = this.tracks[i].handleEvent(this.tick, exportJSON);
					if (event) {
						if (exportJSON) {
							this.JSON.push(event);
						} else {
							this.emitEvent(event);
						}
					}
				}
			}
			this.inLoop = false;
		}

		//window.requestAnimationFrame(this.playLoop.bind(this));
	}

	play() {
		//this.exportJSON();return;
		if (this.setIntervalId) {
			console.log('Already playing...');
			return false;
		}

		// Initialize
		if (!this.startTime) this.startTime = (new Date()).getTime();

		// Start play loop
		//window.requestAnimationFrame(this.playLoop.bind(this));
		this.setIntervalId = setInterval(this.playLoop.bind(this), 10);

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
		return this.fileLoaded();
	}

	isPlaying() {
		return this.setIntervalId > 0;
	}

	exportJSON() {
		var i = 0
		while (i<100) {
			this.playLoop(true);
			i++;
		}

		this.stop();

		console.log(this.JSON);
	}

	bytesProcessed() {
		// Currently assume header chunk is strictly 14 bytes
		return 14 + this.tracks.length * 8 + this.tracks.reduce(function(a, b) {return a.pointer+b.pointer;}, 0);
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
		if (typeof this.eventHandler === 'function') this.eventHandler(event);
	}

}

exports.Player = Player;