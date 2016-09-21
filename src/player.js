var fs = require('fs');

class Player {
	constructor(eventHandler) {
		this.startTime = 0;
		this.pointer = 0;
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

		this.tracks = this.getTracks();
		this.division = this.getDivision();
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

		this.buffer.forEach(function(byte, index) {
			if (Utils.bytesToLetters(this.buffer.slice(index, index + 4)) == 'MTrk') {
				var trackLength = Utils.bytesToNumber(this.buffer.slice(index + 4, index + 8));
				tracks.push(this.buffer.slice(index + 8, index + 8 + trackLength));
			}
		}, this);

		return tracks;
	}

	getDivision() {
		return Utils.bytesToNumber(this.buffer.slice(12, 14));
	}

	/**
	 * Handles event within a given track starting at specified index
	 * @param track
	 */
	handleEvent(track) {
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
			this.emitEvent( track.slice(this.pointer + vlvByteCount, this.pointer + vlvByteCount + 3)  )

			// Advance pointer
			var length = track[this.pointer + vlvByteCount + 2];
			//console.log('length: ' + length);
			this.pointer += length + 4;
		} else {

			// Note event
			if ((this.lastTick === null && this.tick >= delta) || this.tick - this.lastTick >= delta ) {
				this.lastTick = this.tick;

				var statusByte = track[this.pointer + vlvByteCount];
				if (statusByte < 0x80) {
					// Running status
					console.log('running status');
					this.emitEvent(track.slice(this.pointer + vlvByteCount, this.pointer + vlvByteCount + 2));
					this.pointer += vlvByteCount + 2;

				} else {
					this.lastStatus = statusByte;

					if (statusByte <= 0x8f) {
						// Note off
						this.emitEvent(track.slice(this.pointer + vlvByteCount, this.pointer + vlvByteCount + 3));
						this.pointer += vlvByteCount + 3;

					} else if (statusByte <= 0x9f) {
						// Note on
						this.emitEvent(track.slice(this.pointer + vlvByteCount, this.pointer + vlvByteCount + 3));
						this.pointer += vlvByteCount + 3;

					} else if (statusByte <= 0xaf) {
						// Polyphonic Key Pressure
						this.pointer += vlvByteCount + 3;

					} else if (statusByte <= 0xbf) {
						// Controller Change
						this.pointer += vlvByteCount + 3;

					} else if (statusByte <= 0xcf) {
						// Program Change
						this.emitEvent(track.slice(this.pointer + vlvByteCount, this.pointer + vlvByteCount + 2));
						this.pointer += vlvByteCount + 2;

					} else if (statusByte <= 0xdf) {
						// Channel Key Pressure
						this.pointer += vlvByteCount + 2;

					} else if (statusByte <= 0xef) {
						// Pitch Bend
						this.pointer += vlvByteCount + 3;
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

			// Handle next event
			if (me.tracks[0][me.pointer + 1] == 255 && me.tracks[0][me.pointer + 2] == 47 && me.tracks[0][me.pointer + 3] == 0) {
				clearInterval(me.setIntervalId);

			} else {
				me.handleEvent(me.tracks[0]);
			}
		
		}, 1);

		return this;
	}

	getCurrentTick() {
		return Math.round(((new Date).getTime() - this.startTime) / 1000 * (this.division * (this.tempo / 60)));
	}

	emitEvent(event) {
		if (typeof this.eventHandler === 'function') this.eventHandler(Event.parse(event));
	}

}

exports.Player = Player;