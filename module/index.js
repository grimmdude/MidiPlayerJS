'use strict';

var Constants = {
	VERSION: '1.0.1',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiQ29uc3RhbnRzIiwiVkVSU0lPTiIsIk5PVEVTIiwiYWxsTm90ZXMiLCJjb3VudGVyIiwiaSIsImZvckVhY2giLCJub3RlR3JvdXAiLCJub3RlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZO0FBQ2ZDLFVBQVMsT0FETTtBQUVmQyxRQUFPO0FBRlEsQ0FBaEI7O0FBS0EsQ0FBQyxZQUFXO0FBQ1g7QUFDQSxLQUFJQyxXQUFXLENBQUMsQ0FBQyxHQUFELENBQUQsRUFBUSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQVIsRUFBcUIsQ0FBQyxHQUFELENBQXJCLEVBQTRCLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBNUIsRUFBeUMsQ0FBQyxHQUFELENBQXpDLEVBQStDLENBQUMsR0FBRCxDQUEvQyxFQUFzRCxDQUFDLElBQUQsRUFBTSxJQUFOLENBQXRELEVBQW1FLENBQUMsR0FBRCxDQUFuRSxFQUEwRSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQTFFLEVBQXVGLENBQUMsR0FBRCxDQUF2RixFQUE4RixDQUFDLElBQUQsRUFBTSxJQUFOLENBQTlGLEVBQTJHLENBQUMsR0FBRCxDQUEzRyxDQUFmO0FBQ0EsS0FBSUMsVUFBVSxDQUFkOztBQUVBO0FBQ0EsTUFBSyxJQUFJQyxJQUFJLENBQUMsQ0FBZCxFQUFpQkEsS0FBSyxDQUF0QixFQUF5QkEsR0FBekIsRUFBOEI7QUFDN0JGLFdBQVNHLE9BQVQsQ0FBaUIsVUFBU0MsU0FBVCxFQUFvQjtBQUNwQ0EsYUFBVUQsT0FBVixDQUFrQixVQUFTRSxJQUFULEVBQWU7QUFBQ1IsY0FBVUUsS0FBVixDQUFnQkUsT0FBaEIsSUFBMkJJLE9BQU9ILENBQWxDO0FBQW9DLElBQXRFO0FBQ0FEO0FBQ0EsR0FIRDtBQUlBO0FBQ0QsQ0FaRDs7QUFjQUssUUFBUVQsU0FBUixHQUFvQkEsU0FBcEIiLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbnN0YW50cyA9IHtcblx0VkVSU0lPTjogJzEuMC4xJyxcblx0Tk9URVM6IFtdXG59O1xuXG4oZnVuY3Rpb24oKSB7XG5cdC8vIEJ1aWxkcyBub3RlcyBvYmplY3QgZm9yIHJlZmVyZW5jZSBhZ2FpbnN0IGJpbmFyeSB2YWx1ZXMuXG5cdHZhciBhbGxOb3RlcyA9IFtbJ0MnXSwgWydDIycsJ0RiJ10sIFsnRCddLCBbJ0QjJywnRWInXSwgWydFJ10sWydGJ10sIFsnRiMnLCdHYiddLCBbJ0cnXSwgWydHIycsJ0FiJ10sIFsnQSddLCBbJ0EjJywnQmInXSwgWydCJ11dO1xuXHR2YXIgY291bnRlciA9IDA7XG5cblx0Ly8gQWxsIGF2YWlsYWJsZSBvY3RhdmVzLlxuXHRmb3IgKHZhciBpID0gLTE7IGkgPD0gOTsgaSsrKSB7XG5cdFx0YWxsTm90ZXMuZm9yRWFjaChmdW5jdGlvbihub3RlR3JvdXApIHtcblx0XHRcdG5vdGVHcm91cC5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUpIHtDb25zdGFudHMuTk9URVNbY291bnRlcl0gPSBub3RlICsgaX0pO1xuXHRcdFx0Y291bnRlciArKztcblx0XHR9KTtcblx0fVxufSkoKTtcblxuZXhwb3J0cy5Db25zdGFudHMgPSBDb25zdGFudHM7Il19
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
	function Player(eventHandler, buffer) {
		_classCallCheck(this, Player);

		this.startTime = 0;
		this.buffer = buffer || null;
		this.division;
		this.format;
		this.setIntervalId = null;
		this.tracks = [];
		this.tracksEnabled = []; // 0 disabled, 1 enabled
		this.tempo = 120;
		this.startTick = 0;
		this.tick = 0;
		this.lastStatuses = [];
		this.lastTick = null;
		this.lastTicks = [];
		this.pointers = [];

		this.eventHandler = eventHandler;
	}

	// Only for NodeJS


	_createClass(Player, [{
		key: 'loadFile',
		value: function loadFile(path) {
			var fs = require('fs');
			this.buffer = fs.readFileSync(path);
			return this.fileLoaded();
		}
	}, {
		key: 'loadArrayBuffer',
		value: function loadArrayBuffer(arrayBuffer) {
			this.buffer = new Uint8Array(arrayBuffer);
			return this.fileLoaded();
		}
	}, {
		key: 'loadDataUri',
		value: function loadDataUri(dataUri) {
			// convert base64 to raw binary data held in a string
			// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
			var byteString = Utils.atob(dataUri.split(',')[1]);

			// write the bytes of the string to an ArrayBuffer
			var ia = new Uint8Array(byteString.length);
			for (var i = 0; i < byteString.length; i++) {
				ia[i] = byteString.charCodeAt(i);
			}

			this.buffer = ia;
			return this.fileLoaded();
		}
	}, {
		key: 'fileLoaded',
		value: function fileLoaded() {
			if (!this.validate()) throw 'Invalid MIDI file; should start with MThd';
			return this.getDivision().getFormat().getTracks();
		}

		// First four bytes should be MThd

	}, {
		key: 'validate',
		value: function validate() {
			return Utils.bytesToLetters(this.buffer.slice(0, 4)) === 'MThd';
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

			this.format = Utils.bytesToNumber(this.buffer.slice(8, 10));
			return this;
		}

		// Parses out tracks and places them in this.tracks and initializes this.pointers

	}, {
		key: 'getTracks',
		value: function getTracks() {
			this.tracks = [];
			this.pointers = [];
			this.lastTicks = [];
			this.tracksEnabled = [];
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
	}, {
		key: 'getTotalTicks',
		value: function getTotalTicks() {
			this.tracks[0].forEach(function (track, index) {
				console.log(index);
			});
		}

		/**
   * Handles event within a given track starting at specified index
   * @param trackIndex
   */

	}, {
		key: 'handleEvent',
		value: function handleEvent(trackIndex) {
			// Parse delta value
			var track = this.tracks[trackIndex];
			var pointer = this.pointers[trackIndex];
			var deltaByteCount = this.getDeltaByteCount(trackIndex);
			var delta = Utils.readVarInt(track.slice(pointer, pointer + deltaByteCount));

			if (this.pointers[trackIndex] < track.length && this.tick - this.lastTicks[trackIndex] >= delta) {
				var event = this.parseEvent(trackIndex, deltaByteCount);

				if (this.tracksEnabled[trackIndex] == 1) this.emitEvent(event);

				// Recursively call this function for each event ahead that has 0 delta time?
			}
		}
	}, {
		key: 'play',
		value: function play() {
			if (this.setIntervalId) {
				console.log('Already playing...');
				return false;
			}

			// Initialize
			if (!this.startTime) {
				this.startTime = new Date().getTime();
			}

			// Start play loop
			var me = this;
			this.setIntervalId = setInterval(function () {
				me.tick = me.getCurrentTick();

				for (var i = 0; i <= me.tracks.length - 1; i++) {
					//console.log(me.tick)
					// Handle next event
					if (me.endOfFile()) {
						console.log('End of file');
						clearInterval(me.setIntervalId);
					} else {
						me.handleEvent(i);
					}
				}
			}, 10);

			return this;
		}
	}, {
		key: 'pause',
		value: function pause() {
			clearInterval(this.setIntervalId);
			this.setIntervalId = false;
			this.startTick = this.tick;
			this.startTime = 0;
			return this;
		}
	}, {
		key: 'stop',
		value: function stop() {
			clearInterval(this.setIntervalId);
			this.setIntervalId = false;
			this.startTick = 0;
			this.startTime = 0;
			return this.fileLoaded();
		}
	}, {
		key: 'isPlaying',
		value: function isPlaying() {
			return this.setIntervalId > 0;
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
			return Math.round((new Date().getTime() - this.startTime) / 1000 * (this.division * (this.tempo / 60))) + this.startTick;
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
			this.lastTicks[trackIndex] = this.lastTicks[trackIndex] + eventJson.delta;

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
					case 0x21:
						// MIDI Port
						eventJson.name = 'MIDI Port';
						eventJson.data = Utils.bytesToNumber([track[eventStartIndex + 3]]);
						break;
					case 0x2F:
						// End of Track
						eventJson.name = 'End of Track';
						break;
					case 0x51:
						// Set Tempo
						eventJson.name = 'Set Tempo';
						eventJson.data = Math.round(60000000 / Utils.bytesToNumber(track.slice(eventStartIndex + 3, eventStartIndex + 6)));
						this.tempo = eventJson.data;
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
					default:
						eventJson.name = 'Unknown: ' + track[eventStartIndex + 1].toString(16);
						break;
				}

				var length = track[this.pointers[trackIndex] + deltaByteCount + 2];
				// Some meta events will have vlv that needs to be handled

				this.pointers[trackIndex] += deltaByteCount + 3 + length;
			} else if (track[eventStartIndex] == 0xf0) {
				// Sysex
				eventJson.name = 'Sysex';
				var length = track[this.pointers[trackIndex] + deltaByteCount + 1];
				this.pointers[trackIndex] += deltaByteCount + 2 + length;
			} else {
				// Voice event
				if (track[eventStartIndex] < 0x80) {
					// Running status
					eventJson.running = true;
					eventJson.noteNumber = track[eventStartIndex];
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
						eventJson.velocity = Math.round(track[eventStartIndex + 2] / 127 * 100);
						this.pointers[trackIndex] += deltaByteCount + 3;
					} else if (track[eventStartIndex] <= 0x9f) {
						// Note on
						eventJson.name = 'Note on';
						eventJson.noteNumber = track[eventStartIndex + 1];
						eventJson.noteName = Constants.NOTES[track[eventStartIndex + 1]];
						eventJson.velocity = Math.round(track[eventStartIndex + 2] / 127 * 100);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiUGxheWVyIiwiZXZlbnRIYW5kbGVyIiwiYnVmZmVyIiwic3RhcnRUaW1lIiwiZGl2aXNpb24iLCJmb3JtYXQiLCJzZXRJbnRlcnZhbElkIiwidHJhY2tzIiwidHJhY2tzRW5hYmxlZCIsInRlbXBvIiwic3RhcnRUaWNrIiwidGljayIsImxhc3RTdGF0dXNlcyIsImxhc3RUaWNrIiwibGFzdFRpY2tzIiwicG9pbnRlcnMiLCJwYXRoIiwiZnMiLCJyZXF1aXJlIiwicmVhZEZpbGVTeW5jIiwiZmlsZUxvYWRlZCIsImFycmF5QnVmZmVyIiwiVWludDhBcnJheSIsImRhdGFVcmkiLCJieXRlU3RyaW5nIiwiVXRpbHMiLCJhdG9iIiwic3BsaXQiLCJpYSIsImxlbmd0aCIsImkiLCJjaGFyQ29kZUF0IiwidmFsaWRhdGUiLCJnZXREaXZpc2lvbiIsImdldEZvcm1hdCIsImdldFRyYWNrcyIsImJ5dGVzVG9MZXR0ZXJzIiwic2xpY2UiLCJieXRlc1RvTnVtYmVyIiwiZm9yRWFjaCIsImJ5dGUiLCJpbmRleCIsInRyYWNrTGVuZ3RoIiwicHVzaCIsInRyYWNrTnVtYmVyIiwidHJhY2siLCJjb25zb2xlIiwibG9nIiwidHJhY2tJbmRleCIsInBvaW50ZXIiLCJkZWx0YUJ5dGVDb3VudCIsImdldERlbHRhQnl0ZUNvdW50IiwiZGVsdGEiLCJyZWFkVmFySW50IiwiZXZlbnQiLCJwYXJzZUV2ZW50IiwiZW1pdEV2ZW50IiwiRGF0ZSIsImdldFRpbWUiLCJtZSIsInNldEludGVydmFsIiwiZ2V0Q3VycmVudFRpY2siLCJlbmRPZkZpbGUiLCJjbGVhckludGVydmFsIiwiaGFuZGxlRXZlbnQiLCJyZWR1Y2UiLCJhIiwiYiIsImN1cnJlbnRCeXRlIiwiYnl0ZUNvdW50IiwiTWF0aCIsInJvdW5kIiwiZXZlbnRTdGFydEluZGV4IiwiZXZlbnRKc29uIiwibmFtZSIsInZsdiIsInN0cmluZ0xlbmd0aCIsInN0cmluZyIsImRhdGEiLCJ0b1N0cmluZyIsInJ1bm5pbmciLCJub3RlTnVtYmVyIiwibm90ZU5hbWUiLCJDb25zdGFudHMiLCJOT1RFUyIsInZlbG9jaXR5Iiwibm90ZSIsInByZXNzdXJlIiwibnVtYmVyIiwidmFsdWUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsTTtBQUNMLGlCQUFZQyxZQUFaLEVBQTBCQyxNQUExQixFQUFrQztBQUFBOztBQUNqQyxPQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsT0FBS0QsTUFBTCxHQUFjQSxVQUFVLElBQXhCO0FBQ0EsT0FBS0UsUUFBTDtBQUNBLE9BQUtDLE1BQUw7QUFDQSxPQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxPQUFLQyxhQUFMLEdBQXFCLEVBQXJCLENBUGlDLENBT1I7QUFDekIsT0FBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsT0FBS0MsSUFBTCxHQUFZLENBQVo7QUFDQSxPQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCLEVBQWhCOztBQUVBLE9BQUtkLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0E7O0FBRUQ7Ozs7OzJCQUNTZSxJLEVBQU07QUFDZCxPQUFJQyxLQUFLQyxRQUFRLElBQVIsQ0FBVDtBQUNBLFFBQUtoQixNQUFMLEdBQWNlLEdBQUdFLFlBQUgsQ0FBZ0JILElBQWhCLENBQWQ7QUFDQSxVQUFPLEtBQUtJLFVBQUwsRUFBUDtBQUNBOzs7a0NBRWVDLFcsRUFBYTtBQUM1QixRQUFLbkIsTUFBTCxHQUFjLElBQUlvQixVQUFKLENBQWVELFdBQWYsQ0FBZDtBQUNBLFVBQU8sS0FBS0QsVUFBTCxFQUFQO0FBQ0E7Ozs4QkFFV0csTyxFQUFTO0FBQ3BCO0FBQ0E7QUFDQSxPQUFJQyxhQUFhQyxNQUFNQyxJQUFO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QyxVQUFkLEtBQTZCRSxpQkFBaUIsQ0FBOUM7QUFFQSxNQUxNLE1BS0EsSUFBSUwsTUFBTTJCLGVBQU4sS0FBMEIsSUFBOUIsRUFBb0M7QUFDMUM7QUFDQUMsZ0JBQVVDLElBQVYsR0FBaUIsWUFBakI7QUFDQSxXQUFLM0QsUUFBTCxDQUFjaUMsVUFBZCxLQUE2QkUsaUJBQWlCLENBQTlDO0FBQ0E7QUFDRDtBQUNEOztBQUVELFVBQU91QixTQUFQO0FBQ0E7Ozs7OztBQUlGaUIsUUFBUTFGLE1BQVIsR0FBaUJBLE1BQWpCIiwiZmlsZSI6InBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKGV2ZW50SGFuZGxlciwgYnVmZmVyKSB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHRoaXMuYnVmZmVyID0gYnVmZmVyIHx8IG51bGw7XG5cdFx0dGhpcy5kaXZpc2lvbjtcblx0XHR0aGlzLmZvcm1hdDtcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBudWxsO1xuXHRcdHRoaXMudHJhY2tzID0gW107XG5cdFx0dGhpcy50cmFja3NFbmFibGVkID0gW107IC8vIDAgZGlzYWJsZWQsIDEgZW5hYmxlZFxuXHRcdHRoaXMudGVtcG8gPSAxMjA7XG5cdFx0dGhpcy5zdGFydFRpY2sgPSAwO1xuXHRcdHRoaXMudGljayA9IDA7XG5cdFx0dGhpcy5sYXN0U3RhdHVzZXMgPSBbXTtcblx0XHR0aGlzLmxhc3RUaWNrID0gbnVsbDtcblx0XHR0aGlzLmxhc3RUaWNrcyA9IFtdO1xuXHRcdHRoaXMucG9pbnRlcnMgPSBbXTtcblxuXHRcdHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyO1xuXHR9XG5cblx0Ly8gT25seSBmb3IgTm9kZUpTXG5cdGxvYWRGaWxlKHBhdGgpIHtcblx0XHR2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXHRcdHRoaXMuYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKHBhdGgpO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGxvYWRBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuXHRcdHRoaXMuYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGxvYWREYXRhVXJpKGRhdGFVcmkpIHtcblx0XHQvLyBjb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZ1xuXHRcdC8vIGRvZXNuJ3QgaGFuZGxlIFVSTEVuY29kZWQgRGF0YVVSSXMgLSBzZWUgU08gYW5zd2VyICM2ODUwMjc2IGZvciBjb2RlIHRoYXQgZG9lcyB0aGlzXG5cdFx0dmFyIGJ5dGVTdHJpbmcgPSBVdGlscy5hdG9iKGRhdGFVcmkuc3BsaXQoJywnKVsxXSk7XG5cblx0XHQvLyB3cml0ZSB0aGUgYnl0ZXMgb2YgdGhlIHN0cmluZyB0byBhbiBBcnJheUJ1ZmZlclxuXHRcdHZhciBpYSA9IG5ldyBVaW50OEFycmF5KGJ5dGVTdHJpbmcubGVuZ3RoKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlhW2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdH1cblxuXHRcdHRoaXMuYnVmZmVyID0gaWE7XG5cdFx0cmV0dXJuIHRoaXMuZmlsZUxvYWRlZCgpO1xuXHR9XG5cblx0ZmlsZUxvYWRlZCgpIHtcblx0XHRpZiAoIXRoaXMudmFsaWRhdGUoKSkgdGhyb3cgJ0ludmFsaWQgTUlESSBmaWxlOyBzaG91bGQgc3RhcnQgd2l0aCBNVGhkJztcblx0XHRyZXR1cm4gdGhpcy5nZXREaXZpc2lvbigpLmdldEZvcm1hdCgpLmdldFRyYWNrcygpO1xuXHR9XG5cblx0Ly8gRmlyc3QgZm91ciBieXRlcyBzaG91bGQgYmUgTVRoZFxuXHR2YWxpZGF0ZSgpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoMCwgNCkpID09PSAnTVRoZCc7XG5cdH1cblxuXHRnZXRGb3JtYXQoKSB7XG5cdFx0Lypcblx0XHRNSURJIGZpbGVzIGNvbWUgaW4gMyB2YXJpYXRpb25zOlxuXHRcdEZvcm1hdCAwIHdoaWNoIGNvbnRhaW4gYSBzaW5nbGUgdHJhY2tcblx0XHRGb3JtYXQgMSB3aGljaCBjb250YWluIG9uZSBvciBtb3JlIHNpbXVsdGFuZW91cyB0cmFja3MgXG5cdFx0KGllIGFsbCB0cmFja3MgYXJlIHRvIGJlIHBsYXllZCBzaW11bHRhbmVvdXNseSkuXG5cdFx0Rm9ybWF0IDIgd2hpY2ggY29udGFpbiBvbmUgb3IgbW9yZSBpbmRlcGVuZGFudCB0cmFja3MgXG5cdFx0KGllIGVhY2ggdHJhY2sgaXMgdG8gYmUgcGxheWVkIGluZGVwZW5kYW50bHkgb2YgdGhlIG90aGVycykuXG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0XHQqL1xuXG5cdFx0dGhpcy5mb3JtYXQgPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDgsIDEwKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyBQYXJzZXMgb3V0IHRyYWNrcyBhbmQgcGxhY2VzIHRoZW0gaW4gdGhpcy50cmFja3MgYW5kIGluaXRpYWxpemVzIHRoaXMucG9pbnRlcnNcblx0Z2V0VHJhY2tzKCkge1xuXHRcdHRoaXMudHJhY2tzID0gW107XG5cdFx0dGhpcy5wb2ludGVycyA9IFtdO1xuXHRcdHRoaXMubGFzdFRpY2tzID0gW107XG5cdFx0dGhpcy50cmFja3NFbmFibGVkID0gW107XG5cdFx0dGhpcy5idWZmZXIuZm9yRWFjaChmdW5jdGlvbihieXRlLCBpbmRleCkge1xuXHRcdFx0aWYgKFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4LCBpbmRleCArIDQpKSA9PSAnTVRyaycpIHtcblx0XHRcdFx0dmFyIHRyYWNrTGVuZ3RoID0gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZShpbmRleCArIDQsIGluZGV4ICsgOCkpO1xuXHRcdFx0XHR0aGlzLnRyYWNrcy5wdXNoKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgOCwgaW5kZXggKyA4ICsgdHJhY2tMZW5ndGgpKTtcblx0XHRcdFx0dGhpcy5wb2ludGVycy5wdXNoKDApO1xuXHRcdFx0XHR0aGlzLmxhc3RUaWNrcy5wdXNoKDApO1xuXHRcdFx0XHR0aGlzLnRyYWNrc0VuYWJsZWQucHVzaCgxKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZW5hYmxlVHJhY2sodHJhY2tOdW1iZXIpIHtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWRbdHJhY2tOdW1iZXIgLSAxXSA9IDE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkaXNhYmxlVHJhY2sodHJhY2tOdW1iZXIpIHtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWRbdHJhY2tOdW1iZXIgLSAxXSA9IDA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXREaXZpc2lvbigpIHtcblx0XHR0aGlzLmRpdmlzaW9uID0gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMiwgMTQpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldFRvdGFsVGlja3MoKSB7XG5cdFx0dGhpcy50cmFja3NbMF0uZm9yRWFjaChmdW5jdGlvbih0cmFjaywgaW5kZXgpIHtcblx0XHRcdGNvbnNvbGUubG9nKGluZGV4KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGV2ZW50IHdpdGhpbiBhIGdpdmVuIHRyYWNrIHN0YXJ0aW5nIGF0IHNwZWNpZmllZCBpbmRleFxuXHQgKiBAcGFyYW0gdHJhY2tJbmRleFxuXHQgKi9cblx0aGFuZGxlRXZlbnQodHJhY2tJbmRleCkge1xuXHRcdC8vIFBhcnNlIGRlbHRhIHZhbHVlXG5cdFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBkZWx0YUJ5dGVDb3VudCA9IHRoaXMuZ2V0RGVsdGFCeXRlQ291bnQodHJhY2tJbmRleCk7XG5cdFx0dmFyIGRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZShwb2ludGVyLCBwb2ludGVyICsgZGVsdGFCeXRlQ291bnQpKTtcblxuXHRcdGlmICh0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdIDwgdHJhY2subGVuZ3RoICYmIHRoaXMudGljayAtIHRoaXMubGFzdFRpY2tzW3RyYWNrSW5kZXhdID49IGRlbHRhKSB7XG5cdFx0XHR2YXIgZXZlbnQgPSB0aGlzLnBhcnNlRXZlbnQodHJhY2tJbmRleCwgZGVsdGFCeXRlQ291bnQpO1xuXG5cdFx0XHRpZiAodGhpcy50cmFja3NFbmFibGVkW3RyYWNrSW5kZXhdID09IDEpIHRoaXMuZW1pdEV2ZW50KGV2ZW50KTtcblxuXHRcdFx0Ly8gUmVjdXJzaXZlbHkgY2FsbCB0aGlzIGZ1bmN0aW9uIGZvciBlYWNoIGV2ZW50IGFoZWFkIHRoYXQgaGFzIDAgZGVsdGEgdGltZT9cblx0XHR9XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdGlmICh0aGlzLnNldEludGVydmFsSWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdBbHJlYWR5IHBsYXlpbmcuLi4nKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplXG5cdFx0aWYgKCF0aGlzLnN0YXJ0VGltZSkge1xuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuXHRcdH1cblxuXHRcdC8vIFN0YXJ0IHBsYXkgbG9vcFxuXHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRtZS50aWNrID0gbWUuZ2V0Q3VycmVudFRpY2soKTtcblx0XHRcdFxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPD0gbWUudHJhY2tzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKG1lLnRpY2spXG5cdFx0XHRcdC8vIEhhbmRsZSBuZXh0IGV2ZW50XG5cdFx0XHRcdGlmIChtZS5lbmRPZkZpbGUoKSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFbmQgb2YgZmlsZScpO1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwobWUuc2V0SW50ZXJ2YWxJZCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZS5oYW5kbGVFdmVudChpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSwgMTApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpY2sgPSB0aGlzLnRpY2s7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3RvcCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpY2sgPSAwO1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRpc1BsYXlpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0SW50ZXJ2YWxJZCA+IDA7XG5cdH1cblxuXHRlbmRPZlRyYWNrKHRyYWNrSW5kZXgpIHtcblx0XHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0aWYgKHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAxXSA9PSAweGZmICYmIHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAyXSA9PSAweDJmICYmIHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAzXSA9PSAweDAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRlbmRPZkZpbGUoKSB7XG5cdFx0Ly8gQ3VycmVudGx5IGFzc3VtZSBoZWFkZXIgY2h1bmsgaXMgc3RyaWN0bHkgMTQgYnl0ZXNcblx0XHRyZXR1cm4gMTQgKyB0aGlzLnRyYWNrcy5sZW5ndGggKiA4ICsgdGhpcy5wb2ludGVycy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge3JldHVybiBhK2I7fSwgMCkgPT0gdGhpcy5idWZmZXIubGVuZ3RoO1xuXHR9XG5cblx0Z2V0RGVsdGFCeXRlQ291bnQodHJhY2tJbmRleCkge1xuXHRcdC8vIEdldCBieXRlIGNvdW50IG9mIGRlbHRhIFZMVlxuXHRcdC8vIGh0dHA6Ly93d3cuY2Nhcmgub3JnL2NvdXJzZXMvMjUzL2hhbmRvdXQvdmx2L1xuXHRcdC8vIElmIGJ5dGUgaXMgZ3JlYXRlciBvciBlcXVhbCB0byA4MGggKDEyOCBkZWNpbWFsKSB0aGVuIHRoZSBuZXh0IGJ5dGUgXG5cdCAgICAvLyBpcyBhbHNvIHBhcnQgb2YgdGhlIFZMVixcblx0ICAgXHQvLyBlbHNlIGJ5dGUgaXMgdGhlIGxhc3QgYnl0ZSBpbiBhIFZMVi5cblx0ICAgXHR2YXIgdHJhY2sgPSB0aGlzLnRyYWNrc1t0cmFja0luZGV4XTtcblx0ICAgXHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdCAgIFx0dmFyIGN1cnJlbnRCeXRlID0gdHJhY2tbcG9pbnRlcl07XG5cdCAgIFx0dmFyIGJ5dGVDb3VudCA9IDE7XG5cblx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRjdXJyZW50Qnl0ZSA9IHRyYWNrW3BvaW50ZXIgKyBieXRlQ291bnRdO1xuXHRcdFx0Ynl0ZUNvdW50Kys7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJ5dGVDb3VudDtcblx0fVxuXG5cdGdldEN1cnJlbnRUaWNrKCkge1xuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMCAqICh0aGlzLmRpdmlzaW9uICogKHRoaXMudGVtcG8gLyA2MCkpKSArIHRoaXMuc3RhcnRUaWNrO1xuXHR9XG5cblx0ZW1pdEV2ZW50KGV2ZW50KSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV2ZW50SGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5ldmVudEhhbmRsZXIoZXZlbnQpO1xuXHR9XG5cblx0Ly8gUGFyc2VzIGV2ZW50IGludG8gSlNPTiBhbmQgYWR2YW5jZXMgcG9pbnRlciBmb3IgdGhlIHRyYWNrXG5cdHBhcnNlRXZlbnQodHJhY2tJbmRleCwgZGVsdGFCeXRlQ291bnQpIHtcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMudGljayk7XG5cdFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdFx0dmFyIGV2ZW50U3RhcnRJbmRleCA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBkZWx0YUJ5dGVDb3VudDtcblx0XHR2YXIgZXZlbnRKc29uID0ge307XG5cdFx0ZXZlbnRKc29uLnRyYWNrID0gdHJhY2tJbmRleCArIDE7XG5cdFx0ZXZlbnRKc29uLmRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZSh0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdLCB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQpKTtcblx0XHR0aGlzLmxhc3RUaWNrc1t0cmFja0luZGV4XSA9IHRoaXMubGFzdFRpY2tzW3RyYWNrSW5kZXhdICsgZXZlbnRKc29uLmRlbHRhO1xuXG5cdFx0Ly9ldmVudEpzb24ucmF3ID0gZXZlbnQ7XG5cdFx0aWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPT0gMHhmZikge1xuXHRcdFx0Ly8gTWV0YSBFdmVudFxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgbWV0YSBldmVudCB3ZSBzaG91bGQgZW1pdCB0aGUgZGF0YSBhbmQgaW1tZWRpYXRlbHkgbW92ZSB0byB0aGUgbmV4dCBldmVudFxuXHRcdFx0Ly8gb3RoZXJ3aXNlIGlmIHdlIGxldCBpdCBydW4gdGhyb3VnaCB0aGUgbmV4dCBjeWNsZSBhIHNsaWdodCBkZWxheSB3aWxsIGFjY3VtdWxhdGUgaWYgbXVsdGlwbGUgdHJhY2tzXG5cdFx0XHQvLyBhcmUgYmVpbmcgcGxheWVkIHNpbXVsdGFuZW91c2x5XG5cblx0XHRcdHN3aXRjaCh0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXSkge1xuXHRcdFx0XHRjYXNlIDB4MDA6IC8vIFNlcXVlbmNlIE51bWJlclxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlIE51bWJlcic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMTogLy8gVGV4dCBFdmVudFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RleHQgRXZlbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDI6IC8vIENvcHlyaWdodCBOb3RpY2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDb3B5cmlnaHQgTm90aWNlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAzOiAvLyBTZXF1ZW5jZS9UcmFjayBOYW1lXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2UvVHJhY2sgTmFtZSc7XG5cdFx0XHRcdFx0Ly8gR2V0IHZsdiBsZW5ndGhcblx0XHRcdFx0XHR2YXIgY3VycmVudEJ5dGUgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdFx0XHRcdHZhciBieXRlQ291bnQgPSAxO1xuXHRcdFx0XHRcdHdoaWxlIChjdXJyZW50Qnl0ZSA+PSAxMjgpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRCeXRlID0gdHJhY2tbdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGJ5dGVDb3VudF07XG5cdFx0XHRcdFx0XHRieXRlQ291bnQrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZsdiA9IGJ5dGVDb3VudDtcblx0XHRcdFx0XHR2YXIgbGVuZ3RoID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZShldmVudFN0YXJ0SW5kZXggKyAyLCBldmVudFN0YXJ0SW5kZXggKyAyICsgYnl0ZUNvdW50KSk7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnN0cmluZ0xlbmd0aCA9IGxlbmd0aDtcblx0XHRcdFx0XHRldmVudEpzb24uc3RyaW5nID0gVXRpbHMuYnl0ZXNUb0xldHRlcnModHJhY2suc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgYnl0ZUNvdW50ICsgMiwgZXZlbnRTdGFydEluZGV4ICsgYnl0ZUNvdW50ICsgbGVuZ3RoICsgMikpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDQ6IC8vIEluc3RydW1lbnQgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0luc3RydW1lbnQgTmFtZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNTogLy8gTHlyaWNcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdMeXJpYyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNjogLy8gTWFya2VyXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTWFya2VyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA3OiAvLyBDdWUgUG9pbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDdWUgUG9pbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MjA6IC8vIE1JREkgQ2hhbm5lbCBQcmVmaXhcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNSURJIENoYW5uZWwgUHJlZml4Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDIxOiAvLyBNSURJIFBvcnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNSURJIFBvcnQnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5kYXRhID0gVXRpbHMuYnl0ZXNUb051bWJlcihbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgM11dKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDJGOiAvLyBFbmQgb2YgVHJhY2tcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdFbmQgb2YgVHJhY2snO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTE6IC8vIFNldCBUZW1wb1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NldCBUZW1wbyc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmRhdGEgPSBNYXRoLnJvdW5kKDYwMDAwMDAwIC8gVXRpbHMuYnl0ZXNUb051bWJlcih0cmFjay5zbGljZShldmVudFN0YXJ0SW5kZXggKyAzLCBldmVudFN0YXJ0SW5kZXggKyA2KSkpO1xuXHRcdFx0XHRcdHRoaXMudGVtcG8gPSBldmVudEpzb24uZGF0YTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU0OiAvLyBTTVRQRSBPZmZzZXRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTTVRQRSBPZmZzZXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTg6IC8vIFRpbWUgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVGltZSBTaWduYXR1cmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTk6IC8vIEtleSBTaWduYXR1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdLZXkgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDdGOiAvLyBTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlci1TcGVjaWZpYyBNZXRhLWV2ZW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdVbmtub3duOiAnICsgdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV0udG9TdHJpbmcoMTYpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGVuZ3RoID0gdHJhY2tbdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50ICsgMl07XG5cdFx0XHQvLyBTb21lIG1ldGEgZXZlbnRzIHdpbGwgaGF2ZSB2bHYgdGhhdCBuZWVkcyB0byBiZSBoYW5kbGVkXG5cblx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzICsgbGVuZ3RoO1xuXG5cdFx0fSBlbHNlIGlmKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPT0gMHhmMCkge1xuXHRcdFx0Ly8gU3lzZXhcblx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1N5c2V4Jztcblx0XHRcdHZhciBsZW5ndGggPSB0cmFja1t0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQgKyAxXTtcblx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyICsgbGVuZ3RoO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFZvaWNlIGV2ZW50XG5cdFx0XHRpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8IDB4ODApIHtcblx0XHRcdFx0Ly8gUnVubmluZyBzdGF0dXNcblx0XHRcdFx0ZXZlbnRKc29uLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleF07XG5cdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXhdXTtcblx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5sYXN0U3RhdHVzZXNbdHJhY2tJbmRleF0gPD0gMHg4Zikge1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb2ZmJztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMubGFzdFN0YXR1c2VzW3RyYWNrSW5kZXhdIDw9IDB4OWYpIHtcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9uJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxhc3RTdGF0dXNlc1t0cmFja0luZGV4XSA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleF07XG5cblx0XHRcdFx0aWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHg4Zikge1xuXHRcdFx0XHRcdC8vIE5vdGUgb2ZmXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvZmYnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTnVtYmVyID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOYW1lID0gQ29uc3RhbnRzLk5PVEVTW3RyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHRldmVudEpzb24udmVsb2NpdHkgPSBNYXRoLnJvdW5kKHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDJdIC8gMTI3ICogMTAwKTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHg5Zikge1xuXHRcdFx0XHRcdC8vIE5vdGUgb25cblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9uJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gTWF0aC5yb3VuZCh0cmFja1tldmVudFN0YXJ0SW5kZXggKyAyXSAvIDEyNyAqIDEwMCk7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4YWYpIHtcblx0XHRcdFx0XHQvLyBQb2x5cGhvbmljIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BvbHlwaG9uaWMgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnByZXNzdXJlID0gZXZlbnRbMl07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4YmYpIHtcblx0XHRcdFx0XHQvLyBDb250cm9sbGVyIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvbnRyb2xsZXIgQ2hhbmdlJztcblx0XHRcdFx0XHRldmVudEpzb24ubnVtYmVyID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZhbHVlID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMl07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4Y2YpIHtcblx0XHRcdFx0XHQvLyBQcm9ncmFtIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1Byb2dyYW0gQ2hhbmdlJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhkZikge1xuXHRcdFx0XHRcdC8vIENoYW5uZWwgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ2hhbm5lbCBLZXkgUHJlc3N1cmUnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGVmKSB7XG5cdFx0XHRcdFx0Ly8gUGl0Y2ggQmVuZFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BpdGNoIEJlbmQnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50SnNvbjtcblx0fVxuXG59XG5cbmV4cG9ydHMuUGxheWVyID0gUGxheWVyOyJdfQ==
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
			// Ensure hex string always has two chars
			return ('0' + byte.toString(16)).slice(-2);
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
	}, {
		key: 'atob',
		value: function (_atob) {
			function atob(_x) {
				return _atob.apply(this, arguments);
			}

			atob.toString = function () {
				return _atob.toString();
			};

			return atob;
		}(function (string) {
			if (typeof atob === 'function') return atob(string);
			return new Buffer(string, 'base64').toString('binary');
		})
	}]);

	return Utils;
}();

exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJVdGlscyIsImJ5dGUiLCJ0b1N0cmluZyIsInNsaWNlIiwiYnl0ZUFycmF5IiwiaGV4IiwiZm9yRWFjaCIsInB1c2giLCJieXRlVG9IZXgiLCJqb2luIiwiaGV4U3RyaW5nIiwicGFyc2VJbnQiLCJoZXhUb051bWJlciIsImJ5dGVzVG9IZXgiLCJsZXR0ZXJzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZGVjIiwicmVzdWx0IiwibnVtYmVyIiwiYiIsInN0cmluZyIsImF0b2IiLCJCdWZmZXIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsSzs7Ozs7Ozs0QkFDWUMsSSxFQUFNO0FBQ3RCO0FBQ0EsVUFBTyxDQUFDLE1BQU1BLEtBQUtDLFFBQUwsQ0FBYyxFQUFkLENBQVAsRUFBMEJDLEtBQTFCLENBQWdDLENBQUMsQ0FBakMsQ0FBUDtBQUNBOzs7NkJBRWlCQyxTLEVBQVc7QUFDNUIsT0FBSUMsTUFBTSxFQUFWOztBQUVBRCxhQUFVRSxPQUFWLENBQWtCLFVBQVNMLElBQVQsRUFBZTtBQUNoQ0ksUUFBSUUsSUFBSixDQUFTUCxNQUFNUSxTQUFOLENBQWdCUCxJQUFoQixDQUFUO0FBQ0EsSUFGRDs7QUFJQSxVQUFPSSxJQUFJSSxJQUFKLENBQVMsRUFBVCxDQUFQO0FBQ0E7Ozs4QkFFa0JDLFMsRUFBVztBQUM3QixVQUFPQyxTQUFTRCxTQUFULEVBQW9CLEVBQXBCLENBQVA7QUFDQTs7O2dDQUVvQk4sUyxFQUFXO0FBQy9CLFVBQU9KLE1BQU1ZLFdBQU4sQ0FBa0JaLE1BQU1hLFVBQU4sQ0FBaUJULFNBQWpCLENBQWxCLENBQVA7QUFDQTs7O2lDQUVxQkEsUyxFQUFXO0FBQ2hDLE9BQUlVLFVBQVUsRUFBZDtBQUNBVixhQUFVRSxPQUFWLENBQWtCLFVBQVNMLElBQVQsRUFBZTtBQUNoQ2EsWUFBUVAsSUFBUixDQUFhUSxPQUFPQyxZQUFQLENBQW9CZixJQUFwQixDQUFiO0FBQ0EsSUFGRDs7QUFJQSxVQUFPYSxRQUFRTCxJQUFSLENBQWEsRUFBYixDQUFQO0FBQ0E7Ozs4QkFFa0JRLEcsRUFBSztBQUNwQixVQUFPLENBQUNBLFFBQVEsQ0FBVCxFQUFZZixRQUFaLENBQXFCLENBQXJCLENBQVA7QUFDSDs7OzZCQUVpQkUsUyxFQUFXO0FBQzVCLE9BQUljLFNBQVMsQ0FBYjtBQUNBZCxhQUFVRSxPQUFWLENBQWtCLFVBQVNhLE1BQVQsRUFBaUI7QUFDbEMsUUFBSUMsSUFBSUQsTUFBUjtBQUNBLFFBQUlDLElBQUksSUFBUixFQUFjO0FBQ2JGLGVBQVdFLElBQUksSUFBZjtBQUNBRixnQkFBVyxDQUFYO0FBQ0EsS0FIRCxNQUdPO0FBQ047QUFDQUEsZUFBVUUsQ0FBVjtBQUNBO0FBQ0QsSUFURDs7QUFXQSxVQUFPRixNQUFQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Y0FFV0csTSxFQUFRO0FBQ25CLE9BQUksT0FBT0MsSUFBUCxLQUFnQixVQUFwQixFQUFnQyxPQUFPQSxLQUFLRCxNQUFMLENBQVA7QUFDaEMsVUFBTyxJQUFJRSxNQUFKLENBQVdGLE1BQVgsRUFBbUIsUUFBbkIsRUFBNkJuQixRQUE3QixDQUFzQyxRQUF0QyxDQUFQO0FBQ0EsRzs7Ozs7O0FBR0ZzQixRQUFReEIsS0FBUixHQUFnQkEsS0FBaEIiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBVdGlscyB7XG5cdHN0YXRpYyBieXRlVG9IZXgoYnl0ZSkge1xuXHRcdC8vIEVuc3VyZSBoZXggc3RyaW5nIGFsd2F5cyBoYXMgdHdvIGNoYXJzXG5cdFx0cmV0dXJuICgnMCcgKyBieXRlLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuXHR9XG5cblx0c3RhdGljIGJ5dGVzVG9IZXgoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIGhleCA9IFtdO1xuXG5cdFx0Ynl0ZUFycmF5LmZvckVhY2goZnVuY3Rpb24oYnl0ZSkge1xuXHRcdFx0aGV4LnB1c2goVXRpbHMuYnl0ZVRvSGV4KGJ5dGUpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBoZXguam9pbignJyk7XG5cdH1cblxuXHRzdGF0aWMgaGV4VG9OdW1iZXIoaGV4U3RyaW5nKSB7XG5cdFx0cmV0dXJuIHBhcnNlSW50KGhleFN0cmluZywgMTYpO1xuXHR9XG5cblx0c3RhdGljIGJ5dGVzVG9OdW1iZXIoYnl0ZUFycmF5KSB7XG5cdFx0cmV0dXJuIFV0aWxzLmhleFRvTnVtYmVyKFV0aWxzLmJ5dGVzVG9IZXgoYnl0ZUFycmF5KSk7XG5cdH1cblxuXHRzdGF0aWMgYnl0ZXNUb0xldHRlcnMoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIGxldHRlcnMgPSBbXTtcblx0XHRieXRlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihieXRlKSB7XG5cdFx0XHRsZXR0ZXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbGV0dGVycy5qb2luKCcnKTtcblx0fVxuXG5cdHN0YXRpYyBkZWNUb0JpbmFyeShkZWMpIHtcbiAgICBcdHJldHVybiAoZGVjID4+PiAwKS50b1N0cmluZygyKTtcblx0fVxuXG5cdHN0YXRpYyByZWFkVmFySW50KGJ5dGVBcnJheSkge1xuXHRcdHZhciByZXN1bHQgPSAwO1xuXHRcdGJ5dGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdFx0dmFyIGIgPSBudW1iZXI7XG5cdFx0XHRpZiAoYiAmIDB4ODApIHtcblx0XHRcdFx0cmVzdWx0ICs9IChiICYgMHg3Zik7XG5cdFx0XHRcdHJlc3VsdCA8PD0gNztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8qIGIgaXMgdGhlIGxhc3QgYnl0ZSAqL1xuXHRcdFx0XHRyZXN1bHQgKz0gYjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRzdGF0aWMgYXRvYihzdHJpbmcpIHtcblx0XHRpZiAodHlwZW9mIGF0b2IgPT09ICdmdW5jdGlvbicpIHJldHVybiBhdG9iKHN0cmluZyk7XG5cdFx0cmV0dXJuIG5ldyBCdWZmZXIoc3RyaW5nLCAnYmFzZTY0JykudG9TdHJpbmcoJ2JpbmFyeScpO1xuXHR9XG59XG5cbmV4cG9ydHMuVXRpbHMgPSBVdGlsczsiXX0=
