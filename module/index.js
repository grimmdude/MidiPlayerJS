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
		this.pauseTime = 0;
		this.buffer = buffer || null;
		this.division;
		this.format;
		this.setIntervalId = null;
		this.tracks = [];
		this.tracksEnabled = []; // 0 disabled, 1 enabled
		this.tempo = 100;
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

			// separate out the mime component
			var mimeString = dataUri.split(',')[0].split(':')[1].split(';')[0];

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
			this.getDivision().getFormat().getTracks();
			return this;
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
			} else if (this.pauseTime) {
				this.startTime = this.pauseTime;
			}

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
			}, 10);

			return this;
		}
	}, {
		key: 'pause',
		value: function pause() {
			clearInterval(this.setIntervalId);
			this.setIntervalId = false;
			this.pauseTime = new Date().getTime();
			return this;
		}
	}, {
		key: 'stop',
		value: function stop() {
			clearInterval(this.setIntervalId);
			this.setIntervalId = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiUGxheWVyIiwiZXZlbnRIYW5kbGVyIiwiYnVmZmVyIiwic3RhcnRUaW1lIiwicGF1c2VUaW1lIiwiZGl2aXNpb24iLCJmb3JtYXQiLCJzZXRJbnRlcnZhbElkIiwidHJhY2tzIiwidHJhY2tzRW5hYmxlZCIsInRlbXBvIiwidGljayIsImxhc3RTdGF0dXNlcyIsImxhc3RUaWNrIiwibGFzdFRpY2tzIiwicG9pbnRlcnMiLCJwYXRoIiwiZnMiLCJyZXF1aXJlIiwicmVhZEZpbGVTeW5jIiwiZmlsZUxvYWRlZCIsImFycmF5QnVmZmVyIiwiVWludDhBcnJheSIsImRhdGFVcmkiLCJieXRlU3RyaW5nIiwiVXRpbHMiLCJhdG9iIiwic3BsaXQiLCJtaW1lU3RyaW5nIiwiaWEiLCJsZW5ndGgiLCJpIiwiY2hhckNvZGVBdCIsInZhbGlkYXRlIiwiZ2V0RGl2aXNpb24iLCJnZXRGb3JtYXQiLCJnZXRUcmFja3MiLCJieXRlc1RvTGV0dGVycyIsInNsaWNlIiwiYnl0ZXNUb051bWJlciIsImZvckVhY2giLCJieXRlIiwiaW5kZXgiLCJ0cmFja0xlbmd0aCIsInB1c2giLCJ0cmFja051bWJlciIsInRyYWNrIiwiY29uc29sZSIsImxvZyIsInRyYWNrSW5kZXgiLCJwb2ludGVyIiwiZGVsdGFCeXRlQ291bnQiLCJnZXREZWx0YUJ5dGVDb3VudCIsImRlbHRhIiwicmVhZFZhckludCIsImV2ZW50U2lnIiwiZXZlbnQiLCJwYXJzZUV2ZW50IiwiZW1pdEV2ZW50IiwiRGF0ZSIsImdldFRpbWUiLCJtZSIsInNldEludGVydmFsIiwiZ2V0Q3VycmVudFRpY2siLCJlbmRPZkZpbGUiLCJjbGVhckludGVydmFsIiwiaGFuZGxlRXZlbnQiLCJyZWR1Y2UiLCJhIiwiYiIsImN1cnJlbnRCeXRlIiwiYnl0ZUNvdW50IiwiTWF0aCIsInJvdW5kIiwiZXZlbnRTdGFydEluZGV4IiwiZXZlbnRKc29uIiwibmFtZSIsInZsdiIsInN0cmluZ0xlbmd0aCIsInN0cmluZyIsImRhdGEiLCJ0b1N0cmluZyIsInJ1bm5pbmciLCJub3RlTnVtYmVyIiwibm90ZU5hbWUiLCJDb25zdGFudHMiLCJOT1RFUyIsInZlbG9jaXR5Iiwibm90ZSIsInByZXNzdXJlIiwibnVtYmVyIiwidmFsdWUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsTTtBQUNMLGlCQUFZQyxZQUFaLEVBQTBCQyxNQUExQixFQUFrQztBQUFBOztBQUNqQyxPQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLE9BQUtGLE1BQUwsR0FBY0EsVUFBVSxJQUF4QjtBQUNBLE9BQUtHLFFBQUw7QUFDQSxPQUFLQyxNQUFMO0FBQ0EsT0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsT0FBS0MsYUFBTCxHQUFxQixFQUFyQixDQVJpQyxDQVFSO0FBQ3pCLE9BQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZLENBQVo7QUFDQSxPQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCLEVBQWhCOztBQUVBLE9BQUtkLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0E7O0FBRUQ7Ozs7OzJCQUNTZSxJLEVBQU07QUFDZCxPQUFJQyxLQUFLQyxRQUFRLElBQVIsQ0FBVDtBQUNBLFFBQUtoQixNQUFMLEdBQWNlLEdBQUdFLFlBQUgsQ0FBZ0JILElBQWhCLENBQWQ7QUFDQSxVQUFPLEtBQUtJLFVBQUwsRUFBUDtBQUNBOzs7a0NBRWVDLFcsRUFBYTtBQUM1QixRQUFLbkIsTUFBTCxHQUFjLElBQUlvQixVQUFKLENBQWVELFdBQWYsQ0FBZDtBQUNBLFVBQU8sS0FBS0QsVUFBTCxFQUFQO0FBQ0E7Ozs4QkFFV0csTyxFQUFTO0FBQ3BCO0FBQ0E7QUFD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TUFBTTRCLGVBQU4sS0FBMEIsSUFBOUIsRUFBb0M7QUFDMUM7QUFDQUMsZ0JBQVVDLElBQVYsR0FBaUIsZ0JBQWpCO0FBQ0EsV0FBSzdELFFBQUwsQ0FBY2tDLFVBQWQsS0FBNkJFLGlCQUFpQixDQUE5QztBQUVBLE1BTE0sTUFLQSxJQUFJTCxNQUFNNEIsZUFBTixLQUEwQixJQUE5QixFQUFvQztBQUMxQztBQUNBQyxnQkFBVUMsSUFBVixHQUFpQixzQkFBakI7QUFDQSxXQUFLN0QsUUFBTCxDQUFja0MsVUFBZCxLQUE2QkUsaUJBQWlCLENBQTlDO0FBRUEsTUFMTSxNQUtBLElBQUlMLE1BQU00QixlQUFOLEtBQTBCLElBQTlCLEVBQW9DO0FBQzFDO0FBQ0FDLGdCQUFVQyxJQUFWLEdBQWlCLFlBQWpCO0FBQ0EsV0FBSzdELFFBQUwsQ0FBY2tDLFVBQWQsS0FBNkJFLGlCQUFpQixDQUE5QztBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxVQUFPd0IsU0FBUDtBQUNBOzs7Ozs7QUFJRmlCLFFBQVE1RixNQUFSLEdBQWlCQSxNQUFqQiIsImZpbGUiOiJwbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF5ZXIge1xuXHRjb25zdHJ1Y3RvcihldmVudEhhbmRsZXIsIGJ1ZmZlcikge1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblx0XHR0aGlzLnBhdXNlVGltZSA9IDA7XG5cdFx0dGhpcy5idWZmZXIgPSBidWZmZXIgfHwgbnVsbDtcblx0XHR0aGlzLmRpdmlzaW9uO1xuXHRcdHRoaXMuZm9ybWF0O1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IG51bGw7XG5cdFx0dGhpcy50cmFja3MgPSBbXTtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWQgPSBbXTsgLy8gMCBkaXNhYmxlZCwgMSBlbmFibGVkXG5cdFx0dGhpcy50ZW1wbyA9IDEwMDtcblx0XHR0aGlzLnRpY2sgPSAwO1xuXHRcdHRoaXMubGFzdFN0YXR1c2VzID0gW107XG5cdFx0dGhpcy5sYXN0VGljayA9IG51bGw7XG5cdFx0dGhpcy5sYXN0VGlja3MgPSBbXTtcblx0XHR0aGlzLnBvaW50ZXJzID0gW107XG5cblx0XHR0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcjtcblx0fVxuXG5cdC8vIE9ubHkgZm9yIE5vZGVKU1xuXHRsb2FkRmlsZShwYXRoKSB7XG5cdFx0dmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblx0XHR0aGlzLmJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhwYXRoKTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRsb2FkQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRsb2FkRGF0YVVyaShkYXRhVXJpKSB7XG5cdFx0Ly8gY29udmVydCBiYXNlNjQgdG8gcmF3IGJpbmFyeSBkYXRhIGhlbGQgaW4gYSBzdHJpbmdcblx0XHQvLyBkb2Vzbid0IGhhbmRsZSBVUkxFbmNvZGVkIERhdGFVUklzIC0gc2VlIFNPIGFuc3dlciAjNjg1MDI3NiBmb3IgY29kZSB0aGF0IGRvZXMgdGhpc1xuXHRcdHZhciBieXRlU3RyaW5nID0gVXRpbHMuYXRvYihkYXRhVXJpLnNwbGl0KCcsJylbMV0pO1xuXG5cdFx0Ly8gc2VwYXJhdGUgb3V0IHRoZSBtaW1lIGNvbXBvbmVudFxuXHRcdHZhciBtaW1lU3RyaW5nID0gZGF0YVVyaS5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXTtcblxuXHRcdC8vIHdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyXG5cdFx0dmFyIGlhID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZVN0cmluZy5sZW5ndGgpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWFbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5idWZmZXIgPSBpYTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRmaWxlTG9hZGVkKCkge1xuXHRcdGlmICghdGhpcy52YWxpZGF0ZSgpKSB0aHJvdyAnSW52YWxpZCBNSURJIGZpbGU7IHNob3VsZCBzdGFydCB3aXRoIE1UaGQnO1xuXHRcdHRoaXMuZ2V0RGl2aXNpb24oKS5nZXRGb3JtYXQoKS5nZXRUcmFja3MoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIEZpcnN0IGZvdXIgYnl0ZXMgc2hvdWxkIGJlIE1UaGRcblx0dmFsaWRhdGUoKSB7XG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRoaXMuYnVmZmVyLnNsaWNlKDAsIDQpKSA9PT0gJ01UaGQnO1xuXHR9XG5cblx0Z2V0Rm9ybWF0KCkge1xuXHRcdC8qXG5cdFx0TUlESSBmaWxlcyBjb21lIGluIDMgdmFyaWF0aW9uczpcblx0XHRGb3JtYXQgMCB3aGljaCBjb250YWluIGEgc2luZ2xlIHRyYWNrXG5cdFx0Rm9ybWF0IDEgd2hpY2ggY29udGFpbiBvbmUgb3IgbW9yZSBzaW11bHRhbmVvdXMgdHJhY2tzIFxuXHRcdChpZSBhbGwgdHJhY2tzIGFyZSB0byBiZSBwbGF5ZWQgc2ltdWx0YW5lb3VzbHkpLlxuXHRcdEZvcm1hdCAyIHdoaWNoIGNvbnRhaW4gb25lIG9yIG1vcmUgaW5kZXBlbmRhbnQgdHJhY2tzIFxuXHRcdChpZSBlYWNoIHRyYWNrIGlzIHRvIGJlIHBsYXllZCBpbmRlcGVuZGFudGx5IG9mIHRoZSBvdGhlcnMpLlxuXHRcdHJldHVybiBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDgsIDEwKSk7XG5cdFx0Ki9cblxuXHRcdHRoaXMuZm9ybWF0ID0gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSg4LCAxMCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Ly8gUGFyc2VzIG91dCB0cmFja3MgYW5kIHBsYWNlcyB0aGVtIGluIHRoaXMudHJhY2tzIGFuZCBpbml0aWFsaXplcyB0aGlzLnBvaW50ZXJzXG5cdGdldFRyYWNrcygpIHtcblx0XHR0aGlzLnRyYWNrcyA9IFtdO1xuXHRcdHRoaXMucG9pbnRlcnMgPSBbXTtcblx0XHR0aGlzLmxhc3RUaWNrcyA9IFtdO1xuXHRcdHRoaXMudHJhY2tzRW5hYmxlZCA9IFtdO1xuXHRcdHRoaXMuYnVmZmVyLmZvckVhY2goZnVuY3Rpb24oYnl0ZSwgaW5kZXgpIHtcblx0XHRcdGlmIChVdGlscy5ieXRlc1RvTGV0dGVycyh0aGlzLmJ1ZmZlci5zbGljZShpbmRleCwgaW5kZXggKyA0KSkgPT0gJ01UcmsnKSB7XG5cdFx0XHRcdHZhciB0cmFja0xlbmd0aCA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoaW5kZXggKyA0LCBpbmRleCArIDgpKTtcblx0XHRcdFx0dGhpcy50cmFja3MucHVzaCh0aGlzLmJ1ZmZlci5zbGljZShpbmRleCArIDgsIGluZGV4ICsgOCArIHRyYWNrTGVuZ3RoKSk7XG5cdFx0XHRcdHRoaXMucG9pbnRlcnMucHVzaCgwKTtcblx0XHRcdFx0dGhpcy5sYXN0VGlja3MucHVzaCgwKTtcblx0XHRcdFx0dGhpcy50cmFja3NFbmFibGVkLnB1c2goMSk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVuYWJsZVRyYWNrKHRyYWNrTnVtYmVyKSB7XG5cdFx0dGhpcy50cmFja3NFbmFibGVkW3RyYWNrTnVtYmVyIC0gMV0gPSAxO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGlzYWJsZVRyYWNrKHRyYWNrTnVtYmVyKSB7XG5cdFx0dGhpcy50cmFja3NFbmFibGVkW3RyYWNrTnVtYmVyIC0gMV0gPSAwO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0RGl2aXNpb24oKSB7XG5cdFx0dGhpcy5kaXZpc2lvbiA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoMTIsIDE0KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRUb3RhbFRpY2tzKCkge1xuXHRcdHRoaXMudHJhY2tzWzBdLmZvckVhY2goZnVuY3Rpb24odHJhY2ssIGluZGV4KSB7XG5cdFx0XHRjb25zb2xlLmxvZyhpbmRleCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBldmVudCB3aXRoaW4gYSBnaXZlbiB0cmFjayBzdGFydGluZyBhdCBzcGVjaWZpZWQgaW5kZXhcblx0ICogQHBhcmFtIHRyYWNrXG5cdCAqL1xuXHRoYW5kbGVFdmVudCh0cmFja0luZGV4KSB7XG5cdFx0Ly8gUGFyc2UgZGVsdGEgdmFsdWVcblx0XHR2YXIgdHJhY2sgPSB0aGlzLnRyYWNrc1t0cmFja0luZGV4XTtcblx0XHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0dmFyIGRlbHRhQnl0ZUNvdW50ID0gdGhpcy5nZXREZWx0YUJ5dGVDb3VudCh0cmFja0luZGV4KTtcblx0XHR2YXIgZGVsdGEgPSBVdGlscy5yZWFkVmFySW50KHRyYWNrLnNsaWNlKHBvaW50ZXIsIHBvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudCkpO1xuXHRcdHZhciBldmVudFNpZyA9IHRyYWNrW3BvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudF07XG5cblx0XHRpZiAodGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSA8IHRyYWNrLmxlbmd0aCAmJiB0aGlzLnRpY2sgLSB0aGlzLmxhc3RUaWNrc1t0cmFja0luZGV4XSA+PSBkZWx0YSkge1xuXHRcdFx0dmFyIGV2ZW50ID0gdGhpcy5wYXJzZUV2ZW50KHRyYWNrSW5kZXgsIGRlbHRhQnl0ZUNvdW50KTtcblxuXHRcdFx0aWYgKHRoaXMudHJhY2tzRW5hYmxlZFt0cmFja0luZGV4XSA9PSAxKSB0aGlzLmVtaXRFdmVudChldmVudCk7XG5cdFx0XHRcblx0XHRcdC8vIFJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBmdW5jdGlvbiBmb3IgZWFjaCBldmVudCBhaGVhZCB0aGF0IGhhcyAwIGRlbHRhIHRpbWU/XG5cdFx0fVxuXHR9XG5cblx0cGxheSgpIHtcblx0XHRpZiAodGhpcy5zZXRJbnRlcnZhbElkKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnQWxyZWFkeSBwbGF5aW5nLi4uJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZVxuXHRcdGlmICghdGhpcy5zdGFydFRpbWUpIHtcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0XHR9IGVsc2UgaWYgKHRoaXMucGF1c2VUaW1lKSB7XG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IHRoaXMucGF1c2VUaW1lO1xuXHRcdH1cblxuXHRcdC8vIFN0YXJ0IHBsYXkgbG9vcFxuXHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRtZS50aWNrID0gbWUuZ2V0Q3VycmVudFRpY2soKTtcblx0XHRcdFxuXHRcdFx0Ly8gV2hpY2ggb25lJ3MgZmFzdGVyP1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8PSBtZS50cmFja3MubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRcdC8vY29uc29sZS5sb2cobWUudGljaylcblx0XHRcdFx0Ly8gSGFuZGxlIG5leHQgZXZlbnRcblx0XHRcdFx0aWYgKG1lLmVuZE9mRmlsZSgpKSB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChtZS5zZXRJbnRlcnZhbElkKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lLmhhbmRsZUV2ZW50KGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvKlxuXHRcdFx0bWUudHJhY2tzLmZvckVhY2goZnVuY3Rpb24odHJhY2ssIGluZGV4KSB7XG5cdFx0XHRcdC8vY29uc29sZS5sb2cobWUudGljaylcblx0XHRcdFx0Ly8gSGFuZGxlIG5leHQgZXZlbnRcblx0XHRcdFx0aWYgKG1lLmVuZE9mVHJhY2soaW5kZXgpKSB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChtZS5zZXRJbnRlcnZhbElkKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lLmhhbmRsZUV2ZW50KGluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XHRcblx0XHRcdCovXG5cdFx0XHRcblx0XHR9LCAxMCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZXRJbnRlcnZhbElkKTtcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBmYWxzZTtcblx0XHR0aGlzLnBhdXNlVGltZSA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3RvcCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGlzUGxheWluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRJbnRlcnZhbElkID4gMDtcblx0fVxuXG5cdGVuZE9mVHJhY2sodHJhY2tJbmRleCkge1xuXHRcdHZhciBwb2ludGVyID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0XHRpZiAodGhpcy50cmFja3NbdHJhY2tJbmRleF1bcG9pbnRlciArIDFdID09IDB4ZmYgJiYgdGhpcy50cmFja3NbdHJhY2tJbmRleF1bcG9pbnRlciArIDJdID09IDB4MmYgJiYgdGhpcy50cmFja3NbdHJhY2tJbmRleF1bcG9pbnRlciArIDNdID09IDB4MDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGVuZE9mRmlsZSgpIHtcblx0XHQvLyBDdXJyZW50bHkgYXNzdW1lIGhlYWRlciBjaHVuayBpcyBzdHJpY3RseSAxNCBieXRlc1xuXHRcdHJldHVybiAxNCArIHRoaXMudHJhY2tzLmxlbmd0aCAqIDggKyB0aGlzLnBvaW50ZXJzLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7cmV0dXJuIGErYn0sIDApID09IHRoaXMuYnVmZmVyLmxlbmd0aDtcblx0fVxuXG5cdGdldERlbHRhQnl0ZUNvdW50KHRyYWNrSW5kZXgpIHtcblx0XHQvLyBHZXQgYnl0ZSBjb3VudCBvZiBkZWx0YSBWTFZcblx0XHQvLyBodHRwOi8vd3d3LmNjYXJoLm9yZy9jb3Vyc2VzLzI1My9oYW5kb3V0L3Zsdi9cblx0XHQvLyBJZiBieXRlIGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gODBoICgxMjggZGVjaW1hbCkgdGhlbiB0aGUgbmV4dCBieXRlIFxuXHQgICAgLy8gaXMgYWxzbyBwYXJ0IG9mIHRoZSBWTFYsXG5cdCAgIFx0Ly8gZWxzZSBieXRlIGlzIHRoZSBsYXN0IGJ5dGUgaW4gYSBWTFYuXG5cdCAgIFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdCAgIFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHQgICBcdHZhciBjdXJyZW50Qnl0ZSA9IHRyYWNrW3BvaW50ZXJdO1xuXHQgICBcdHZhciBieXRlQ291bnQgPSAxO1xuXG5cdFx0d2hpbGUgKGN1cnJlbnRCeXRlID49IDEyOCkge1xuXHRcdFx0Y3VycmVudEJ5dGUgPSB0cmFja1twb2ludGVyICsgYnl0ZUNvdW50XTtcblx0XHRcdGJ5dGVDb3VudCsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBieXRlQ291bnQ7XG5cdH1cblxuXHRnZXRDdXJyZW50VGljaygpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKG5ldyBEYXRlKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwICogKHRoaXMuZGl2aXNpb24gKiAodGhpcy50ZW1wbyAvIDYwKSkpO1xuXHR9XG5cblx0ZW1pdEV2ZW50KGV2ZW50KSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV2ZW50SGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5ldmVudEhhbmRsZXIoZXZlbnQpO1xuXHR9XG5cblx0Ly8gUGFyc2VzIGV2ZW50IGludG8gSlNPTiBhbmQgYWR2YW5jZXMgcG9pbnRlciBmb3IgdGhlIHRyYWNrXG5cdHBhcnNlRXZlbnQodHJhY2tJbmRleCwgZGVsdGFCeXRlQ291bnQpIHtcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMudGljayk7XG5cdFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdFx0dmFyIGV2ZW50U3RhcnRJbmRleCA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBkZWx0YUJ5dGVDb3VudDtcblx0XHR2YXIgZXZlbnRKc29uID0ge307XG5cdFx0ZXZlbnRKc29uLnRyYWNrID0gdHJhY2tJbmRleCArIDE7XG5cdFx0ZXZlbnRKc29uLmRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZSh0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdLCB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQpKTtcblx0XHR0aGlzLmxhc3RUaWNrc1t0cmFja0luZGV4XSA9IHRoaXMubGFzdFRpY2tzW3RyYWNrSW5kZXhdICsgZXZlbnRKc29uLmRlbHRhO1xuXG5cdFx0Ly9ldmVudEpzb24ucmF3ID0gZXZlbnQ7XG5cdFx0aWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPT0gMHhmZikge1xuXHRcdFx0Ly8gTWV0YSBFdmVudFxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgbWV0YSBldmVudCB3ZSBzaG91bGQgZW1pdCB0aGUgZGF0YSBhbmQgaW1tZWRpYXRlbHkgbW92ZSB0byB0aGUgbmV4dCBldmVudFxuXHRcdFx0Ly8gb3RoZXJ3aXNlIGlmIHdlIGxldCBpdCBydW4gdGhyb3VnaCB0aGUgbmV4dCBjeWNsZSBhIHNsaWdodCBkZWxheSB3aWxsIGFjY3VtdWxhdGUgaWYgbXVsdGlwbGUgdHJhY2tzXG5cdFx0XHQvLyBhcmUgYmVpbmcgcGxheWVkIHNpbXVsdGFuZW91c2x5XG5cblx0XHRcdHN3aXRjaCh0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXSkge1xuXHRcdFx0XHRjYXNlIDB4MDA6IC8vIFNlcXVlbmNlIE51bWJlclxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlIE51bWJlcic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMTogLy8gVGV4dCBFdmVudFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RleHQgRXZlbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDI6IC8vIENvcHlyaWdodCBOb3RpY2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDb3B5cmlnaHQgTm90aWNlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAzOiAvLyBTZXF1ZW5jZS9UcmFjayBOYW1lXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2UvVHJhY2sgTmFtZSc7XG5cdFx0XHRcdFx0Ly8gR2V0IHZsdiBsZW5ndGhcblx0XHRcdFx0XHR2YXIgY3VycmVudEJ5dGUgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdFx0XHRcdHZhciBieXRlQ291bnQgPSAxO1xuXHRcdFx0XHRcdHdoaWxlIChjdXJyZW50Qnl0ZSA+PSAxMjgpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRCeXRlID0gdHJhY2tbdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGJ5dGVDb3VudF07XG5cdFx0XHRcdFx0XHRieXRlQ291bnQrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZsdiA9IGJ5dGVDb3VudDtcblx0XHRcdFx0XHR2YXIgbGVuZ3RoID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZShldmVudFN0YXJ0SW5kZXggKyAyLCBldmVudFN0YXJ0SW5kZXggKyAyICsgYnl0ZUNvdW50KSk7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnN0cmluZ0xlbmd0aCA9IGxlbmd0aDtcblx0XHRcdFx0XHRldmVudEpzb24uc3RyaW5nID0gVXRpbHMuYnl0ZXNUb0xldHRlcnModHJhY2suc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgYnl0ZUNvdW50ICsgMiwgZXZlbnRTdGFydEluZGV4ICsgYnl0ZUNvdW50ICsgbGVuZ3RoICsgMikpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDQ6IC8vIEluc3RydW1lbnQgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0luc3RydW1lbnQgTmFtZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNTogLy8gTHlyaWNcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdMeXJpYyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNjogLy8gTWFya2VyXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTWFya2VyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA3OiAvLyBDdWUgUG9pbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDdWUgUG9pbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MjA6IC8vIE1JREkgQ2hhbm5lbCBQcmVmaXhcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNSURJIENoYW5uZWwgUHJlZml4Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDIxOiAvLyBNSURJIFBvcnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNSURJIFBvcnQnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5kYXRhID0gVXRpbHMuYnl0ZXNUb051bWJlcihbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgM11dKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDJGOiAvLyBFbmQgb2YgVHJhY2tcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdFbmQgb2YgVHJhY2snO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTE6IC8vIFNldCBUZW1wb1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NldCBUZW1wbyc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmRhdGEgPSBNYXRoLnJvdW5kKDYwMDAwMDAwIC8gVXRpbHMuYnl0ZXNUb051bWJlcih0cmFjay5zbGljZShldmVudFN0YXJ0SW5kZXggKyAzLCBldmVudFN0YXJ0SW5kZXggKyA2KSkpO1xuXHRcdFx0XHRcdHRoaXMudGVtcG8gPSBldmVudEpzb24uZGF0YTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU0OiAvLyBTTVRQRSBPZmZzZXRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTTVRQRSBPZmZzZXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTg6IC8vIFRpbWUgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVGltZSBTaWduYXR1cmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTk6IC8vIEtleSBTaWduYXR1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdLZXkgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDdGOiAvLyBTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlci1TcGVjaWZpYyBNZXRhLWV2ZW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdVbmtub3duOiAnICsgdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV0udG9TdHJpbmcoMTYpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGVuZ3RoID0gdHJhY2tbdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50ICsgMl07XG5cdFx0XHQvLyBTb21lIG1ldGEgZXZlbnRzIHdpbGwgaGF2ZSB2bHYgdGhhdCBuZWVkcyB0byBiZSBoYW5kbGVkXG5cblx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzICsgbGVuZ3RoO1xuXG5cdFx0fSBlbHNlIGlmKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPT0gMHhmMCkge1xuXHRcdFx0Ly8gU3lzZXhcblx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1N5c2V4Jztcblx0XHRcdHZhciBsZW5ndGggPSB0cmFja1t0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQgKyAxXTtcblx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyICsgbGVuZ3RoO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFZvaWNlIGV2ZW50XG5cdFx0XHRpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8IDB4ODApIHtcblx0XHRcdFx0Ly8gUnVubmluZyBzdGF0dXNcblx0XHRcdFx0ZXZlbnRKc29uLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleF07XG5cdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXhdXTtcblx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5sYXN0U3RhdHVzZXNbdHJhY2tJbmRleF0gPD0gMHg4Zikge1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb2ZmJztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMubGFzdFN0YXR1c2VzW3RyYWNrSW5kZXhdIDw9IDB4OWYpIHtcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9uJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxhc3RTdGF0dXNlc1t0cmFja0luZGV4XSA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleF07XG5cblx0XHRcdFx0aWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHg4Zikge1xuXHRcdFx0XHRcdC8vIE5vdGUgb2ZmXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvZmYnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTnVtYmVyID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOYW1lID0gQ29uc3RhbnRzLk5PVEVTW3RyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHRldmVudEpzb24udmVsb2NpdHkgPSBNYXRoLnJvdW5kKHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDJdIC8gMTI3ICogMTAwKTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHg5Zikge1xuXHRcdFx0XHRcdC8vIE5vdGUgb25cblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9uJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gTWF0aC5yb3VuZCh0cmFja1tldmVudFN0YXJ0SW5kZXggKyAyXSAvIDEyNyAqIDEwMCk7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4YWYpIHtcblx0XHRcdFx0XHQvLyBQb2x5cGhvbmljIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BvbHlwaG9uaWMgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnByZXNzdXJlID0gZXZlbnRbMl07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4YmYpIHtcblx0XHRcdFx0XHQvLyBDb250cm9sbGVyIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvbnRyb2xsZXIgQ2hhbmdlJztcblx0XHRcdFx0XHRldmVudEpzb24ubnVtYmVyID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZhbHVlID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMl07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4Y2YpIHtcblx0XHRcdFx0XHQvLyBQcm9ncmFtIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1Byb2dyYW0gQ2hhbmdlJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhkZikge1xuXHRcdFx0XHRcdC8vIENoYW5uZWwgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ2hhbm5lbCBLZXkgUHJlc3N1cmUnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGVmKSB7XG5cdFx0XHRcdFx0Ly8gUGl0Y2ggQmVuZFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BpdGNoIEJlbmQnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50SnNvbjtcblx0fVxuXG59XG5cbmV4cG9ydHMuUGxheWVyID0gUGxheWVyOyJdfQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJVdGlscyIsImJ5dGUiLCJ0b1N0cmluZyIsImJ5dGVBcnJheSIsImhleCIsImZvckVhY2giLCJwdXNoIiwiYnl0ZVRvSGV4Iiwiam9pbiIsImhleFN0cmluZyIsInBhcnNlSW50IiwiaGV4VG9OdW1iZXIiLCJieXRlc1RvSGV4IiwibGV0dGVycyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImRlYyIsInJlc3VsdCIsIm51bWJlciIsImIiLCJzdHJpbmciLCJhdG9iIiwiQnVmZmVyIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLEs7Ozs7Ozs7NEJBQ1lDLEksRUFBTTtBQUN0QixVQUFPQSxLQUFLQyxRQUFMLENBQWMsRUFBZCxDQUFQO0FBQ0E7Ozs2QkFFaUJDLFMsRUFBVztBQUM1QixPQUFJQyxNQUFNLEVBQVY7O0FBRUFELGFBQVVFLE9BQVYsQ0FBa0IsVUFBU0osSUFBVCxFQUFlO0FBQ2hDRyxRQUFJRSxJQUFKLENBQVNOLE1BQU1PLFNBQU4sQ0FBZ0JOLElBQWhCLENBQVQ7QUFDQSxJQUZEOztBQUlBLFVBQU9HLElBQUlJLElBQUosQ0FBUyxFQUFULENBQVA7QUFDQTs7OzhCQUVrQkMsUyxFQUFXO0FBQzdCLFVBQU9DLFNBQVNELFNBQVQsRUFBb0IsRUFBcEIsQ0FBUDtBQUNBOzs7Z0NBRW9CTixTLEVBQVc7QUFDL0IsVUFBT0gsTUFBTVcsV0FBTixDQUFrQlgsTUFBTVksVUFBTixDQUFpQlQsU0FBakIsQ0FBbEIsQ0FBUDtBQUNBOzs7aUNBRXFCQSxTLEVBQVc7QUFDaEMsT0FBSVUsVUFBVSxFQUFkO0FBQ0FWLGFBQVVFLE9BQVYsQ0FBa0IsVUFBU0osSUFBVCxFQUFlO0FBQ2hDWSxZQUFRUCxJQUFSLENBQWFRLE9BQU9DLFlBQVAsQ0FBb0JkLElBQXBCLENBQWI7QUFDQSxJQUZEOztBQUlBLFVBQU9ZLFFBQVFMLElBQVIsQ0FBYSxFQUFiLENBQVA7QUFDQTs7OzhCQUVrQlEsRyxFQUFLO0FBQ3BCLFVBQU8sQ0FBQ0EsUUFBUSxDQUFULEVBQVlkLFFBQVosQ0FBcUIsQ0FBckIsQ0FBUDtBQUNIOzs7NkJBRWlCQyxTLEVBQVc7QUFDNUIsT0FBSWMsU0FBUyxDQUFiO0FBQ0FkLGFBQVVFLE9BQVYsQ0FBa0IsVUFBU2EsTUFBVCxFQUFpQjtBQUNsQyxRQUFJQyxJQUFJRCxNQUFSO0FBQ0EsUUFBSUMsSUFBSSxJQUFSLEVBQWM7QUFDYkYsZUFBV0UsSUFBSSxJQUFmO0FBQ0FGLGdCQUFXLENBQVg7QUFDQSxLQUhELE1BR087QUFDTjtBQUNBQSxlQUFVRSxDQUFWO0FBQ0E7QUFDRCxJQVREOztBQVdBLFVBQU9GLE1BQVA7QUFDQTs7Ozs7Ozs7Ozs7OztjQUVXRyxNLEVBQVE7QUFDbkIsT0FBSSxPQUFPQyxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDLE9BQU9BLEtBQUtELE1BQUwsQ0FBUDtBQUNoQyxVQUFPLElBQUlFLE1BQUosQ0FBV0YsTUFBWCxFQUFtQixRQUFuQixFQUE2QmxCLFFBQTdCLENBQXNDLFFBQXRDLENBQVA7QUFDQSxHOzs7Ozs7QUFHRnFCLFFBQVF2QixLQUFSLEdBQWdCQSxLQUFoQiIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFV0aWxzIHtcblx0c3RhdGljIGJ5dGVUb0hleChieXRlKSB7XG5cdFx0cmV0dXJuIGJ5dGUudG9TdHJpbmcoMTYpO1xuXHR9XG5cblx0c3RhdGljIGJ5dGVzVG9IZXgoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIGhleCA9IFtdO1xuXG5cdFx0Ynl0ZUFycmF5LmZvckVhY2goZnVuY3Rpb24oYnl0ZSkge1xuXHRcdFx0aGV4LnB1c2goVXRpbHMuYnl0ZVRvSGV4KGJ5dGUpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBoZXguam9pbignJyk7XG5cdH1cblxuXHRzdGF0aWMgaGV4VG9OdW1iZXIoaGV4U3RyaW5nKSB7XG5cdFx0cmV0dXJuIHBhcnNlSW50KGhleFN0cmluZywgMTYpO1xuXHR9XG5cblx0c3RhdGljIGJ5dGVzVG9OdW1iZXIoYnl0ZUFycmF5KSB7XG5cdFx0cmV0dXJuIFV0aWxzLmhleFRvTnVtYmVyKFV0aWxzLmJ5dGVzVG9IZXgoYnl0ZUFycmF5KSk7XG5cdH1cblxuXHRzdGF0aWMgYnl0ZXNUb0xldHRlcnMoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIGxldHRlcnMgPSBbXTtcblx0XHRieXRlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihieXRlKSB7XG5cdFx0XHRsZXR0ZXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbGV0dGVycy5qb2luKCcnKTtcblx0fVxuXG5cdHN0YXRpYyBkZWNUb0JpbmFyeShkZWMpIHtcbiAgICBcdHJldHVybiAoZGVjID4+PiAwKS50b1N0cmluZygyKTtcblx0fVxuXG5cdHN0YXRpYyByZWFkVmFySW50KGJ5dGVBcnJheSkge1xuXHRcdHZhciByZXN1bHQgPSAwO1xuXHRcdGJ5dGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdFx0dmFyIGIgPSBudW1iZXI7XG5cdFx0XHRpZiAoYiAmIDB4ODApIHtcblx0XHRcdFx0cmVzdWx0ICs9IChiICYgMHg3Zik7XG5cdFx0XHRcdHJlc3VsdCA8PD0gNztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8qIGIgaXMgdGhlIGxhc3QgYnl0ZSAqL1xuXHRcdFx0XHRyZXN1bHQgKz0gYjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRzdGF0aWMgYXRvYihzdHJpbmcpIHtcblx0XHRpZiAodHlwZW9mIGF0b2IgPT09ICdmdW5jdGlvbicpIHJldHVybiBhdG9iKHN0cmluZyk7XG5cdFx0cmV0dXJuIG5ldyBCdWZmZXIoc3RyaW5nLCAnYmFzZTY0JykudG9TdHJpbmcoJ2JpbmFyeScpO1xuXHR9XG59XG5cbmV4cG9ydHMuVXRpbHMgPSBVdGlsczsiXX0=
