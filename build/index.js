"use strict";

var Constants = {
	// Event signatures
	noteEvents: [],
	metaEvents: []

};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksWUFBWTs7QUFFZixhQUFZLEVBRkc7QUFLZixhQUFZOztBQUxHLENBQWhCIiwiZmlsZSI6ImNvbnN0YW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb25zdGFudHMgPSB7XG5cdC8vIEV2ZW50IHNpZ25hdHVyZXNcblx0bm90ZUV2ZW50czogW1xuXHRcdFxuXHRdLFxuXHRtZXRhRXZlbnRzOiBbXG5cblx0XVxuXG59Il19
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');

var Player = function () {
	function Player() {
		_classCallCheck(this, Player);

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

	_createClass(Player, [{
		key: 'loadFile',
		value: function loadFile(path) {
			this.buffer = fs.readFileSync(path);
			if (!this.validate()) throw 'Invalid file; should start with MThd';
			return this;
		}
	}, {
		key: 'loadArray',
		value: function loadArray(array) {
			this.buffer = array;
		}

		// First four bytes should be MThd

	}, {
		key: 'validate',
		value: function validate() {
			return Utils.bytesToLetters(this.buffer.slice(0, 4)) === 'MThd';
		}
	}, {
		key: 'getLength',
		value: function getLength() {
			this.buffer.slice(4, 8).forEach(function (byte) {
				console.log(byte);
			});
			return this.buffer.slice(4, 8);
		}
	}, {
		key: 'getFormat',
		value: function getFormat() {
			return Utils.bytesToNumber(this.buffer.slice(8, 10));
		}
	}, {
		key: 'getTrackCount',
		value: function getTrackCount() {
			return Utils.bytesToNumber(this.buffer.slice(10, 12));
		}

		// Parses out tracks and places them in this.tracks

	}, {
		key: 'getTracks',
		value: function getTracks() {
			var tracks = [];
			var me = this;

			this.buffer.forEach(function (byte, index) {
				if (Utils.bytesToLetters(me.buffer.slice(index, index + 4)) == 'MTrk') {
					var trackLength = Utils.bytesToNumber(me.buffer.slice(index + 4, index + 8));
					tracks.push(me.buffer.slice(index + 8, index + 8 + trackLength));
				}
			});

			return tracks;
		}
	}, {
		key: 'getDivision',
		value: function getDivision() {
			return Utils.bytesToNumber(this.buffer.slice(12, 14));
		}

		/**
   * Handles event within a given track starting at specified index
   * @param track
   * @param eventPointer
   */

	}, {
		key: 'handleEvent',
		value: function handleEvent(track, eventPointer) {
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
				switch (track[this.pointer + vlvByteCount + 1]) {
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
					case 0x7F:
						// Sequencer-Specific Meta-event
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
	}, {
		key: 'play',
		value: function play() {
			this.tracks = this.getTracks();
			this.division = this.getDivision();
			this.startTime = new Date().getTime();

			var me = this;
			this.setIntervalId = setInterval(function () {
				me.tick = Math.round((new Date().getTime() - me.startTime) / 1000 * me.division);

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
	}, {
		key: 'emitEvent',
		value: function emitEvent() {
			//console.log({'hi':true});
		}
	}]);

	return Player;
}();

exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,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QUFUO0FBQ0EsUUFBSyxhQUFMLEdBQXFCLFlBQVksWUFBVztBQUMzQyxPQUFHLElBQUgsR0FBVSxLQUFLLEtBQUwsQ0FBVyxDQUFFLElBQUksSUFBSixFQUFELENBQVcsT0FBWCxLQUF1QixHQUFHLFNBQTNCLElBQXdDLElBQXhDLEdBQStDLEdBQUcsUUFBN0QsQ0FBVjs7OztBQUlBLFFBQUksR0FBRyxNQUFILENBQVUsQ0FBVixFQUFhLEdBQUcsT0FBSCxHQUFhLENBQTFCLEtBQWdDLEdBQWhDLElBQXVDLEdBQUcsTUFBSCxDQUFVLENBQVYsRUFBYSxHQUFHLE9BQUgsR0FBYSxDQUExQixLQUFnQyxFQUF2RSxJQUE2RSxHQUFHLE1BQUgsQ0FBVSxDQUFWLEVBQWEsR0FBRyxPQUFILEdBQWEsQ0FBMUIsS0FBZ0MsQ0FBakgsRUFBb0g7QUFDbkgsbUJBQWMsR0FBRyxhQUFqQjtBQUVBLEtBSEQsTUFHTztBQUNOLFFBQUcsV0FBSCxDQUFlLEdBQUcsTUFBSCxDQUFVLENBQVYsQ0FBZixFQUE2QixHQUFHLE9BQWhDO0FBQ0E7QUFFRCxJQVpvQixFQVlsQixDQVprQixDQUFyQjs7QUFjQSxVQUFPLElBQVA7QUFDQTs7OzhCQUVXOztBQUVYOzs7Ozs7QUFJRixRQUFRLE1BQVIsR0FBaUIsTUFBakIiLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblxuY2xhc3MgUGxheWVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHRoaXMucG9pbnRlciA9IDA7XG5cdFx0dGhpcy5idWZmZXI7XG5cdFx0dGhpcy5kaXZpc2lvbjtcblx0XHR0aGlzLnNldEludGVydmFsSWQ7XG5cdFx0dGhpcy5jdXJyZW50VGltZTtcblx0XHR0aGlzLnRyYWNrcyA9IFtdO1xuXHRcdHRoaXMudGVtcG8gPSAxMjA7XG5cdFx0dGhpcy50aWNrID0gMDtcblx0fVxuXG5cdGxvYWRGaWxlKHBhdGgpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhwYXRoKTtcblx0XHRpZiAoIXRoaXMudmFsaWRhdGUoKSkgdGhyb3cgJ0ludmFsaWQgZmlsZTsgc2hvdWxkIHN0YXJ0IHdpdGggTVRoZCc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsb2FkQXJyYXkoYXJyYXkpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IGFycmF5O1xuXHR9XG5cblx0Ly8gRmlyc3QgZm91ciBieXRlcyBzaG91bGQgYmUgTVRoZFxuXHR2YWxpZGF0ZSgpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoMCwgNCkpID09PSAnTVRoZCc7XG5cdH1cblxuXHRnZXRMZW5ndGgoKSB7XG5cdFx0dGhpcy5idWZmZXIuc2xpY2UoNCw4KS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGJ5dGUpXG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIuc2xpY2UoNCwgOCk7XG5cdH1cblxuXHRnZXRGb3JtYXQoKSB7XG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0fVxuXG5cdGdldFRyYWNrQ291bnQoKSB7XG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoMTAsIDEyKSk7XG5cdH1cblxuXHQvLyBQYXJzZXMgb3V0IHRyYWNrcyBhbmQgcGxhY2VzIHRoZW0gaW4gdGhpcy50cmFja3Ncblx0Z2V0VHJhY2tzKCkge1xuXHRcdHZhciB0cmFja3MgPSBbXTtcblx0XHR2YXIgbWUgPSB0aGlzO1xuXG5cdFx0dGhpcy5idWZmZXIuZm9yRWFjaChmdW5jdGlvbihieXRlLCBpbmRleCkge1xuXHRcdFx0aWYgKFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKG1lLmJ1ZmZlci5zbGljZShpbmRleCwgaW5kZXggKyA0KSkgPT0gJ01UcmsnKSB7XG5cdFx0XHRcdHZhciB0cmFja0xlbmd0aCA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIobWUuYnVmZmVyLnNsaWNlKGluZGV4ICsgNCwgaW5kZXggKyA4KSk7XG5cdFx0XHRcdHRyYWNrcy5wdXNoKG1lLmJ1ZmZlci5zbGljZShpbmRleCArIDgsIGluZGV4ICsgOCArIHRyYWNrTGVuZ3RoKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdHJhY2tzO1xuXG5cdH1cblxuXHRnZXREaXZpc2lvbigpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMiwgMTQpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGV2ZW50IHdpdGhpbiBhIGdpdmVuIHRyYWNrIHN0YXJ0aW5nIGF0IHNwZWNpZmllZCBpbmRleFxuXHQgKiBAcGFyYW0gdHJhY2tcblx0ICogQHBhcmFtIGV2ZW50UG9pbnRlclxuXHQgKi9cblx0aGFuZGxlRXZlbnQodHJhY2ssIGV2ZW50UG9pbnRlcikge1xuXHRcdC8vIFBhcnNlIGRlbHRhIHZhbHVlXG5cdFx0dmFyIGN1cnJlbnRCeXRlID0gdHJhY2tbdGhpcy5wb2ludGVyXTtcblx0XHR2YXIgdmx2Qnl0ZUNvdW50ID0gMTtcblxuXHRcdC8vIEdldCBieXRlcyBvZiBWTFZcblx0XHQvLyBodHRwOi8vd3d3LmNjYXJoLm9yZy9jb3Vyc2VzLzI1My9oYW5kb3V0L3Zsdi9cblx0XHQvLyBJZiBieXRlIGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gODBoICgxMjggZGVjaW1hbCkgdGhlbiB0aGUgbmV4dCBieXRlIFxuXHQgICAgLy8gaXMgYWxzbyBwYXJ0IG9mIHRoZSBWTFYsXG5cdCAgIFx0Ly8gZWxzZSBieXRlIGlzIHRoZSBsYXN0IGJ5dGUgaW4gYSBWTFYuXG5cdFx0d2hpbGUgKGN1cnJlbnRCeXRlID49IDEyOCkge1xuXHRcdFx0Y3VycmVudEJ5dGUgPSB0cmFja1t0aGlzLnBvaW50ZXIgKyB2bHZCeXRlQ291bnRdO1xuXHRcdFx0dmx2Qnl0ZUNvdW50Kys7XG5cdFx0fVxuXG5cdFx0dmFyIGRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZSh0aGlzLnBvaW50ZXIsIHRoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudCkpO1xuXHRcdHZhciBldmVudFNpZyA9IHRyYWNrW3RoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudF07XG5cblx0XHQvLyBTa2lwIG1ldGEgZXZlbnRzIGZvciBub3cgKGV4Y2VwdCBmb3IgZW5kIG9mIHRyYWNrKVxuXHRcdGlmIChldmVudFNpZyA9PSAweGZmKSB7XG5cdFx0XHRzd2l0Y2godHJhY2tbdGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50ICsgMV0pIHtcblx0XHRcdFx0Y2FzZSAweDAwOiAvLyBTZXF1ZW5jZSBOdW1iZXJcblx0XHRcdFx0Y2FzZSAweDAxOiAvLyBUZXh0IEV2ZW50XG5cdFx0XHRcdGNhc2UgMHgwMjogLy8gQ29weXJpZ2h0IE5vdGljZVxuXHRcdFx0XHRjYXNlIDB4MDM6IC8vIFNlcXVlbmNlL1RyYWNrIE5hbWVcblx0XHRcdFx0Y2FzZSAweDA0OiAvLyBJbnN0cnVtZW50IE5hbWVcblx0XHRcdFx0Y2FzZSAweDA1OiAvLyBMeXJpY1xuXHRcdFx0XHRjYXNlIDB4MDY6IC8vIE1hcmtlclxuXHRcdFx0XHRjYXNlIDB4MDc6IC8vIEN1ZSBQb2ludFxuXHRcdFx0XHRjYXNlIDB4MjA6IC8vIE1JREkgQ2hhbm5lbCBQcmVmaXhcblx0XHRcdFx0Y2FzZSAweDJGOiAvLyBFbmQgb2YgVHJhY2tcblx0XHRcdFx0Y2FzZSAweDUxOiAvLyBTZXQgVGVtcG9cblx0XHRcdFx0Y2FzZSAweDU0OiAvLyBTTVRQRSBPZmZzZXRcblx0XHRcdFx0Y2FzZSAweDU4OiAvLyBUaW1lIFNpZ25hdHVyZVxuXHRcdFx0XHRjYXNlIDB4NTk6IC8vIEtleSBTaWduYXR1cmVcblx0XHRcdFx0Y2FzZSAweDdGOiAvLyBTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zb2xlLmxvZygnRXZlbnQgc2lnOiAnICsgVXRpbHMuYnl0ZVRvSGV4KGV2ZW50U2lnKSk7XG5cdFx0XHQvLyBBZHZhbmNlIHBvaW50ZXJcblx0XHRcdHZhciBsZW5ndGggPSB0cmFja1t0aGlzLnBvaW50ZXIgKyB2bHZCeXRlQ291bnQgKyAyXTtcblx0XHRcdC8vY29uc29sZS5sb2coJ2xlbmd0aDogJyArIGxlbmd0aCk7XG5cdFx0XHR0aGlzLnBvaW50ZXIgKz0gbGVuZ3RoICsgNDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gTm90ZSBldmVudFxuXHRcdFx0aWYgKHRoaXMudGljayA+PSBkZWx0YSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRXZlbnQ6ICcpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0cmFjay5zbGljZSh0aGlzLnBvaW50ZXIgKyB2bHZCeXRlQ291bnQsIHRoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudCArIDMpKTtcblx0XHRcdFx0dGhpcy5lbWl0RXZlbnQoKTtcblx0XHRcdFx0dGhpcy5wb2ludGVyICs9IHZsdkJ5dGVDb3VudCArIDM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRwbGF5KCkge1xuXHRcdHRoaXMudHJhY2tzID0gdGhpcy5nZXRUcmFja3MoKTtcblx0XHR0aGlzLmRpdmlzaW9uID0gdGhpcy5nZXREaXZpc2lvbigpO1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cdFx0XG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdG1lLnRpY2sgPSBNYXRoLnJvdW5kKCgobmV3IERhdGUpLmdldFRpbWUoKSAtIG1lLnN0YXJ0VGltZSkgLyAxMDAwICogbWUuZGl2aXNpb24pO1xuXHRcdFx0XG5cdFx0XHQvL2NvbnNvbGUubG9nKG1lLnRpY2spO1xuXHRcdFx0Ly8gSGFuZGxlIG5leHQgZXZlbnRcblx0XHRcdGlmIChtZS50cmFja3NbMF1bbWUucG9pbnRlciArIDFdID09IDI1NSAmJiBtZS50cmFja3NbMF1bbWUucG9pbnRlciArIDJdID09IDQ3ICYmIG1lLnRyYWNrc1swXVttZS5wb2ludGVyICsgM10gPT0gMCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKG1lLnNldEludGVydmFsSWQpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZS5oYW5kbGVFdmVudChtZS50cmFja3NbMF0sIG1lLnBvaW50ZXIpO1xuXHRcdFx0fVxuXHRcdFxuXHRcdH0sIDEpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlbWl0RXZlbnQoKSB7XG5cdFx0Ly9jb25zb2xlLmxvZyh7J2hpJzp0cnVlfSk7XG5cdH1cblxufVxuXG5leHBvcnRzLlBsYXllciA9IFBsYXllcjsiXX0=
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);
	}

	_createClass(Utils, null, [{
		key: 'byteToHex',
		value: function byteToHex(byte) {
			return byte.toString(16);
		}
	}, {
		key: 'bytesToHex',
		value: function bytesToHex(byteArray) {
			var hex = [];

			byteArray.forEach(function (byte) {
				hex.push(Utils.byteToHex(byte));
			});

			return hex.join('');
		}
	}, {
		key: 'hexToNumber',
		value: function hexToNumber(hexString) {
			return parseInt(hexString, 16);
		}
	}, {
		key: 'bytesToNumber',
		value: function bytesToNumber(byteArray) {
			return this.hexToNumber(Utils.bytesToHex(byteArray));
		}
	}, {
		key: 'bytesToLetters',
		value: function bytesToLetters(byteArray) {
			var letters = [];
			byteArray.forEach(function (byte) {
				letters.push(String.fromCharCode(byte));
			});

			return letters.join('');
		}
	}, {
		key: 'decToBinary',
		value: function decToBinary(dec) {
			return (dec >>> 0).toString(2);
		}
	}, {
		key: 'readVarInt',
		value: function readVarInt(byteArray) {
			var result = 0;
			byteArray.forEach(function (number) {
				var b = number;
				if (b & 0x80) {
					result += b & 0x7f;
					result <<= 7;
				} else {
					/* b is the last byte */
					result += b;
				}
			});

			return result;
		}
	}]);

	return Utils;
}();

exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNLEs7Ozs7Ozs7NEJBQ1ksSSxFQUFNO0FBQ3RCLFVBQU8sS0FBSyxRQUFMLENBQWMsRUFBZCxDQUFQO0FBQ0E7Ozs2QkFFaUIsUyxFQUFXO0FBQzVCLE9BQUksTUFBTSxFQUFWOztBQUVBLGFBQVUsT0FBVixDQUFrQixVQUFTLElBQVQsRUFBZTtBQUNoQyxRQUFJLElBQUosQ0FBUyxNQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBVDtBQUNBLElBRkQ7O0FBSUEsVUFBTyxJQUFJLElBQUosQ0FBUyxFQUFULENBQVA7QUFDQTs7OzhCQUVrQixTLEVBQVc7QUFDN0IsVUFBTyxTQUFTLFNBQVQsRUFBb0IsRUFBcEIsQ0FBUDtBQUNBOzs7Z0NBRW9CLFMsRUFBVztBQUMvQixVQUFPLEtBQUssV0FBTCxDQUFpQixNQUFNLFVBQU4sQ0FBaUIsU0FBakIsQ0FBakIsQ0FBUDtBQUNBOzs7aUNBRXFCLFMsRUFBVztBQUNoQyxPQUFJLFVBQVUsRUFBZDtBQUNBLGFBQVUsT0FBVixDQUFrQixVQUFTLElBQVQsRUFBZTtBQUNoQyxZQUFRLElBQVIsQ0FBYSxPQUFPLFlBQVAsQ0FBb0IsSUFBcEIsQ0FBYjtBQUNBLElBRkQ7O0FBSUEsVUFBTyxRQUFRLElBQVIsQ0FBYSxFQUFiLENBQVA7QUFDQTs7OzhCQUVrQixHLEVBQUs7QUFDcEIsVUFBTyxDQUFDLFFBQVEsQ0FBVCxFQUFZLFFBQVosQ0FBcUIsQ0FBckIsQ0FBUDtBQUNIOzs7NkJBRWlCLFMsRUFBVztBQUM1QixPQUFJLFNBQVMsQ0FBYjtBQUNBLGFBQVUsT0FBVixDQUFrQixVQUFTLE1BQVQsRUFBaUI7QUFDbEMsUUFBSSxJQUFJLE1BQVI7QUFDQSxRQUFJLElBQUksSUFBUixFQUFjO0FBQ2IsZUFBVyxJQUFJLElBQWY7QUFDQSxnQkFBVyxDQUFYO0FBQ0EsS0FIRCxNQUdPOztBQUVOLGVBQVUsQ0FBVjtBQUNBO0FBQ0QsSUFURDs7QUFXQSxVQUFPLE1BQVA7QUFDQTs7Ozs7O0FBR0YsUUFBUSxLQUFSLEdBQWdCLEtBQWhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVXRpbHMge1xuXHRzdGF0aWMgYnl0ZVRvSGV4KGJ5dGUpIHtcblx0XHRyZXR1cm4gYnl0ZS50b1N0cmluZygxNik7XG5cdH1cblxuXHRzdGF0aWMgYnl0ZXNUb0hleChieXRlQXJyYXkpIHtcblx0XHR2YXIgaGV4ID0gW107XG5cblx0XHRieXRlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihieXRlKSB7XG5cdFx0XHRoZXgucHVzaChVdGlscy5ieXRlVG9IZXgoYnl0ZSkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGhleC5qb2luKCcnKTtcblx0fVxuXG5cdHN0YXRpYyBoZXhUb051bWJlcihoZXhTdHJpbmcpIHtcblx0XHRyZXR1cm4gcGFyc2VJbnQoaGV4U3RyaW5nLCAxNik7XG5cdH1cblxuXHRzdGF0aWMgYnl0ZXNUb051bWJlcihieXRlQXJyYXkpIHtcblx0XHRyZXR1cm4gdGhpcy5oZXhUb051bWJlcihVdGlscy5ieXRlc1RvSGV4KGJ5dGVBcnJheSkpO1xuXHR9XG5cblx0c3RhdGljIGJ5dGVzVG9MZXR0ZXJzKGJ5dGVBcnJheSkge1xuXHRcdHZhciBsZXR0ZXJzID0gW107XG5cdFx0Ynl0ZUFycmF5LmZvckVhY2goZnVuY3Rpb24oYnl0ZSkge1xuXHRcdFx0bGV0dGVycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGxldHRlcnMuam9pbignJyk7XG5cdH1cblxuXHRzdGF0aWMgZGVjVG9CaW5hcnkoZGVjKSB7XG4gICAgXHRyZXR1cm4gKGRlYyA+Pj4gMCkudG9TdHJpbmcoMik7XG5cdH1cblxuXHRzdGF0aWMgcmVhZFZhckludChieXRlQXJyYXkpIHtcblx0XHR2YXIgcmVzdWx0ID0gMDtcblx0XHRieXRlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihudW1iZXIpIHtcblx0XHRcdHZhciBiID0gbnVtYmVyO1xuXHRcdFx0aWYgKGIgJiAweDgwKSB7XG5cdFx0XHRcdHJlc3VsdCArPSAoYiAmIDB4N2YpO1xuXHRcdFx0XHRyZXN1bHQgPDw9IDc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvKiBiIGlzIHRoZSBsYXN0IGJ5dGUgKi9cblx0XHRcdFx0cmVzdWx0ICs9IGI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbmV4cG9ydHMuVXRpbHMgPSBVdGlscztcbiJdfQ==
