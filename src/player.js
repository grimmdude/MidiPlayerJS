class Player {
	constructor(eventHandler, buffer) {
		this.startTime = 0;
		this.buffer = buffer || null;
		this.division;
		this.format;
		this.setIntervalId = null;
		this.tracks = [];
		this.newTracks  = [];
		this.tracksEnabled = []; // 0 disabled, 1 enabled
		this.tempo = 120;
		this.startTick = 0;
		this.tick = 0;
		this.lastStatuses = [];
		this.lastTick = null;
		this.lastTicks = [];
		this.pointers = [];
		this.inLoop = false;
		this.exportingJSON = false;
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
		this.pointers = [];
		this.lastTicks = [];
		this.tracksEnabled = [];
		this.buffer.forEach(function(byte, index) {
			if (Utils.bytesToLetters(this.buffer.slice(index, index + 4)) == 'MTrk') {
				var trackLength = Utils.bytesToNumber(this.buffer.slice(index + 4, index + 8));
				this.tracks.push(this.buffer.slice(index + 8, index + 8 + trackLength));
				this.pointers.push(0);
				this.lastTicks.push(0);
				this.tracksEnabled.push(1);

				this.newTracks.push(new Track(this.newTracks.length, this.buffer.slice(index + 8, index + 8 + trackLength)));
			}
		}, this);

		return this;
	}

	enableTrack(trackNumber) {
		this.newTracks[trackNumber - 1].enable();
		this.tracksEnabled[trackNumber - 1] = 1;
		return this;
	}

	disableTrack(trackNumber) {
		this.newTracks[trackNumber - 1].disable();
		this.tracksEnabled[trackNumber - 1] = 0;
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

	playLoop() {
		if (!this.inLoop) {
			this.inLoop = true;
			this.tick = this.getCurrentTick();
			
			for (let i = 0; i <= this.tracks.length - 1; i++) {
				// Handle next event
				if (this.endOfFile()) {
					console.log('End of file');
					this.stop();

				} else {
					this.handleEvent(i);
					var event = this.newTracks[i].handleEvent(this.tick);
					if (event) console.log(event);
				}
			}
			this.inLoop = false;
		}

		//window.requestAnimationFrame(this.playLoop.bind(this));
	}

	/**
	 * Handles event within a given track starting at specified index
	 * @param trackIndex
	 */
	handleEvent(trackIndex) {
		// Parse delta value
		var track = this.tracks[trackIndex];
		var pointer = this.pointers[trackIndex];
		var deltaByteCount = this.getDeltaByteCount(trackIndex);
		var delta = Utils.readVarInt(track.slice(pointer, pointer + deltaByteCount));

		if (this.exportingJSON || this.pointers[trackIndex] < track.length && this.tick - this.lastTicks[trackIndex] >= delta) {
			let event = this.parseEvent(trackIndex, deltaByteCount);

			if (this.tracksEnabled[trackIndex] == 1) this.emitEvent(event);

			// Recursively call this function for each event ahead that has 0 delta time?
		}
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

	endOfTrack(trackIndex) {
		var pointer = this.pointers[trackIndex];
		if (this.tracks[trackIndex][pointer + 1] == 0xff && this.tracks[trackIndex][pointer + 2] == 0x2f && this.tracks[trackIndex][pointer + 3] == 0x00) {
			return true;
		}

		return false;
	}

	exportJSON() {
		this.exportingJSON = true;
		var i = 0
		while (i < 10) {
			this.playLoop();
			i++;
		}

		this.stop();

		//console.log(this.JSON);
		this.exportingJSON = false;
	}

	bytesProcessed() {
		// Currently assume header chunk is strictly 14 bytes
		return 14 + this.tracks.length * 8 + this.pointers.reduce(function(a, b) {return a+b;}, 0);
	}

	endOfFile() {
		return this.bytesProcessed() == this.buffer.length;
	}

	getDeltaByteCount(trackIndex) {
		// Get byte count of delta VLV
		// http://www.ccarh.org/courses/253/handout/vlv/
		// If byte is greater or equal to 80h (128 decimal) then the next byte 
	    // is also part of the VLV,
	   	// else byte is the last byte in a VLV.
	   	var track = this.tracks[trackIndex];
	   	var pointer = this.pointers[trackIndex];
	   	var currentByte = track[pointer];
	   	var byteCount = 1;

		while (currentByte >= 128) {
			currentByte = track[pointer + byteCount];
			byteCount++;
		}

		return byteCount;
	}

	getCurrentTick() {
		return Math.round(((new Date()).getTime() - this.startTime) / 1000 * (this.division * (this.tempo / 60))) + this.startTick;
	}

	emitEvent(event) {
		if (this.exportingJSON) {
			this.JSON.push(event);
			console.log(event);

		} else if (typeof this.eventHandler === 'function') {
			this.eventHandler(event);
		}
	}

	// Parses event into JSON and advances pointer for the track
	parseEvent(trackIndex, deltaByteCount) {
		//console.log(this.tick);
		var track = this.tracks[trackIndex];
		var eventStartIndex = this.pointers[trackIndex] + deltaByteCount;
		var eventJson = {};
		eventJson.track = trackIndex + 1;
		eventJson.delta = Utils.readVarInt(track.slice(this.pointers[trackIndex], this.pointers[trackIndex] + deltaByteCount));
		this.lastTicks[trackIndex] = this.lastTicks[trackIndex] + eventJson.delta;

		//eventJson.raw = event;
		if (track[eventStartIndex] == 0xff) {
			// Meta Event

			// If this is a meta event we should emit the data and immediately move to the next event
			// otherwise if we let it run through the next cycle a slight delay will accumulate if multiple tracks
			// are being played simultaneously

			switch(track[eventStartIndex + 1]) {
				case 0x00: // Sequence Number
					eventJson.name = 'Sequence Number';
					break;
				case 0x01: // Text Event
					eventJson.name = 'Text Event';
					break;
				case 0x02: // Copyright Notice
					eventJson.name = 'Copyright Notice';
					break;
				case 0x03: // Sequence/Track Name
					eventJson.name = 'Sequence/Track Name';
					// Get vlv length
					var currentByte = this.pointers[trackIndex];
					var byteCount = 1;
					while (currentByte >= 128) {
						currentByte = track[this.pointers[trackIndex] + byteCount];
						byteCount++;
					}
					eventJson.vlv = byteCount;
					var length = Utils.readVarInt(track.slice(eventStartIndex + 2, eventStartIndex + 2 + byteCount));
					eventJson.stringLength = length;
					eventJson.string = Utils.bytesToLetters(track.slice(eventStartIndex + byteCount + 2, eventStartIndex + byteCount + length + 2));
					break;
				case 0x04: // Instrument Name
					eventJson.name = 'Instrument Name';
					break;
				case 0x05: // Lyric
					eventJson.name = 'Lyric';
					break;
				case 0x06: // Marker
					eventJson.name = 'Marker';
					break;
				case 0x07: // Cue Point
					eventJson.name = 'Cue Point';
					break;
				case 0x20: // MIDI Channel Prefix
					eventJson.name = 'MIDI Channel Prefix';
					break;
				case 0x21: // MIDI Port
					eventJson.name = 'MIDI Port';
					eventJson.data = Utils.bytesToNumber([track[eventStartIndex + 3]]);
					break;
				case 0x2F: // End of Track
					eventJson.name = 'End of Track';
					break;
				case 0x51: // Set Tempo
					eventJson.name = 'Set Tempo';
					eventJson.data = Math.round(60000000 / Utils.bytesToNumber(track.slice(eventStartIndex + 3, eventStartIndex + 6)));
					this.tempo = eventJson.data;
					break;
				case 0x54: // SMTPE Offset
					eventJson.name = 'SMTPE Offset';
					break;
				case 0x58: // Time Signature
					eventJson.name = 'Time Signature';
					break;
				case 0x59: // Key Signature
					eventJson.name = 'Key Signature';
					break;
				case 0x7F: // Sequencer-Specific Meta-event
					eventJson.name = 'Sequencer-Specific Meta-event';
					break;
				default:
					eventJson.name = 'Unknown: ' + track[eventStartIndex + 1].toString(16);
					break;
			}

			var length = track[this.pointers[trackIndex] + deltaByteCount + 2];
			// Some meta events will have vlv that needs to be handled

			this.pointers[trackIndex] += deltaByteCount + 3 + length;

		} else if(track[eventStartIndex] == 0xf0) {
			// Sysex
			eventJson.name = 'Sysex';
			var length = track[this.pointers[trackIndex] + deltaByteCount + 1];
			this.pointers[trackIndex] += deltaByteCount + 2 + length;

		} else {
			// Voice event
			if (track[eventStartIndex] < 0x80) {
				// Running status
				eventJson.running = true;
				eventJson.noteNumber = track[eventStartIndex];
				eventJson.noteName = Constants.NOTES[track[eventStartIndex]];
				eventJson.velocity = track[eventStartIndex + 1];
				
				if (this.lastStatuses[trackIndex] <= 0x8f) {
					eventJson.name = 'Note off';

				} else if (this.lastStatuses[trackIndex] <= 0x9f) {
					eventJson.name = 'Note on';
				}

				this.pointers[trackIndex] += deltaByteCount + 2;

			} else {
				this.lastStatuses[trackIndex] = track[eventStartIndex];

				if (track[eventStartIndex] <= 0x8f) {
					// Note off
					eventJson.name = 'Note off';
					eventJson.noteNumber = track[eventStartIndex + 1];
					eventJson.noteName = Constants.NOTES[track[eventStartIndex + 1]];
					eventJson.velocity = Math.round(track[eventStartIndex + 2] / 127 * 100);
					this.pointers[trackIndex] += deltaByteCount + 3;

				} else if (track[eventStartIndex] <= 0x9f) {
					// Note on
					eventJson.name = 'Note on';
					eventJson.noteNumber = track[eventStartIndex + 1];
					eventJson.noteName = Constants.NOTES[track[eventStartIndex + 1]];
					eventJson.velocity = Math.round(track[eventStartIndex + 2] / 127 * 100);
					this.pointers[trackIndex] += deltaByteCount + 3;

				} else if (track[eventStartIndex] <= 0xaf) {
					// Polyphonic Key Pressure
					eventJson.name = 'Polyphonic Key Pressure';
					eventJson.note = Constants.NOTES[track[eventStartIndex + 1]];
					eventJson.pressure = event[2];
					this.pointers[trackIndex] += deltaByteCount + 3;

				} else if (track[eventStartIndex] <= 0xbf) {
					// Controller Change
					eventJson.name = 'Controller Change';
					eventJson.number = track[eventStartIndex + 1];
					eventJson.value = track[eventStartIndex + 2];
					this.pointers[trackIndex] += deltaByteCount + 3;

				} else if (track[eventStartIndex] <= 0xcf) {
					// Program Change
					eventJson.name = 'Program Change';
					this.pointers[trackIndex] += deltaByteCount + 2;

				} else if (track[eventStartIndex] <= 0xdf) {
					// Channel Key Pressure
					eventJson.name = 'Channel Key Pressure';
					this.pointers[trackIndex] += deltaByteCount + 2;

				} else if (track[eventStartIndex] <= 0xef) {
					// Pitch Bend
					eventJson.name = 'Pitch Bend';
					this.pointers[trackIndex] += deltaByteCount + 3;
				}
			}
		}

		return eventJson;
	}

}

exports.Player = Player;