"use strict";

var Constants = {
	// Event structures
	events: []

};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksWUFBWTs7QUFFZixTQUFROztBQUZPLENBQWhCIiwiZmlsZSI6ImNvbnN0YW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb25zdGFudHMgPSB7XG5cdC8vIEV2ZW50IHN0cnVjdHVyZXNcblx0ZXZlbnRzOiBbXG5cblx0XVxuXG59Il19
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
		this.delta;
		this.currentTime;
		this.tracks = [];
		this.tempo = 120;
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
	}, {
		key: 'play',
		value: function play() {
			this.getTracks();
			this.division = this.getDivision();
			this.startTime = new Date().getTime();
			var me = this;

			this.setIntervalId = setInterval(function () {
				me.delta = (new Date().getTime() - me.startTime) / 1000 * me.division;

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
		key: 'emitEvent',
		value: function emitEvent() {
			console.log('event');
		}
	}]);

	return Main;
}();

exports.Main = Main;
//# sourceMappingURL=data:application/json;base64,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ZSxHQUFHLE1BQUgsQ0FBVSxDQUFWLENBQWYsRUFBNkIsR0FBRyxPQUFoQztBQUNBOzs7O0FBS0QsSUFmb0IsRUFlbEIsQ0Fma0IsQ0FBckI7Ozs7QUFtQkEsVUFBTyxJQUFQO0FBQ0E7Ozs0QkFFUyxJLEVBQU07QUFDZixVQUFPLEtBQUssUUFBTCxDQUFjLEVBQWQsQ0FBUDtBQUNBOzs7NkJBRVUsUyxFQUFXO0FBQ3JCLE9BQUksTUFBTSxFQUFWOztBQUVBLGFBQVUsT0FBVixDQUFrQixVQUFTLElBQVQsRUFBZTtBQUNoQyxRQUFJLElBQUosQ0FBUyxLQUFLLFFBQUwsQ0FBYyxFQUFkLENBQVQ7QUFDQSxJQUZEOztBQUlBLFVBQU8sSUFBSSxJQUFKLENBQVMsRUFBVCxDQUFQO0FBQ0E7Ozs4QkFFVyxTLEVBQVc7QUFDdEIsVUFBTyxTQUFTLFNBQVQsRUFBb0IsRUFBcEIsQ0FBUDtBQUNBOzs7Z0NBRWEsUyxFQUFXO0FBQ3hCLFVBQU8sS0FBSyxXQUFMLENBQWlCLEtBQUssVUFBTCxDQUFnQixTQUFoQixDQUFqQixDQUFQO0FBQ0E7OztpQ0FFYyxTLEVBQVc7QUFDekIsT0FBSSxVQUFVLEVBQWQ7QUFDQSxhQUFVLE9BQVYsQ0FBa0IsVUFBUyxJQUFULEVBQWU7QUFDaEMsWUFBUSxJQUFSLENBQWEsT0FBTyxZQUFQLENBQW9CLElBQXBCLENBQWI7QUFDQSxJQUZEOztBQUlBLFVBQU8sUUFBUSxJQUFSLENBQWEsRUFBYixDQUFQO0FBQ0E7Ozs4QkFFVztBQUNYLFdBQVEsR0FBUixDQUFZLE9BQVo7QUFDQTs7Ozs7O0FBSUYsUUFBUSxJQUFSLEdBQWUsSUFBZiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblxuY2xhc3MgTWFpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblx0XHR0aGlzLnBvaW50ZXIgPSAwO1xuXHRcdHRoaXMuYnVmZmVyO1xuXHRcdHRoaXMuZGl2aXNpb247XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkO1xuXHRcdHRoaXMuZGVsdGE7XG5cdFx0dGhpcy5jdXJyZW50VGltZTtcblx0XHR0aGlzLnRyYWNrcyA9IFtdO1xuXHRcdHRoaXMudGVtcG8gPSAxMjA7XG5cdH1cblxuXHRsb2FkRmlsZShwYXRoKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCk7XG5cdFx0aWYgKCF0aGlzLnZhbGlkYXRlKCkpIHRocm93ICdJbnZhbGlkIGZpbGU7IHNob3VsZCBzdGFydCB3aXRoIE1UaGQnO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bG9hZEFycmF5KGFycmF5KSB7XG5cdFx0dGhpcy5idWZmZXIgPSBhcnJheTtcblx0fVxuXG5cdC8vIEZpcnN0IGZvdXIgYnl0ZXMgc2hvdWxkIGJlIE1UaGRcblx0dmFsaWRhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoMCwgNCkpID09PSAnTVRoZCc7XG5cdH1cblxuXHRnZXRMZW5ndGgoKSB7XG5cdFx0dGhpcy5idWZmZXIuc2xpY2UoNCw4KS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGJ5dGUpXG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIuc2xpY2UoNCwgOCk7XG5cdH1cblxuXHRnZXRGb3JtYXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSg4LCAxMCkpO1xuXHR9XG5cblx0Z2V0VHJhY2tDb3VudCgpIHtcblx0XHRyZXR1cm4gdGhpcy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDEwLCAxMikpO1xuXHR9XG5cblx0Ly8gUGFyc2VzIG91dCB0cmFja3MgYW5kIHBsYWNlcyB0aGVtIGluIHRoaXMudHJhY2tzXG5cdGdldFRyYWNrcygpIHtcblx0XHR0aGlzLnRyYWNrcyA9IFtdO1xuXHRcdHZhciBtZSA9IHRoaXM7XG5cblx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUsIGluZGV4KSB7XG5cdFx0XHRpZiAobWUuYnl0ZXNUb0xldHRlcnMobWUuYnVmZmVyLnNsaWNlKGluZGV4LCBpbmRleCArIDQpKSA9PSAnTVRyaycpIHtcblx0XHRcdFx0dmFyIHRyYWNrTGVuZ3RoID0gbWUuYnl0ZXNUb051bWJlcihtZS5idWZmZXIuc2xpY2UoaW5kZXggKyA0LCBpbmRleCArIDgpKTtcblx0XHRcdFx0bWUudHJhY2tzLnB1c2gobWUuYnVmZmVyLnNsaWNlKGluZGV4ICsgOCwgaW5kZXggKyA4ICsgdHJhY2tMZW5ndGgpKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLnRyYWNrcztcblxuXHR9XG5cblx0Z2V0RGl2aXNpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMiwgMTQpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGV2ZW50IHdpdGhpbiBhIGdpdmVuIHRyYWNrIHN0YXJ0aW5nIGF0IHNwZWNpZmllZCBpbmRleFxuXHQgKiBAcGFyYW0gdHJhY2tcblx0ICogQHBhcmFtIGV2ZW50UG9pbnRlclxuXHQgKi9cblx0aGFuZGxlRXZlbnQodHJhY2ssIGV2ZW50UG9pbnRlcikge1xuXHRcdC8vIFBhcnNlIGRlbHRhIHZhbHVlXG5cdFx0dmFyIGRlbHRhSGV4ID0gdGhpcy5ieXRlVG9IZXgodHJhY2tbdGhpcy5wb2ludGVyXSk7XG5cdFx0dmFyIGN1cnJlbnRCeXRlID0gdHJhY2tbdGhpcy5wb2ludGVyXTtcblx0XHR2YXIgY291bnRlciA9IDE7XG5cblx0XHQvLyBodHRwOi8vd3d3LmNjYXJoLm9yZy9jb3Vyc2VzLzI1My9oYW5kb3V0L3Zsdi9cblx0XHQvLyBJZiBieXRlIGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gODBoICgxMjggZGVjaW1hbCkgdGhlbiB0aGUgbmV4dCBieXRlIFxuXHQgICAgLy8gaXMgYWxzbyBwYXJ0IG9mIHRoZSBWTFYsXG5cdCAgIFx0Ly8gZWxzZSBieXRlIGlzIHRoZSBsYXN0IGJ5dGUgaW4gYSBWTFYuXG5cdFx0d2hpbGUgKGN1cnJlbnRCeXRlID49IDEyOCkge1xuXHRcdFx0Y3VycmVudEJ5dGUgPSB0cmFja1t0aGlzLnBvaW50ZXIgKyBjb3VudGVyXTtcblx0XHRcdGRlbHRhSGV4ICs9IHRoaXMuYnl0ZVRvSGV4KGN1cnJlbnRCeXRlKTtcblx0XHRcdGNvdW50ZXIrKztcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhkZWx0YUhleCk7XG5cblx0XHR2YXIgZXZlbnRTaWcgPSB0cmFja1t0aGlzLnBvaW50ZXIgKyBjb3VudGVyXTtcblx0XHRjb25zb2xlLmxvZygnRXZlbnQgZGVsdGE6ICcgKyB0aGlzLmhleFRvTnVtYmVyKGRlbHRhSGV4KSk7XG5cdFx0Y29uc29sZS5sb2coJ0V2ZW50IHNpZzogJyArIHRoaXMuYnl0ZVRvSGV4KGV2ZW50U2lnKSk7XG5cdFx0Y29uc29sZS5sb2coKTtcblxuXHRcdC8vIFNraXAgbWV0YSBldmVudHMgZm9yIG5vdyAoZXhjZXB0IGZvciBlbmQgb2YgdHJhY2spXG5cdFx0aWYgKGV2ZW50U2lnID09IDI1NSkge1xuXHRcdFx0Ly8gQWR2YW5jZSBwb2ludGVyXG5cdFx0XHR2YXIgbGVuZ3RoID0gdHJhY2tbdGhpcy5wb2ludGVyICsgY291bnRlciArIDJdO1xuXHRcdFx0Y29uc29sZS5sb2coJ2xlbmd0aDogJyArIGxlbmd0aCk7XG5cdFx0XHR0aGlzLnBvaW50ZXIgKz0gbGVuZ3RoICsgNDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gTm90ZSBldmVudFxuXHRcdFx0dGhpcy5wb2ludGVyICs9IGNvdW50ZXIgKyAzO1xuXHRcdH1cblxuXHRcdC8vIE5lZWQgYSBmdW5jdGlvbiB0aGF0IGNhbiB0YWtlIGEgc3RhcnQgaW5kZXggYW5kIHBhcnNlIG5leHQgZXZlbnQgZGF0YVxuXG5cdFx0Ly9jbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdHRoaXMuZ2V0VHJhY2tzKCk7XG5cdFx0dGhpcy5kaXZpc2lvbiA9IHRoaXMuZ2V0RGl2aXNpb24oKTtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXHRcdHZhciBtZSA9IHRoaXM7XG5cblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdG1lLmRlbHRhID0gKChuZXcgRGF0ZSkuZ2V0VGltZSgpIC0gbWUuc3RhcnRUaW1lKSAvIDEwMDAgKiBtZS5kaXZpc2lvbjtcblx0XHRcdFxuXHRcdFx0Ly9jb25zb2xlLmxvZyhtZS5kZWx0YSk7XG5cdFx0XHQvLyBIYW5kbGUgbmV4dCBldmVudFxuXHRcdFx0aWYgKG1lLnRyYWNrc1swXVttZS5wb2ludGVyICsgMV0gPT0gMjU1ICYmIG1lLnRyYWNrc1swXVttZS5wb2ludGVyICsgMl0gPT0gNDcgJiYgbWUudHJhY2tzWzBdW21lLnBvaW50ZXIgKyAzXSA9PSAwKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwobWUuc2V0SW50ZXJ2YWxJZCk7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lLmhhbmRsZUV2ZW50KG1lLnRyYWNrc1swXSwgbWUucG9pbnRlcik7XG5cdFx0XHR9XG5cblx0XHRcdC8vbWUucG9pbnRlciArKztcblx0XHRcdC8vaWYgKG1lLnBvaW50ZXIgPT0gbWUuYnVmZmVyLmxlbmd0aCkgY2xlYXJJbnRlcnZhbChtZS5zZXRJbnRlcnZhbElkKTtcblx0XHRcblx0XHR9LCAxKTtcblxuXHRcdC8vY2xlYXJJbnRlcnZhbCh0aGlzLnNldEludGVydmFsSWQpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRieXRlVG9IZXgoYnl0ZSkge1xuXHRcdHJldHVybiBieXRlLnRvU3RyaW5nKDE2KTtcblx0fVxuXG5cdGJ5dGVzVG9IZXgoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIGhleCA9IFtdO1xuXG5cdFx0Ynl0ZUFycmF5LmZvckVhY2goZnVuY3Rpb24oYnl0ZSkge1xuXHRcdFx0aGV4LnB1c2goYnl0ZS50b1N0cmluZygxNikpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGhleC5qb2luKCcnKTtcblx0fVxuXG5cdGhleFRvTnVtYmVyKGhleFN0cmluZykge1xuXHRcdHJldHVybiBwYXJzZUludChoZXhTdHJpbmcsIDE2KTtcblx0fVxuXG5cdGJ5dGVzVG9OdW1iZXIoYnl0ZUFycmF5KSB7XG5cdFx0cmV0dXJuIHRoaXMuaGV4VG9OdW1iZXIodGhpcy5ieXRlc1RvSGV4KGJ5dGVBcnJheSkpO1xuXHR9XG5cblx0Ynl0ZXNUb0xldHRlcnMoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIGxldHRlcnMgPSBbXTtcblx0XHRieXRlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihieXRlKSB7XG5cdFx0XHRsZXR0ZXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbGV0dGVycy5qb2luKCcnKTtcblx0fVxuXG5cdGVtaXRFdmVudCgpIHtcblx0XHRjb25zb2xlLmxvZygnZXZlbnQnKTtcblx0fVxuXG59XG5cbmV4cG9ydHMuTWFpbiA9IE1haW47Il19
