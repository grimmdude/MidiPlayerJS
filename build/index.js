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

		// Get byte length of a note event by status byte

	}, {
		key: 'noteEventLength',
		value: function noteEventLength(status) {}
	}]);

	return Event;
}();

exports.Event = Event;
//# sourceMappingURL=data:application/json;base64,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QUFVLElBQVYsR0FBaUIsc0JBQWpCO0FBRUEsTUFKTSxNQUlBLElBQUksTUFBTSxDQUFOLEtBQVksSUFBaEIsRUFBc0I7O0FBRTVCLGdCQUFVLElBQVYsR0FBaUIsWUFBakI7QUFDQTtBQUNEO0FBQ0Q7O0FBRUQsVUFBTyxTQUFQO0FBQ0E7Ozs7OztrQ0FJc0IsTSxFQUFRLENBRTlCOzs7Ozs7QUFHRixRQUFRLEtBQVIsR0FBZ0IsS0FBaEIiLCJmaWxlIjoiZXZlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudCB7XG5cdHN0YXRpYyBwYXJzZShldmVudCkge1xuXHRcdHZhciBldmVudEpzb24gPSB7fTtcblx0XHRldmVudEpzb24ucmF3ID0gZXZlbnQ7XG5cblx0XHRpZiAoZXZlbnRbMF0gPT0gMHhmZikge1xuXHRcdFx0Ly8gTWV0YSBFdmVudFxuXHRcdFx0c3dpdGNoKGV2ZW50WzFdKSB7XG5cdFx0XHRcdGNhc2UgMHgwMDogLy8gU2VxdWVuY2UgTnVtYmVyXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2UgTnVtYmVyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAxOiAvLyBUZXh0IEV2ZW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVGV4dCBFdmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMjogLy8gQ29weXJpZ2h0IE5vdGljZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvcHlyaWdodCBOb3RpY2UnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDM6IC8vIFNlcXVlbmNlL1RyYWNrIE5hbWVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZS9UcmFjayBOYW1lJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA0OiAvLyBJbnN0cnVtZW50IE5hbWVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdJbnN0cnVtZW50IE5hbWUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDU6IC8vIEx5cmljXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTHlyaWMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDY6IC8vIE1hcmtlclxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01hcmtlcic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNzogLy8gQ3VlIFBvaW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ3VlIFBvaW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDIwOiAvLyBNSURJIENoYW5uZWwgUHJlZml4XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTUlESSBDaGFubmVsIFByZWZpeCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyRjogLy8gRW5kIG9mIFRyYWNrXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnRW5kIG9mIFRyYWNrJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDUxOiAvLyBTZXQgVGVtcG9cblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXQgVGVtcG8nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTQ6IC8vIFNNVFBFIE9mZnNldFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NNVFBFIE9mZnNldCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1ODogLy8gVGltZSBTaWduYXR1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUaW1lIFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1OTogLy8gS2V5IFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0tleSBTaWduYXR1cmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4N0Y6IC8vIFNlcXVlbmNlci1TcGVjaWZpYyBNZXRhLWV2ZW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBWb2ljZSBldmVudFxuXHRcdFx0aWYgKGV2ZW50WzBdIDwgMHg4MCkge1xuXHRcdFx0XHQvLyBSdW5uaW5nIHN0YXR1c1xuXHRcdFx0XHRldmVudEpzb24ucnVubmluZyA9IHRydWU7XG5cdFx0XHRcdGV2ZW50SnNvbi5ub3RlID0gQ29uc3RhbnRzLk5PVEVTW2V2ZW50WzBdXTtcblx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gZXZlbnRbMV07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChldmVudFswXSA8PSAweDhmKSB7XG5cdFx0XHRcdFx0Ly8gTm90ZSBvZmZcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9mZic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGUgPSBDb25zdGFudHMuTk9URVNbZXZlbnRbMV1dO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnRbMF0gPD0gMHg5Zikge1xuXHRcdFx0XHRcdC8vIE5vdGUgb25cblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9uJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZSA9IENvbnN0YW50cy5OT1RFU1tldmVudFsxXV07XG5cblx0XHRcdFx0fSBlbHNlIGlmIChldmVudFswXSA8PSAweGFmKSB7XG5cdFx0XHRcdFx0Ly8gUG9seXBob25pYyBLZXkgUHJlc3N1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQb2x5cGhvbmljIEtleSBQcmVzc3VyZSc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGUgPSBDb25zdGFudHMuTk9URVNbZXZlbnRbMV1dO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5wcmVzc3VyZSA9IGV2ZW50WzJdO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnRbMF0gPD0gMHhiZikge1xuXHRcdFx0XHRcdC8vIENvbnRyb2xsZXIgQ2hhbmdlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ29udHJvbGxlciBDaGFuZ2UnO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnRbMF0gPD0gMHhjZikge1xuXHRcdFx0XHRcdC8vIFByb2dyYW0gQ2hhbmdlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUHJvZ3JhbSBDaGFuZ2UnO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnRbMF0gPD0gMHhkZikge1xuXHRcdFx0XHRcdC8vIENoYW5uZWwgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ2hhbm5lbCBLZXkgUHJlc3N1cmUnO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnRbMF0gPD0gMHhlZikge1xuXHRcdFx0XHRcdC8vIFBpdGNoIEJlbmRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQaXRjaCBCZW5kJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudEpzb247XG5cdH1cblxuXG5cdC8vIEdldCBieXRlIGxlbmd0aCBvZiBhIG5vdGUgZXZlbnQgYnkgc3RhdHVzIGJ5dGVcblx0c3RhdGljIG5vdGVFdmVudExlbmd0aChzdGF0dXMpIHtcblxuXHR9XG59XG5cbmV4cG9ydHMuRXZlbnQgPSBFdmVudDsiXX0=
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');

var Player = function () {
	function Player(eventHandler) {
		_classCallCheck(this, Player);

		this.startTime = 0;
		this.pointer = 0;
		this.pointers = [];
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

			// Meta event
			if (eventSig == 0xff) {
				this.emitEvent(trackIndex, track.slice(pointer + deltaByteCount, pointer + deltaByteCount + 3));

				// Advance pointer
				var length = track[pointer + deltaByteCount + 2];
				this.pointers[trackIndex] += length + 4;
			} else {
				// Note event
				if (this.lastTick === null && this.tick >= delta || this.tick - this.lastTick >= delta) {
					this.lastTick = this.tick;
					//this.emitEvent(this.parseEvent(trackIndex, deltaByteCount));

					var statusByte = track[pointer + deltaByteCount];
					if (statusByte < 0x80) {
						// Running status
						console.log('running status');
						this.emitEvent(trackIndex, track.slice(pointer + deltaByteCount, pointer + deltaByteCount + 2));

						// Some meta events will have vlv that needs to be handled
						this.pointers[trackIndex] += deltaByteCount + 2;
					} else {
						this.lastStatus = statusByte;

						if (statusByte <= 0x8f) {
							// Note off
							this.emitEvent(trackIndex, track.slice(pointer + deltaByteCount, pointer + deltaByteCount + 3));
							this.pointers[trackIndex] += deltaByteCount + 3;
						} else if (statusByte <= 0x9f) {
							// Note on
							this.emitEvent(trackIndex, track.slice(pointer + deltaByteCount, pointer + deltaByteCount + 3));
							this.pointers[trackIndex] += deltaByteCount + 3;
						} else if (statusByte <= 0xaf) {
							// Polyphonic Key Pressure
							this.pointers[trackIndex] += deltaByteCount + 3;
						} else if (statusByte <= 0xbf) {
							// Controller Change
							this.pointers[trackIndex] += deltaByteCount + 3;
						} else if (statusByte <= 0xcf) {
							// Program Change
							this.emitEvent(trackIndex, track.slice(pointer + deltaByteCount, pointer + deltaByteCount + 2));
							this.pointers[trackIndex] += deltaByteCount + 2;
						} else if (statusByte <= 0xdf) {
							// Channel Key Pressure
							this.pointers[trackIndex] += deltaByteCount + 2;
						} else if (statusByte <= 0xef) {
							// Pitch Bend
							this.pointers[trackIndex] += deltaByteCount + 3;
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
		value: function emitEvent(trackIndex, event) {
			if (typeof this.eventHandler === 'function') this.eventHandler(Event.parse(event));
		}
	}, {
		key: 'toggleTrack',
		value: function toggleTrack(trackIndex) {}

		/*
   * @param event (includes delta)
   */

	}, {
		key: 'parseEvent',
		value: function parseEvent(trackIndex, deltaByteCount) {
			var event = this.tracks[trackIndex][this.pointers[trackIndex] + deltaByteCount];
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

	return Player;
}();

exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,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aEIsRUFBc0I7O0FBRTVCLGdCQUFVLElBQVYsR0FBaUIsbUJBQWpCO0FBRUEsTUFKTSxNQUlBLElBQUksTUFBTSxDQUFOLEtBQVksSUFBaEIsRUFBc0I7O0FBRTVCLGdCQUFVLElBQVYsR0FBaUIsZ0JBQWpCO0FBRUEsTUFKTSxNQUlBLElBQUksTUFBTSxDQUFOLEtBQVksSUFBaEIsRUFBc0I7O0FBRTVCLGdCQUFVLElBQVYsR0FBaUIsc0JBQWpCO0FBRUEsTUFKTSxNQUlBLElBQUksTUFBTSxDQUFOLEtBQVksSUFBaEIsRUFBc0I7O0FBRTVCLGdCQUFVLElBQVYsR0FBaUIsWUFBakI7QUFDQTtBQUNEO0FBQ0Q7O0FBRUQsVUFBTyxTQUFQO0FBQ0E7Ozs7OztBQUlGLFFBQVEsTUFBUixHQUFpQixNQUFqQiIsImZpbGUiOiJwbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5jbGFzcyBQbGF5ZXIge1xuXHRjb25zdHJ1Y3RvcihldmVudEhhbmRsZXIpIHtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdFx0dGhpcy5wb2ludGVyID0gMDtcblx0XHR0aGlzLnBvaW50ZXJzID0gW107XG5cdFx0dGhpcy5idWZmZXI7XG5cdFx0dGhpcy5kaXZpc2lvbjtcblx0XHR0aGlzLnNldEludGVydmFsSWQ7XG5cdFx0dGhpcy5jdXJyZW50VGltZTtcblx0XHR0aGlzLnRyYWNrcyA9IFtdO1xuXHRcdHRoaXMudGVtcG8gPSAxMjA7XG5cdFx0dGhpcy50aWNrID0gMDtcblx0XHR0aGlzLmxhc3RTdGF0dXM7XG5cdFx0dGhpcy5sYXN0VGljayA9IG51bGw7XG5cblx0XHR0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcjtcblx0fVxuXG5cdGxvYWRGaWxlKHBhdGgpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhwYXRoKTtcblx0XHRpZiAoIXRoaXMudmFsaWRhdGUoKSkgdGhyb3cgJ0ludmFsaWQgZmlsZTsgc2hvdWxkIHN0YXJ0IHdpdGggTVRoZCc7XG5cblx0XHR0aGlzLmdldERpdmlzaW9uKCkuZ2V0VHJhY2tzKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsb2FkQXJyYXkoYXJyYXkpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IGFycmF5O1xuXHR9XG5cblx0Ly8gRmlyc3QgZm91ciBieXRlcyBzaG91bGQgYmUgTVRoZFxuXHR2YWxpZGF0ZSgpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoMCwgNCkpID09PSAnTVRoZCc7XG5cdH1cblxuXHRnZXRMZW5ndGgoKSB7XG5cdFx0dGhpcy5idWZmZXIuc2xpY2UoNCw4KS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGJ5dGUpXG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIuc2xpY2UoNCwgOCk7XG5cdH1cblxuXHRnZXRGb3JtYXQoKSB7XG5cdFx0Lypcblx0XHRNSURJIGZpbGVzIGNvbWUgaW4gMyB2YXJpYXRpb25zOlxuXHRcdEZvcm1hdCAwIHdoaWNoIGNvbnRhaW4gYSBzaW5nbGUgdHJhY2tcblx0XHRGb3JtYXQgMSB3aGljaCBjb250YWluIG9uZSBvciBtb3JlIHNpbXVsdGFuZW91cyB0cmFja3MgXG5cdFx0KGllIGFsbCB0cmFja3MgYXJlIHRvIGJlIHBsYXllZCBzaW11bHRhbmVvdXNseSkuXG5cdFx0Rm9ybWF0IDIgd2hpY2ggY29udGFpbiBvbmUgb3IgbW9yZSBpbmRlcGVuZGFudCB0cmFja3MgXG5cdFx0KGllIGVhY2ggdHJhY2sgaXMgdG8gYmUgcGxheWVkIGluZGVwZW5kYW50bHkgb2YgdGhlIG90aGVycykuXG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0XHQqL1xuXG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0fVxuXG5cdGdldFRyYWNrQ291bnQoKSB7XG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoMTAsIDEyKSk7XG5cdH1cblxuXHQvLyBQYXJzZXMgb3V0IHRyYWNrcyBhbmQgcGxhY2VzIHRoZW0gaW4gdGhpcy50cmFja3MgYW5kIGluaXRpYWxpemVzIHRoaXMucG9pbnRlcnNcblx0Z2V0VHJhY2tzKCkge1xuXHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZnVuY3Rpb24oYnl0ZSwgaW5kZXgpIHtcblx0XHRcdGlmIChVdGlscy5ieXRlc1RvTGV0dGVycyh0aGlzLmJ1ZmZlci5zbGljZShpbmRleCwgaW5kZXggKyA0KSkgPT0gJ01UcmsnKSB7XG5cdFx0XHRcdHZhciB0cmFja0xlbmd0aCA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoaW5kZXggKyA0LCBpbmRleCArIDgpKTtcblx0XHRcdFx0dGhpcy50cmFja3MucHVzaCh0aGlzLmJ1ZmZlci5zbGljZShpbmRleCArIDgsIGluZGV4ICsgOCArIHRyYWNrTGVuZ3RoKSk7XG5cdFx0XHRcdHRoaXMucG9pbnRlcnMucHVzaCgwKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0RGl2aXNpb24oKSB7XG5cdFx0dGhpcy5kaXZpc2lvbiA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoMTIsIDE0KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBldmVudCB3aXRoaW4gYSBnaXZlbiB0cmFjayBzdGFydGluZyBhdCBzcGVjaWZpZWQgaW5kZXhcblx0ICogQHBhcmFtIHRyYWNrXG5cdCAqL1xuXHRoYW5kbGVFdmVudCh0cmFja0luZGV4KSB7XG5cdFx0Ly8gUGFyc2UgZGVsdGEgdmFsdWVcblx0XHR2YXIgdHJhY2sgPSB0aGlzLnRyYWNrc1t0cmFja0luZGV4XTtcblx0XHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0dmFyIGRlbHRhQnl0ZUNvdW50ID0gdGhpcy5nZXREZWx0YUJ5dGVDb3VudCh0cmFja0luZGV4KTtcblx0XHR2YXIgZGVsdGEgPSBVdGlscy5yZWFkVmFySW50KHRyYWNrLnNsaWNlKHBvaW50ZXIsIHBvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudCkpO1xuXHRcdHZhciBldmVudFNpZyA9IHRyYWNrW3BvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudF07XG5cblx0XHQvLyBNZXRhIGV2ZW50XG5cdFx0aWYgKGV2ZW50U2lnID09IDB4ZmYpIHtcblx0XHRcdHRoaXMuZW1pdEV2ZW50KHRyYWNrSW5kZXgsIHRyYWNrLnNsaWNlKHBvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudCwgcG9pbnRlciArIGRlbHRhQnl0ZUNvdW50ICsgMykpO1xuXG5cdFx0XHQvLyBBZHZhbmNlIHBvaW50ZXJcblx0XHRcdHZhciBsZW5ndGggPSB0cmFja1twb2ludGVyICsgZGVsdGFCeXRlQ291bnQgKyAyXTtcblx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gbGVuZ3RoICsgNDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBOb3RlIGV2ZW50XG5cdFx0XHRpZiAoKHRoaXMubGFzdFRpY2sgPT09IG51bGwgJiYgdGhpcy50aWNrID49IGRlbHRhKSB8fCB0aGlzLnRpY2sgLSB0aGlzLmxhc3RUaWNrID49IGRlbHRhICkge1xuXHRcdFx0XHR0aGlzLmxhc3RUaWNrID0gdGhpcy50aWNrO1xuXHRcdFx0XHQvL3RoaXMuZW1pdEV2ZW50KHRoaXMucGFyc2VFdmVudCh0cmFja0luZGV4LCBkZWx0YUJ5dGVDb3VudCkpO1xuXG5cblxuXHRcdFx0XHR2YXIgc3RhdHVzQnl0ZSA9IHRyYWNrW3BvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudF07XG5cdFx0XHRcdGlmIChzdGF0dXNCeXRlIDwgMHg4MCkge1xuXHRcdFx0XHRcdC8vIFJ1bm5pbmcgc3RhdHVzXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3J1bm5pbmcgc3RhdHVzJyk7XG5cdFx0XHRcdFx0dGhpcy5lbWl0RXZlbnQodHJhY2tJbmRleCwgdHJhY2suc2xpY2UocG9pbnRlciArIGRlbHRhQnl0ZUNvdW50LCBwb2ludGVyICsgZGVsdGFCeXRlQ291bnQgKyAyKSk7XG5cblx0XHRcdFx0XHQvLyBTb21lIG1ldGEgZXZlbnRzIHdpbGwgaGF2ZSB2bHYgdGhhdCBuZWVkcyB0byBiZSBoYW5kbGVkXG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmxhc3RTdGF0dXMgPSBzdGF0dXNCeXRlO1xuXG5cdFx0XHRcdFx0aWYgKHN0YXR1c0J5dGUgPD0gMHg4Zikge1xuXHRcdFx0XHRcdFx0Ly8gTm90ZSBvZmZcblx0XHRcdFx0XHRcdHRoaXMuZW1pdEV2ZW50KHRyYWNrSW5kZXgsIHRyYWNrLnNsaWNlKHBvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudCwgcG9pbnRlciArIGRlbHRhQnl0ZUNvdW50ICsgMykpO1xuXHRcdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN0YXR1c0J5dGUgPD0gMHg5Zikge1xuXHRcdFx0XHRcdFx0Ly8gTm90ZSBvblxuXHRcdFx0XHRcdFx0dGhpcy5lbWl0RXZlbnQodHJhY2tJbmRleCwgdHJhY2suc2xpY2UocG9pbnRlciArIGRlbHRhQnl0ZUNvdW50LCBwb2ludGVyICsgZGVsdGFCeXRlQ291bnQgKyAzKSk7XG5cdFx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc3RhdHVzQnl0ZSA8PSAweGFmKSB7XG5cdFx0XHRcdFx0XHQvLyBQb2x5cGhvbmljIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN0YXR1c0J5dGUgPD0gMHhiZikge1xuXHRcdFx0XHRcdFx0Ly8gQ29udHJvbGxlciBDaGFuZ2Vcblx0XHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdGF0dXNCeXRlIDw9IDB4Y2YpIHtcblx0XHRcdFx0XHRcdC8vIFByb2dyYW0gQ2hhbmdlXG5cdFx0XHRcdFx0XHR0aGlzLmVtaXRFdmVudCh0cmFja0luZGV4LCB0cmFjay5zbGljZShwb2ludGVyICsgZGVsdGFCeXRlQ291bnQsIHBvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudCArIDIpKTtcblx0XHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdGF0dXNCeXRlIDw9IDB4ZGYpIHtcblx0XHRcdFx0XHRcdC8vIENoYW5uZWwgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc3RhdHVzQnl0ZSA8PSAweGVmKSB7XG5cdFx0XHRcdFx0XHQvLyBQaXRjaCBCZW5kXG5cdFx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cGxheSgpIHtcblx0XHQvLyBJbml0aWFsaXplXG5cdFx0dGhpcy5zdGFydFRpbWUgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblx0XHRcblx0XHQvLyBTdGFydCBwbGF5IGxvb3Bcblx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0bWUudGljayA9IG1lLmdldEN1cnJlbnRUaWNrKCk7XG5cdFx0XHRtZS50cmFja3MuZm9yRWFjaChmdW5jdGlvbih0cmFjaywgaW5kZXgpIHtcblx0XHRcdFx0Ly8gSGFuZGxlIG5leHQgZXZlbnRcblx0XHRcdFx0aWYgKG1lLmVuZE9mVHJhY2soaW5kZXgpKSB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChtZS5zZXRJbnRlcnZhbElkKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lLmhhbmRsZUV2ZW50KGluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XHRcdFxuXHRcdH0sIDEpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlbmRPZlRyYWNrKHRyYWNrSW5kZXgpIHtcblx0XHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0aWYgKHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAxXSA9PSAweGZmICYmIHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAyXSA9PSAweDJmICYmIHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAzXSA9PSAweDAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRnZXREZWx0YUJ5dGVDb3VudCh0cmFja0luZGV4KSB7XG5cdFx0Ly8gR2V0IGJ5dGUgY291bnQgb2YgZGVsdGEgVkxWXG5cdFx0Ly8gaHR0cDovL3d3dy5jY2FyaC5vcmcvY291cnNlcy8yNTMvaGFuZG91dC92bHYvXG5cdFx0Ly8gSWYgYnl0ZSBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIDgwaCAoMTI4IGRlY2ltYWwpIHRoZW4gdGhlIG5leHQgYnl0ZSBcblx0ICAgIC8vIGlzIGFsc28gcGFydCBvZiB0aGUgVkxWLFxuXHQgICBcdC8vIGVsc2UgYnl0ZSBpcyB0aGUgbGFzdCBieXRlIGluIGEgVkxWLlxuXHQgICBcdHZhciB0cmFjayA9IHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdO1xuXHQgICBcdHZhciBwb2ludGVyID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0ICAgXHR2YXIgY3VycmVudEJ5dGUgPSB0cmFja1twb2ludGVyXTtcblx0ICAgXHR2YXIgYnl0ZUNvdW50ID0gMTtcblxuXHRcdHdoaWxlIChjdXJyZW50Qnl0ZSA+PSAxMjgpIHtcblx0XHRcdGN1cnJlbnRCeXRlID0gdHJhY2tbcG9pbnRlciArIGJ5dGVDb3VudF07XG5cdFx0XHRieXRlQ291bnQrKztcblx0XHR9XG5cblx0XHRyZXR1cm4gYnl0ZUNvdW50O1xuXHR9XG5cblx0Z2V0Q3VycmVudFRpY2soKSB7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChuZXcgRGF0ZSkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMCAqICh0aGlzLmRpdmlzaW9uICogKHRoaXMudGVtcG8gLyA2MCkpKTtcblx0fVxuXG5cdGVtaXRFdmVudCh0cmFja0luZGV4LCBldmVudCkge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5ldmVudEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHRoaXMuZXZlbnRIYW5kbGVyKEV2ZW50LnBhcnNlKGV2ZW50KSk7XG5cdH1cblxuXHR0b2dnbGVUcmFjayh0cmFja0luZGV4KSB7XG5cblx0fVxuXG5cdC8qXG5cdCAqIEBwYXJhbSBldmVudCAoaW5jbHVkZXMgZGVsdGEpXG5cdCAqL1xuXHRwYXJzZUV2ZW50KHRyYWNrSW5kZXgsIGRlbHRhQnl0ZUNvdW50KSB7XG5cdFx0dmFyIGV2ZW50ID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF1bdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50XTtcblx0XHR2YXIgZXZlbnRKc29uID0ge307XG5cdFx0ZXZlbnRKc29uLnJhdyA9IGV2ZW50O1xuXG5cdFx0aWYgKGV2ZW50WzBdID09IDB4ZmYpIHtcblx0XHRcdC8vIE1ldGEgRXZlbnRcblx0XHRcdHN3aXRjaChldmVudFsxXSkge1xuXHRcdFx0XHRjYXNlIDB4MDA6IC8vIFNlcXVlbmNlIE51bWJlclxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlIE51bWJlcic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMTogLy8gVGV4dCBFdmVudFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RleHQgRXZlbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDI6IC8vIENvcHlyaWdodCBOb3RpY2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDb3B5cmlnaHQgTm90aWNlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAzOiAvLyBTZXF1ZW5jZS9UcmFjayBOYW1lXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2UvVHJhY2sgTmFtZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNDogLy8gSW5zdHJ1bWVudCBOYW1lXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnSW5zdHJ1bWVudCBOYW1lJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA1OiAvLyBMeXJpY1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0x5cmljJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA2OiAvLyBNYXJrZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNYXJrZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDc6IC8vIEN1ZSBQb2ludFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0N1ZSBQb2ludCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyMDogLy8gTUlESSBDaGFubmVsIFByZWZpeFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01JREkgQ2hhbm5lbCBQcmVmaXgnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MkY6IC8vIEVuZCBvZiBUcmFja1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0VuZCBvZiBUcmFjayc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1MTogLy8gU2V0IFRlbXBvXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2V0IFRlbXBvJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU0OiAvLyBTTVRQRSBPZmZzZXRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTTVRQRSBPZmZzZXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTg6IC8vIFRpbWUgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVGltZSBTaWduYXR1cmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTk6IC8vIEtleSBTaWduYXR1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdLZXkgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDdGOiAvLyBTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlci1TcGVjaWZpYyBNZXRhLWV2ZW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gVm9pY2UgZXZlbnRcblx0XHRcdGlmIChldmVudFswXSA8IDB4ODApIHtcblx0XHRcdFx0Ly8gUnVubmluZyBzdGF0dXNcblx0XHRcdFx0ZXZlbnRKc29uLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHRldmVudEpzb24ubm90ZSA9IENvbnN0YW50cy5OT1RFU1tldmVudFswXV07XG5cdFx0XHRcdGV2ZW50SnNvbi52ZWxvY2l0eSA9IGV2ZW50WzFdO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoZXZlbnRbMF0gPD0gMHg4Zikge1xuXHRcdFx0XHRcdC8vIE5vdGUgb2ZmXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvZmYnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlID0gQ29uc3RhbnRzLk5PVEVTW2V2ZW50WzFdXTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKGV2ZW50WzBdIDw9IDB4OWYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9uXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGUgPSBDb25zdGFudHMuTk9URVNbZXZlbnRbMV1dO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnRbMF0gPD0gMHhhZikge1xuXHRcdFx0XHRcdC8vIFBvbHlwaG9uaWMgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUG9seXBob25pYyBLZXkgUHJlc3N1cmUnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlID0gQ29uc3RhbnRzLk5PVEVTW2V2ZW50WzFdXTtcblx0XHRcdFx0XHRldmVudEpzb24ucHJlc3N1cmUgPSBldmVudFsyXTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKGV2ZW50WzBdIDw9IDB4YmYpIHtcblx0XHRcdFx0XHQvLyBDb250cm9sbGVyIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvbnRyb2xsZXIgQ2hhbmdlJztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKGV2ZW50WzBdIDw9IDB4Y2YpIHtcblx0XHRcdFx0XHQvLyBQcm9ncmFtIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1Byb2dyYW0gQ2hhbmdlJztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKGV2ZW50WzBdIDw9IDB4ZGYpIHtcblx0XHRcdFx0XHQvLyBDaGFubmVsIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NoYW5uZWwgS2V5IFByZXNzdXJlJztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKGV2ZW50WzBdIDw9IDB4ZWYpIHtcblx0XHRcdFx0XHQvLyBQaXRjaCBCZW5kXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUGl0Y2ggQmVuZCc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRKc29uO1xuXHR9XG5cbn1cblxuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7Il19
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
