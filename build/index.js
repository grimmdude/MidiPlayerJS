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

var Event = function () {
	function Event() {
		_classCallCheck(this, Event);
	}

	_createClass(Event, null, [{
		key: 'parse',
		value: function parse(event) {
			var eventJson = {};
			eventJson.raw = event;

			if (event[0] == 0xff) {
				// Meta Event
				switch (event[1]) {
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
	}]);

	return Event;
}();

exports.Event = Event;
//# sourceMappingURL=data:application/json;base64,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QUFVLElBQVYsR0FBaUIsc0JBQWpCO0FBRUEsTUFKTSxNQUlBLElBQUksTUFBTSxDQUFOLEtBQVksSUFBaEIsRUFBc0I7O0FBRTVCLGdCQUFVLElBQVYsR0FBaUIsWUFBakI7QUFDQTtBQUNEO0FBQ0Q7O0FBRUQsVUFBTyxTQUFQO0FBQ0E7Ozs7OztBQUdGLFFBQVEsS0FBUixHQUFnQixLQUFoQiIsImZpbGUiOiJldmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV2ZW50IHtcblx0c3RhdGljIHBhcnNlKGV2ZW50KSB7XG5cdFx0dmFyIGV2ZW50SnNvbiA9IHt9O1xuXHRcdGV2ZW50SnNvbi5yYXcgPSBldmVudDtcblxuXHRcdGlmIChldmVudFswXSA9PSAweGZmKSB7XG5cdFx0XHQvLyBNZXRhIEV2ZW50XG5cdFx0XHRzd2l0Y2goZXZlbnRbMV0pIHtcblx0XHRcdFx0Y2FzZSAweDAwOiAvLyBTZXF1ZW5jZSBOdW1iZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZSBOdW1iZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDE6IC8vIFRleHQgRXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUZXh0IEV2ZW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAyOiAvLyBDb3B5cmlnaHQgTm90aWNlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ29weXJpZ2h0IE5vdGljZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMzogLy8gU2VxdWVuY2UvVHJhY2sgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlL1RyYWNrIE5hbWUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDQ6IC8vIEluc3RydW1lbnQgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0luc3RydW1lbnQgTmFtZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNTogLy8gTHlyaWNcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdMeXJpYyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNjogLy8gTWFya2VyXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTWFya2VyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA3OiAvLyBDdWUgUG9pbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDdWUgUG9pbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MjA6IC8vIE1JREkgQ2hhbm5lbCBQcmVmaXhcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNSURJIENoYW5uZWwgUHJlZml4Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDJGOiAvLyBFbmQgb2YgVHJhY2tcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdFbmQgb2YgVHJhY2snO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTE6IC8vIFNldCBUZW1wb1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NldCBUZW1wbyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1NDogLy8gU01UUEUgT2Zmc2V0XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU01UUEUgT2Zmc2V0Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU4OiAvLyBUaW1lIFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RpbWUgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU5OiAvLyBLZXkgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnS2V5IFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg3RjogLy8gU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFZvaWNlIGV2ZW50XG5cdFx0XHRpZiAoZXZlbnRbMF0gPCAweDgwKSB7XG5cdFx0XHRcdC8vIFJ1bm5pbmcgc3RhdHVzXG5cdFx0XHRcdGV2ZW50SnNvbi5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRKc29uLm5vdGUgPSBDb25zdGFudHMuTk9URVNbZXZlbnRbMF1dO1xuXHRcdFx0XHRldmVudEpzb24udmVsb2NpdHkgPSBldmVudFsxXTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGV2ZW50WzBdIDw9IDB4OGYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9mZlxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb2ZmJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZSA9IENvbnN0YW50cy5OT1RFU1tldmVudFsxXV07XG5cblx0XHRcdFx0fSBlbHNlIGlmIChldmVudFswXSA8PSAweDlmKSB7XG5cdFx0XHRcdFx0Ly8gTm90ZSBvblxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb24nO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlID0gQ29uc3RhbnRzLk5PVEVTW2V2ZW50WzFdXTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKGV2ZW50WzBdIDw9IDB4YWYpIHtcblx0XHRcdFx0XHQvLyBQb2x5cGhvbmljIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BvbHlwaG9uaWMgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZSA9IENvbnN0YW50cy5OT1RFU1tldmVudFsxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnByZXNzdXJlID0gZXZlbnRbMl07XG5cblx0XHRcdFx0fSBlbHNlIGlmIChldmVudFswXSA8PSAweGJmKSB7XG5cdFx0XHRcdFx0Ly8gQ29udHJvbGxlciBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDb250cm9sbGVyIENoYW5nZSc7XG5cblx0XHRcdFx0fSBlbHNlIGlmIChldmVudFswXSA8PSAweGNmKSB7XG5cdFx0XHRcdFx0Ly8gUHJvZ3JhbSBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQcm9ncmFtIENoYW5nZSc7XG5cblx0XHRcdFx0fSBlbHNlIGlmIChldmVudFswXSA8PSAweGRmKSB7XG5cdFx0XHRcdFx0Ly8gQ2hhbm5lbCBLZXkgUHJlc3N1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDaGFubmVsIEtleSBQcmVzc3VyZSc7XG5cblx0XHRcdFx0fSBlbHNlIGlmIChldmVudFswXSA8PSAweGVmKSB7XG5cdFx0XHRcdFx0Ly8gUGl0Y2ggQmVuZFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BpdGNoIEJlbmQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50SnNvbjtcblx0fVxufVxuXG5leHBvcnRzLkV2ZW50ID0gRXZlbnQ7Il19
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');

var Player = function () {
	function Player(eventHandler) {
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

		this.eventHandler = eventHandler;
	}

	_createClass(Player, [{
		key: 'loadFile',
		value: function loadFile(path) {
			this.buffer = fs.readFileSync(path);
			if (!this.validate()) throw 'Invalid file; should start with MThd';

			this.tracks = this.getTracks();
			this.division = this.getDivision();
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

			this.buffer.forEach(function (byte, index) {
				if (Utils.bytesToLetters(this.buffer.slice(index, index + 4)) == 'MTrk') {
					var trackLength = Utils.bytesToNumber(this.buffer.slice(index + 4, index + 8));
					tracks.push(this.buffer.slice(index + 8, index + 8 + trackLength));
				}
			}, this);

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
   */

	}, {
		key: 'handleEvent',
		value: function handleEvent(track) {
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
				this.emitEvent(track.slice(this.pointer + vlvByteCount, this.pointer + vlvByteCount + 3));

				// Advance pointer
				var length = track[this.pointer + vlvByteCount + 2];
				//console.log('length: ' + length);
				this.pointer += length + 4;
			} else {

				// Note event
				if (this.lastTick === null && this.tick >= delta || this.tick - this.lastTick >= delta) {
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
	}, {
		key: 'play',
		value: function play() {
			// Initialize
			this.startTime = new Date().getTime();

			// Start play loop
			var me = this;
			this.setIntervalId = setInterval(function () {
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
	}, {
		key: 'getCurrentTick',
		value: function getCurrentTick() {
			return Math.round((new Date().getTime() - this.startTime) / 1000 * (this.division * (this.tempo / 60)));
		}
	}, {
		key: 'emitEvent',
		value: function emitEvent(event) {
			if (typeof this.eventHandler === 'function') this.eventHandler(Event.parse(event));
		}
	}]);

	return Player;
}();

exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,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LEVBQWEsR0FBRyxPQUFILEdBQWEsQ0FBMUIsS0FBZ0MsR0FBaEMsSUFBdUMsR0FBRyxNQUFILENBQVUsQ0FBVixFQUFhLEdBQUcsT0FBSCxHQUFhLENBQTFCLEtBQWdDLEVBQXZFLElBQTZFLEdBQUcsTUFBSCxDQUFVLENBQVYsRUFBYSxHQUFHLE9BQUgsR0FBYSxDQUExQixLQUFnQyxDQUFqSCxFQUFvSDtBQUNuSCxtQkFBYyxHQUFHLGFBQWpCO0FBRUEsS0FIRCxNQUdPO0FBQ04sUUFBRyxXQUFILENBQWUsR0FBRyxNQUFILENBQVUsQ0FBVixDQUFmO0FBQ0E7QUFFRCxJQVhvQixFQVdsQixDQVhrQixDQUFyQjs7QUFhQSxVQUFPLElBQVA7QUFDQTs7O21DQUVnQjtBQUNoQixVQUFPLEtBQUssS0FBTCxDQUFXLENBQUUsSUFBSSxJQUFKLEVBQUQsQ0FBVyxPQUFYLEtBQXVCLEtBQUssU0FBN0IsSUFBMEMsSUFBMUMsSUFBa0QsS0FBSyxRQUFMLElBQWlCLEtBQUssS0FBTCxHQUFhLEVBQTlCLENBQWxELENBQVgsQ0FBUDtBQUNBOzs7NEJBRVMsSyxFQUFPO0FBQ2hCLE9BQUksT0FBTyxLQUFLLFlBQVosS0FBNkIsVUFBakMsRUFBNkMsS0FBSyxZQUFMLENBQWtCLE1BQU0sS0FBTixDQUFZLEtBQVosQ0FBbEI7QUFDN0M7Ozs7OztBQUlGLFFBQVEsTUFBUixHQUFpQixNQUFqQiIsImZpbGUiOiJwbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5jbGFzcyBQbGF5ZXIge1xuXHRjb25zdHJ1Y3RvcihldmVudEhhbmRsZXIpIHtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdFx0dGhpcy5wb2ludGVyID0gMDtcblx0XHR0aGlzLmJ1ZmZlcjtcblx0XHR0aGlzLmRpdmlzaW9uO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZDtcblx0XHR0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdHRoaXMudHJhY2tzID0gW107XG5cdFx0dGhpcy50ZW1wbyA9IDEyMDtcblx0XHR0aGlzLnRpY2sgPSAwO1xuXHRcdHRoaXMubGFzdFN0YXR1cztcblx0XHR0aGlzLmxhc3RUaWNrID0gbnVsbDtcblxuXHRcdHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyO1xuXHR9XG5cblx0bG9hZEZpbGUocGF0aCkge1xuXHRcdHRoaXMuYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKHBhdGgpO1xuXHRcdGlmICghdGhpcy52YWxpZGF0ZSgpKSB0aHJvdyAnSW52YWxpZCBmaWxlOyBzaG91bGQgc3RhcnQgd2l0aCBNVGhkJztcblxuXHRcdHRoaXMudHJhY2tzID0gdGhpcy5nZXRUcmFja3MoKTtcblx0XHR0aGlzLmRpdmlzaW9uID0gdGhpcy5nZXREaXZpc2lvbigpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bG9hZEFycmF5KGFycmF5KSB7XG5cdFx0dGhpcy5idWZmZXIgPSBhcnJheTtcblx0fVxuXG5cdC8vIEZpcnN0IGZvdXIgYnl0ZXMgc2hvdWxkIGJlIE1UaGRcblx0dmFsaWRhdGUoKSB7XG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRoaXMuYnVmZmVyLnNsaWNlKDAsIDQpKSA9PT0gJ01UaGQnO1xuXHR9XG5cblx0Z2V0TGVuZ3RoKCkge1xuXHRcdHRoaXMuYnVmZmVyLnNsaWNlKDQsOCkuZm9yRWFjaChmdW5jdGlvbihieXRlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhieXRlKVxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLnNsaWNlKDQsIDgpO1xuXHR9XG5cblx0Z2V0Rm9ybWF0KCkge1xuXHRcdHJldHVybiBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDgsIDEwKSk7XG5cdH1cblxuXHRnZXRUcmFja0NvdW50KCkge1xuXHRcdHJldHVybiBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDEwLCAxMikpO1xuXHR9XG5cblx0Ly8gUGFyc2VzIG91dCB0cmFja3MgYW5kIHBsYWNlcyB0aGVtIGluIHRoaXMudHJhY2tzXG5cdGdldFRyYWNrcygpIHtcblx0XHR2YXIgdHJhY2tzID0gW107XG5cblx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUsIGluZGV4KSB7XG5cdFx0XHRpZiAoVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoaW5kZXgsIGluZGV4ICsgNCkpID09ICdNVHJrJykge1xuXHRcdFx0XHR2YXIgdHJhY2tMZW5ndGggPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgNCwgaW5kZXggKyA4KSk7XG5cdFx0XHRcdHRyYWNrcy5wdXNoKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgOCwgaW5kZXggKyA4ICsgdHJhY2tMZW5ndGgpKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblxuXHRcdHJldHVybiB0cmFja3M7XG5cdH1cblxuXHRnZXREaXZpc2lvbigpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMiwgMTQpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGV2ZW50IHdpdGhpbiBhIGdpdmVuIHRyYWNrIHN0YXJ0aW5nIGF0IHNwZWNpZmllZCBpbmRleFxuXHQgKiBAcGFyYW0gdHJhY2tcblx0ICovXG5cdGhhbmRsZUV2ZW50KHRyYWNrKSB7XG5cdFx0Ly8gUGFyc2UgZGVsdGEgdmFsdWVcblx0XHR2YXIgY3VycmVudEJ5dGUgPSB0cmFja1t0aGlzLnBvaW50ZXJdO1xuXHRcdHZhciB2bHZCeXRlQ291bnQgPSAxO1xuXG5cdFx0Ly8gR2V0IGJ5dGVzIG9mIFZMVlxuXHRcdC8vIGh0dHA6Ly93d3cuY2Nhcmgub3JnL2NvdXJzZXMvMjUzL2hhbmRvdXQvdmx2L1xuXHRcdC8vIElmIGJ5dGUgaXMgZ3JlYXRlciBvciBlcXVhbCB0byA4MGggKDEyOCBkZWNpbWFsKSB0aGVuIHRoZSBuZXh0IGJ5dGUgXG5cdCAgICAvLyBpcyBhbHNvIHBhcnQgb2YgdGhlIFZMVixcblx0ICAgXHQvLyBlbHNlIGJ5dGUgaXMgdGhlIGxhc3QgYnl0ZSBpbiBhIFZMVi5cblx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRjdXJyZW50Qnl0ZSA9IHRyYWNrW3RoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudF07XG5cdFx0XHR2bHZCeXRlQ291bnQrKztcblx0XHR9XG5cblx0XHR2YXIgZGVsdGEgPSBVdGlscy5yZWFkVmFySW50KHRyYWNrLnNsaWNlKHRoaXMucG9pbnRlciwgdGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50KSk7XG5cdFx0dmFyIGV2ZW50U2lnID0gdHJhY2tbdGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50XTtcblxuXHRcdC8vIFNraXAgbWV0YSBldmVudHMgZm9yIG5vdyAoZXhjZXB0IGZvciBlbmQgb2YgdHJhY2spXG5cdFx0aWYgKGV2ZW50U2lnID09IDB4ZmYpIHtcblx0XHRcdHRoaXMuZW1pdEV2ZW50KCB0cmFjay5zbGljZSh0aGlzLnBvaW50ZXIgKyB2bHZCeXRlQ291bnQsIHRoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudCArIDMpICApXG5cblx0XHRcdC8vIEFkdmFuY2UgcG9pbnRlclxuXHRcdFx0dmFyIGxlbmd0aCA9IHRyYWNrW3RoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudCArIDJdO1xuXHRcdFx0Ly9jb25zb2xlLmxvZygnbGVuZ3RoOiAnICsgbGVuZ3RoKTtcblx0XHRcdHRoaXMucG9pbnRlciArPSBsZW5ndGggKyA0O1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIE5vdGUgZXZlbnRcblx0XHRcdGlmICgodGhpcy5sYXN0VGljayA9PT0gbnVsbCAmJiB0aGlzLnRpY2sgPj0gZGVsdGEpIHx8IHRoaXMudGljayAtIHRoaXMubGFzdFRpY2sgPj0gZGVsdGEgKSB7XG5cdFx0XHRcdHRoaXMubGFzdFRpY2sgPSB0aGlzLnRpY2s7XG5cblx0XHRcdFx0dmFyIHN0YXR1c0J5dGUgPSB0cmFja1t0aGlzLnBvaW50ZXIgKyB2bHZCeXRlQ291bnRdO1xuXHRcdFx0XHRpZiAoc3RhdHVzQnl0ZSA8IDB4ODApIHtcblx0XHRcdFx0XHQvLyBSdW5uaW5nIHN0YXR1c1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdydW5uaW5nIHN0YXR1cycpO1xuXHRcdFx0XHRcdHRoaXMuZW1pdEV2ZW50KHRyYWNrLnNsaWNlKHRoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudCwgdGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50ICsgMikpO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlciArPSB2bHZCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5sYXN0U3RhdHVzID0gc3RhdHVzQnl0ZTtcblxuXHRcdFx0XHRcdGlmIChzdGF0dXNCeXRlIDw9IDB4OGYpIHtcblx0XHRcdFx0XHRcdC8vIE5vdGUgb2ZmXG5cdFx0XHRcdFx0XHR0aGlzLmVtaXRFdmVudCh0cmFjay5zbGljZSh0aGlzLnBvaW50ZXIgKyB2bHZCeXRlQ291bnQsIHRoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudCArIDMpKTtcblx0XHRcdFx0XHRcdHRoaXMucG9pbnRlciArPSB2bHZCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdGF0dXNCeXRlIDw9IDB4OWYpIHtcblx0XHRcdFx0XHRcdC8vIE5vdGUgb25cblx0XHRcdFx0XHRcdHRoaXMuZW1pdEV2ZW50KHRyYWNrLnNsaWNlKHRoaXMucG9pbnRlciArIHZsdkJ5dGVDb3VudCwgdGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50ICsgMykpO1xuXHRcdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IHZsdkJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN0YXR1c0J5dGUgPD0gMHhhZikge1xuXHRcdFx0XHRcdFx0Ly8gUG9seXBob25pYyBLZXkgUHJlc3N1cmVcblx0XHRcdFx0XHRcdHRoaXMucG9pbnRlciArPSB2bHZCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdGF0dXNCeXRlIDw9IDB4YmYpIHtcblx0XHRcdFx0XHRcdC8vIENvbnRyb2xsZXIgQ2hhbmdlXG5cdFx0XHRcdFx0XHR0aGlzLnBvaW50ZXIgKz0gdmx2Qnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc3RhdHVzQnl0ZSA8PSAweGNmKSB7XG5cdFx0XHRcdFx0XHQvLyBQcm9ncmFtIENoYW5nZVxuXHRcdFx0XHRcdFx0dGhpcy5lbWl0RXZlbnQodHJhY2suc2xpY2UodGhpcy5wb2ludGVyICsgdmx2Qnl0ZUNvdW50LCB0aGlzLnBvaW50ZXIgKyB2bHZCeXRlQ291bnQgKyAyKSk7XG5cdFx0XHRcdFx0XHR0aGlzLnBvaW50ZXIgKz0gdmx2Qnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc3RhdHVzQnl0ZSA8PSAweGRmKSB7XG5cdFx0XHRcdFx0XHQvLyBDaGFubmVsIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IHZsdkJ5dGVDb3VudCArIDI7XG5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN0YXR1c0J5dGUgPD0gMHhlZikge1xuXHRcdFx0XHRcdFx0Ly8gUGl0Y2ggQmVuZFxuXHRcdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IHZsdkJ5dGVDb3VudCArIDM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0cGxheSgpIHtcblx0XHQvLyBJbml0aWFsaXplXG5cdFx0dGhpcy5zdGFydFRpbWUgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblx0XHRcblx0XHQvLyBTdGFydCBwbGF5IGxvb3Bcblx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0bWUudGljayA9IG1lLmdldEN1cnJlbnRUaWNrKCk7XG5cblx0XHRcdC8vIEhhbmRsZSBuZXh0IGV2ZW50XG5cdFx0XHRpZiAobWUudHJhY2tzWzBdW21lLnBvaW50ZXIgKyAxXSA9PSAyNTUgJiYgbWUudHJhY2tzWzBdW21lLnBvaW50ZXIgKyAyXSA9PSA0NyAmJiBtZS50cmFja3NbMF1bbWUucG9pbnRlciArIDNdID09IDApIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChtZS5zZXRJbnRlcnZhbElkKTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWUuaGFuZGxlRXZlbnQobWUudHJhY2tzWzBdKTtcblx0XHRcdH1cblx0XHRcblx0XHR9LCAxKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Q3VycmVudFRpY2soKSB7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChuZXcgRGF0ZSkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMCAqICh0aGlzLmRpdmlzaW9uICogKHRoaXMudGVtcG8gLyA2MCkpKTtcblx0fVxuXG5cdGVtaXRFdmVudChldmVudCkge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5ldmVudEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHRoaXMuZXZlbnRIYW5kbGVyKEV2ZW50LnBhcnNlKGV2ZW50KSk7XG5cdH1cblxufVxuXG5leHBvcnRzLlBsYXllciA9IFBsYXllcjsiXX0=
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
