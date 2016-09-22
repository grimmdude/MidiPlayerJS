'use strict';

var Constants = {
	NOTES: []
};

(function () {
	// Builds notes object for reference against binary values.
	var allNotes = [['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B']];
	var counter = 0;

	// All available octaves.
	for (var i = -1; i <= 9; i++) {
		allNotes.forEach(function (noteGroup) {
			noteGroup.forEach(function (note) {
				Constants.NOTES[counter] = note + i;
			});
			counter++;
		});
	}
})();

exports.Constants = Constants;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksWUFBWTtBQUNmLFFBQU87QUFEUSxDQUFoQjs7QUFJQSxDQUFDLFlBQVc7O0FBRVgsS0FBSSxXQUFXLENBQUMsQ0FBQyxHQUFELENBQUQsRUFBUSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQVIsRUFBcUIsQ0FBQyxHQUFELENBQXJCLEVBQTRCLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBNUIsRUFBeUMsQ0FBQyxHQUFELENBQXpDLEVBQStDLENBQUMsR0FBRCxDQUEvQyxFQUFzRCxDQUFDLElBQUQsRUFBTSxJQUFOLENBQXRELEVBQW1FLENBQUMsR0FBRCxDQUFuRSxFQUEwRSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQTFFLEVBQXVGLENBQUMsR0FBRCxDQUF2RixFQUE4RixDQUFDLElBQUQsRUFBTSxJQUFOLENBQTlGLEVBQTJHLENBQUMsR0FBRCxDQUEzRyxDQUFmO0FBQ0EsS0FBSSxVQUFVLENBQWQ7OztBQUdBLE1BQUssSUFBSSxJQUFJLENBQUMsQ0FBZCxFQUFpQixLQUFLLENBQXRCLEVBQXlCLEdBQXpCLEVBQThCO0FBQzdCLFdBQVMsT0FBVCxDQUFpQixVQUFTLFNBQVQsRUFBb0I7QUFDcEMsYUFBVSxPQUFWLENBQWtCLFVBQVMsSUFBVCxFQUFlO0FBQUMsY0FBVSxLQUFWLENBQWdCLE9BQWhCLElBQTJCLE9BQU8sQ0FBbEM7QUFBb0MsSUFBdEU7QUFDQTtBQUNBLEdBSEQ7QUFJQTtBQUNELENBWkQ7O0FBY0EsUUFBUSxTQUFSLEdBQW9CLFNBQXBCIiwiZmlsZSI6ImNvbnN0YW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb25zdGFudHMgPSB7XG5cdE5PVEVTOiBbXVxufTtcblxuKGZ1bmN0aW9uKCkge1xuXHQvLyBCdWlsZHMgbm90ZXMgb2JqZWN0IGZvciByZWZlcmVuY2UgYWdhaW5zdCBiaW5hcnkgdmFsdWVzLlxuXHR2YXIgYWxsTm90ZXMgPSBbWydDJ10sIFsnQyMnLCdEYiddLCBbJ0QnXSwgWydEIycsJ0ViJ10sIFsnRSddLFsnRiddLCBbJ0YjJywnR2InXSwgWydHJ10sIFsnRyMnLCdBYiddLCBbJ0EnXSwgWydBIycsJ0JiJ10sIFsnQiddXTtcblx0dmFyIGNvdW50ZXIgPSAwO1xuXG5cdC8vIEFsbCBhdmFpbGFibGUgb2N0YXZlcy5cblx0Zm9yICh2YXIgaSA9IC0xOyBpIDw9IDk7IGkrKykge1xuXHRcdGFsbE5vdGVzLmZvckVhY2goZnVuY3Rpb24obm90ZUdyb3VwKSB7XG5cdFx0XHRub3RlR3JvdXAuZm9yRWFjaChmdW5jdGlvbihub3RlKSB7Q29uc3RhbnRzLk5PVEVTW2NvdW50ZXJdID0gbm90ZSArIGl9KTtcblx0XHRcdGNvdW50ZXIgKys7XG5cdFx0fSk7XG5cdH1cbn0pKCk7XG5cbmV4cG9ydHMuQ29uc3RhbnRzID0gQ29uc3RhbnRzOyJdfQ==
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');

var Player = function () {
	function Player(eventHandler) {
		_classCallCheck(this, Player);

		this.startTime = 0;
		this.pointers = [];
		this.buffer;
		this.division;
		this.setIntervalId;
		this.tracks = [];
		this.tempo = 120;
		this.tick = 0;
		this.lastStatus;
		this.lastTick = null;

		this.eventHandler = eventHandler;
	}

	_createClass(Player, [{
		key: 'loadFile',
		value: function loadFile(path) {
			this.buffer = fs.readFileSync(path);
			if (!this.validate()) throw 'Invalid file; should start with MThd';

			this.getDivision().getTracks();
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
	}, {
		key: 'getTrackCount',
		value: function getTrackCount() {
			return Utils.bytesToNumber(this.buffer.slice(10, 12));
		}

		// Parses out tracks and places them in this.tracks and initializes this.pointers

	}, {
		key: 'getTracks',
		value: function getTracks() {
			this.buffer.forEach(function (byte, index) {
				if (Utils.bytesToLetters(this.buffer.slice(index, index + 4)) == 'MTrk') {
					var trackLength = Utils.bytesToNumber(this.buffer.slice(index + 4, index + 8));
					this.tracks.push(this.buffer.slice(index + 8, index + 8 + trackLength));
					this.pointers.push(0);
				}
			}, this);

			return this;
		}
	}, {
		key: 'getDivision',
		value: function getDivision() {
			this.division = Utils.bytesToNumber(this.buffer.slice(12, 14));
			return this;
		}

		/**
   * Handles event within a given track starting at specified index
   * @param track
   */

	}, {
		key: 'handleEvent',
		value: function handleEvent(trackIndex) {
			// Parse delta value
			var track = this.tracks[trackIndex];
			var pointer = this.pointers[trackIndex];
			var deltaByteCount = this.getDeltaByteCount(trackIndex);
			var delta = Utils.readVarInt(track.slice(pointer, pointer + deltaByteCount));
			var eventSig = track[pointer + deltaByteCount];

			if (this.lastTick === null && this.tick >= delta || this.tick - this.lastTick >= delta) {
				this.lastTick = this.tick;
				this.emitEvent(this.parseEvent(trackIndex, deltaByteCount));
			}
		}
	}, {
		key: 'play',
		value: function play() {
			// Initialize
			this.startTime = new Date().getTime();

			// Start play loop
			var me = this;
			this.setIntervalId = setInterval(function () {
				me.tick = me.getCurrentTick();
				me.tracks.forEach(function (track, index) {
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
	}, {
		key: 'endOfTrack',
		value: function endOfTrack(trackIndex) {
			var pointer = this.pointers[trackIndex];
			if (this.tracks[trackIndex][pointer + 1] == 0xff && this.tracks[trackIndex][pointer + 2] == 0x2f && this.tracks[trackIndex][pointer + 3] == 0x00) {
				return true;
			}

			return false;
		}
	}, {
		key: 'getDeltaByteCount',
		value: function getDeltaByteCount(trackIndex) {
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
	}, {
		key: 'getCurrentTick',
		value: function getCurrentTick() {
			return Math.round((new Date().getTime() - this.startTime) / 1000 * (this.division * (this.tempo / 60)));
		}
	}, {
		key: 'emitEvent',
		value: function emitEvent(event) {
			if (typeof this.eventHandler === 'function') this.eventHandler(event);
		}
	}, {
		key: 'toggleTrack',
		value: function toggleTrack(trackIndex) {}

		// Parses event into JSON and advances pointer for the track

	}, {
		key: 'parseEvent',
		value: function parseEvent(trackIndex, deltaByteCount) {
			var track = this.tracks[trackIndex];
			var eventStartIndex = this.pointers[trackIndex] + deltaByteCount;
			var eventJson = {};
			eventJson.track = trackIndex + 1;

			//eventJson.raw = event;
			if (track[eventStartIndex] == 0xff) {
				// Meta Event
				switch (track[eventStartIndex + 1]) {
					case 0x00:
						// Sequence Number
						eventJson.name = 'Sequence Number';
						break;
					case 0x01:
						// Text Event
						eventJson.name = 'Text Event';
						break;
					case 0x02:
						// Copyright Notice
						eventJson.name = 'Copyright Notice';
						break;
					case 0x03:
						// Sequence/Track Name
						eventJson.name = 'Sequence/Track Name';
						break;
					case 0x04:
						// Instrument Name
						eventJson.name = 'Instrument Name';
						break;
					case 0x05:
						// Lyric
						eventJson.name = 'Lyric';
						break;
					case 0x06:
						// Marker
						eventJson.name = 'Marker';
						break;
					case 0x07:
						// Cue Point
						eventJson.name = 'Cue Point';
						break;
					case 0x20:
						// MIDI Channel Prefix
						eventJson.name = 'MIDI Channel Prefix';
						break;
					case 0x2F:
						// End of Track
						eventJson.name = 'End of Track';
						break;
					case 0x51:
						// Set Tempo
						eventJson.name = 'Set Tempo';
						break;
					case 0x54:
						// SMTPE Offset
						eventJson.name = 'SMTPE Offset';
						break;
					case 0x58:
						// Time Signature
						eventJson.name = 'Time Signature';
						break;
					case 0x59:
						// Key Signature
						eventJson.name = 'Key Signature';
						break;
					case 0x7F:
						// Sequencer-Specific Meta-event
						eventJson.name = 'Sequencer-Specific Meta-event';
						break;
				}

				var length = track[this.pointers[trackIndex] + deltaByteCount + 2];
				// Some meta events will have vlv that needs to be handled

				this.pointers[trackIndex] += length + 4;
			} else {
				// Voice event
				if (track[eventStartIndex] < 0x80) {
					// Running status
					eventJson.running = true;
					eventJson.note = Constants.NOTES[track[eventStartIndex]];
					eventJson.velocity = track[eventStartIndex + 1];
					this.lastStatus = track[eventStartIndex];
					this.pointers[trackIndex] += deltaByteCount + 2;
				} else {
					if (track[eventStartIndex] <= 0x8f) {
						// Note off
						eventJson.name = 'Note off';
						eventJson.note = Constants.NOTES[track[eventStartIndex + 1]];
						this.pointers[trackIndex] += deltaByteCount + 3;
					} else if (track[eventStartIndex] <= 0x9f) {
						// Note on
						eventJson.name = 'Note on';
						eventJson.note = Constants.NOTES[track[eventStartIndex + 1]];
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
	}]);

	return Player;
}();

exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,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QUE5QztBQUVBLE1BTE0sTUFLQSxJQUFJLE1BQU0sZUFBTixLQUEwQixJQUE5QixFQUFvQzs7QUFFMUMsZ0JBQVUsSUFBVixHQUFpQixnQkFBakI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxVQUFkLEtBQTZCLGlCQUFpQixDQUE5QztBQUVBLE1BTE0sTUFLQSxJQUFJLE1BQU0sZUFBTixLQUEwQixJQUE5QixFQUFvQzs7QUFFMUMsZ0JBQVUsSUFBVixHQUFpQixzQkFBakI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxVQUFkLEtBQTZCLGlCQUFpQixDQUE5QztBQUVBLE1BTE0sTUFLQSxJQUFJLE1BQU0sZUFBTixLQUEwQixJQUE5QixFQUFvQzs7QUFFMUMsZ0JBQVUsSUFBVixHQUFpQixZQUFqQjtBQUNBLFdBQUssUUFBTCxDQUFjLFVBQWQsS0FBNkIsaUJBQWlCLENBQTlDO0FBQ0E7QUFDRDtBQUNEOztBQUVELFVBQU8sU0FBUDtBQUNBOzs7Ozs7QUFJRixRQUFRLE1BQVIsR0FBaUIsTUFBakIiLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblxuY2xhc3MgUGxheWVyIHtcblx0Y29uc3RydWN0b3IoZXZlbnRIYW5kbGVyKSB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHRoaXMucG9pbnRlcnMgPSBbXTtcblx0XHR0aGlzLmJ1ZmZlcjtcblx0XHR0aGlzLmRpdmlzaW9uO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZDtcblx0XHR0aGlzLnRyYWNrcyA9IFtdO1xuXHRcdHRoaXMudGVtcG8gPSAxMjA7XG5cdFx0dGhpcy50aWNrID0gMDtcblx0XHR0aGlzLmxhc3RTdGF0dXM7XG5cdFx0dGhpcy5sYXN0VGljayA9IG51bGw7XG5cblx0XHR0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcjtcblx0fVxuXG5cdGxvYWRGaWxlKHBhdGgpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhwYXRoKTtcblx0XHRpZiAoIXRoaXMudmFsaWRhdGUoKSkgdGhyb3cgJ0ludmFsaWQgZmlsZTsgc2hvdWxkIHN0YXJ0IHdpdGggTVRoZCc7XG5cblx0XHR0aGlzLmdldERpdmlzaW9uKCkuZ2V0VHJhY2tzKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsb2FkQXJyYXkoYXJyYXkpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IGFycmF5O1xuXHR9XG5cblx0Ly8gRmlyc3QgZm91ciBieXRlcyBzaG91bGQgYmUgTVRoZFxuXHR2YWxpZGF0ZSgpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoMCwgNCkpID09PSAnTVRoZCc7XG5cdH1cblxuXHRnZXRMZW5ndGgoKSB7XG5cdFx0dGhpcy5idWZmZXIuc2xpY2UoNCw4KS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGJ5dGUpXG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIuc2xpY2UoNCwgOCk7XG5cdH1cblxuXHRnZXRGb3JtYXQoKSB7XG5cdFx0Lypcblx0XHRNSURJIGZpbGVzIGNvbWUgaW4gMyB2YXJpYXRpb25zOlxuXHRcdEZvcm1hdCAwIHdoaWNoIGNvbnRhaW4gYSBzaW5nbGUgdHJhY2tcblx0XHRGb3JtYXQgMSB3aGljaCBjb250YWluIG9uZSBvciBtb3JlIHNpbXVsdGFuZW91cyB0cmFja3MgXG5cdFx0KGllIGFsbCB0cmFja3MgYXJlIHRvIGJlIHBsYXllZCBzaW11bHRhbmVvdXNseSkuXG5cdFx0Rm9ybWF0IDIgd2hpY2ggY29udGFpbiBvbmUgb3IgbW9yZSBpbmRlcGVuZGFudCB0cmFja3MgXG5cdFx0KGllIGVhY2ggdHJhY2sgaXMgdG8gYmUgcGxheWVkIGluZGVwZW5kYW50bHkgb2YgdGhlIG90aGVycykuXG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0XHQqL1xuXG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0fVxuXG5cdGdldFRyYWNrQ291bnQoKSB7XG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoMTAsIDEyKSk7XG5cdH1cblxuXHQvLyBQYXJzZXMgb3V0IHRyYWNrcyBhbmQgcGxhY2VzIHRoZW0gaW4gdGhpcy50cmFja3MgYW5kIGluaXRpYWxpemVzIHRoaXMucG9pbnRlcnNcblx0Z2V0VHJhY2tzKCkge1xuXHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZnVuY3Rpb24oYnl0ZSwgaW5kZXgpIHtcblx0XHRcdGlmIChVdGlscy5ieXRlc1RvTGV0dGVycyh0aGlzLmJ1ZmZlci5zbGljZShpbmRleCwgaW5kZXggKyA0KSkgPT0gJ01UcmsnKSB7XG5cdFx0XHRcdHZhciB0cmFja0xlbmd0aCA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoaW5kZXggKyA0LCBpbmRleCArIDgpKTtcblx0XHRcdFx0dGhpcy50cmFja3MucHVzaCh0aGlzLmJ1ZmZlci5zbGljZShpbmRleCArIDgsIGluZGV4ICsgOCArIHRyYWNrTGVuZ3RoKSk7XG5cdFx0XHRcdHRoaXMucG9pbnRlcnMucHVzaCgwKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0RGl2aXNpb24oKSB7XG5cdFx0dGhpcy5kaXZpc2lvbiA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoMTIsIDE0KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBldmVudCB3aXRoaW4gYSBnaXZlbiB0cmFjayBzdGFydGluZyBhdCBzcGVjaWZpZWQgaW5kZXhcblx0ICogQHBhcmFtIHRyYWNrXG5cdCAqL1xuXHRoYW5kbGVFdmVudCh0cmFja0luZGV4KSB7XG5cdFx0Ly8gUGFyc2UgZGVsdGEgdmFsdWVcblx0XHR2YXIgdHJhY2sgPSB0aGlzLnRyYWNrc1t0cmFja0luZGV4XTtcblx0XHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0dmFyIGRlbHRhQnl0ZUNvdW50ID0gdGhpcy5nZXREZWx0YUJ5dGVDb3VudCh0cmFja0luZGV4KTtcblx0XHR2YXIgZGVsdGEgPSBVdGlscy5yZWFkVmFySW50KHRyYWNrLnNsaWNlKHBvaW50ZXIsIHBvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudCkpO1xuXHRcdHZhciBldmVudFNpZyA9IHRyYWNrW3BvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudF07XG5cblx0XHRpZiAoKHRoaXMubGFzdFRpY2sgPT09IG51bGwgJiYgdGhpcy50aWNrID49IGRlbHRhKSB8fCB0aGlzLnRpY2sgLSB0aGlzLmxhc3RUaWNrID49IGRlbHRhICkge1xuXHRcdFx0dGhpcy5sYXN0VGljayA9IHRoaXMudGljaztcblx0XHRcdHRoaXMuZW1pdEV2ZW50KHRoaXMucGFyc2VFdmVudCh0cmFja0luZGV4LCBkZWx0YUJ5dGVDb3VudCkpO1xuXHRcdH1cblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0Ly8gSW5pdGlhbGl6ZVxuXHRcdHRoaXMuc3RhcnRUaW1lID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cdFx0XG5cdFx0Ly8gU3RhcnQgcGxheSBsb29wXG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdG1lLnRpY2sgPSBtZS5nZXRDdXJyZW50VGljaygpO1xuXHRcdFx0bWUudHJhY2tzLmZvckVhY2goZnVuY3Rpb24odHJhY2ssIGluZGV4KSB7XG5cdFx0XHRcdC8vIEhhbmRsZSBuZXh0IGV2ZW50XG5cdFx0XHRcdGlmIChtZS5lbmRPZlRyYWNrKGluZGV4KSkge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwobWUuc2V0SW50ZXJ2YWxJZCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZS5oYW5kbGVFdmVudChpbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1x0XHRcblx0XHR9LCAxKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZW5kT2ZUcmFjayh0cmFja0luZGV4KSB7XG5cdFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdGlmICh0aGlzLnRyYWNrc1t0cmFja0luZGV4XVtwb2ludGVyICsgMV0gPT0gMHhmZiAmJiB0aGlzLnRyYWNrc1t0cmFja0luZGV4XVtwb2ludGVyICsgMl0gPT0gMHgyZiAmJiB0aGlzLnRyYWNrc1t0cmFja0luZGV4XVtwb2ludGVyICsgM10gPT0gMHgwMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0RGVsdGFCeXRlQ291bnQodHJhY2tJbmRleCkge1xuXHRcdC8vIEdldCBieXRlIGNvdW50IG9mIGRlbHRhIFZMVlxuXHRcdC8vIGh0dHA6Ly93d3cuY2Nhcmgub3JnL2NvdXJzZXMvMjUzL2hhbmRvdXQvdmx2L1xuXHRcdC8vIElmIGJ5dGUgaXMgZ3JlYXRlciBvciBlcXVhbCB0byA4MGggKDEyOCBkZWNpbWFsKSB0aGVuIHRoZSBuZXh0IGJ5dGUgXG5cdCAgICAvLyBpcyBhbHNvIHBhcnQgb2YgdGhlIFZMVixcblx0ICAgXHQvLyBlbHNlIGJ5dGUgaXMgdGhlIGxhc3QgYnl0ZSBpbiBhIFZMVi5cblx0ICAgXHR2YXIgdHJhY2sgPSB0aGlzLnRyYWNrc1t0cmFja0luZGV4XTtcblx0ICAgXHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdCAgIFx0dmFyIGN1cnJlbnRCeXRlID0gdHJhY2tbcG9pbnRlcl07XG5cdCAgIFx0dmFyIGJ5dGVDb3VudCA9IDE7XG5cblx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRjdXJyZW50Qnl0ZSA9IHRyYWNrW3BvaW50ZXIgKyBieXRlQ291bnRdO1xuXHRcdFx0Ynl0ZUNvdW50Kys7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJ5dGVDb3VudDtcblx0fVxuXG5cdGdldEN1cnJlbnRUaWNrKCkge1xuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgobmV3IERhdGUpLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDAgKiAodGhpcy5kaXZpc2lvbiAqICh0aGlzLnRlbXBvIC8gNjApKSk7XG5cdH1cblxuXHRlbWl0RXZlbnQoZXZlbnQpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMuZXZlbnRIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB0aGlzLmV2ZW50SGFuZGxlcihldmVudCk7XG5cdH1cblxuXHR0b2dnbGVUcmFjayh0cmFja0luZGV4KSB7XG5cblx0fVxuXG5cdC8vIFBhcnNlcyBldmVudCBpbnRvIEpTT04gYW5kIGFkdmFuY2VzIHBvaW50ZXIgZm9yIHRoZSB0cmFja1xuXHRwYXJzZUV2ZW50KHRyYWNrSW5kZXgsIGRlbHRhQnl0ZUNvdW50KSB7XG5cdFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdFx0dmFyIGV2ZW50U3RhcnRJbmRleCA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBkZWx0YUJ5dGVDb3VudDtcblx0XHR2YXIgZXZlbnRKc29uID0ge307XG5cdFx0ZXZlbnRKc29uLnRyYWNrID0gdHJhY2tJbmRleCArIDE7XG5cblx0XHQvL2V2ZW50SnNvbi5yYXcgPSBldmVudDtcblx0XHRpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA9PSAweGZmKSB7XG5cdFx0XHQvLyBNZXRhIEV2ZW50XG5cdFx0XHRzd2l0Y2godHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV0pIHtcblx0XHRcdFx0Y2FzZSAweDAwOiAvLyBTZXF1ZW5jZSBOdW1iZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZSBOdW1iZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDE6IC8vIFRleHQgRXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUZXh0IEV2ZW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAyOiAvLyBDb3B5cmlnaHQgTm90aWNlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ29weXJpZ2h0IE5vdGljZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMzogLy8gU2VxdWVuY2UvVHJhY2sgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlL1RyYWNrIE5hbWUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDQ6IC8vIEluc3RydW1lbnQgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0luc3RydW1lbnQgTmFtZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNTogLy8gTHlyaWNcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdMeXJpYyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNjogLy8gTWFya2VyXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTWFya2VyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA3OiAvLyBDdWUgUG9pbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDdWUgUG9pbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MjA6IC8vIE1JREkgQ2hhbm5lbCBQcmVmaXhcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNSURJIENoYW5uZWwgUHJlZml4Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDJGOiAvLyBFbmQgb2YgVHJhY2tcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdFbmQgb2YgVHJhY2snO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTE6IC8vIFNldCBUZW1wb1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NldCBUZW1wbyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1NDogLy8gU01UUEUgT2Zmc2V0XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU01UUEUgT2Zmc2V0Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU4OiAvLyBUaW1lIFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RpbWUgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU5OiAvLyBLZXkgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnS2V5IFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg3RjogLy8gU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsZW5ndGggPSB0cmFja1t0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQgKyAyXTtcblx0XHRcdC8vIFNvbWUgbWV0YSBldmVudHMgd2lsbCBoYXZlIHZsdiB0aGF0IG5lZWRzIHRvIGJlIGhhbmRsZWRcblxuXHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBsZW5ndGggKyA0O1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFZvaWNlIGV2ZW50XG5cdFx0XHRpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8IDB4ODApIHtcblx0XHRcdFx0Ly8gUnVubmluZyBzdGF0dXNcblx0XHRcdFx0ZXZlbnRKc29uLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHRldmVudEpzb24ubm90ZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXhdXTtcblx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdHRoaXMubGFzdFN0YXR1cyA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleF07XG5cdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweDhmKSB7XG5cdFx0XHRcdFx0Ly8gTm90ZSBvZmZcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9mZic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweDlmKSB7XG5cdFx0XHRcdFx0Ly8gTm90ZSBvblxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb24nO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlID0gQ29uc3RhbnRzLk5PVEVTW3RyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhhZikge1xuXHRcdFx0XHRcdC8vIFBvbHlwaG9uaWMgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUG9seXBob25pYyBLZXkgUHJlc3N1cmUnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlID0gQ29uc3RhbnRzLk5PVEVTW3RyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHRldmVudEpzb24ucHJlc3N1cmUgPSBldmVudFsyXTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhiZikge1xuXHRcdFx0XHRcdC8vIENvbnRyb2xsZXIgQ2hhbmdlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ29udHJvbGxlciBDaGFuZ2UnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGNmKSB7XG5cdFx0XHRcdFx0Ly8gUHJvZ3JhbSBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQcm9ncmFtIENoYW5nZSc7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4ZGYpIHtcblx0XHRcdFx0XHQvLyBDaGFubmVsIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NoYW5uZWwgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhlZikge1xuXHRcdFx0XHRcdC8vIFBpdGNoIEJlbmRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQaXRjaCBCZW5kJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudEpzb247XG5cdH1cblxufVxuXG5leHBvcnRzLlBsYXllciA9IFBsYXllcjsiXX0=
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
