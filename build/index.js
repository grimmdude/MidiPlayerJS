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
		this.tracksEnabled = []; // 0 disabled, 1 enabled
		this.tempo = 100;
		this.tick = 0;
		this.lastStatuses = [];
		this.lastTick = null;
		this.lastTicks = [];

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
					this.lastTicks.push(0);
					this.tracksEnabled.push(1);
				}
			}, this);

			return this;
		}
	}, {
		key: 'enableTrack',
		value: function enableTrack(trackNumber) {
			this.tracksEnabled[trackNumber - 1] = 1;
			return this;
		}
	}, {
		key: 'disableTrack',
		value: function disableTrack(trackNumber) {
			this.tracksEnabled[trackNumber - 1] = 0;
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

			if (this.pointers[trackIndex] < this.tracks[trackIndex].length && this.tick - this.lastTicks[trackIndex] >= delta) {
				this.lastTicks[trackIndex] = this.tick;

				var event = this.parseEvent(trackIndex, deltaByteCount);

				if (this.tracksEnabled[trackIndex] == 1) this.emitEvent(event);

				// Recursively call this function for each event ahead that has 0 delta time?
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

				// Which one's faster?

				for (var i = 0; i <= me.tracks.length - 1; i++) {
					//console.log(me.tick)
					// Handle next event
					if (me.endOfFile()) {
						clearInterval(me.setIntervalId);
					} else {
						me.handleEvent(i);
					}
				}
				/*
    me.tracks.forEach(function(track, index) {
    	//console.log(me.tick)
    	// Handle next event
    	if (me.endOfTrack(index)) {
    		clearInterval(me.setIntervalId);
    		} else {
    		me.handleEvent(index);
    	}
    });	
    */
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
		key: 'endOfFile',
		value: function endOfFile() {
			// Currently assume header chunk is strictly 14 bytes
			return 14 + this.tracks.length * 8 + this.pointers.reduce(function (a, b) {
				return a + b;
			}, 0) == this.buffer.length;
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

		// Parses event into JSON and advances pointer for the track

	}, {
		key: 'parseEvent',
		value: function parseEvent(trackIndex, deltaByteCount) {
			//console.log(this.tick);
			var track = this.tracks[trackIndex];
			var eventStartIndex = this.pointers[trackIndex] + deltaByteCount;
			var eventJson = {};
			eventJson.track = trackIndex + 1;
			eventJson.delta = Utils.readVarInt(track.slice(this.pointers[trackIndex], this.pointers[trackIndex] + deltaByteCount));

			//eventJson.raw = event;
			if (track[eventStartIndex] == 0xff) {
				// Meta Event

				// If this is a meta event we should emit the data and immediately move to the next event
				// otherwise if we let it run through the next cycle a slight delay will accumulate if multiple tracks
				// are being played simultaneously

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
						// Get vlv length
						var currentByte = this.pointers[trackIndex];
						var byteCount = 1;
						while (currentByte >= 128) {
							currentByte = track[this.pointers[trackIndex] + byteCount];
							byteCount++;
						}
						eventJson.vlv = byteCount;
						var length = Utils.readVarInt(track.slice(eventStartIndex + 2, eventStartIndex + 2 + byteCount));
						eventJson.stringLength = length;
						eventJson.string = Utils.bytesToLetters(track.slice(eventStartIndex + byteCount + 2, eventStartIndex + byteCount + length + 2));
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
						eventJson.data = Utils.bytesToNumber(track.slice(eventStartIndex + 3, eventStartIndex + 6));
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
					eventJson.noteNumber = track[eventStartIndex + 1];
					eventJson.noteName = Constants.NOTES[track[eventStartIndex]];
					eventJson.velocity = track[eventStartIndex + 1];

					if (this.lastStatuses[trackIndex] <= 0x8f) {
						eventJson.name = 'Note off';
					} else if (this.lastStatuses[trackIndex] <= 0x9f) {
						eventJson.name = 'Note on';
					}

					this.pointers[trackIndex] += deltaByteCount + 2;
				} else {
					this.lastStatuses[trackIndex] = track[eventStartIndex];

					if (track[eventStartIndex] <= 0x8f) {
						// Note off
						eventJson.name = 'Note off';
						eventJson.noteNumber = track[eventStartIndex + 1];
						eventJson.noteName = Constants.NOTES[track[eventStartIndex + 1]];
						this.pointers[trackIndex] += deltaByteCount + 3;
					} else if (track[eventStartIndex] <= 0x9f) {
						// Note on
						eventJson.name = 'Note on';
						eventJson.noteNumber = track[eventStartIndex + 1];
						eventJson.noteName = Constants.NOTES[track[eventStartIndex + 1]];
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
						eventJson.number = track[eventStartIndex + 1];
						eventJson.value = track[eventStartIndex + 2];
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
//# sourceMappingURL=data:application/json;base64,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QUwsQ0FBYyxVQUFkLEtBQTZCLGlCQUFpQixDQUE5QztBQUVBLE1BTE0sTUFLQSxJQUFJLE1BQU0sZUFBTixLQUEwQixJQUE5QixFQUFvQzs7QUFFMUMsZ0JBQVUsSUFBVixHQUFpQixzQkFBakI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxVQUFkLEtBQTZCLGlCQUFpQixDQUE5QztBQUVBLE1BTE0sTUFLQSxJQUFJLE1BQU0sZUFBTixLQUEwQixJQUE5QixFQUFvQzs7QUFFMUMsZ0JBQVUsSUFBVixHQUFpQixZQUFqQjtBQUNBLFdBQUssUUFBTCxDQUFjLFVBQWQsS0FBNkIsaUJBQWlCLENBQTlDO0FBQ0E7QUFDRDtBQUNEOztBQUVELFVBQU8sU0FBUDtBQUNBOzs7Ozs7QUFJRixRQUFRLE1BQVIsR0FBaUIsTUFBakIiLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblxuY2xhc3MgUGxheWVyIHtcblx0Y29uc3RydWN0b3IoZXZlbnRIYW5kbGVyKSB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHRoaXMucG9pbnRlcnMgPSBbXTtcblx0XHR0aGlzLmJ1ZmZlcjtcblx0XHR0aGlzLmRpdmlzaW9uO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZDtcblx0XHR0aGlzLnRyYWNrcyA9IFtdO1xuXHRcdHRoaXMudHJhY2tzRW5hYmxlZCA9IFtdOyAvLyAwIGRpc2FibGVkLCAxIGVuYWJsZWRcblx0XHR0aGlzLnRlbXBvID0gMTAwO1xuXHRcdHRoaXMudGljayA9IDA7XG5cdFx0dGhpcy5sYXN0U3RhdHVzZXMgPSBbXTtcblx0XHR0aGlzLmxhc3RUaWNrID0gbnVsbDtcblx0XHR0aGlzLmxhc3RUaWNrcyA9IFtdO1xuXG5cdFx0dGhpcy5ldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXI7XG5cdH1cblxuXHRsb2FkRmlsZShwYXRoKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCk7XG5cdFx0aWYgKCF0aGlzLnZhbGlkYXRlKCkpIHRocm93ICdJbnZhbGlkIGZpbGU7IHNob3VsZCBzdGFydCB3aXRoIE1UaGQnO1xuXG5cdFx0dGhpcy5nZXREaXZpc2lvbigpLmdldFRyYWNrcygpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bG9hZEFycmF5KGFycmF5KSB7XG5cdFx0dGhpcy5idWZmZXIgPSBhcnJheTtcblx0fVxuXG5cdC8vIEZpcnN0IGZvdXIgYnl0ZXMgc2hvdWxkIGJlIE1UaGRcblx0dmFsaWRhdGUoKSB7XG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRoaXMuYnVmZmVyLnNsaWNlKDAsIDQpKSA9PT0gJ01UaGQnO1xuXHR9XG5cblx0Z2V0TGVuZ3RoKCkge1xuXHRcdHRoaXMuYnVmZmVyLnNsaWNlKDQsOCkuZm9yRWFjaChmdW5jdGlvbihieXRlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhieXRlKVxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLnNsaWNlKDQsIDgpO1xuXHR9XG5cblx0Z2V0Rm9ybWF0KCkge1xuXHRcdC8qXG5cdFx0TUlESSBmaWxlcyBjb21lIGluIDMgdmFyaWF0aW9uczpcblx0XHRGb3JtYXQgMCB3aGljaCBjb250YWluIGEgc2luZ2xlIHRyYWNrXG5cdFx0Rm9ybWF0IDEgd2hpY2ggY29udGFpbiBvbmUgb3IgbW9yZSBzaW11bHRhbmVvdXMgdHJhY2tzIFxuXHRcdChpZSBhbGwgdHJhY2tzIGFyZSB0byBiZSBwbGF5ZWQgc2ltdWx0YW5lb3VzbHkpLlxuXHRcdEZvcm1hdCAyIHdoaWNoIGNvbnRhaW4gb25lIG9yIG1vcmUgaW5kZXBlbmRhbnQgdHJhY2tzIFxuXHRcdChpZSBlYWNoIHRyYWNrIGlzIHRvIGJlIHBsYXllZCBpbmRlcGVuZGFudGx5IG9mIHRoZSBvdGhlcnMpLlxuXHRcdHJldHVybiBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDgsIDEwKSk7XG5cdFx0Ki9cblxuXHRcdHJldHVybiBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDgsIDEwKSk7XG5cdH1cblxuXHRnZXRUcmFja0NvdW50KCkge1xuXHRcdHJldHVybiBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDEwLCAxMikpO1xuXHR9XG5cblx0Ly8gUGFyc2VzIG91dCB0cmFja3MgYW5kIHBsYWNlcyB0aGVtIGluIHRoaXMudHJhY2tzIGFuZCBpbml0aWFsaXplcyB0aGlzLnBvaW50ZXJzXG5cdGdldFRyYWNrcygpIHtcblx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUsIGluZGV4KSB7XG5cdFx0XHRpZiAoVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoaW5kZXgsIGluZGV4ICsgNCkpID09ICdNVHJrJykge1xuXHRcdFx0XHR2YXIgdHJhY2tMZW5ndGggPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgNCwgaW5kZXggKyA4KSk7XG5cdFx0XHRcdHRoaXMudHJhY2tzLnB1c2godGhpcy5idWZmZXIuc2xpY2UoaW5kZXggKyA4LCBpbmRleCArIDggKyB0cmFja0xlbmd0aCkpO1xuXHRcdFx0XHR0aGlzLnBvaW50ZXJzLnB1c2goMCk7XG5cdFx0XHRcdHRoaXMubGFzdFRpY2tzLnB1c2goMCk7XG5cdFx0XHRcdHRoaXMudHJhY2tzRW5hYmxlZC5wdXNoKDEpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlbmFibGVUcmFjayh0cmFja051bWJlcikge1xuXHRcdHRoaXMudHJhY2tzRW5hYmxlZFt0cmFja051bWJlciAtIDFdID0gMTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpc2FibGVUcmFjayh0cmFja051bWJlcikge1xuXHRcdHRoaXMudHJhY2tzRW5hYmxlZFt0cmFja051bWJlciAtIDFdID0gMDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldERpdmlzaW9uKCkge1xuXHRcdHRoaXMuZGl2aXNpb24gPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDEyLCAxNCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgZXZlbnQgd2l0aGluIGEgZ2l2ZW4gdHJhY2sgc3RhcnRpbmcgYXQgc3BlY2lmaWVkIGluZGV4XG5cdCAqIEBwYXJhbSB0cmFja1xuXHQgKi9cblx0aGFuZGxlRXZlbnQodHJhY2tJbmRleCkge1xuXHRcdC8vIFBhcnNlIGRlbHRhIHZhbHVlXG5cdFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBkZWx0YUJ5dGVDb3VudCA9IHRoaXMuZ2V0RGVsdGFCeXRlQ291bnQodHJhY2tJbmRleCk7XG5cdFx0dmFyIGRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZShwb2ludGVyLCBwb2ludGVyICsgZGVsdGFCeXRlQ291bnQpKTtcblx0XHR2YXIgZXZlbnRTaWcgPSB0cmFja1twb2ludGVyICsgZGVsdGFCeXRlQ291bnRdO1xuXG5cdFx0aWYgKHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gPCB0aGlzLnRyYWNrc1t0cmFja0luZGV4XS5sZW5ndGggJiYgdGhpcy50aWNrIC0gdGhpcy5sYXN0VGlja3NbdHJhY2tJbmRleF0gPj0gZGVsdGEpIHtcblx0XHRcdHRoaXMubGFzdFRpY2tzW3RyYWNrSW5kZXhdID0gdGhpcy50aWNrO1xuXG5cdFx0XHR2YXIgZXZlbnQgPSB0aGlzLnBhcnNlRXZlbnQodHJhY2tJbmRleCwgZGVsdGFCeXRlQ291bnQpO1xuXG5cdFx0XHRpZiAodGhpcy50cmFja3NFbmFibGVkW3RyYWNrSW5kZXhdID09IDEpIHRoaXMuZW1pdEV2ZW50KGV2ZW50KTtcblx0XHRcdFxuXHRcdFx0Ly8gUmVjdXJzaXZlbHkgY2FsbCB0aGlzIGZ1bmN0aW9uIGZvciBlYWNoIGV2ZW50IGFoZWFkIHRoYXQgaGFzIDAgZGVsdGEgdGltZT9cblx0XHR9XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdC8vIEluaXRpYWxpemVcblx0XHR0aGlzLnN0YXJ0VGltZSA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdFx0Ly8gU3RhcnQgcGxheSBsb29wXG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdG1lLnRpY2sgPSBtZS5nZXRDdXJyZW50VGljaygpO1xuXHRcdFx0XG5cdFx0XHQvLyBXaGljaCBvbmUncyBmYXN0ZXI/XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IG1lLnRyYWNrcy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhtZS50aWNrKVxuXHRcdFx0XHQvLyBIYW5kbGUgbmV4dCBldmVudFxuXHRcdFx0XHRpZiAobWUuZW5kT2ZGaWxlKCkpIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKG1lLnNldEludGVydmFsSWQpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWUuaGFuZGxlRXZlbnQoaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8qXG5cdFx0XHRtZS50cmFja3MuZm9yRWFjaChmdW5jdGlvbih0cmFjaywgaW5kZXgpIHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhtZS50aWNrKVxuXHRcdFx0XHQvLyBIYW5kbGUgbmV4dCBldmVudFxuXHRcdFx0XHRpZiAobWUuZW5kT2ZUcmFjayhpbmRleCkpIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKG1lLnNldEludGVydmFsSWQpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWUuaGFuZGxlRXZlbnQoaW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcdFxuXHRcdFx0Ki9cblx0XHRcdFxuXHRcdH0sIDEpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlbmRPZlRyYWNrKHRyYWNrSW5kZXgpIHtcblx0XHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0aWYgKHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAxXSA9PSAweGZmICYmIHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAyXSA9PSAweDJmICYmIHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAzXSA9PSAweDAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRlbmRPZkZpbGUoKSB7XG5cdFx0Ly8gQ3VycmVudGx5IGFzc3VtZSBoZWFkZXIgY2h1bmsgaXMgc3RyaWN0bHkgMTQgYnl0ZXNcblx0XHRyZXR1cm4gMTQgKyB0aGlzLnRyYWNrcy5sZW5ndGggKiA4ICsgdGhpcy5wb2ludGVycy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge3JldHVybiBhK2J9LCAwKSA9PSB0aGlzLmJ1ZmZlci5sZW5ndGg7XG5cdH1cblxuXHRnZXREZWx0YUJ5dGVDb3VudCh0cmFja0luZGV4KSB7XG5cdFx0Ly8gR2V0IGJ5dGUgY291bnQgb2YgZGVsdGEgVkxWXG5cdFx0Ly8gaHR0cDovL3d3dy5jY2FyaC5vcmcvY291cnNlcy8yNTMvaGFuZG91dC92bHYvXG5cdFx0Ly8gSWYgYnl0ZSBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIDgwaCAoMTI4IGRlY2ltYWwpIHRoZW4gdGhlIG5leHQgYnl0ZSBcblx0ICAgIC8vIGlzIGFsc28gcGFydCBvZiB0aGUgVkxWLFxuXHQgICBcdC8vIGVsc2UgYnl0ZSBpcyB0aGUgbGFzdCBieXRlIGluIGEgVkxWLlxuXHQgICBcdHZhciB0cmFjayA9IHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdO1xuXHQgICBcdHZhciBwb2ludGVyID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0ICAgXHR2YXIgY3VycmVudEJ5dGUgPSB0cmFja1twb2ludGVyXTtcblx0ICAgXHR2YXIgYnl0ZUNvdW50ID0gMTtcblxuXHRcdHdoaWxlIChjdXJyZW50Qnl0ZSA+PSAxMjgpIHtcblx0XHRcdGN1cnJlbnRCeXRlID0gdHJhY2tbcG9pbnRlciArIGJ5dGVDb3VudF07XG5cdFx0XHRieXRlQ291bnQrKztcblx0XHR9XG5cblx0XHRyZXR1cm4gYnl0ZUNvdW50O1xuXHR9XG5cblx0Z2V0Q3VycmVudFRpY2soKSB7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChuZXcgRGF0ZSkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMCAqICh0aGlzLmRpdmlzaW9uICogKHRoaXMudGVtcG8gLyA2MCkpKTtcblx0fVxuXG5cdGVtaXRFdmVudChldmVudCkge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5ldmVudEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHRoaXMuZXZlbnRIYW5kbGVyKGV2ZW50KTtcblx0fVxuXG5cdC8vIFBhcnNlcyBldmVudCBpbnRvIEpTT04gYW5kIGFkdmFuY2VzIHBvaW50ZXIgZm9yIHRoZSB0cmFja1xuXHRwYXJzZUV2ZW50KHRyYWNrSW5kZXgsIGRlbHRhQnl0ZUNvdW50KSB7XG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLnRpY2spO1xuXHRcdHZhciB0cmFjayA9IHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBldmVudFN0YXJ0SW5kZXggPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQ7XG5cdFx0dmFyIGV2ZW50SnNvbiA9IHt9O1xuXHRcdGV2ZW50SnNvbi50cmFjayA9IHRyYWNrSW5kZXggKyAxO1xuXHRcdGV2ZW50SnNvbi5kZWx0YSA9IFV0aWxzLnJlYWRWYXJJbnQodHJhY2suc2xpY2UodGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSwgdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50KSk7XG5cblx0XHQvL2V2ZW50SnNvbi5yYXcgPSBldmVudDtcblx0XHRpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA9PSAweGZmKSB7XG5cdFx0XHQvLyBNZXRhIEV2ZW50XG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYSBtZXRhIGV2ZW50IHdlIHNob3VsZCBlbWl0IHRoZSBkYXRhIGFuZCBpbW1lZGlhdGVseSBtb3ZlIHRvIHRoZSBuZXh0IGV2ZW50XG5cdFx0XHQvLyBvdGhlcndpc2UgaWYgd2UgbGV0IGl0IHJ1biB0aHJvdWdoIHRoZSBuZXh0IGN5Y2xlIGEgc2xpZ2h0IGRlbGF5IHdpbGwgYWNjdW11bGF0ZSBpZiBtdWx0aXBsZSB0cmFja3Ncblx0XHRcdC8vIGFyZSBiZWluZyBwbGF5ZWQgc2ltdWx0YW5lb3VzbHlcblxuXHRcdFx0c3dpdGNoKHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdKSB7XG5cdFx0XHRcdGNhc2UgMHgwMDogLy8gU2VxdWVuY2UgTnVtYmVyXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2UgTnVtYmVyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAxOiAvLyBUZXh0IEV2ZW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVGV4dCBFdmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMjogLy8gQ29weXJpZ2h0IE5vdGljZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvcHlyaWdodCBOb3RpY2UnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDM6IC8vIFNlcXVlbmNlL1RyYWNrIE5hbWVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZS9UcmFjayBOYW1lJztcblx0XHRcdFx0XHQvLyBHZXQgdmx2IGxlbmd0aFxuXHRcdFx0XHRcdHZhciBjdXJyZW50Qnl0ZSA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0XHRcdFx0dmFyIGJ5dGVDb3VudCA9IDE7XG5cdFx0XHRcdFx0d2hpbGUgKGN1cnJlbnRCeXRlID49IDEyOCkge1xuXHRcdFx0XHRcdFx0Y3VycmVudEJ5dGUgPSB0cmFja1t0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgYnl0ZUNvdW50XTtcblx0XHRcdFx0XHRcdGJ5dGVDb3VudCsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudEpzb24udmx2ID0gYnl0ZUNvdW50O1xuXHRcdFx0XHRcdHZhciBsZW5ndGggPSBVdGlscy5yZWFkVmFySW50KHRyYWNrLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIDIsIGV2ZW50U3RhcnRJbmRleCArIDIgKyBieXRlQ291bnQpKTtcblx0XHRcdFx0XHRldmVudEpzb24uc3RyaW5nTGVuZ3RoID0gbGVuZ3RoO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5zdHJpbmcgPSBVdGlscy5ieXRlc1RvTGV0dGVycyh0cmFjay5zbGljZShldmVudFN0YXJ0SW5kZXggKyBieXRlQ291bnQgKyAyLCBldmVudFN0YXJ0SW5kZXggKyBieXRlQ291bnQgKyBsZW5ndGggKyAyKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNDogLy8gSW5zdHJ1bWVudCBOYW1lXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnSW5zdHJ1bWVudCBOYW1lJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA1OiAvLyBMeXJpY1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0x5cmljJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA2OiAvLyBNYXJrZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNYXJrZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDc6IC8vIEN1ZSBQb2ludFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0N1ZSBQb2ludCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyMDogLy8gTUlESSBDaGFubmVsIFByZWZpeFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01JREkgQ2hhbm5lbCBQcmVmaXgnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MkY6IC8vIEVuZCBvZiBUcmFja1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0VuZCBvZiBUcmFjayc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1MTogLy8gU2V0IFRlbXBvXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2V0IFRlbXBvJztcblx0XHRcdFx0XHRldmVudEpzb24uZGF0YSA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodHJhY2suc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgMywgZXZlbnRTdGFydEluZGV4ICsgNikpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTQ6IC8vIFNNVFBFIE9mZnNldFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NNVFBFIE9mZnNldCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1ODogLy8gVGltZSBTaWduYXR1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUaW1lIFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1OTogLy8gS2V5IFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0tleSBTaWduYXR1cmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4N0Y6IC8vIFNlcXVlbmNlci1TcGVjaWZpYyBNZXRhLWV2ZW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGVuZ3RoID0gdHJhY2tbdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50ICsgMl07XG5cdFx0XHQvLyBTb21lIG1ldGEgZXZlbnRzIHdpbGwgaGF2ZSB2bHYgdGhhdCBuZWVkcyB0byBiZSBoYW5kbGVkXG5cblx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gbGVuZ3RoICsgNDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBWb2ljZSBldmVudFxuXHRcdFx0aWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPCAweDgwKSB7XG5cdFx0XHRcdC8vIFJ1bm5pbmcgc3RhdHVzXG5cdFx0XHRcdGV2ZW50SnNvbi5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOYW1lID0gQ29uc3RhbnRzLk5PVEVTW3RyYWNrW2V2ZW50U3RhcnRJbmRleF1dO1xuXHRcdFx0XHRldmVudEpzb24udmVsb2NpdHkgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICh0aGlzLmxhc3RTdGF0dXNlc1t0cmFja0luZGV4XSA8PSAweDhmKSB7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvZmYnO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5sYXN0U3RhdHVzZXNbdHJhY2tJbmRleF0gPD0gMHg5Zikge1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb24nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubGFzdFN0YXR1c2VzW3RyYWNrSW5kZXhdID0gdHJhY2tbZXZlbnRTdGFydEluZGV4XTtcblxuXHRcdFx0XHRpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweDhmKSB7XG5cdFx0XHRcdFx0Ly8gTm90ZSBvZmZcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9mZic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweDlmKSB7XG5cdFx0XHRcdFx0Ly8gTm90ZSBvblxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb24nO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTnVtYmVyID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOYW1lID0gQ29uc3RhbnRzLk5PVEVTW3RyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhhZikge1xuXHRcdFx0XHRcdC8vIFBvbHlwaG9uaWMgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUG9seXBob25pYyBLZXkgUHJlc3N1cmUnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlID0gQ29uc3RhbnRzLk5PVEVTW3RyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHRldmVudEpzb24ucHJlc3N1cmUgPSBldmVudFsyXTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhiZikge1xuXHRcdFx0XHRcdC8vIENvbnRyb2xsZXIgQ2hhbmdlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ29udHJvbGxlciBDaGFuZ2UnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5udW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24udmFsdWUgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAyXTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhjZikge1xuXHRcdFx0XHRcdC8vIFByb2dyYW0gQ2hhbmdlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUHJvZ3JhbSBDaGFuZ2UnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGRmKSB7XG5cdFx0XHRcdFx0Ly8gQ2hhbm5lbCBLZXkgUHJlc3N1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDaGFubmVsIEtleSBQcmVzc3VyZSc7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4ZWYpIHtcblx0XHRcdFx0XHQvLyBQaXRjaCBCZW5kXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUGl0Y2ggQmVuZCc7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRKc29uO1xuXHR9XG5cbn1cblxuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7Il19
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
