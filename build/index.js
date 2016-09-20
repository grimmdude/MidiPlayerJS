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
		this.lastStatus;
		this.lastTick = null;
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

				console.log('Meta Event');
				// Advance pointer
				var length = track[this.pointer + vlvByteCount + 2];
				//console.log('length: ' + length);
				this.pointer += length + 4;
			} else {

				// Note event
				if (this.lastTick === null && this.tick >= delta || this.tick - this.lastTick >= delta) {
					this.lastTick = this.tick;
					if (track[this.pointer + vlvByteCount] < 0x80) {
						// Running status
						console.log('running status');
						this.emitEvent(track.slice(this.pointer + vlvByteCount, this.pointer + vlvByteCount + 2));
						this.pointer += vlvByteCount + 2;
					} else {
						this.lastStatus = track[this.pointer + vlvByteCount];

						if (track[this.pointer + vlvByteCount] >= 192) {
							// program change
							this.emitEvent(track.slice(this.pointer + vlvByteCount, this.pointer + vlvByteCount + 2));
							this.pointer += vlvByteCount + 2;
						} else {
							this.emitEvent(track.slice(this.pointer + vlvByteCount, this.pointer + vlvByteCount + 3));
							this.pointer += vlvByteCount + 3;
						}
					}
				}
			}
		}
	}, {
		key: 'play',
		value: function play() {
			// Initialize
			this.tracks = this.getTracks();
			this.division = this.getDivision();
			this.startTime = new Date().getTime();

			// Start play loop
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
		value: function emitEvent(event) {
			console.log(event);
		}
	}]);

	return Player;
}();

exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJLEtBQUssUUFBUSxJQUFSLENBQVQ7O0lBRU0sTTtBQUNMLG1CQUFjO0FBQUE7O0FBQ2IsT0FBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsT0FBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLE9BQUssTUFBTDtBQUNBLE9BQUssUUFBTDtBQUNBLE9BQUssYUFBTDtBQUNBLE9BQUssV0FBTDtBQUNBLE9BQUssTUFBTCxHQUFjLEVBQWQ7QUFDQSxPQUFLLEtBQUwsR0FBYSxHQUFiO0FBQ0EsT0FBSyxJQUFMLEdBQVksQ0FBWjtBQUNBLE9BQUssVUFBTDtBQUNBLE9BQUssUUFBTCxHQUFnQixJQUFoQjtBQUNBOzs7OzJCQUVRLEksRUFBTTtBQUNkLFFBQUssTUFBTCxHQUFjLEdBQUcsWUFBSCxDQUFnQixJQUFoQixDQUFkO0FBQ0EsT0FBSSxDQUFDLEtBQUssUUFBTCxFQUFMLEVBQXNCLE1BQU0sc0NBQU47QUFDdEIsVUFBTyxJQUFQO0FBQ0E7Ozs0QkFFUyxLLEVBQU87QUFDaEIsUUFBSyxNQUFMLEdBQWMsS0FBZDtBQUNBOzs7Ozs7NkJBR1U7QUFDVixVQUFPLE1BQU0sY0FBTixDQUFxQixLQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBQXJCLE1BQWtELE1BQXpEO0FBQ0E7Ozs4QkFFVztBQUNYLFFBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBdUIsT0FBdkIsQ0FBK0IsVUFBUyxJQUFULEVBQWU7QUFDN0MsWUFBUSxHQUFSLENBQVksSUFBWjtBQUNBLElBRkQ7QUFHQSxVQUFPLEtBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBUDtBQUNBOzs7OEJBRVc7QUFDWCxVQUFPLE1BQU0sYUFBTixDQUFvQixLQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLENBQWxCLEVBQXFCLEVBQXJCLENBQXBCLENBQVA7QUFDQTs7O2tDQUVlO0FBQ2YsVUFBTyxNQUFNLGFBQU4sQ0FBb0IsS0FBSyxNQUFMLENBQVksS0FBWixDQUFrQixFQUFsQixFQUFzQixFQUF0QixDQUFwQixDQUFQO0FBQ0E7Ozs7Ozs4QkFHVztBQUNYLE9BQUksU0FBUyxFQUFiO0FBQ0EsT0FBSSxLQUFLLElBQVQ7O0FBRUEsUUFBSyxNQUFMLENBQVksT0FBWixDQUFvQixVQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCO0FBQ3pDLFFBQUksTUFBTSxjQUFOLENBQXFCLEdBQUcsTUFBSCxDQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsRUFBdUIsUUFBUSxDQUEvQixDQUFyQixLQUEyRCxNQUEvRCxFQUF1RTtBQUN0RSxTQUFJLGNBQWMsTUFBTSxhQUFOLENBQW9CLEdBQUcsTUFBSCxDQUFVLEtBQVYsQ0FBZ0IsUUFBUSxDQUF4QixFQUEyQixRQUFRLENBQW5DLENBQXBCLENBQWxCO0FBQ0EsWUFBTyxJQUFQLENBQVksR0FBRyxNQUFILENBQVUsS0FBVixDQUFnQixRQUFRLENBQXhCLEVBQTJCLFFBQVEsQ0FBUixHQUFZLFdBQXZDLENBQVo7QUFDQTtBQUNELElBTEQ7O0FBT0EsVUFBTyxNQUFQO0FBRUE7OztnQ0FFYTtBQUNiLFVBQU8sTUFBTSxhQUFOLENBQW9CLEtBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsRUFBbEIsRUFBc0IsRUFBdEIsQ0FBcEIsQ0FBUDtBQUNBOzs7Ozs7Ozs7OzhCQU9XLEssRUFBTyxZLEVBQWM7O0FBRWhDLE9BQUksY0FBYyxNQUFNLEtBQUssT0FBWCxDQUFsQjtBQUNBLE9BQUksZUFBZSxDQUFuQjs7Ozs7OztBQU9BLFVBQU8sZUFBZSxHQUF0QixFQUEyQjtBQUMxQixrQkFBYyxNQUFNLEtBQUssT0FBTCxHQUFlLFlBQXJCLENBQWQ7QUFDQTtBQUNBOztBQUVELE9BQUksUUFBUSxNQUFNLFVBQU4sQ0FBaUIsTUFBTSxLQUFOLENBQVksS0FBSyxPQUFqQixFQUEwQixLQUFLLE9BQUwsR0FBZSxZQUF6QyxDQUFqQixDQUFaO0FBQ0EsT0FBSSxXQUFXLE1BQU0sS0FBSyxPQUFMLEdBQWUsWUFBckIsQ0FBZjs7O0FBR0EsT0FBSSxZQUFZLElBQWhCLEVBQXNCO0FBQ3JCLFlBQU8sTUFBTSxLQUFLLE9BQUwsR0FBZSxZQUFmLEdBQThCLENBQXBDLENBQVA7QUFDQyxVQUFLLElBQUwsQztBQUNBLFVBQUssSUFBTCxDO0FBQ0EsVUFBSyxJQUFMLEM7QUFDQSxVQUFLLElBQUwsQztBQUNBLFVBQUssSUFBTCxDO0FBQ0EsVUFBSyxJQUFMLEM7QUFDQSxVQUFLLElBQUwsQztBQUNBLFVBQUssSUFBTCxDO0FBQ0EsVUFBSyxJQUFMLEM7QUFDQSxVQUFLLElBQUwsQztBQUNBLFVBQUssSUFBTCxDO0FBQ0EsVUFBSyxJQUFMLEM7QUFDQSxVQUFLLElBQUwsQztBQUNBLFVBQUssSUFBTCxDO0FBQ0EsVUFBSyxJQUFMOztBQUNDO0FBaEJGOztBQW1CQSxZQUFRLEdBQVIsQ0FBWSxZQUFaOztBQUVBLFFBQUksU0FBUyxNQUFNLEtBQUssT0FBTCxHQUFlLFlBQWYsR0FBOEIsQ0FBcEMsQ0FBYjs7QUFFQSxTQUFLLE9BQUwsSUFBZ0IsU0FBUyxDQUF6QjtBQUNBLElBekJELE1BeUJPOzs7QUFHTixRQUFLLEtBQUssUUFBTCxLQUFrQixJQUFsQixJQUEwQixLQUFLLElBQUwsSUFBYSxLQUF4QyxJQUFrRCxLQUFLLElBQUwsR0FBWSxLQUFLLFFBQWpCLElBQTZCLEtBQW5GLEVBQTJGO0FBQzFGLFVBQUssUUFBTCxHQUFnQixLQUFLLElBQXJCO0FBQ0EsU0FBSSxNQUFNLEtBQUssT0FBTCxHQUFlLFlBQXJCLElBQXFDLElBQXpDLEVBQStDOztBQUM5QyxjQUFRLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLFdBQUssU0FBTCxDQUFlLE1BQU0sS0FBTixDQUFZLEtBQUssT0FBTCxHQUFlLFlBQTNCLEVBQXlDLEtBQUssT0FBTCxHQUFlLFlBQWYsR0FBOEIsQ0FBdkUsQ0FBZjtBQUNBLFdBQUssT0FBTCxJQUFnQixlQUFlLENBQS9CO0FBRUEsTUFMRCxNQUtPO0FBQ04sV0FBSyxVQUFMLEdBQWtCLE1BQU0sS0FBSyxPQUFMLEdBQWUsWUFBckIsQ0FBbEI7O0FBRUEsVUFBSSxNQUFNLEtBQUssT0FBTCxHQUFlLFlBQXJCLEtBQXNDLEdBQTFDLEVBQStDOztBQUM5QyxZQUFLLFNBQUwsQ0FBZSxNQUFNLEtBQU4sQ0FBWSxLQUFLLE9BQUwsR0FBZSxZQUEzQixFQUF5QyxLQUFLLE9BQUwsR0FBZSxZQUFmLEdBQThCLENBQXZFLENBQWY7QUFDQSxZQUFLLE9BQUwsSUFBZ0IsZUFBZSxDQUEvQjtBQUVBLE9BSkQsTUFJTztBQUNOLFlBQUssU0FBTCxDQUFlLE1BQU0sS0FBTixDQUFZLEtBQUssT0FBTCxHQUFlLFlBQTNCLEVBQXlDLEtBQUssT0FBTCxHQUFlLFlBQWYsR0FBOEIsQ0FBdkUsQ0FBZjtBQUNBLFlBQUssT0FBTCxJQUFnQixlQUFlLENBQS9CO0FBQ0E7QUFFRDtBQUVEO0FBQ0Q7QUFDRDs7O3lCQUdNOztBQUVOLFFBQUssTUFBTCxHQUFjLEtBQUssU0FBTCxFQUFkO0FBQ0EsUUFBSyxRQUFMLEdBQWdCLEtBQUssV0FBTCxFQUFoQjtBQUNBLFFBQUssU0FBTCxHQUFrQixJQUFJLElBQUosRUFBRCxDQUFXLE9BQVgsRUFBakI7OztBQUdBLE9BQUksS0FBSyxJQUFUO0FBQ0EsUUFBSyxhQUFMLEdBQXFCLFlBQVksWUFBVztBQUMzQyxPQUFHLElBQUgsR0FBVSxLQUFLLEtBQUwsQ0FBVyxDQUFFLElBQUksSUFBSixFQUFELENBQVcsT0FBWCxLQUF1QixHQUFHLFNBQTNCLElBQXdDLElBQXhDLEdBQStDLEdBQUcsUUFBN0QsQ0FBVjs7OztBQUlBLFFBQUksR0FBRyxNQUFILENBQVUsQ0FBVixFQUFhLEdBQUcsT0FBSCxHQUFhLENBQTFCLEtBQWdDLEdBQWhDLElBQXVDLEdBQUcsTUFBSCxDQUFVLENBQVYsRUFBYSxHQUFHLE9BQUgsR0FBYSxDQUExQixLQUFnQyxFQUF2RSxJQUE2RSxHQUFHLE1BQUgsQ0FBVSxDQUFWLEVBQWEsR0FBRyxPQUFILEdBQWEsQ0FBMUIsS0FBZ0MsQ0FBakgsRUFBb0g7QUFDbkgsbUJBQWMsR0FBRyxhQUFqQjtBQUVBLEtBSEQsTUFHTztBQUNOLFFBQUcsV0FBSCxDQUFlLEdBQUcsTUFBSCxDQUFVLENBQVYsQ0FBZixFQUE2QixHQUFHLE9BQWhDO0FBQ0E7QUFFRCxJQVpvQixFQVlsQixDQVprQixDQUFyQjs7QUFjQSxVQUFPLElBQVA7QUFDQTs7OzRCQUVTLEssRUFBTztBQUNoQixXQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0E7Ozs7OztBQUlGLFFBQVEsTUFBUixHQUFpQixNQUFqQiIsImZpbGUiOiJwbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5jbGFzcyBQbGF5ZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdFx0dGhpcy5wb2ludGVyID0gMDtcblx0XHR0aGlzLmJ1ZmZlcjtcblx0XHR0aGlzLmRpdmlzaW9uO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZDtcblx0XHR0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdHRoaXMudHJhY2tzID0gW107XG5cdFx0dGhpcy50ZW1wbyA9IDEyMDtcblx0XHR0aGlzLnRpY2sgPSAwO1xuXHRcdHRoaXMubGFzdFN0YXR1cztcblx0XHR0aGlzLmxhc3RUaWNrID0gbnVsbDtcblx0fVxuXG5cdGxvYWRGaWxlKHBhdGgpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhwYXRoKTtcblx0XHRpZiAoIXRoaXMudmFsaWRhdGUoKSkgdGhyb3cgJ0ludmFsaWQgZmlsZTsgc2hvdWxkIHN0YXJ0IHdpdGggTVRoZCc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsb2FkQXJyYXkoYXJyYXkpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IGFycmF5O1xuXHR9XG5cblx0Ly8gRmlyc3QgZm91ciBieXRlcyBzaG91bGQgYmUgTVRoZFxuXHR2YWxpZGF0ZSgpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoMCwgNCkpID09PSAnTVRoZCc7XG5cdH1cblxuXHRnZXRMZW5ndGgoKSB7XG5cdFx0dGhpcy5idWZmZXIuc2xpY2UoNCw4KS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGJ5dGUpXG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIuc2xpY2UoNCwgOCk7XG5cdH1cblxuXHRnZXRGb3JtYXQoKSB7XG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0fVxuXG5cdGdldFRyYWNrQ291bnQoKSB7XG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoMTAsIDEyKSk7XG5cdH1cblxuXHQvLyBQYXJzZXMgb3V0IHRyYWNrcyBhbmQgcGxhY2VzIHRoZW0gaW4gdGhpcy50cmFja3Ncblx0Z2V0VHJhY2tzKCkge1xuXHRcdHZhciB0cmFja3MgPSBbXTtcblx0XHR2YXIgbWUgPSB0aGlzO1xuXG5cdFx0dGhpcy5idWZmZXIuZm9yRWFjaChmdW5jdGlvbihieXRlLCBpbmRleCkge1xuXHRcdFx0aWYgKFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKG1lLmJ1ZmZlci5zbGljZShpbmRleCwgaW5kZXggKyA0KSkgPT0gJ01UcmsnKSB7XG5cdFx0XHRcdHZhciB0cmFja0xlbmd0aCA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIobWUuYnVmZmVyLnNsaWNlKGluZGV4ICsgNCwgaW5kZXggKyA4KSk7XG5cdFx0XHRcdHRyYWNrcy5wdXNoKG1lLmJ1ZmZlci5zbGljZShpbmRleCArIDgsIGluZGV4ICsgOCArIHRyYWNrTGVuZ3RoKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdHJhY2tzO1xuXG5cdH1cblxuXHRnZXREaXZpc2lvbigpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMiwgMTQpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGV2ZW50IHdpdGhpbiBhIGdpdmVuIHRyYWNrIHN0YXJ0aW5nIGF0IHNwZWNpZmllZCBpbmRleFxuXHQgKiBAcGFyYW0gdHJhY2tcblx0ICogQHBhcmFtIGV2ZW50UG9pbnRlclxuXHQgKi9cblx0aGFuZGxlRXZlbnQodHJhY2ssIGV2ZW50UG9pbnRlcikge1xuXHRcdC8vIFBhcnNlIGRlbHRhIHZhbHVlXG5cdFx0dmFyIGN1cnJlbnRCeXRlID0gdHJhY2tbdGhpcy5wb2ludGVyXTtcblx0XHR2YXIgdmx2Qnl0ZUNvdW50ID0gMTtcblxuXHRcdC8vIEdldCBieXRlcyBvZiBWTFZcblx0XHQvLyBodHRwOi8vd3d3LmNjYXJoLm9yZy9jb3Vyc2VzLzI1My9oYW5kb3V0L3Zsdi9cblx0XHQvLyBJZiBieXRlIGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gODBoICgxMjggZGVjaW1hbCkgdGhlbiB0aGUgbmV4dCBieXRlIFxuXHQgICAgLy8gaXMgYWxzbyBwYXJ0IG9mIHRoZSBWTFYsXG5cdCAgIFx0Ly8gZWxzZSBieXRlIGlzIHRoZSBsYXN0IGJ5dGUgaW4gYSBWTFYuXG5cdFx0d2hpbGUgKGN1cnJlbnRCeXRlID49IDEyOCkge1xuXHRcdFx0Y3VycmVudEJ5dGUgPSB0cmFja1t0aGlzLnBvaW50ZXIgKyB2bHZCeXRlQ291bnRdO1xuXHRcdFx0dmx2Qnl0ZUNvdW50Kys7XG5cdFx0fVxuXG5cdFx0dmFyIGRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZSh0aGlzLnBvaW50ZXIsIHRoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudCkpO1xuXHRcdHZhciBldmVudFNpZyA9IHRyYWNrW3RoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudF07XG5cblx0XHQvLyBTa2lwIG1ldGEgZXZlbnRzIGZvciBub3cgKGV4Y2VwdCBmb3IgZW5kIG9mIHRyYWNrKVxuXHRcdGlmIChldmVudFNpZyA9PSAweGZmKSB7XG5cdFx0XHRzd2l0Y2godHJhY2tbdGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50ICsgMV0pIHtcblx0XHRcdFx0Y2FzZSAweDAwOiAvLyBTZXF1ZW5jZSBOdW1iZXJcblx0XHRcdFx0Y2FzZSAweDAxOiAvLyBUZXh0IEV2ZW50XG5cdFx0XHRcdGNhc2UgMHgwMjogLy8gQ29weXJpZ2h0IE5vdGljZVxuXHRcdFx0XHRjYXNlIDB4MDM6IC8vIFNlcXVlbmNlL1RyYWNrIE5hbWVcblx0XHRcdFx0Y2FzZSAweDA0OiAvLyBJbnN0cnVtZW50IE5hbWVcblx0XHRcdFx0Y2FzZSAweDA1OiAvLyBMeXJpY1xuXHRcdFx0XHRjYXNlIDB4MDY6IC8vIE1hcmtlclxuXHRcdFx0XHRjYXNlIDB4MDc6IC8vIEN1ZSBQb2ludFxuXHRcdFx0XHRjYXNlIDB4MjA6IC8vIE1JREkgQ2hhbm5lbCBQcmVmaXhcblx0XHRcdFx0Y2FzZSAweDJGOiAvLyBFbmQgb2YgVHJhY2tcblx0XHRcdFx0Y2FzZSAweDUxOiAvLyBTZXQgVGVtcG9cblx0XHRcdFx0Y2FzZSAweDU0OiAvLyBTTVRQRSBPZmZzZXRcblx0XHRcdFx0Y2FzZSAweDU4OiAvLyBUaW1lIFNpZ25hdHVyZVxuXHRcdFx0XHRjYXNlIDB4NTk6IC8vIEtleSBTaWduYXR1cmVcblx0XHRcdFx0Y2FzZSAweDdGOiAvLyBTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zb2xlLmxvZygnTWV0YSBFdmVudCcpO1xuXHRcdFx0Ly8gQWR2YW5jZSBwb2ludGVyXG5cdFx0XHR2YXIgbGVuZ3RoID0gdHJhY2tbdGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50ICsgMl07XG5cdFx0XHQvL2NvbnNvbGUubG9nKCdsZW5ndGg6ICcgKyBsZW5ndGgpO1xuXHRcdFx0dGhpcy5wb2ludGVyICs9IGxlbmd0aCArIDQ7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gTm90ZSBldmVudFxuXHRcdFx0aWYgKCh0aGlzLmxhc3RUaWNrID09PSBudWxsICYmIHRoaXMudGljayA+PSBkZWx0YSkgfHwgdGhpcy50aWNrIC0gdGhpcy5sYXN0VGljayA+PSBkZWx0YSApIHtcblx0XHRcdFx0dGhpcy5sYXN0VGljayA9IHRoaXMudGljaztcblx0XHRcdFx0aWYgKHRyYWNrW3RoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudF0gPCAweDgwKSB7IC8vIFJ1bm5pbmcgc3RhdHVzXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3J1bm5pbmcgc3RhdHVzJyk7XG5cdFx0XHRcdFx0dGhpcy5lbWl0RXZlbnQodHJhY2suc2xpY2UodGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50LCB0aGlzLnBvaW50ZXIgKyB2bHZCeXRlQ291bnQgKyAyKSk7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IHZsdkJ5dGVDb3VudCArIDI7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmxhc3RTdGF0dXMgPSB0cmFja1t0aGlzLnBvaW50ZXIgKyB2bHZCeXRlQ291bnRdO1xuXG5cdFx0XHRcdFx0aWYgKHRyYWNrW3RoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudF0gPj0gMTkyKSB7IC8vIHByb2dyYW0gY2hhbmdlXG5cdFx0XHRcdFx0XHR0aGlzLmVtaXRFdmVudCh0cmFjay5zbGljZSh0aGlzLnBvaW50ZXIgKyB2bHZCeXRlQ291bnQsIHRoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudCArIDIpKTtcblx0XHRcdFx0XHRcdHRoaXMucG9pbnRlciArPSB2bHZCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuZW1pdEV2ZW50KHRyYWNrLnNsaWNlKHRoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudCwgdGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50ICsgMykpO1xuXHRcdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IHZsdkJ5dGVDb3VudCArIDM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdHBsYXkoKSB7XG5cdFx0Ly8gSW5pdGlhbGl6ZVxuXHRcdHRoaXMudHJhY2tzID0gdGhpcy5nZXRUcmFja3MoKTtcblx0XHR0aGlzLmRpdmlzaW9uID0gdGhpcy5nZXREaXZpc2lvbigpO1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cdFx0XG5cdFx0Ly8gU3RhcnQgcGxheSBsb29wXG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdG1lLnRpY2sgPSBNYXRoLnJvdW5kKCgobmV3IERhdGUpLmdldFRpbWUoKSAtIG1lLnN0YXJ0VGltZSkgLyAxMDAwICogbWUuZGl2aXNpb24pO1xuXHRcdFx0XG5cdFx0XHQvL2NvbnNvbGUubG9nKG1lLnRpY2spO1xuXHRcdFx0Ly8gSGFuZGxlIG5leHQgZXZlbnRcblx0XHRcdGlmIChtZS50cmFja3NbMF1bbWUucG9pbnRlciArIDFdID09IDI1NSAmJiBtZS50cmFja3NbMF1bbWUucG9pbnRlciArIDJdID09IDQ3ICYmIG1lLnRyYWNrc1swXVttZS5wb2ludGVyICsgM10gPT0gMCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKG1lLnNldEludGVydmFsSWQpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZS5oYW5kbGVFdmVudChtZS50cmFja3NbMF0sIG1lLnBvaW50ZXIpO1xuXHRcdFx0fVxuXHRcdFxuXHRcdH0sIDEpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlbWl0RXZlbnQoZXZlbnQpIHtcblx0XHRjb25zb2xlLmxvZyhldmVudCk7XG5cdH1cblxufVxuXG5leHBvcnRzLlBsYXllciA9IFBsYXllcjsiXX0=
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
			return Utils.hexToNumber(Utils.bytesToHex(byteArray));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNLEs7Ozs7Ozs7NEJBQ1ksSSxFQUFNO0FBQ3RCLFVBQU8sS0FBSyxRQUFMLENBQWMsRUFBZCxDQUFQO0FBQ0E7Ozs2QkFFaUIsUyxFQUFXO0FBQzVCLE9BQUksTUFBTSxFQUFWOztBQUVBLGFBQVUsT0FBVixDQUFrQixVQUFTLElBQVQsRUFBZTtBQUNoQyxRQUFJLElBQUosQ0FBUyxNQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBVDtBQUNBLElBRkQ7O0FBSUEsVUFBTyxJQUFJLElBQUosQ0FBUyxFQUFULENBQVA7QUFDQTs7OzhCQUVrQixTLEVBQVc7QUFDN0IsVUFBTyxTQUFTLFNBQVQsRUFBb0IsRUFBcEIsQ0FBUDtBQUNBOzs7Z0NBRW9CLFMsRUFBVztBQUMvQixVQUFPLE1BQU0sV0FBTixDQUFrQixNQUFNLFVBQU4sQ0FBaUIsU0FBakIsQ0FBbEIsQ0FBUDtBQUNBOzs7aUNBRXFCLFMsRUFBVztBQUNoQyxPQUFJLFVBQVUsRUFBZDtBQUNBLGFBQVUsT0FBVixDQUFrQixVQUFTLElBQVQsRUFBZTtBQUNoQyxZQUFRLElBQVIsQ0FBYSxPQUFPLFlBQVAsQ0FBb0IsSUFBcEIsQ0FBYjtBQUNBLElBRkQ7O0FBSUEsVUFBTyxRQUFRLElBQVIsQ0FBYSxFQUFiLENBQVA7QUFDQTs7OzhCQUVrQixHLEVBQUs7QUFDcEIsVUFBTyxDQUFDLFFBQVEsQ0FBVCxFQUFZLFFBQVosQ0FBcUIsQ0FBckIsQ0FBUDtBQUNIOzs7NkJBRWlCLFMsRUFBVztBQUM1QixPQUFJLFNBQVMsQ0FBYjtBQUNBLGFBQVUsT0FBVixDQUFrQixVQUFTLE1BQVQsRUFBaUI7QUFDbEMsUUFBSSxJQUFJLE1BQVI7QUFDQSxRQUFJLElBQUksSUFBUixFQUFjO0FBQ2IsZUFBVyxJQUFJLElBQWY7QUFDQSxnQkFBVyxDQUFYO0FBQ0EsS0FIRCxNQUdPOztBQUVOLGVBQVUsQ0FBVjtBQUNBO0FBQ0QsSUFURDs7QUFXQSxVQUFPLE1BQVA7QUFDQTs7Ozs7O0FBR0YsUUFBUSxLQUFSLEdBQWdCLEtBQWhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVXRpbHMge1xuXHRzdGF0aWMgYnl0ZVRvSGV4KGJ5dGUpIHtcblx0XHRyZXR1cm4gYnl0ZS50b1N0cmluZygxNik7XG5cdH1cblxuXHRzdGF0aWMgYnl0ZXNUb0hleChieXRlQXJyYXkpIHtcblx0XHR2YXIgaGV4ID0gW107XG5cblx0XHRieXRlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihieXRlKSB7XG5cdFx0XHRoZXgucHVzaChVdGlscy5ieXRlVG9IZXgoYnl0ZSkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGhleC5qb2luKCcnKTtcblx0fVxuXG5cdHN0YXRpYyBoZXhUb051bWJlcihoZXhTdHJpbmcpIHtcblx0XHRyZXR1cm4gcGFyc2VJbnQoaGV4U3RyaW5nLCAxNik7XG5cdH1cblxuXHRzdGF0aWMgYnl0ZXNUb051bWJlcihieXRlQXJyYXkpIHtcblx0XHRyZXR1cm4gVXRpbHMuaGV4VG9OdW1iZXIoVXRpbHMuYnl0ZXNUb0hleChieXRlQXJyYXkpKTtcblx0fVxuXG5cdHN0YXRpYyBieXRlc1RvTGV0dGVycyhieXRlQXJyYXkpIHtcblx0XHR2YXIgbGV0dGVycyA9IFtdO1xuXHRcdGJ5dGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUpIHtcblx0XHRcdGxldHRlcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBsZXR0ZXJzLmpvaW4oJycpO1xuXHR9XG5cblx0c3RhdGljIGRlY1RvQmluYXJ5KGRlYykge1xuICAgIFx0cmV0dXJuIChkZWMgPj4+IDApLnRvU3RyaW5nKDIpO1xuXHR9XG5cblx0c3RhdGljIHJlYWRWYXJJbnQoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIHJlc3VsdCA9IDA7XG5cdFx0Ynl0ZUFycmF5LmZvckVhY2goZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0XHR2YXIgYiA9IG51bWJlcjtcblx0XHRcdGlmIChiICYgMHg4MCkge1xuXHRcdFx0XHRyZXN1bHQgKz0gKGIgJiAweDdmKTtcblx0XHRcdFx0cmVzdWx0IDw8PSA3O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0LyogYiBpcyB0aGUgbGFzdCBieXRlICovXG5cdFx0XHRcdHJlc3VsdCArPSBiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5leHBvcnRzLlV0aWxzID0gVXRpbHM7XG4iXX0=
