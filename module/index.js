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

	var _loop = function _loop(i) {
		allNotes.forEach(function (noteGroup) {
			noteGroup.forEach(function (note) {
				Constants.NOTES[counter] = note + i;
			});
			counter++;
		});
	};

	for (var i = -1; i <= 9; i++) {
		_loop(i);
	}
})();

exports.Constants = Constants;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiQ29uc3RhbnRzIiwiVkVSU0lPTiIsIk5PVEVTIiwiYWxsTm90ZXMiLCJjb3VudGVyIiwiaSIsImZvckVhY2giLCJub3RlR3JvdXAiLCJub3RlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZO0FBQ2ZDLFVBQVMsT0FETTtBQUVmQyxRQUFPO0FBRlEsQ0FBaEI7O0FBS0EsQ0FBQyxZQUFXO0FBQ1g7QUFDQSxLQUFJQyxXQUFXLENBQUMsQ0FBQyxHQUFELENBQUQsRUFBUSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQVIsRUFBcUIsQ0FBQyxHQUFELENBQXJCLEVBQTRCLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBNUIsRUFBeUMsQ0FBQyxHQUFELENBQXpDLEVBQStDLENBQUMsR0FBRCxDQUEvQyxFQUFzRCxDQUFDLElBQUQsRUFBTSxJQUFOLENBQXRELEVBQW1FLENBQUMsR0FBRCxDQUFuRSxFQUEwRSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQTFFLEVBQXVGLENBQUMsR0FBRCxDQUF2RixFQUE4RixDQUFDLElBQUQsRUFBTSxJQUFOLENBQTlGLEVBQTJHLENBQUMsR0FBRCxDQUEzRyxDQUFmO0FBQ0EsS0FBSUMsVUFBVSxDQUFkOztBQUVBOztBQUxXLDRCQU1GQyxDQU5FO0FBT1ZGLFdBQVNHLE9BQVQsQ0FBaUIsVUFBU0MsU0FBVCxFQUFvQjtBQUNwQ0EsYUFBVUQsT0FBVixDQUFrQixVQUFTRSxJQUFULEVBQWU7QUFBQ1IsY0FBVUUsS0FBVixDQUFnQkUsT0FBaEIsSUFBMkJJLE9BQU9ILENBQWxDO0FBQW9DLElBQXRFO0FBQ0FEO0FBQ0EsR0FIRDtBQVBVOztBQU1YLE1BQUssSUFBSUMsSUFBSSxDQUFDLENBQWQsRUFBaUJBLEtBQUssQ0FBdEIsRUFBeUJBLEdBQXpCLEVBQThCO0FBQUEsUUFBckJBLENBQXFCO0FBSzdCO0FBQ0QsQ0FaRDs7QUFjQUksUUFBUVQsU0FBUixHQUFvQkEsU0FBcEIiLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbnN0YW50cyA9IHtcblx0VkVSU0lPTjogJzEuMC4xJyxcblx0Tk9URVM6IFtdXG59O1xuXG4oZnVuY3Rpb24oKSB7XG5cdC8vIEJ1aWxkcyBub3RlcyBvYmplY3QgZm9yIHJlZmVyZW5jZSBhZ2FpbnN0IGJpbmFyeSB2YWx1ZXMuXG5cdHZhciBhbGxOb3RlcyA9IFtbJ0MnXSwgWydDIycsJ0RiJ10sIFsnRCddLCBbJ0QjJywnRWInXSwgWydFJ10sWydGJ10sIFsnRiMnLCdHYiddLCBbJ0cnXSwgWydHIycsJ0FiJ10sIFsnQSddLCBbJ0EjJywnQmInXSwgWydCJ11dO1xuXHR2YXIgY291bnRlciA9IDA7XG5cblx0Ly8gQWxsIGF2YWlsYWJsZSBvY3RhdmVzLlxuXHRmb3IgKGxldCBpID0gLTE7IGkgPD0gOTsgaSsrKSB7XG5cdFx0YWxsTm90ZXMuZm9yRWFjaChmdW5jdGlvbihub3RlR3JvdXApIHtcblx0XHRcdG5vdGVHcm91cC5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUpIHtDb25zdGFudHMuTk9URVNbY291bnRlcl0gPSBub3RlICsgaX0pO1xuXHRcdFx0Y291bnRlciArKztcblx0XHR9KTtcblx0fVxufSkoKTtcblxuZXhwb3J0cy5Db25zdGFudHMgPSBDb25zdGFudHM7Il19
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
		this.newTracks = [];
		this.tracksEnabled = []; // 0 disabled, 1 enabled
		this.tempo = 120;
		this.startTick = 0;
		this.tick = 0;
		this.lastStatuses = [];
		this.lastTick = null;
		this.lastTicks = [];
		this.pointers = [];
		this.inLoop = false;
		this.exportingJSON = false;
		this.JSON = [];

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
		key: 'getFilesize',
		value: function getFilesize() {
			return this.buffer ? this.buffer.length : 0;
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

					this.newTracks.push(new Track(this.buffer.slice(index + 8, index + 8 + trackLength)));
				}
			}, this);

			return this;
		}
	}, {
		key: 'enableTrack',
		value: function enableTrack(trackNumber) {
			this.newTracks[trackNumber - 1].enable();
			this.tracksEnabled[trackNumber - 1] = 1;
			return this;
		}
	}, {
		key: 'disableTrack',
		value: function disableTrack(trackNumber) {
			this.newTracks[trackNumber - 1].disable();
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
	}, {
		key: 'playLoop',
		value: function playLoop() {
			if (!this.inLoop) {
				this.inLoop = true;
				this.tick = this.getCurrentTick();

				for (var i = 0; i <= this.tracks.length - 1; i++) {
					// Handle next event
					if (this.endOfFile()) {
						console.log('End of file');
						this.stop();
					} else {
						this.handleEvent(i);
					}
				}
				this.inLoop = false;
			}

			//window.requestAnimationFrame(this.playLoop.bind(this));
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

			if (this.exportingJSON || this.pointers[trackIndex] < track.length && this.tick - this.lastTicks[trackIndex] >= delta) {
				var _event = this.parseEvent(trackIndex, deltaByteCount);

				if (this.tracksEnabled[trackIndex] == 1) this.emitEvent(_event);

				// Recursively call this function for each event ahead that has 0 delta time?
			}
		}
	}, {
		key: 'play',
		value: function play() {
			//this.exportJSON();return;
			if (this.setIntervalId) {
				console.log('Already playing...');
				return false;
			}

			// Initialize
			if (!this.startTime) this.startTime = new Date().getTime();

			// Start play loop
			//window.requestAnimationFrame(this.playLoop.bind(this));
			this.setIntervalId = setInterval(this.playLoop.bind(this), 10);

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
		key: 'exportJSON',
		value: function exportJSON() {
			this.exportingJSON = true;
			var i = 0;
			while (i < 10) {
				this.playLoop();
				i++;
			}

			this.stop();

			//console.log(this.JSON);
			this.exportingJSON = false;
		}
	}, {
		key: 'bytesProcessed',
		value: function bytesProcessed() {
			// Currently assume header chunk is strictly 14 bytes
			return 14 + this.tracks.length * 8 + this.pointers.reduce(function (a, b) {
				return a + b;
			}, 0);
		}
	}, {
		key: 'endOfFile',
		value: function endOfFile() {
			return this.bytesProcessed() == this.buffer.length;
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
			if (this.exportingJSON) {
				this.JSON.push(event);
				console.log(event);
			} else if (typeof this.eventHandler === 'function') {
				this.eventHandler(event);
			}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiUGxheWVyIiwiZXZlbnRIYW5kbGVyIiwiYnVmZmVyIiwic3RhcnRUaW1lIiwiZGl2aXNpb24iLCJmb3JtYXQiLCJzZXRJbnRlcnZhbElkIiwidHJhY2tzIiwibmV3VHJhY2tzIiwidHJhY2tzRW5hYmxlZCIsInRlbXBvIiwic3RhcnRUaWNrIiwidGljayIsImxhc3RTdGF0dXNlcyIsImxhc3RUaWNrIiwibGFzdFRpY2tzIiwicG9pbnRlcnMiLCJpbkxvb3AiLCJleHBvcnRpbmdKU09OIiwiSlNPTiIsInBhdGgiLCJmcyIsInJlcXVpcmUiLCJyZWFkRmlsZVN5bmMiLCJmaWxlTG9hZGVkIiwiYXJyYXlCdWZmZXIiLCJVaW50OEFycmF5IiwiZGF0YVVyaSIsImJ5dGVTdHJpbmciLCJVdGlscyIsImF0b2IiLCJzcGxpdCIsImlhIiwibGVuZ3RoIiwiaSIsImNoYXJDb2RlQXQiLCJ2YWxpZGF0ZSIsImdldERpdmlzaW9uIiwiZ2V0Rm9ybWF0IiwiZ2V0VHJhY2tzIiwiYnl0ZXNUb0xldHRlcnMiLCJzbGljZSIsImJ5dGVzVG9OdW1iZXIiLCJmb3JFYWNoIiwiYnl0ZSIsImluZGV4IiwidHJhY2tMZW5ndGgiLCJwdXNoIiwiVHJhY2siLCJ0cmFja051bWJlciIsImVuYWJsZSIsImRpc2FibGUiLCJ0cmFjayIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXJyZW50VGljayIsImVuZE9mRmlsZSIsInN0b3AiLCJoYW5kbGVFdmVudCIsInRyYWNrSW5kZXgiLCJwb2ludGVyIiwiZGVsdGFCeXRlQ291bnQiLCJnZXREZWx0YUJ5dGVDb3VudCIsImRlbHRhIiwicmVhZFZhckludCIsImV2ZW50IiwicGFyc2VFdmVudCIsImVtaXRFdmVudCIsIkRhdGUiLCJnZXRUaW1lIiwic2V0SW50ZXJ2YWwiLCJwbGF5TG9vcCIsImJpbmQiLCJjbGVhckludGVydmFsIiwicmVkdWNlIiwiYSIsImIiLCJieXRlc1Byb2Nlc3NlZCIsImN1cnJlbnRCeXRlIiwiYnl0ZUNvdW50IiwiTWF0aCIsInJvdW5kIiwiZXZlbnRTdGFydEluZGV4IiwiZXZlbnRKc29uIiwibmFtZSIsInZsdiIsInN0cmluZ0xlbmd0aCIsInN0cmluZyIsImRhdGEiLCJ0b1N0cmluZyIsInJ1bm5pbmciLCJub3RlTnVtYmVyIiwibm90ZU5hbWUiLCJDb25zdGFudHMiLCJOT1RFUyIsInZlbG9jaXR5Iiwibm90ZSIsInByZXNzdXJlIiwibnVtYmVyIiwidmFsdWUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsTTtBQUNMLGlCQUFZQyxZQUFaLEVBQTBCQyxNQUExQixFQUFrQztBQUFBOztBQUNqQyxPQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsT0FBS0QsTUFBTCxHQUFjQSxVQUFVLElBQXhCO0FBQ0EsT0FBS0UsUUFBTDtBQUNBLE9BQUtDLE1BQUw7QUFDQSxPQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxPQUFLQyxTQUFMLEdBQWtCLEVBQWxCO0FBQ0EsT0FBS0MsYUFBTCxHQUFxQixFQUFyQixDQVJpQyxDQVFSO0FBQ3pCLE9BQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLE9BQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsT0FBS0MsYUFBTCxHQUFxQixLQUFyQjtBQUNBLE9BQUtDLElBQUwsR0FBWSxFQUFaOztBQUVBLE9BQUtsQixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBOztBQUVEOzs7OzsyQkFDU21CLEksRUFBTTtBQUNkLE9BQUlDLEtBQUtDLFFBQVEsSUFBUixDQUFUO0FBQ0EsUUFBS3BCLE1BQUws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QzFDO0FBQ0FDLGdCQUFVQyxJQUFWLEdBQWlCLHNCQUFqQjtBQUNBLFdBQUtwRSxRQUFMLENBQWMyQyxVQUFkLEtBQTZCRSxpQkFBaUIsQ0FBOUM7QUFFQSxNQUxNLE1BS0EsSUFBSVQsTUFBTThCLGVBQU4sS0FBMEIsSUFBOUIsRUFBb0M7QUFDMUM7QUFDQUMsZ0JBQVVDLElBQVYsR0FBaUIsWUFBakI7QUFDQSxXQUFLcEUsUUFBTCxDQUFjMkMsVUFBZCxLQUE2QkUsaUJBQWlCLENBQTlDO0FBQ0E7QUFDRDtBQUNEOztBQUVELFVBQU9zQixTQUFQO0FBQ0E7Ozs7OztBQUlGaUIsUUFBUXBHLE1BQVIsR0FBaUJBLE1BQWpCIiwiZmlsZSI6InBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKGV2ZW50SGFuZGxlciwgYnVmZmVyKSB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHRoaXMuYnVmZmVyID0gYnVmZmVyIHx8IG51bGw7XG5cdFx0dGhpcy5kaXZpc2lvbjtcblx0XHR0aGlzLmZvcm1hdDtcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBudWxsO1xuXHRcdHRoaXMudHJhY2tzID0gW107XG5cdFx0dGhpcy5uZXdUcmFja3MgID0gW107XG5cdFx0dGhpcy50cmFja3NFbmFibGVkID0gW107IC8vIDAgZGlzYWJsZWQsIDEgZW5hYmxlZFxuXHRcdHRoaXMudGVtcG8gPSAxMjA7XG5cdFx0dGhpcy5zdGFydFRpY2sgPSAwO1xuXHRcdHRoaXMudGljayA9IDA7XG5cdFx0dGhpcy5sYXN0U3RhdHVzZXMgPSBbXTtcblx0XHR0aGlzLmxhc3RUaWNrID0gbnVsbDtcblx0XHR0aGlzLmxhc3RUaWNrcyA9IFtdO1xuXHRcdHRoaXMucG9pbnRlcnMgPSBbXTtcblx0XHR0aGlzLmluTG9vcCA9IGZhbHNlO1xuXHRcdHRoaXMuZXhwb3J0aW5nSlNPTiA9IGZhbHNlO1xuXHRcdHRoaXMuSlNPTiA9IFtdO1xuXG5cdFx0dGhpcy5ldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXI7XG5cdH1cblxuXHQvLyBPbmx5IGZvciBOb2RlSlNcblx0bG9hZEZpbGUocGF0aCkge1xuXHRcdHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cdFx0dGhpcy5idWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCk7XG5cdFx0cmV0dXJuIHRoaXMuZmlsZUxvYWRlZCgpO1xuXHR9XG5cblx0bG9hZEFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG5cdFx0cmV0dXJuIHRoaXMuZmlsZUxvYWRlZCgpO1xuXHR9XG5cblx0bG9hZERhdGFVcmkoZGF0YVVyaSkge1xuXHRcdC8vIGNvbnZlcnQgYmFzZTY0IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nXG5cdFx0Ly8gZG9lc24ndCBoYW5kbGUgVVJMRW5jb2RlZCBEYXRhVVJJcyAtIHNlZSBTTyBhbnN3ZXIgIzY4NTAyNzYgZm9yIGNvZGUgdGhhdCBkb2VzIHRoaXNcblx0XHR2YXIgYnl0ZVN0cmluZyA9IFV0aWxzLmF0b2IoZGF0YVVyaS5zcGxpdCgnLCcpWzFdKTtcblxuXHRcdC8vIHdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyXG5cdFx0dmFyIGlhID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZVN0cmluZy5sZW5ndGgpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWFbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5idWZmZXIgPSBpYTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRnZXRGaWxlc2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIgPyB0aGlzLmJ1ZmZlci5sZW5ndGggOiAwO1xuXHR9XG5cblx0ZmlsZUxvYWRlZCgpIHtcblx0XHRpZiAoIXRoaXMudmFsaWRhdGUoKSkgdGhyb3cgJ0ludmFsaWQgTUlESSBmaWxlOyBzaG91bGQgc3RhcnQgd2l0aCBNVGhkJztcblx0XHRyZXR1cm4gdGhpcy5nZXREaXZpc2lvbigpLmdldEZvcm1hdCgpLmdldFRyYWNrcygpO1xuXHR9XG5cblx0Ly8gRmlyc3QgZm91ciBieXRlcyBzaG91bGQgYmUgTVRoZFxuXHR2YWxpZGF0ZSgpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoMCwgNCkpID09PSAnTVRoZCc7XG5cdH1cblxuXHRnZXRGb3JtYXQoKSB7XG5cdFx0Lypcblx0XHRNSURJIGZpbGVzIGNvbWUgaW4gMyB2YXJpYXRpb25zOlxuXHRcdEZvcm1hdCAwIHdoaWNoIGNvbnRhaW4gYSBzaW5nbGUgdHJhY2tcblx0XHRGb3JtYXQgMSB3aGljaCBjb250YWluIG9uZSBvciBtb3JlIHNpbXVsdGFuZW91cyB0cmFja3MgXG5cdFx0KGllIGFsbCB0cmFja3MgYXJlIHRvIGJlIHBsYXllZCBzaW11bHRhbmVvdXNseSkuXG5cdFx0Rm9ybWF0IDIgd2hpY2ggY29udGFpbiBvbmUgb3IgbW9yZSBpbmRlcGVuZGFudCB0cmFja3MgXG5cdFx0KGllIGVhY2ggdHJhY2sgaXMgdG8gYmUgcGxheWVkIGluZGVwZW5kYW50bHkgb2YgdGhlIG90aGVycykuXG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0XHQqL1xuXG5cdFx0dGhpcy5mb3JtYXQgPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDgsIDEwKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyBQYXJzZXMgb3V0IHRyYWNrcyBhbmQgcGxhY2VzIHRoZW0gaW4gdGhpcy50cmFja3MgYW5kIGluaXRpYWxpemVzIHRoaXMucG9pbnRlcnNcblx0Z2V0VHJhY2tzKCkge1xuXHRcdHRoaXMudHJhY2tzID0gW107XG5cdFx0dGhpcy5wb2ludGVycyA9IFtdO1xuXHRcdHRoaXMubGFzdFRpY2tzID0gW107XG5cdFx0dGhpcy50cmFja3NFbmFibGVkID0gW107XG5cdFx0dGhpcy5idWZmZXIuZm9yRWFjaChmdW5jdGlvbihieXRlLCBpbmRleCkge1xuXHRcdFx0aWYgKFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4LCBpbmRleCArIDQpKSA9PSAnTVRyaycpIHtcblx0XHRcdFx0dmFyIHRyYWNrTGVuZ3RoID0gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZShpbmRleCArIDQsIGluZGV4ICsgOCkpO1xuXHRcdFx0XHR0aGlzLnRyYWNrcy5wdXNoKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgOCwgaW5kZXggKyA4ICsgdHJhY2tMZW5ndGgpKTtcblx0XHRcdFx0dGhpcy5wb2ludGVycy5wdXNoKDApO1xuXHRcdFx0XHR0aGlzLmxhc3RUaWNrcy5wdXNoKDApO1xuXHRcdFx0XHR0aGlzLnRyYWNrc0VuYWJsZWQucHVzaCgxKTtcblxuXHRcdFx0XHR0aGlzLm5ld1RyYWNrcy5wdXNoKG5ldyBUcmFjayh0aGlzLmJ1ZmZlci5zbGljZShpbmRleCArIDgsIGluZGV4ICsgOCArIHRyYWNrTGVuZ3RoKSkpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlbmFibGVUcmFjayh0cmFja051bWJlcikge1xuXHRcdHRoaXMubmV3VHJhY2tzW3RyYWNrTnVtYmVyIC0gMV0uZW5hYmxlKCk7XG5cdFx0dGhpcy50cmFja3NFbmFibGVkW3RyYWNrTnVtYmVyIC0gMV0gPSAxO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGlzYWJsZVRyYWNrKHRyYWNrTnVtYmVyKSB7XG5cdFx0dGhpcy5uZXdUcmFja3NbdHJhY2tOdW1iZXIgLSAxXS5kaXNhYmxlKCk7XG5cdFx0dGhpcy50cmFja3NFbmFibGVkW3RyYWNrTnVtYmVyIC0gMV0gPSAwO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0RGl2aXNpb24oKSB7XG5cdFx0dGhpcy5kaXZpc2lvbiA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoMTIsIDE0KSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRUb3RhbFRpY2tzKCkge1xuXHRcdHRoaXMudHJhY2tzWzBdLmZvckVhY2goZnVuY3Rpb24odHJhY2ssIGluZGV4KSB7XG5cdFx0XHRjb25zb2xlLmxvZyhpbmRleCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwbGF5TG9vcCgpIHtcblx0XHRpZiAoIXRoaXMuaW5Mb29wKSB7XG5cdFx0XHR0aGlzLmluTG9vcCA9IHRydWU7XG5cdFx0XHR0aGlzLnRpY2sgPSB0aGlzLmdldEN1cnJlbnRUaWNrKCk7XG5cdFx0XHRcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMudHJhY2tzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0XHQvLyBIYW5kbGUgbmV4dCBldmVudFxuXHRcdFx0XHRpZiAodGhpcy5lbmRPZkZpbGUoKSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFbmQgb2YgZmlsZScpO1xuXHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGVFdmVudChpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5pbkxvb3AgPSBmYWxzZTtcblx0XHR9XG5cblx0XHQvL3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5wbGF5TG9vcC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGV2ZW50IHdpdGhpbiBhIGdpdmVuIHRyYWNrIHN0YXJ0aW5nIGF0IHNwZWNpZmllZCBpbmRleFxuXHQgKiBAcGFyYW0gdHJhY2tJbmRleFxuXHQgKi9cblx0aGFuZGxlRXZlbnQodHJhY2tJbmRleCkge1xuXHRcdC8vIFBhcnNlIGRlbHRhIHZhbHVlXG5cdFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBkZWx0YUJ5dGVDb3VudCA9IHRoaXMuZ2V0RGVsdGFCeXRlQ291bnQodHJhY2tJbmRleCk7XG5cdFx0dmFyIGRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZShwb2ludGVyLCBwb2ludGVyICsgZGVsdGFCeXRlQ291bnQpKTtcblxuXHRcdGlmICh0aGlzLmV4cG9ydGluZ0pTT04gfHwgdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSA8IHRyYWNrLmxlbmd0aCAmJiB0aGlzLnRpY2sgLSB0aGlzLmxhc3RUaWNrc1t0cmFja0luZGV4XSA+PSBkZWx0YSkge1xuXHRcdFx0bGV0IGV2ZW50ID0gdGhpcy5wYXJzZUV2ZW50KHRyYWNrSW5kZXgsIGRlbHRhQnl0ZUNvdW50KTtcblxuXHRcdFx0aWYgKHRoaXMudHJhY2tzRW5hYmxlZFt0cmFja0luZGV4XSA9PSAxKSB0aGlzLmVtaXRFdmVudChldmVudCk7XG5cblx0XHRcdC8vIFJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBmdW5jdGlvbiBmb3IgZWFjaCBldmVudCBhaGVhZCB0aGF0IGhhcyAwIGRlbHRhIHRpbWU/XG5cdFx0fVxuXHR9XG5cblx0cGxheSgpIHtcblx0XHQvL3RoaXMuZXhwb3J0SlNPTigpO3JldHVybjtcblx0XHRpZiAodGhpcy5zZXRJbnRlcnZhbElkKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnQWxyZWFkeSBwbGF5aW5nLi4uJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZVxuXHRcdGlmICghdGhpcy5zdGFydFRpbWUpIHRoaXMuc3RhcnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcblxuXHRcdC8vIFN0YXJ0IHBsYXkgbG9vcFxuXHRcdC8vd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnBsYXlMb29wLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMucGxheUxvb3AuYmluZCh0aGlzKSwgMTApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpY2sgPSB0aGlzLnRpY2s7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3RvcCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpY2sgPSAwO1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRpc1BsYXlpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0SW50ZXJ2YWxJZCA+IDA7XG5cdH1cblxuXHRlbmRPZlRyYWNrKHRyYWNrSW5kZXgpIHtcblx0XHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0aWYgKHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAxXSA9PSAweGZmICYmIHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAyXSA9PSAweDJmICYmIHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAzXSA9PSAweDAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRleHBvcnRKU09OKCkge1xuXHRcdHRoaXMuZXhwb3J0aW5nSlNPTiA9IHRydWU7XG5cdFx0dmFyIGkgPSAwXG5cdFx0d2hpbGUgKGkgPCAxMCkge1xuXHRcdFx0dGhpcy5wbGF5TG9vcCgpO1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RvcCgpO1xuXG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLkpTT04pO1xuXHRcdHRoaXMuZXhwb3J0aW5nSlNPTiA9IGZhbHNlO1xuXHR9XG5cblx0Ynl0ZXNQcm9jZXNzZWQoKSB7XG5cdFx0Ly8gQ3VycmVudGx5IGFzc3VtZSBoZWFkZXIgY2h1bmsgaXMgc3RyaWN0bHkgMTQgYnl0ZXNcblx0XHRyZXR1cm4gMTQgKyB0aGlzLnRyYWNrcy5sZW5ndGggKiA4ICsgdGhpcy5wb2ludGVycy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge3JldHVybiBhK2I7fSwgMCk7XG5cdH1cblxuXHRlbmRPZkZpbGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYnl0ZXNQcm9jZXNzZWQoKSA9PSB0aGlzLmJ1ZmZlci5sZW5ndGg7XG5cdH1cblxuXHRnZXREZWx0YUJ5dGVDb3VudCh0cmFja0luZGV4KSB7XG5cdFx0Ly8gR2V0IGJ5dGUgY291bnQgb2YgZGVsdGEgVkxWXG5cdFx0Ly8gaHR0cDovL3d3dy5jY2FyaC5vcmcvY291cnNlcy8yNTMvaGFuZG91dC92bHYvXG5cdFx0Ly8gSWYgYnl0ZSBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIDgwaCAoMTI4IGRlY2ltYWwpIHRoZW4gdGhlIG5leHQgYnl0ZSBcblx0ICAgIC8vIGlzIGFsc28gcGFydCBvZiB0aGUgVkxWLFxuXHQgICBcdC8vIGVsc2UgYnl0ZSBpcyB0aGUgbGFzdCBieXRlIGluIGEgVkxWLlxuXHQgICBcdHZhciB0cmFjayA9IHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdO1xuXHQgICBcdHZhciBwb2ludGVyID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0ICAgXHR2YXIgY3VycmVudEJ5dGUgPSB0cmFja1twb2ludGVyXTtcblx0ICAgXHR2YXIgYnl0ZUNvdW50ID0gMTtcblxuXHRcdHdoaWxlIChjdXJyZW50Qnl0ZSA+PSAxMjgpIHtcblx0XHRcdGN1cnJlbnRCeXRlID0gdHJhY2tbcG9pbnRlciArIGJ5dGVDb3VudF07XG5cdFx0XHRieXRlQ291bnQrKztcblx0XHR9XG5cblx0XHRyZXR1cm4gYnl0ZUNvdW50O1xuXHR9XG5cblx0Z2V0Q3VycmVudFRpY2soKSB7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwICogKHRoaXMuZGl2aXNpb24gKiAodGhpcy50ZW1wbyAvIDYwKSkpICsgdGhpcy5zdGFydFRpY2s7XG5cdH1cblxuXHRlbWl0RXZlbnQoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5leHBvcnRpbmdKU09OKSB7XG5cdFx0XHR0aGlzLkpTT04ucHVzaChldmVudCk7XG5cdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XG5cblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmV2ZW50SGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5ldmVudEhhbmRsZXIoZXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFBhcnNlcyBldmVudCBpbnRvIEpTT04gYW5kIGFkdmFuY2VzIHBvaW50ZXIgZm9yIHRoZSB0cmFja1xuXHRwYXJzZUV2ZW50KHRyYWNrSW5kZXgsIGRlbHRhQnl0ZUNvdW50KSB7XG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLnRpY2spO1xuXHRcdHZhciB0cmFjayA9IHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBldmVudFN0YXJ0SW5kZXggPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQ7XG5cdFx0dmFyIGV2ZW50SnNvbiA9IHt9O1xuXHRcdGV2ZW50SnNvbi50cmFjayA9IHRyYWNrSW5kZXggKyAxO1xuXHRcdGV2ZW50SnNvbi5kZWx0YSA9IFV0aWxzLnJlYWRWYXJJbnQodHJhY2suc2xpY2UodGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSwgdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50KSk7XG5cdFx0dGhpcy5sYXN0VGlja3NbdHJhY2tJbmRleF0gPSB0aGlzLmxhc3RUaWNrc1t0cmFja0luZGV4XSArIGV2ZW50SnNvbi5kZWx0YTtcblxuXHRcdC8vZXZlbnRKc29uLnJhdyA9IGV2ZW50O1xuXHRcdGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdID09IDB4ZmYpIHtcblx0XHRcdC8vIE1ldGEgRXZlbnRcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIG1ldGEgZXZlbnQgd2Ugc2hvdWxkIGVtaXQgdGhlIGRhdGEgYW5kIGltbWVkaWF0ZWx5IG1vdmUgdG8gdGhlIG5leHQgZXZlbnRcblx0XHRcdC8vIG90aGVyd2lzZSBpZiB3ZSBsZXQgaXQgcnVuIHRocm91Z2ggdGhlIG5leHQgY3ljbGUgYSBzbGlnaHQgZGVsYXkgd2lsbCBhY2N1bXVsYXRlIGlmIG11bHRpcGxlIHRyYWNrc1xuXHRcdFx0Ly8gYXJlIGJlaW5nIHBsYXllZCBzaW11bHRhbmVvdXNseVxuXG5cdFx0XHRzd2l0Y2godHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV0pIHtcblx0XHRcdFx0Y2FzZSAweDAwOiAvLyBTZXF1ZW5jZSBOdW1iZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZSBOdW1iZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDE6IC8vIFRleHQgRXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUZXh0IEV2ZW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAyOiAvLyBDb3B5cmlnaHQgTm90aWNlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ29weXJpZ2h0IE5vdGljZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMzogLy8gU2VxdWVuY2UvVHJhY2sgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlL1RyYWNrIE5hbWUnO1xuXHRcdFx0XHRcdC8vIEdldCB2bHYgbGVuZ3RoXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRCeXRlID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0XHRcdFx0XHR2YXIgYnl0ZUNvdW50ID0gMTtcblx0XHRcdFx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50Qnl0ZSA9IHRyYWNrW3RoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBieXRlQ291bnRdO1xuXHRcdFx0XHRcdFx0Ynl0ZUNvdW50Kys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50SnNvbi52bHYgPSBieXRlQ291bnQ7XG5cdFx0XHRcdFx0dmFyIGxlbmd0aCA9IFV0aWxzLnJlYWRWYXJJbnQodHJhY2suc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgMiwgZXZlbnRTdGFydEluZGV4ICsgMiArIGJ5dGVDb3VudCkpO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5zdHJpbmdMZW5ndGggPSBsZW5ndGg7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnN0cmluZyA9IFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRyYWNrLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIGJ5dGVDb3VudCArIDIsIGV2ZW50U3RhcnRJbmRleCArIGJ5dGVDb3VudCArIGxlbmd0aCArIDIpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA0OiAvLyBJbnN0cnVtZW50IE5hbWVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdJbnN0cnVtZW50IE5hbWUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDU6IC8vIEx5cmljXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTHlyaWMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDY6IC8vIE1hcmtlclxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01hcmtlcic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNzogLy8gQ3VlIFBvaW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ3VlIFBvaW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDIwOiAvLyBNSURJIENoYW5uZWwgUHJlZml4XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTUlESSBDaGFubmVsIFByZWZpeCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyMTogLy8gTUlESSBQb3J0XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTUlESSBQb3J0Jztcblx0XHRcdFx0XHRldmVudEpzb24uZGF0YSA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIoW3RyYWNrW2V2ZW50U3RhcnRJbmRleCArIDNdXSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyRjogLy8gRW5kIG9mIFRyYWNrXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnRW5kIG9mIFRyYWNrJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDUxOiAvLyBTZXQgVGVtcG9cblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXQgVGVtcG8nO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5kYXRhID0gTWF0aC5yb3VuZCg2MDAwMDAwMCAvIFV0aWxzLmJ5dGVzVG9OdW1iZXIodHJhY2suc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgMywgZXZlbnRTdGFydEluZGV4ICsgNikpKTtcblx0XHRcdFx0XHR0aGlzLnRlbXBvID0gZXZlbnRKc29uLmRhdGE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1NDogLy8gU01UUEUgT2Zmc2V0XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU01UUEUgT2Zmc2V0Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU4OiAvLyBUaW1lIFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RpbWUgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU5OiAvLyBLZXkgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnS2V5IFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg3RjogLy8gU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVW5rbm93bjogJyArIHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdLnRvU3RyaW5nKDE2KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxlbmd0aCA9IHRyYWNrW3RoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBkZWx0YUJ5dGVDb3VudCArIDJdO1xuXHRcdFx0Ly8gU29tZSBtZXRhIGV2ZW50cyB3aWxsIGhhdmUgdmx2IHRoYXQgbmVlZHMgdG8gYmUgaGFuZGxlZFxuXG5cdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMyArIGxlbmd0aDtcblxuXHRcdH0gZWxzZSBpZih0cmFja1tldmVudFN0YXJ0SW5kZXhdID09IDB4ZjApIHtcblx0XHRcdC8vIFN5c2V4XG5cdFx0XHRldmVudEpzb24ubmFtZSA9ICdTeXNleCc7XG5cdFx0XHR2YXIgbGVuZ3RoID0gdHJhY2tbdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50ICsgMV07XG5cdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMiArIGxlbmd0aDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBWb2ljZSBldmVudFxuXHRcdFx0aWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPCAweDgwKSB7XG5cdFx0XHRcdC8vIFJ1bm5pbmcgc3RhdHVzXG5cdFx0XHRcdGV2ZW50SnNvbi5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXhdO1xuXHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4XV07XG5cdFx0XHRcdGV2ZW50SnNvbi52ZWxvY2l0eSA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHRoaXMubGFzdFN0YXR1c2VzW3RyYWNrSW5kZXhdIDw9IDB4OGYpIHtcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9mZic7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmxhc3RTdGF0dXNlc1t0cmFja0luZGV4XSA8PSAweDlmKSB7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5sYXN0U3RhdHVzZXNbdHJhY2tJbmRleF0gPSB0cmFja1tldmVudFN0YXJ0SW5kZXhdO1xuXG5cdFx0XHRcdGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4OGYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9mZlxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb2ZmJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gTWF0aC5yb3VuZCh0cmFja1tldmVudFN0YXJ0SW5kZXggKyAyXSAvIDEyNyAqIDEwMCk7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4OWYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9uXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi52ZWxvY2l0eSA9IE1hdGgucm91bmQodHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMl0gLyAxMjcgKiAxMDApO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGFmKSB7XG5cdFx0XHRcdFx0Ly8gUG9seXBob25pYyBLZXkgUHJlc3N1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQb2x5cGhvbmljIEtleSBQcmVzc3VyZSc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5wcmVzc3VyZSA9IGV2ZW50WzJdO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGJmKSB7XG5cdFx0XHRcdFx0Ly8gQ29udHJvbGxlciBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDb250cm9sbGVyIENoYW5nZSc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi52YWx1ZSA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDJdO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGNmKSB7XG5cdFx0XHRcdFx0Ly8gUHJvZ3JhbSBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQcm9ncmFtIENoYW5nZSc7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4ZGYpIHtcblx0XHRcdFx0XHQvLyBDaGFubmVsIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NoYW5uZWwgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhlZikge1xuXHRcdFx0XHRcdC8vIFBpdGNoIEJlbmRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQaXRjaCBCZW5kJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudEpzb247XG5cdH1cblxufVxuXG5leHBvcnRzLlBsYXllciA9IFBsYXllcjsiXX0=
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Track = function () {
	function Track(data) {
		_classCallCheck(this, Track);

		this.enabled = true;
		this.pointer = 0;
		this.lastTick = 0;
		this.data = data;
	}

	_createClass(Track, [{
		key: "enable",
		value: function enable() {
			this.enabled = true;
			return this;
		}
	}, {
		key: "disable",
		value: function disable() {
			this.enabled = false;
			return this;
		}
	}, {
		key: "getCurrentByte",
		value: function getCurrentByte() {
			return this.data[pointer];
		}
	}, {
		key: "getDeltaByteCount",
		value: function getDeltaByteCount() {
			// Get byte count of delta VLV
			// http://www.ccarh.org/courses/253/handout/vlv/
			// If byte is greater or equal to 80h (128 decimal) then the next byte 
			// is also part of the VLV,
			// else byte is the last byte in a VLV.
			var currentByte = this.getCurrentByte();
			var byteCount = 1;

			while (currentByte >= 128) {
				currentByte = this.data[pointer + byteCount];
				byteCount++;
			}

			return byteCount;
		}
	}]);

	return Track;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFjay5qcyJdLCJuYW1lcyI6WyJUcmFjayIsImRhdGEiLCJlbmFibGVkIiwicG9pbnRlciIsImxhc3RUaWNrIiwiY3VycmVudEJ5dGUiLCJnZXRDdXJyZW50Qnl0ZSIsImJ5dGVDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLEs7QUFDTCxnQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNqQixPQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLE9BQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLE9BQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBOzs7OzJCQUVRO0FBQ1IsUUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFPLElBQVA7QUFDQTs7OzRCQUVTO0FBQ1QsUUFBS0EsT0FBTCxHQUFlLEtBQWY7QUFDQSxVQUFPLElBQVA7QUFDQTs7O21DQUVnQjtBQUNoQixVQUFPLEtBQUtELElBQUwsQ0FBVUUsT0FBVixDQUFQO0FBQ0E7OztzQ0FFbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0c7QUFDQTtBQUNBLE9BQUlFLGNBQWMsS0FBS0MsY0FBTCxFQUFsQjtBQUNBLE9BQUlDLFlBQVksQ0FBaEI7O0FBRUgsVUFBT0YsZUFBZSxHQUF0QixFQUEyQjtBQUMxQkEsa0JBQWMsS0FBS0osSUFBTCxDQUFVRSxVQUFVSSxTQUFwQixDQUFkO0FBQ0FBO0FBQ0E7O0FBRUQsVUFBT0EsU0FBUDtBQUNBIiwiZmlsZSI6InRyYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHJhY2tcdHtcblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5wb2ludGVyID0gMDtcblx0XHR0aGlzLmxhc3RUaWNrID0gMDtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHR9XG5cblx0ZW5hYmxlKCkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkaXNhYmxlKCkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Q3VycmVudEJ5dGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YVtwb2ludGVyXTtcblx0fVxuXG5cdGdldERlbHRhQnl0ZUNvdW50KCkge1xuXHRcdC8vIEdldCBieXRlIGNvdW50IG9mIGRlbHRhIFZMVlxuXHRcdC8vIGh0dHA6Ly93d3cuY2Nhcmgub3JnL2NvdXJzZXMvMjUzL2hhbmRvdXQvdmx2L1xuXHRcdC8vIElmIGJ5dGUgaXMgZ3JlYXRlciBvciBlcXVhbCB0byA4MGggKDEyOCBkZWNpbWFsKSB0aGVuIHRoZSBuZXh0IGJ5dGUgXG5cdCAgICAvLyBpcyBhbHNvIHBhcnQgb2YgdGhlIFZMVixcblx0ICAgXHQvLyBlbHNlIGJ5dGUgaXMgdGhlIGxhc3QgYnl0ZSBpbiBhIFZMVi5cblx0ICAgXHR2YXIgY3VycmVudEJ5dGUgPSB0aGlzLmdldEN1cnJlbnRCeXRlKCk7XG5cdCAgIFx0dmFyIGJ5dGVDb3VudCA9IDE7XG5cblx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRjdXJyZW50Qnl0ZSA9IHRoaXMuZGF0YVtwb2ludGVyICsgYnl0ZUNvdW50XTtcblx0XHRcdGJ5dGVDb3VudCsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBieXRlQ291bnQ7XG5cdH1cbn0iXX0=
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
