var fs = require('fs');

class Player {
	constructor() {
		this.startTime = 0;
		this.pointer = 0;
		this.buffer;
		this.division;
		this.setIntervalId;
		this.currentTime;
		this.tracks = [];
		this.tempo = 120;
		this.tick = 0;
	}

	loadFile(path) {
		this.buffer = fs.readFileSync(path);
		if (!this.validate()) throw 'Invalid file; should start with MThd';
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
		return Utils.bytesToNumber(this.buffer.slice(8, 10));
	}

	getTrackCount() {
		return Utils.bytesToNumber(this.buffer.slice(10, 12));
	}

	// Parses out tracks and places them in this.tracks
	getTracks() {
		var tracks = [];
		var me = this;

		this.buffer.forEach(function(byte, index) {
			if (Utils.bytesToLetters(me.buffer.slice(index, index + 4)) == 'MTrk') {
				var trackLength = Utils.bytesToNumber(me.buffer.slice(index + 4, index + 8));
				tracks.push(me.buffer.slice(index + 8, index + 8 + trackLength));
			}
		});

		return tracks;

	}

	getDivision() {
		return Utils.bytesToNumber(this.buffer.slice(12, 14));
	}

	/**
	 * Handles event within a given track starting at specified index
	 * @param track
	 * @param eventPointer
	 */
	handleEvent(track, eventPointer) {
		// Parse delta value
		var currentByte = track[this.pointer];
		var vlvByteCount = 1;

		// Get bytes of VLV
		// http://www.ccarh.org/courses/253/handout/vlv/
		// If byte is greater or equal to 80h (128 decimal) then the next byte 
	    // is also part of the VLV,
	   	// else byte is the last byte in a VLV.
		while (currentByte >= 128) {
			currentByte = track[this.pointer + vlvByteCount];
			vlvByteCount++;
		}

		var delta = Utils.readVarInt(track.slice(this.pointer, this.pointer + vlvByteCount));
		var eventSig = track[this.pointer + vlvByteCount];

		// Skip meta events for now (except for end of track)
		if (eventSig == 0xff) {
			switch(track[this.pointer + vlvByteCount + 1]) {
				case 0x00: // Sequence Number
				case 0x01: // Text Event
				case 0x02: // Copyright Notice
				case 0x03: // Sequence/Track Name
				case 0x04: // Instrument Name
				case 0x05: // Lyric
				case 0x06: // Marker
				case 0x07: // Cue Point
				case 0x20: // MIDI Channel Prefix
				case 0x2F: // End of Track
				case 0x51: // Set Tempo
				case 0x54: // SMTPE Offset
				case 0x58: // Time Signature
				case 0x59: // Key Signature
				case 0x7F: // Sequencer-Specific Meta-event
					break;
			}

			console.log('Event sig: ' + Utils.byteToHex(eventSig));
			// Advance pointer
			var length = track[this.pointer + vlvByteCount + 2];
			//console.log('length: ' + length);
			this.pointer += length + 4;
		} else {
			// Note event
			if (this.tick >= delta) {
				console.log('Event: ');
				console.log(track.slice(this.pointer + vlvByteCount, this.pointer + vlvByteCount + 3));
				this.emitEvent();
				this.pointer += vlvByteCount + 3;
			}
		}
	}


	play() {
		this.tracks = this.getTracks();
		this.division = this.getDivision();
		this.startTime = (new Date).getTime();
		
		var me = this;
		this.setIntervalId = setInterval(function() {
			me.tick = Math.round(((new Date).getTime() - me.startTime) / 1000 * me.division);
			
			//console.log(me.tick);
			// Handle next event
			if (me.tracks[0][me.pointer + 1] == 255 && me.tracks[0][me.pointer + 2] == 47 && me.tracks[0][me.pointer + 3] == 0) {
				clearInterval(me.setIntervalId);

			} else {
				me.handleEvent(me.tracks[0], me.pointer);
			}
		
		}, 1);

		return this;
	}

	emitEvent() {
		//console.log({'hi':true});
	}

}

exports.Player = Player;