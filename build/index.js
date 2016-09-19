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

var Main = function () {
	function Main() {
		_classCallCheck(this, Main);

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

	_createClass(Main, [{
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
			return this.bytesToLetters(this.buffer.slice(0, 4)) === 'MThd';
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
			return this.bytesToNumber(this.buffer.slice(8, 10));
		}
	}, {
		key: 'getTrackCount',
		value: function getTrackCount() {
			return this.bytesToNumber(this.buffer.slice(10, 12));
		}

		// Parses out tracks and places them in this.tracks

	}, {
		key: 'getTracks',
		value: function getTracks() {
			this.tracks = [];
			var me = this;

			this.buffer.forEach(function (byte, index) {
				if (me.bytesToLetters(me.buffer.slice(index, index + 4)) == 'MTrk') {
					var trackLength = me.bytesToNumber(me.buffer.slice(index + 4, index + 8));
					me.tracks.push(me.buffer.slice(index + 8, index + 8 + trackLength));
				}
			});

			return this.tracks;
		}
	}, {
		key: 'getDivision',
		value: function getDivision() {
			return this.bytesToNumber(this.buffer.slice(12, 14));
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

	}, {
		key: 'readVarIntBak',
		value: function readVarIntBak(number) {
			var result = 0;
			while (true) {
				var b = number;
				if (b & 0x80) {
					result += b & 0x7f;
					result <<= 7;
				} else {
					/* b is the last byte */
					return result + b;
				}
			}
		}

		// Need to update this function to work with an array of bytes making up a VLV value.

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
	}, {
		key: 'play',
		value: function play() {
			this.getTracks();
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
		key: 'byteToHex',
		value: function byteToHex(byte) {
			return byte.toString(16);
		}
	}, {
		key: 'bytesToHex',
		value: function bytesToHex(byteArray) {
			var hex = [];

			byteArray.forEach(function (byte) {
				hex.push(byte.toString(16));
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
			return this.hexToNumber(this.bytesToHex(byteArray));
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
		key: 'emitEvent',
		value: function emitEvent() {
			console.log('event');
		}
	}]);

	return Main;
}();

exports.Main = Main;
//# sourceMappingURL=data:application/json;base64,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LEtBQUssV0FBTCxDQUFpQixLQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsQ0FBakIsQ0FBUDtBQUNBOzs7aUNBRWMsUyxFQUFXO0FBQ3pCLE9BQUksVUFBVSxFQUFkO0FBQ0EsYUFBVSxPQUFWLENBQWtCLFVBQVMsSUFBVCxFQUFlO0FBQ2hDLFlBQVEsSUFBUixDQUFhLE9BQU8sWUFBUCxDQUFvQixJQUFwQixDQUFiO0FBQ0EsSUFGRDs7QUFJQSxVQUFPLFFBQVEsSUFBUixDQUFhLEVBQWIsQ0FBUDtBQUNBOzs7OEJBRVcsRyxFQUFLO0FBQ2IsVUFBTyxDQUFDLFFBQVEsQ0FBVCxFQUFZLFFBQVosQ0FBcUIsQ0FBckIsQ0FBUDtBQUNIOzs7OEJBRVc7QUFDWCxXQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0E7Ozs7OztBQUlGLFFBQVEsSUFBUixHQUFlLElBQWYiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmNsYXNzIE1haW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdFx0dGhpcy5wb2ludGVyID0gMDtcblx0XHR0aGlzLmJ1ZmZlcjtcblx0XHR0aGlzLmRpdmlzaW9uO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZDtcblx0XHR0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdHRoaXMudHJhY2tzID0gW107XG5cdFx0dGhpcy50ZW1wbyA9IDEyMDtcblx0XHR0aGlzLnRpY2sgPSAwO1xuXHR9XG5cblx0bG9hZEZpbGUocGF0aCkge1xuXHRcdHRoaXMuYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKHBhdGgpO1xuXHRcdGlmICghdGhpcy52YWxpZGF0ZSgpKSB0aHJvdyAnSW52YWxpZCBmaWxlOyBzaG91bGQgc3RhcnQgd2l0aCBNVGhkJztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxvYWRBcnJheShhcnJheSkge1xuXHRcdHRoaXMuYnVmZmVyID0gYXJyYXk7XG5cdH1cblxuXHQvLyBGaXJzdCBmb3VyIGJ5dGVzIHNob3VsZCBiZSBNVGhkXG5cdHZhbGlkYXRlKCkge1xuXHRcdHJldHVybiB0aGlzLmJ5dGVzVG9MZXR0ZXJzKHRoaXMuYnVmZmVyLnNsaWNlKDAsIDQpKSA9PT0gJ01UaGQnO1xuXHR9XG5cblx0Z2V0TGVuZ3RoKCkge1xuXHRcdHRoaXMuYnVmZmVyLnNsaWNlKDQsOCkuZm9yRWFjaChmdW5jdGlvbihieXRlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhieXRlKVxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLnNsaWNlKDQsIDgpO1xuXHR9XG5cblx0Z2V0Rm9ybWF0KCkge1xuXHRcdHJldHVybiB0aGlzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0fVxuXG5cdGdldFRyYWNrQ291bnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMCwgMTIpKTtcblx0fVxuXG5cdC8vIFBhcnNlcyBvdXQgdHJhY2tzIGFuZCBwbGFjZXMgdGhlbSBpbiB0aGlzLnRyYWNrc1xuXHRnZXRUcmFja3MoKSB7XG5cdFx0dGhpcy50cmFja3MgPSBbXTtcblx0XHR2YXIgbWUgPSB0aGlzO1xuXG5cdFx0dGhpcy5idWZmZXIuZm9yRWFjaChmdW5jdGlvbihieXRlLCBpbmRleCkge1xuXHRcdFx0aWYgKG1lLmJ5dGVzVG9MZXR0ZXJzKG1lLmJ1ZmZlci5zbGljZShpbmRleCwgaW5kZXggKyA0KSkgPT0gJ01UcmsnKSB7XG5cdFx0XHRcdHZhciB0cmFja0xlbmd0aCA9IG1lLmJ5dGVzVG9OdW1iZXIobWUuYnVmZmVyLnNsaWNlKGluZGV4ICsgNCwgaW5kZXggKyA4KSk7XG5cdFx0XHRcdG1lLnRyYWNrcy5wdXNoKG1lLmJ1ZmZlci5zbGljZShpbmRleCArIDgsIGluZGV4ICsgOCArIHRyYWNrTGVuZ3RoKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy50cmFja3M7XG5cblx0fVxuXG5cdGdldERpdmlzaW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoMTIsIDE0KSk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBldmVudCB3aXRoaW4gYSBnaXZlbiB0cmFjayBzdGFydGluZyBhdCBzcGVjaWZpZWQgaW5kZXhcblx0ICogQHBhcmFtIHRyYWNrXG5cdCAqIEBwYXJhbSBldmVudFBvaW50ZXJcblx0ICovXG5cdGhhbmRsZUV2ZW50KHRyYWNrLCBldmVudFBvaW50ZXIpIHtcblx0XHQvLyBQYXJzZSBkZWx0YSB2YWx1ZVxuXHRcdHZhciBjdXJyZW50Qnl0ZSA9IHRyYWNrW3RoaXMucG9pbnRlcl07XG5cdFx0dmFyIHZsdkJ5dGVDb3VudCA9IDE7XG5cblx0XHQvLyBHZXQgYnl0ZXMgb2YgVkxWXG5cdFx0Ly8gaHR0cDovL3d3dy5jY2FyaC5vcmcvY291cnNlcy8yNTMvaGFuZG91dC92bHYvXG5cdFx0Ly8gSWYgYnl0ZSBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIDgwaCAoMTI4IGRlY2ltYWwpIHRoZW4gdGhlIG5leHQgYnl0ZSBcblx0ICAgIC8vIGlzIGFsc28gcGFydCBvZiB0aGUgVkxWLFxuXHQgICBcdC8vIGVsc2UgYnl0ZSBpcyB0aGUgbGFzdCBieXRlIGluIGEgVkxWLlxuXHRcdHdoaWxlIChjdXJyZW50Qnl0ZSA+PSAxMjgpIHtcblx0XHRcdGN1cnJlbnRCeXRlID0gdHJhY2tbdGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50XTtcblx0XHRcdHZsdkJ5dGVDb3VudCsrO1xuXHRcdH1cblxuXHRcdHZhciBkZWx0YSA9IHRoaXMucmVhZFZhckludCh0cmFjay5zbGljZSh0aGlzLnBvaW50ZXIsIHRoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudCkpO1xuXHRcdHZhciBldmVudFNpZyA9IHRyYWNrW3RoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudF07XG5cblx0XHQvLyBTa2lwIG1ldGEgZXZlbnRzIGZvciBub3cgKGV4Y2VwdCBmb3IgZW5kIG9mIHRyYWNrKVxuXHRcdGlmIChldmVudFNpZyA9PSAyNTUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFdmVudCBzaWc6ICcgKyB0aGlzLmJ5dGVUb0hleChldmVudFNpZykpO1xuXHRcdFx0Ly8gQWR2YW5jZSBwb2ludGVyXG5cdFx0XHR2YXIgbGVuZ3RoID0gdHJhY2tbdGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50ICsgMl07XG5cdFx0XHQvL2NvbnNvbGUubG9nKCdsZW5ndGg6ICcgKyBsZW5ndGgpO1xuXHRcdFx0dGhpcy5wb2ludGVyICs9IGxlbmd0aCArIDQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIE5vdGUgZXZlbnRcblx0XHRcdGlmICh0aGlzLnRpY2sgPj0gZGVsdGEpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0V2ZW50OiAnKTtcblx0XHRcdFx0Y29uc29sZS5sb2codHJhY2suc2xpY2UodGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50LCB0aGlzLnBvaW50ZXIgKyB2bHZCeXRlQ291bnQgKyAzKSk7XG5cdFx0XHRcdHRoaXMucG9pbnRlciArPSB2bHZCeXRlQ291bnQgKyAzO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qIHJlYWQgYSBNSURJLXN0eWxlIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyXG5cdFx0KGJpZy1lbmRpYW4gdmFsdWUgaW4gZ3JvdXBzIG9mIDcgYml0cyxcblx0XHR3aXRoIHRvcCBiaXQgc2V0IHRvIHNpZ25pZnkgdGhhdCBhbm90aGVyIGJ5dGUgZm9sbG93cylcblx0Ki9cblx0cmVhZFZhckludEJhayhudW1iZXIpIHtcblx0XHR2YXIgcmVzdWx0ID0gMDtcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIGIgPSBudW1iZXI7XG5cdFx0XHRpZiAoYiAmIDB4ODApIHtcblx0XHRcdFx0cmVzdWx0ICs9IChiICYgMHg3Zik7XG5cdFx0XHRcdHJlc3VsdCA8PD0gNztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8qIGIgaXMgdGhlIGxhc3QgYnl0ZSAqL1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0ICsgYjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBOZWVkIHRvIHVwZGF0ZSB0aGlzIGZ1bmN0aW9uIHRvIHdvcmsgd2l0aCBhbiBhcnJheSBvZiBieXRlcyBtYWtpbmcgdXAgYSBWTFYgdmFsdWUuXG5cdHJlYWRWYXJJbnQoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIHJlc3VsdCA9IDA7XG5cdFx0Ynl0ZUFycmF5LmZvckVhY2goZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0XHR2YXIgYiA9IG51bWJlcjtcblx0XHRcdGlmIChiICYgMHg4MCkge1xuXHRcdFx0XHRyZXN1bHQgKz0gKGIgJiAweDdmKTtcblx0XHRcdFx0cmVzdWx0IDw8PSA3O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0LyogYiBpcyB0aGUgbGFzdCBieXRlICovXG5cdFx0XHRcdHJlc3VsdCArPSBiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0dGhpcy5nZXRUcmFja3MoKTtcblx0XHR0aGlzLmRpdmlzaW9uID0gdGhpcy5nZXREaXZpc2lvbigpO1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cdFx0dmFyIG1lID0gdGhpcztcblxuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0bWUudGljayA9IE1hdGgucm91bmQoKChuZXcgRGF0ZSkuZ2V0VGltZSgpIC0gbWUuc3RhcnRUaW1lKSAvIDEwMDAgKiBtZS5kaXZpc2lvbik7XG5cdFx0XHRcblx0XHRcdC8vY29uc29sZS5sb2cobWUudGljayk7XG5cdFx0XHQvLyBIYW5kbGUgbmV4dCBldmVudFxuXHRcdFx0aWYgKG1lLnRyYWNrc1swXVttZS5wb2ludGVyICsgMV0gPT0gMjU1ICYmIG1lLnRyYWNrc1swXVttZS5wb2ludGVyICsgMl0gPT0gNDcgJiYgbWUudHJhY2tzWzBdW21lLnBvaW50ZXIgKyAzXSA9PSAwKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwobWUuc2V0SW50ZXJ2YWxJZCk7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lLmhhbmRsZUV2ZW50KG1lLnRyYWNrc1swXSwgbWUucG9pbnRlcik7XG5cdFx0XHR9XG5cdFx0XG5cdFx0fSwgMSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGJ5dGVUb0hleChieXRlKSB7XG5cdFx0cmV0dXJuIGJ5dGUudG9TdHJpbmcoMTYpO1xuXHR9XG5cblx0Ynl0ZXNUb0hleChieXRlQXJyYXkpIHtcblx0XHR2YXIgaGV4ID0gW107XG5cblx0XHRieXRlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihieXRlKSB7XG5cdFx0XHRoZXgucHVzaChieXRlLnRvU3RyaW5nKDE2KSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gaGV4LmpvaW4oJycpO1xuXHR9XG5cblx0aGV4VG9OdW1iZXIoaGV4U3RyaW5nKSB7XG5cdFx0cmV0dXJuIHBhcnNlSW50KGhleFN0cmluZywgMTYpO1xuXHR9XG5cblx0Ynl0ZXNUb051bWJlcihieXRlQXJyYXkpIHtcblx0XHRyZXR1cm4gdGhpcy5oZXhUb051bWJlcih0aGlzLmJ5dGVzVG9IZXgoYnl0ZUFycmF5KSk7XG5cdH1cblxuXHRieXRlc1RvTGV0dGVycyhieXRlQXJyYXkpIHtcblx0XHR2YXIgbGV0dGVycyA9IFtdO1xuXHRcdGJ5dGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUpIHtcblx0XHRcdGxldHRlcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBsZXR0ZXJzLmpvaW4oJycpO1xuXHR9XG5cblx0ZGVjVG9CaW5hcnkoZGVjKSB7XG4gICAgXHRyZXR1cm4gKGRlYyA+Pj4gMCkudG9TdHJpbmcoMik7XG5cdH1cblxuXHRlbWl0RXZlbnQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2V2ZW50Jyk7XG5cdH1cblxufVxuXG5leHBvcnRzLk1haW4gPSBNYWluOyJdfQ==
