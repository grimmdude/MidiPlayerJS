var fs = require('fs');

class Main {
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
		return this.bytesToLetters(this.buffer.slice(0, 4)) === 'MThd';
	}

	getLength() {
		this.buffer.slice(4,8).forEach(function(byte) {
			console.log(byte)
		})
		return this.buffer.slice(4, 8);
	}

	getFormat() {
		return this.bytesToNumber(this.buffer.slice(8, 10));
	}

	getTrackCount() {
		return this.bytesToNumber(this.buffer.slice(10, 12));
	}

	// Parses out tracks and places them in this.tracks
	getTracks() {
		this.tracks = [];
		var me = this;

		this.buffer.forEach(function(byte, index) {
			if (me.bytesToLetters(me.buffer.slice(index, index + 4)) == 'MTrk') {
				var trackLength = me.bytesToNumber(me.buffer.slice(index + 4, index + 8));
				me.tracks.push(me.buffer.slice(index + 8, index + 8 + trackLength));
			}
		});

		return this.tracks;

	}

	getDivision() {
		return this.bytesToNumber(this.buffer.slice(12, 14));
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

		var delta = this.readVarInt(track.slice(this.pointer, this.pointer + vlvByteCount));
		var eventSig = track[this.pointer + vlvByteCount];

		// Skip meta events for now (except for end of track)
		if (eventSig == 255) {
			console.log('Event sig: ' + this.byteToHex(eventSig));
			// Advance pointer
			var length = track[this.pointer + vlvByteCount + 2];
			//console.log('length: ' + length);
			this.pointer += length + 4;
		} else {
			// Note event
			if (this.tick >= delta) {
				console.log('Event: ');
				console.log(track.slice(this.pointer + vlvByteCount, this.pointer + vlvByteCount + 3));
				this.pointer += vlvByteCount + 3;
			}
		}
	}

	/* read a MIDI-style variable-length integer
		(big-endian value in groups of 7 bits,
		with top bit set to signify that another byte follows)
	*/
	// Need to update this function to work with an array of bytes making up a VLV value.
	readVarIntBak(number) {
		var result = 0;
		while (true) {
			var b = number;
			if (b & 0x80) {
				result += (b & 0x7f);
				result <<= 7;
			} else {
				/* b is the last byte */
				return result + b;
			}
		}
	}

	// Need to update this function to work with an array of bytes making up a VLV value.
	readVarInt(byteArray) {
		//console.log(byteArray)
		var result = 0;
		byteArray.forEach(function(number) {
			var b = number;
			if (b & 0x80) {
				result += (b & 0x7f);
				result <<= 7;
			} else {
				/* b is the last byte */
				result += b;
			}
		});

		//console.log('vlv: '+result);
		return result;
	}

	play() {
		this.getTracks();
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

	byteToHex(byte) {
		return byte.toString(16);
	}

	bytesToHex(byteArray) {
		var hex = [];

		byteArray.forEach(function(byte) {
			hex.push(byte.toString(16));
		});

		return hex.join('');
	}

	hexToNumber(hexString) {
		return parseInt(hexString, 16);
	}

	bytesToNumber(byteArray) {
		return this.hexToNumber(this.bytesToHex(byteArray));
	}

	bytesToLetters(byteArray) {
		var letters = [];
		byteArray.forEach(function(byte) {
			letters.push(String.fromCharCode(byte));
		});

		return letters.join('');
	}

	decToBinary(dec) {
    	return (dec >>> 0).toString(2);
	}

	emitEvent() {
		console.log('event');
	}

}

exports.Main = Main;