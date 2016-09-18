var fs = require('fs');

class Main {
	constructor() {
		this.startTime = 0;
		this.pointer = 0;
		this.buffer;
		this.division;
		this.setIntervalId;
		this.delta;
		this.currentTime;
		this.tracks = [];
		this.tempo = 120;
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
		var deltaHex = this.byteToHex(track[this.pointer]);
		var currentByte = track[this.pointer];
		var counter = 1;

		// http://www.ccarh.org/courses/253/handout/vlv/
		// If byte is greater or equal to 80h (128 decimal) then the next byte 
	    // is also part of the VLV,
	   	// else byte is the last byte in a VLV.
		while (currentByte >= 128) {
			currentByte = track[this.pointer + counter];
			deltaHex += this.byteToHex(currentByte);
			counter++;
		}

		console.log(deltaHex);

		var eventSig = track[this.pointer + counter];
		console.log('Event delta: ' + this.hexToNumber(deltaHex));
		console.log('Event sig: ' + this.byteToHex(eventSig));
		console.log();

		// Skip meta events for now (except for end of track)
		if (eventSig == 255) {
			// Advance pointer
			var length = track[this.pointer + counter + 2];
			console.log('length: ' + length);
			this.pointer += length + 4;
		} else {
			// Note event
			this.pointer += counter + 3;
		}

		// Need a function that can take a start index and parse next event data

		//clearInterval(this.setIntervalId);
	}

	play() {
		this.getTracks();
		this.division = this.getDivision();
		this.startTime = (new Date).getTime();
		var me = this;

		this.setIntervalId = setInterval(function() {
			me.delta = ((new Date).getTime() - me.startTime) / 1000 * me.division;
			
			//console.log(me.delta);
			// Handle next event
			if (me.tracks[0][me.pointer + 1] == 255 && me.tracks[0][me.pointer + 2] == 47 && me.tracks[0][me.pointer + 3] == 0) {
				clearInterval(me.setIntervalId);

			} else {
				me.handleEvent(me.tracks[0], me.pointer);
			}

			//me.pointer ++;
			//if (me.pointer == me.buffer.length) clearInterval(me.setIntervalId);
		
		}, 1);

		//clearInterval(this.setIntervalId);

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

	emitEvent() {
		console.log('event');
	}

}

exports.Main = Main;