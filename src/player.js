var fs = require('fs');

class Player {
	constructor(eventHandler) {
		this.startTime = 0;
		this.pointer = 0;
		this.pointers = [];
		this.buffer;
		this.division;
		this.setIntervalId;
		this.currentTime;
		this.tracks = [];
		this.tempo = 120;
		this.tick = 0;
		this.lastStatus;
		this.lastTick = null;

		this.eventHandler = eventHandler;
	}

	loadFile(path) {
		this.buffer = fs.readFileSync(path);
		if (!this.validate()) throw 'Invalid file; should start with MThd';

		this.getDivision().getTracks();
		return this;
	}

	loadArray(array) {
		this.buffer = array;
	}

	// First four bytes should be MThd
	validate() {
		return Utils.bytesToLetters(this.buffer.slice(0, 4)) === 'MThd';
	}

	getLength() {
		this.buffer.slice(4,8).forEach(function(byte) {
			console.log(byte)
		})
		return this.buffer.slice(4, 8);
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

		return Utils.bytesToNumber(this.buffer.slice(8, 10));
	}

	getTrackCount() {
		return Utils.bytesToNumber(this.buffer.slice(10, 12));
	}

	// Parses out tracks and places them in this.tracks and initializes this.pointers
	getTracks() {
		this.buffer.forEach(function(byte, index) {
			if (Utils.bytesToLetters(this.buffer.slice(index, index + 4)) == 'MTrk') {
				var trackLength = Utils.bytesToNumber(this.buffer.slice(index + 4, index + 8));
				this.tracks.push(this.buffer.slice(index + 8, index + 8 + trackLength));
				this.pointers.push(0);
			}
		}, this);

		return this;
	}

	getDivision() {
		this.division = Utils.bytesToNumber(this.buffer.slice(12, 14));
		return this;
	}

	/**
	 * Handles event within a given track starting at specified index
	 * @param track
	 */
	handleEvent(trackIndex) {
		// Parse delta value
		var track = this.tracks[trackIndex];
		var pointer = this.pointers[trackIndex];
		var deltaByteCount = this.getDeltaByteCount(trackIndex);
		var delta = Utils.readVarInt(track.slice(pointer, pointer + deltaByteCount));
		var eventSig = track[pointer + deltaByteCount];

		// Meta event
		if (eventSig == 0xff) {
			this.emitEvent(trackIndex, track.slice(pointer + deltaByteCount, pointer + deltaByteCount + 3));

			// Advance pointer
			var length = track[pointer + deltaByteCount + 2];
			this.pointers[trackIndex] += length + 4;

		} else {
			// Note event
			if ((this.lastTick === null && this.tick >= delta) || this.tick - this.lastTick >= delta ) {
				this.lastTick = this.tick;
				//this.emitEvent(this.parseEvent(trackIndex, deltaByteCount));



				var statusByte = track[pointer + deltaByteCount];
				if (statusByte < 0x80) {
					// Running status
					console.log('running status');
					this.emitEvent(trackIndex, track.slice(pointer + deltaByteCount, pointer + deltaByteCount + 2));

					// Some meta events will have vlv that needs to be handled
					this.pointers[trackIndex] += deltaByteCount + 2;

				} else {
					this.lastStatus = statusByte;

					if (statusByte <= 0x8f) {
						// Note off
						this.emitEvent(trackIndex, track.slice(pointer + deltaByteCount, pointer + deltaByteCount + 3));
						this.pointers[trackIndex] += deltaByteCount + 3;

					} else if (statusByte <= 0x9f) {
						// Note on
						this.emitEvent(trackIndex, track.slice(pointer + deltaByteCount, pointer + deltaByteCount + 3));
						this.pointers[trackIndex] += deltaByteCount + 3;

					} else if (statusByte <= 0xaf) {
						// Polyphonic Key Pressure
						this.pointers[trackIndex] += deltaByteCount + 3;

					} else if (statusByte <= 0xbf) {
						// Controller Change
						this.pointers[trackIndex] += deltaByteCount + 3;

					} else if (statusByte <= 0xcf) {
						// Program Change
						this.emitEvent(trackIndex, track.slice(pointer + deltaByteCount, pointer + deltaByteCount + 2));
						this.pointers[trackIndex] += deltaByteCount + 2;

					} else if (statusByte <= 0xdf) {
						// Channel Key Pressure
						this.pointers[trackIndex] += deltaByteCount + 2;

					} else if (statusByte <= 0xef) {
						// Pitch Bend
						this.pointers[trackIndex] += deltaByteCount + 3;
					}
				} 
			}
		}
	}

	play() {
		// Initialize
		this.startTime = (new Date).getTime();
		
		// Start play loop
		var me = this;
		this.setIntervalId = setInterval(function() {
			me.tick = me.getCurrentTick();
			me.tracks.forEach(function(track, index) {
				// Handle next event
				if (me.endOfTrack(index)) {
					clearInterval(me.setIntervalId);

				} else {
					me.handleEvent(index);
				}
			});		
		}, 1);

		return this;
	}

	endOfTrack(trackIndex) {
		var pointer = this.pointers[trackIndex];
		if (this.tracks[trackIndex][pointer + 1] == 0xff && this.tracks[trackIndex][pointer + 2] == 0x2f && this.tracks[trackIndex][pointer + 3] == 0x00) {
			return true;
		}

		return false;
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
		return Math.round(((new Date).getTime() - this.startTime) / 1000 * (this.division * (this.tempo / 60)));
	}

	emitEvent(trackIndex, event) {
		if (typeof this.eventHandler === 'function') this.eventHandler(Event.parse(event));
	}

	toggleTrack(trackIndex) {

	}

	/*
	 * @param event (includes delta)
	 */
	parseEvent(trackIndex, deltaByteCount) {
		var event = this.tracks[trackIndex][this.pointers[trackIndex] + deltaByteCount];
		var eventJson = {};
		eventJson.raw = event;

		if (event[0] == 0xff) {
			// Meta Event
			switch(event[1]) {
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
				case 0x2F: // End of Track
					eventJson.name = 'End of Track';
					break;
				case 0x51: // Set Tempo
					eventJson.name = 'Set Tempo';
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
			}
		} else {
			// Voice event
			if (event[0] < 0x80) {
				// Running status
				eventJson.running = true;
				eventJson.note = Constants.NOTES[event[0]];
				eventJson.velocity = event[1];

			} else {
				if (event[0] <= 0x8f) {
					// Note off
					eventJson.name = 'Note off';
					eventJson.note = Constants.NOTES[event[1]];

				} else if (event[0] <= 0x9f) {
					// Note on
					eventJson.name = 'Note on';
					eventJson.note = Constants.NOTES[event[1]];

				} else if (event[0] <= 0xaf) {
					// Polyphonic Key Pressure
					eventJson.name = 'Polyphonic Key Pressure';
					eventJson.note = Constants.NOTES[event[1]];
					eventJson.pressure = event[2];

				} else if (event[0] <= 0xbf) {
					// Controller Change
					eventJson.name = 'Controller Change';

				} else if (event[0] <= 0xcf) {
					// Program Change
					eventJson.name = 'Program Change';

				} else if (event[0] <= 0xdf) {
					// Channel Key Pressure
					eventJson.name = 'Channel Key Pressure';

				} else if (event[0] <= 0xef) {
					// Pitch Bend
					eventJson.name = 'Pitch Bend';
				}
			}
		}

		return eventJson;
	}

}

exports.Player = Player;