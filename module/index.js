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

					this.newTracks.push(new Track(this.newTracks.length, this.buffer.slice(index + 8, index + 8 + trackLength)));
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
						var event = this.newTracks[i].handleEvent(this.tick);
						if (event) console.log(event);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiUGxheWVyIiwiZXZlbnRIYW5kbGVyIiwiYnVmZmVyIiwic3RhcnRUaW1lIiwiZGl2aXNpb24iLCJmb3JtYXQiLCJzZXRJbnRlcnZhbElkIiwidHJhY2tzIiwibmV3VHJhY2tzIiwidHJhY2tzRW5hYmxlZCIsInRlbXBvIiwic3RhcnRUaWNrIiwidGljayIsImxhc3RTdGF0dXNlcyIsImxhc3RUaWNrIiwibGFzdFRpY2tzIiwicG9pbnRlcnMiLCJpbkxvb3AiLCJleHBvcnRpbmdKU09OIiwiSlNPTiIsInBhdGgiLCJmcyIsInJlcXVpcmUiLCJyZWFkRmlsZVN5bmMiLCJmaWxlTG9hZGVkIiwiYXJyYXlCdWZmZXIiLCJVaW50OEFycmF5IiwiZGF0YVVyaSIsImJ5dGVTdHJpbmciLCJVdGlscyIsImF0b2IiLCJzcGxpdCIsImlhIiwibGVuZ3RoIiwiaSIsImNoYXJDb2RlQXQiLCJ2YWxpZGF0ZSIsImdldERpdmlzaW9uIiwiZ2V0Rm9ybWF0IiwiZ2V0VHJhY2tzIiwiYnl0ZXNUb0xldHRlcnMiLCJzbGljZSIsImJ5dGVzVG9OdW1iZXIiLCJmb3JFYWNoIiwiYnl0ZSIsImluZGV4IiwidHJhY2tMZW5ndGgiLCJwdXNoIiwiVHJhY2siLCJ0cmFja051bWJlciIsImVuYWJsZSIsImRpc2FibGUiLCJ0cmFjayIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXJyZW50VGljayIsImVuZE9mRmlsZSIsInN0b3AiLCJoYW5kbGVFdmVudCIsImV2ZW50IiwidHJhY2tJbmRleCIsInBvaW50ZXIiLCJkZWx0YUJ5dGVDb3VudCIsImdldERlbHRhQnl0ZUNvdW50IiwiZGVsdGEiLCJyZWFkVmFySW50IiwicGFyc2VFdmVudCIsImVtaXRFdmVudCIsIkRhdGUiLCJnZXRUaW1lIiwic2V0SW50ZXJ2YWwiLCJwbGF5TG9vcCIsImJpbmQiLCJjbGVhckludGVydmFsIiwicmVkdWNlIiwiYSIsImIiLCJieXRlc1Byb2Nlc3NlZCIsImN1cnJlbnRCeXRlIiwiYnl0ZUNvdW50IiwiTWF0aCIsInJvdW5kIiwiZXZlbnRTdGFydEluZGV4IiwiZXZlbnRKc29uIiwibmFtZSIsInZsdiIsInN0cmluZ0xlbmd0aCIsInN0cmluZyIsImRhdGEiLCJ0b1N0cmluZyIsInJ1bm5pbmciLCJub3RlTnVtYmVyIiwibm90ZU5hbWUiLCJDb25zdGFudHMiLCJOT1RFUyIsInZlbG9jaXR5Iiwibm90ZSIsInByZXNzdXJlIiwibnVtYmVyIiwidmFsdWUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsTTtBQUNMLGlCQUFZQyxZQUFaLEVBQTBCQyxNQUExQixFQUFrQztBQUFBOztBQUNqQyxPQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsT0FBS0QsTUFBTCxHQUFjQSxVQUFVLElBQXhCO0FBQ0EsT0FBS0UsUUFBTDtBQUNBLE9BQUtDLE1BQUw7QUFDQSxPQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxPQUFLQyxTQUFMLEdBQWtCLEVBQWxCO0FBQ0EsT0FBS0MsYUFBTCxHQUFxQixFQUFyQixDQVJpQyxDQVFSO0FBQ3pCLE9BQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLE9BQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsT0FBS0MsYUFBTCxHQUFxQixLQUFyQjtBQUNBLE9BQUtDLElBQUwsR0FBWSxFQUFaOztBQUVBLE9BQUtsQixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBOztBQUVEOzs7OzsyQkFDU21CLEksRUFBTTtBQUNkLE9BQUlDLEtBQUtDLFFBQVEsSUFBUixDQUFUO0FBQ0EsUUFBS3BCLE1BQUws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QTBCLElBQTlCLEVBQW9DO0FBQzFDO0FBQ0FDLGdCQUFVQyxJQUFWLEdBQWlCLGdCQUFqQjtBQUNBLFdBQUtwRSxRQUFMLENBQWM0QyxVQUFkLEtBQTZCRSxpQkFBaUIsQ0FBOUM7QUFFQSxNQUxNLE1BS0EsSUFBSVYsTUFBTThCLGVBQU4sS0FBMEIsSUFBOUIsRUFBb0M7QUFDMUM7QUFDQUMsZ0JBQVVDLElBQVYsR0FBaUIsc0JBQWpCO0FBQ0EsV0FBS3BFLFFBQUwsQ0FBYzRDLFVBQWQsS0FBNkJFLGlCQUFpQixDQUE5QztBQUVBLE1BTE0sTUFLQSxJQUFJVixNQUFNOEIsZUFBTixLQUEwQixJQUE5QixFQUFvQztBQUMxQztBQUNBQyxnQkFBVUMsSUFBVixHQUFpQixZQUFqQjtBQUNBLFdBQUtwRSxRQUFMLENBQWM0QyxVQUFkLEtBQTZCRSxpQkFBaUIsQ0FBOUM7QUFDQTtBQUNEO0FBQ0Q7O0FBRUQsVUFBT3FCLFNBQVA7QUFDQTs7Ozs7O0FBSUZpQixRQUFRcEcsTUFBUixHQUFpQkEsTUFBakIiLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyIHtcblx0Y29uc3RydWN0b3IoZXZlbnRIYW5kbGVyLCBidWZmZXIpIHtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdFx0dGhpcy5idWZmZXIgPSBidWZmZXIgfHwgbnVsbDtcblx0XHR0aGlzLmRpdmlzaW9uO1xuXHRcdHRoaXMuZm9ybWF0O1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IG51bGw7XG5cdFx0dGhpcy50cmFja3MgPSBbXTtcblx0XHR0aGlzLm5ld1RyYWNrcyAgPSBbXTtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWQgPSBbXTsgLy8gMCBkaXNhYmxlZCwgMSBlbmFibGVkXG5cdFx0dGhpcy50ZW1wbyA9IDEyMDtcblx0XHR0aGlzLnN0YXJ0VGljayA9IDA7XG5cdFx0dGhpcy50aWNrID0gMDtcblx0XHR0aGlzLmxhc3RTdGF0dXNlcyA9IFtdO1xuXHRcdHRoaXMubGFzdFRpY2sgPSBudWxsO1xuXHRcdHRoaXMubGFzdFRpY2tzID0gW107XG5cdFx0dGhpcy5wb2ludGVycyA9IFtdO1xuXHRcdHRoaXMuaW5Mb29wID0gZmFsc2U7XG5cdFx0dGhpcy5leHBvcnRpbmdKU09OID0gZmFsc2U7XG5cdFx0dGhpcy5KU09OID0gW107XG5cblx0XHR0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcjtcblx0fVxuXG5cdC8vIE9ubHkgZm9yIE5vZGVKU1xuXHRsb2FkRmlsZShwYXRoKSB7XG5cdFx0dmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblx0XHR0aGlzLmJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhwYXRoKTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRsb2FkQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRsb2FkRGF0YVVyaShkYXRhVXJpKSB7XG5cdFx0Ly8gY29udmVydCBiYXNlNjQgdG8gcmF3IGJpbmFyeSBkYXRhIGhlbGQgaW4gYSBzdHJpbmdcblx0XHQvLyBkb2Vzbid0IGhhbmRsZSBVUkxFbmNvZGVkIERhdGFVUklzIC0gc2VlIFNPIGFuc3dlciAjNjg1MDI3NiBmb3IgY29kZSB0aGF0IGRvZXMgdGhpc1xuXHRcdHZhciBieXRlU3RyaW5nID0gVXRpbHMuYXRvYihkYXRhVXJpLnNwbGl0KCcsJylbMV0pO1xuXG5cdFx0Ly8gd3JpdGUgdGhlIGJ5dGVzIG9mIHRoZSBzdHJpbmcgdG8gYW4gQXJyYXlCdWZmZXJcblx0XHR2YXIgaWEgPSBuZXcgVWludDhBcnJheShieXRlU3RyaW5nLmxlbmd0aCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpYVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcblx0XHR9XG5cblx0XHR0aGlzLmJ1ZmZlciA9IGlhO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGdldEZpbGVzaXplKCkge1xuXHRcdHJldHVybiB0aGlzLmJ1ZmZlciA/IHRoaXMuYnVmZmVyLmxlbmd0aCA6IDA7XG5cdH1cblxuXHRmaWxlTG9hZGVkKCkge1xuXHRcdGlmICghdGhpcy52YWxpZGF0ZSgpKSB0aHJvdyAnSW52YWxpZCBNSURJIGZpbGU7IHNob3VsZCBzdGFydCB3aXRoIE1UaGQnO1xuXHRcdHJldHVybiB0aGlzLmdldERpdmlzaW9uKCkuZ2V0Rm9ybWF0KCkuZ2V0VHJhY2tzKCk7XG5cdH1cblxuXHQvLyBGaXJzdCBmb3VyIGJ5dGVzIHNob3VsZCBiZSBNVGhkXG5cdHZhbGlkYXRlKCkge1xuXHRcdHJldHVybiBVdGlscy5ieXRlc1RvTGV0dGVycyh0aGlzLmJ1ZmZlci5zbGljZSgwLCA0KSkgPT09ICdNVGhkJztcblx0fVxuXG5cdGdldEZvcm1hdCgpIHtcblx0XHQvKlxuXHRcdE1JREkgZmlsZXMgY29tZSBpbiAzIHZhcmlhdGlvbnM6XG5cdFx0Rm9ybWF0IDAgd2hpY2ggY29udGFpbiBhIHNpbmdsZSB0cmFja1xuXHRcdEZvcm1hdCAxIHdoaWNoIGNvbnRhaW4gb25lIG9yIG1vcmUgc2ltdWx0YW5lb3VzIHRyYWNrcyBcblx0XHQoaWUgYWxsIHRyYWNrcyBhcmUgdG8gYmUgcGxheWVkIHNpbXVsdGFuZW91c2x5KS5cblx0XHRGb3JtYXQgMiB3aGljaCBjb250YWluIG9uZSBvciBtb3JlIGluZGVwZW5kYW50IHRyYWNrcyBcblx0XHQoaWUgZWFjaCB0cmFjayBpcyB0byBiZSBwbGF5ZWQgaW5kZXBlbmRhbnRseSBvZiB0aGUgb3RoZXJzKS5cblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSg4LCAxMCkpO1xuXHRcdCovXG5cblx0XHR0aGlzLmZvcm1hdCA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIFBhcnNlcyBvdXQgdHJhY2tzIGFuZCBwbGFjZXMgdGhlbSBpbiB0aGlzLnRyYWNrcyBhbmQgaW5pdGlhbGl6ZXMgdGhpcy5wb2ludGVyc1xuXHRnZXRUcmFja3MoKSB7XG5cdFx0dGhpcy50cmFja3MgPSBbXTtcblx0XHR0aGlzLnBvaW50ZXJzID0gW107XG5cdFx0dGhpcy5sYXN0VGlja3MgPSBbXTtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWQgPSBbXTtcblx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUsIGluZGV4KSB7XG5cdFx0XHRpZiAoVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoaW5kZXgsIGluZGV4ICsgNCkpID09ICdNVHJrJykge1xuXHRcdFx0XHR2YXIgdHJhY2tMZW5ndGggPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgNCwgaW5kZXggKyA4KSk7XG5cdFx0XHRcdHRoaXMudHJhY2tzLnB1c2godGhpcy5idWZmZXIuc2xpY2UoaW5kZXggKyA4LCBpbmRleCArIDggKyB0cmFja0xlbmd0aCkpO1xuXHRcdFx0XHR0aGlzLnBvaW50ZXJzLnB1c2goMCk7XG5cdFx0XHRcdHRoaXMubGFzdFRpY2tzLnB1c2goMCk7XG5cdFx0XHRcdHRoaXMudHJhY2tzRW5hYmxlZC5wdXNoKDEpO1xuXG5cdFx0XHRcdHRoaXMubmV3VHJhY2tzLnB1c2gobmV3IFRyYWNrKHRoaXMubmV3VHJhY2tzLmxlbmd0aCwgdGhpcy5idWZmZXIuc2xpY2UoaW5kZXggKyA4LCBpbmRleCArIDggKyB0cmFja0xlbmd0aCkpKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZW5hYmxlVHJhY2sodHJhY2tOdW1iZXIpIHtcblx0XHR0aGlzLm5ld1RyYWNrc1t0cmFja051bWJlciAtIDFdLmVuYWJsZSgpO1xuXHRcdHRoaXMudHJhY2tzRW5hYmxlZFt0cmFja051bWJlciAtIDFdID0gMTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpc2FibGVUcmFjayh0cmFja051bWJlcikge1xuXHRcdHRoaXMubmV3VHJhY2tzW3RyYWNrTnVtYmVyIC0gMV0uZGlzYWJsZSgpO1xuXHRcdHRoaXMudHJhY2tzRW5hYmxlZFt0cmFja051bWJlciAtIDFdID0gMDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldERpdmlzaW9uKCkge1xuXHRcdHRoaXMuZGl2aXNpb24gPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDEyLCAxNCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0VG90YWxUaWNrcygpIHtcblx0XHR0aGlzLnRyYWNrc1swXS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrLCBpbmRleCkge1xuXHRcdFx0Y29uc29sZS5sb2coaW5kZXgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cGxheUxvb3AoKSB7XG5cdFx0aWYgKCF0aGlzLmluTG9vcCkge1xuXHRcdFx0dGhpcy5pbkxvb3AgPSB0cnVlO1xuXHRcdFx0dGhpcy50aWNrID0gdGhpcy5nZXRDdXJyZW50VGljaygpO1xuXHRcdFx0XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLnRyYWNrcy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0Ly8gSGFuZGxlIG5leHQgZXZlbnRcblx0XHRcdFx0aWYgKHRoaXMuZW5kT2ZGaWxlKCkpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnRW5kIG9mIGZpbGUnKTtcblx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlRXZlbnQoaSk7XG5cdFx0XHRcdFx0dmFyIGV2ZW50ID0gdGhpcy5uZXdUcmFja3NbaV0uaGFuZGxlRXZlbnQodGhpcy50aWNrKTtcblx0XHRcdFx0XHRpZiAoZXZlbnQpIGNvbnNvbGUubG9nKGV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5pbkxvb3AgPSBmYWxzZTtcblx0XHR9XG5cblx0XHQvL3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5wbGF5TG9vcC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGV2ZW50IHdpdGhpbiBhIGdpdmVuIHRyYWNrIHN0YXJ0aW5nIGF0IHNwZWNpZmllZCBpbmRleFxuXHQgKiBAcGFyYW0gdHJhY2tJbmRleFxuXHQgKi9cblx0aGFuZGxlRXZlbnQodHJhY2tJbmRleCkge1xuXHRcdC8vIFBhcnNlIGRlbHRhIHZhbHVlXG5cdFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBkZWx0YUJ5dGVDb3VudCA9IHRoaXMuZ2V0RGVsdGFCeXRlQ291bnQodHJhY2tJbmRleCk7XG5cdFx0dmFyIGRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZShwb2ludGVyLCBwb2ludGVyICsgZGVsdGFCeXRlQ291bnQpKTtcblxuXHRcdGlmICh0aGlzLmV4cG9ydGluZ0pTT04gfHwgdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSA8IHRyYWNrLmxlbmd0aCAmJiB0aGlzLnRpY2sgLSB0aGlzLmxhc3RUaWNrc1t0cmFja0luZGV4XSA+PSBkZWx0YSkge1xuXHRcdFx0bGV0IGV2ZW50ID0gdGhpcy5wYXJzZUV2ZW50KHRyYWNrSW5kZXgsIGRlbHRhQnl0ZUNvdW50KTtcblxuXHRcdFx0aWYgKHRoaXMudHJhY2tzRW5hYmxlZFt0cmFja0luZGV4XSA9PSAxKSB0aGlzLmVtaXRFdmVudChldmVudCk7XG5cblx0XHRcdC8vIFJlY3Vyc2l2ZWx5IGNhbGwgdGhpcyBmdW5jdGlvbiBmb3IgZWFjaCBldmVudCBhaGVhZCB0aGF0IGhhcyAwIGRlbHRhIHRpbWU/XG5cdFx0fVxuXHR9XG5cblx0cGxheSgpIHtcblx0XHQvL3RoaXMuZXhwb3J0SlNPTigpO3JldHVybjtcblx0XHRpZiAodGhpcy5zZXRJbnRlcnZhbElkKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnQWxyZWFkeSBwbGF5aW5nLi4uJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZVxuXHRcdGlmICghdGhpcy5zdGFydFRpbWUpIHRoaXMuc3RhcnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcblxuXHRcdC8vIFN0YXJ0IHBsYXkgbG9vcFxuXHRcdC8vd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnBsYXlMb29wLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMucGxheUxvb3AuYmluZCh0aGlzKSwgMTApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpY2sgPSB0aGlzLnRpY2s7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3RvcCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpY2sgPSAwO1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRpc1BsYXlpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0SW50ZXJ2YWxJZCA+IDA7XG5cdH1cblxuXHRlbmRPZlRyYWNrKHRyYWNrSW5kZXgpIHtcblx0XHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0aWYgKHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAxXSA9PSAweGZmICYmIHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAyXSA9PSAweDJmICYmIHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAzXSA9PSAweDAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRleHBvcnRKU09OKCkge1xuXHRcdHRoaXMuZXhwb3J0aW5nSlNPTiA9IHRydWU7XG5cdFx0dmFyIGkgPSAwXG5cdFx0d2hpbGUgKGkgPCAxMCkge1xuXHRcdFx0dGhpcy5wbGF5TG9vcCgpO1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RvcCgpO1xuXG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLkpTT04pO1xuXHRcdHRoaXMuZXhwb3J0aW5nSlNPTiA9IGZhbHNlO1xuXHR9XG5cblx0Ynl0ZXNQcm9jZXNzZWQoKSB7XG5cdFx0Ly8gQ3VycmVudGx5IGFzc3VtZSBoZWFkZXIgY2h1bmsgaXMgc3RyaWN0bHkgMTQgYnl0ZXNcblx0XHRyZXR1cm4gMTQgKyB0aGlzLnRyYWNrcy5sZW5ndGggKiA4ICsgdGhpcy5wb2ludGVycy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge3JldHVybiBhK2I7fSwgMCk7XG5cdH1cblxuXHRlbmRPZkZpbGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYnl0ZXNQcm9jZXNzZWQoKSA9PSB0aGlzLmJ1ZmZlci5sZW5ndGg7XG5cdH1cblxuXHRnZXREZWx0YUJ5dGVDb3VudCh0cmFja0luZGV4KSB7XG5cdFx0Ly8gR2V0IGJ5dGUgY291bnQgb2YgZGVsdGEgVkxWXG5cdFx0Ly8gaHR0cDovL3d3dy5jY2FyaC5vcmcvY291cnNlcy8yNTMvaGFuZG91dC92bHYvXG5cdFx0Ly8gSWYgYnl0ZSBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIDgwaCAoMTI4IGRlY2ltYWwpIHRoZW4gdGhlIG5leHQgYnl0ZSBcblx0ICAgIC8vIGlzIGFsc28gcGFydCBvZiB0aGUgVkxWLFxuXHQgICBcdC8vIGVsc2UgYnl0ZSBpcyB0aGUgbGFzdCBieXRlIGluIGEgVkxWLlxuXHQgICBcdHZhciB0cmFjayA9IHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdO1xuXHQgICBcdHZhciBwb2ludGVyID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0ICAgXHR2YXIgY3VycmVudEJ5dGUgPSB0cmFja1twb2ludGVyXTtcblx0ICAgXHR2YXIgYnl0ZUNvdW50ID0gMTtcblxuXHRcdHdoaWxlIChjdXJyZW50Qnl0ZSA+PSAxMjgpIHtcblx0XHRcdGN1cnJlbnRCeXRlID0gdHJhY2tbcG9pbnRlciArIGJ5dGVDb3VudF07XG5cdFx0XHRieXRlQ291bnQrKztcblx0XHR9XG5cblx0XHRyZXR1cm4gYnl0ZUNvdW50O1xuXHR9XG5cblx0Z2V0Q3VycmVudFRpY2soKSB7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwICogKHRoaXMuZGl2aXNpb24gKiAodGhpcy50ZW1wbyAvIDYwKSkpICsgdGhpcy5zdGFydFRpY2s7XG5cdH1cblxuXHRlbWl0RXZlbnQoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5leHBvcnRpbmdKU09OKSB7XG5cdFx0XHR0aGlzLkpTT04ucHVzaChldmVudCk7XG5cdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XG5cblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmV2ZW50SGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5ldmVudEhhbmRsZXIoZXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFBhcnNlcyBldmVudCBpbnRvIEpTT04gYW5kIGFkdmFuY2VzIHBvaW50ZXIgZm9yIHRoZSB0cmFja1xuXHRwYXJzZUV2ZW50KHRyYWNrSW5kZXgsIGRlbHRhQnl0ZUNvdW50KSB7XG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLnRpY2spO1xuXHRcdHZhciB0cmFjayA9IHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBldmVudFN0YXJ0SW5kZXggPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQ7XG5cdFx0dmFyIGV2ZW50SnNvbiA9IHt9O1xuXHRcdGV2ZW50SnNvbi50cmFjayA9IHRyYWNrSW5kZXggKyAxO1xuXHRcdGV2ZW50SnNvbi5kZWx0YSA9IFV0aWxzLnJlYWRWYXJJbnQodHJhY2suc2xpY2UodGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSwgdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50KSk7XG5cdFx0dGhpcy5sYXN0VGlja3NbdHJhY2tJbmRleF0gPSB0aGlzLmxhc3RUaWNrc1t0cmFja0luZGV4XSArIGV2ZW50SnNvbi5kZWx0YTtcblxuXHRcdC8vZXZlbnRKc29uLnJhdyA9IGV2ZW50O1xuXHRcdGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdID09IDB4ZmYpIHtcblx0XHRcdC8vIE1ldGEgRXZlbnRcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIG1ldGEgZXZlbnQgd2Ugc2hvdWxkIGVtaXQgdGhlIGRhdGEgYW5kIGltbWVkaWF0ZWx5IG1vdmUgdG8gdGhlIG5leHQgZXZlbnRcblx0XHRcdC8vIG90aGVyd2lzZSBpZiB3ZSBsZXQgaXQgcnVuIHRocm91Z2ggdGhlIG5leHQgY3ljbGUgYSBzbGlnaHQgZGVsYXkgd2lsbCBhY2N1bXVsYXRlIGlmIG11bHRpcGxlIHRyYWNrc1xuXHRcdFx0Ly8gYXJlIGJlaW5nIHBsYXllZCBzaW11bHRhbmVvdXNseVxuXG5cdFx0XHRzd2l0Y2godHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV0pIHtcblx0XHRcdFx0Y2FzZSAweDAwOiAvLyBTZXF1ZW5jZSBOdW1iZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZSBOdW1iZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDE6IC8vIFRleHQgRXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUZXh0IEV2ZW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAyOiAvLyBDb3B5cmlnaHQgTm90aWNlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ29weXJpZ2h0IE5vdGljZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMzogLy8gU2VxdWVuY2UvVHJhY2sgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlL1RyYWNrIE5hbWUnO1xuXHRcdFx0XHRcdC8vIEdldCB2bHYgbGVuZ3RoXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRCeXRlID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0XHRcdFx0XHR2YXIgYnl0ZUNvdW50ID0gMTtcblx0XHRcdFx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50Qnl0ZSA9IHRyYWNrW3RoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBieXRlQ291bnRdO1xuXHRcdFx0XHRcdFx0Ynl0ZUNvdW50Kys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50SnNvbi52bHYgPSBieXRlQ291bnQ7XG5cdFx0XHRcdFx0dmFyIGxlbmd0aCA9IFV0aWxzLnJlYWRWYXJJbnQodHJhY2suc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgMiwgZXZlbnRTdGFydEluZGV4ICsgMiArIGJ5dGVDb3VudCkpO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5zdHJpbmdMZW5ndGggPSBsZW5ndGg7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnN0cmluZyA9IFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRyYWNrLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIGJ5dGVDb3VudCArIDIsIGV2ZW50U3RhcnRJbmRleCArIGJ5dGVDb3VudCArIGxlbmd0aCArIDIpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA0OiAvLyBJbnN0cnVtZW50IE5hbWVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdJbnN0cnVtZW50IE5hbWUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDU6IC8vIEx5cmljXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTHlyaWMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDY6IC8vIE1hcmtlclxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01hcmtlcic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNzogLy8gQ3VlIFBvaW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ3VlIFBvaW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDIwOiAvLyBNSURJIENoYW5uZWwgUHJlZml4XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTUlESSBDaGFubmVsIFByZWZpeCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyMTogLy8gTUlESSBQb3J0XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTUlESSBQb3J0Jztcblx0XHRcdFx0XHRldmVudEpzb24uZGF0YSA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIoW3RyYWNrW2V2ZW50U3RhcnRJbmRleCArIDNdXSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyRjogLy8gRW5kIG9mIFRyYWNrXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnRW5kIG9mIFRyYWNrJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDUxOiAvLyBTZXQgVGVtcG9cblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXQgVGVtcG8nO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5kYXRhID0gTWF0aC5yb3VuZCg2MDAwMDAwMCAvIFV0aWxzLmJ5dGVzVG9OdW1iZXIodHJhY2suc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgMywgZXZlbnRTdGFydEluZGV4ICsgNikpKTtcblx0XHRcdFx0XHR0aGlzLnRlbXBvID0gZXZlbnRKc29uLmRhdGE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1NDogLy8gU01UUEUgT2Zmc2V0XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU01UUEUgT2Zmc2V0Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU4OiAvLyBUaW1lIFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RpbWUgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU5OiAvLyBLZXkgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnS2V5IFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg3RjogLy8gU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVW5rbm93bjogJyArIHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdLnRvU3RyaW5nKDE2KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxlbmd0aCA9IHRyYWNrW3RoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBkZWx0YUJ5dGVDb3VudCArIDJdO1xuXHRcdFx0Ly8gU29tZSBtZXRhIGV2ZW50cyB3aWxsIGhhdmUgdmx2IHRoYXQgbmVlZHMgdG8gYmUgaGFuZGxlZFxuXG5cdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMyArIGxlbmd0aDtcblxuXHRcdH0gZWxzZSBpZih0cmFja1tldmVudFN0YXJ0SW5kZXhdID09IDB4ZjApIHtcblx0XHRcdC8vIFN5c2V4XG5cdFx0XHRldmVudEpzb24ubmFtZSA9ICdTeXNleCc7XG5cdFx0XHR2YXIgbGVuZ3RoID0gdHJhY2tbdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50ICsgMV07XG5cdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMiArIGxlbmd0aDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBWb2ljZSBldmVudFxuXHRcdFx0aWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPCAweDgwKSB7XG5cdFx0XHRcdC8vIFJ1bm5pbmcgc3RhdHVzXG5cdFx0XHRcdGV2ZW50SnNvbi5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXhdO1xuXHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4XV07XG5cdFx0XHRcdGV2ZW50SnNvbi52ZWxvY2l0eSA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHRoaXMubGFzdFN0YXR1c2VzW3RyYWNrSW5kZXhdIDw9IDB4OGYpIHtcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9mZic7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmxhc3RTdGF0dXNlc1t0cmFja0luZGV4XSA8PSAweDlmKSB7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5sYXN0U3RhdHVzZXNbdHJhY2tJbmRleF0gPSB0cmFja1tldmVudFN0YXJ0SW5kZXhdO1xuXG5cdFx0XHRcdGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4OGYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9mZlxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb2ZmJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gTWF0aC5yb3VuZCh0cmFja1tldmVudFN0YXJ0SW5kZXggKyAyXSAvIDEyNyAqIDEwMCk7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4OWYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9uXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi52ZWxvY2l0eSA9IE1hdGgucm91bmQodHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMl0gLyAxMjcgKiAxMDApO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGFmKSB7XG5cdFx0XHRcdFx0Ly8gUG9seXBob25pYyBLZXkgUHJlc3N1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQb2x5cGhvbmljIEtleSBQcmVzc3VyZSc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5wcmVzc3VyZSA9IGV2ZW50WzJdO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGJmKSB7XG5cdFx0XHRcdFx0Ly8gQ29udHJvbGxlciBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDb250cm9sbGVyIENoYW5nZSc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi52YWx1ZSA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDJdO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGNmKSB7XG5cdFx0XHRcdFx0Ly8gUHJvZ3JhbSBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQcm9ncmFtIENoYW5nZSc7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4ZGYpIHtcblx0XHRcdFx0XHQvLyBDaGFubmVsIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NoYW5uZWwgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhlZikge1xuXHRcdFx0XHRcdC8vIFBpdGNoIEJlbmRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQaXRjaCBCZW5kJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudEpzb247XG5cdH1cblxufVxuXG5leHBvcnRzLlBsYXllciA9IFBsYXllcjsiXX0=
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Track = function () {
	function Track(index, data) {
		_classCallCheck(this, Track);

		this.enabled = true;
		this.pointer = 0;
		this.lastTick = 0;
		this.lastStatus = null;
		this.index = index;
		this.data = data;
	}

	_createClass(Track, [{
		key: 'enable',
		value: function enable() {
			this.enabled = true;
			return this;
		}
	}, {
		key: 'disable',
		value: function disable() {
			this.enabled = false;
			return this;
		}
	}, {
		key: 'getCurrentByte',
		value: function getCurrentByte() {
			return this.data[this.pointer];
		}
	}, {
		key: 'getDeltaByteCount',
		value: function getDeltaByteCount() {
			// Get byte count of delta VLV
			// http://www.ccarh.org/courses/253/handout/vlv/
			// If byte is greater or equal to 80h (128 decimal) then the next byte 
			// is also part of the VLV,
			// else byte is the last byte in a VLV.
			var currentByte = this.getCurrentByte();
			var byteCount = 1;

			while (currentByte >= 128) {
				currentByte = this.data[this.pointer + byteCount];
				byteCount++;
			}

			return byteCount;
		}
	}, {
		key: 'getDelta',
		value: function getDelta() {
			return Utils.readVarInt(this.data.slice(this.pointer, this.pointer + this.getDeltaByteCount()));
		}

		/**
   * Handles event within a given track starting at specified index
   * @param trackIndex
   */

	}, {
		key: 'handleEvent',
		value: function handleEvent(currentTick) {
			// Parse delta value
			/*
   var track = this.tracks[trackIndex];
   var pointer = this.pointers[trackIndex];
   var deltaByteCount = this.getDeltaByteCount(trackIndex);
   var delta = Utils.readVarInt(track.slice(pointer, pointer + deltaByteCount));
   */

			if (this.exportingJSON || this.pointer < this.data.length && currentTick - this.lastTick >= this.getDelta()) {
				var _event = this.parseEvent();

				if (this.enabled) return _event;

				// Recursively call this function for each event ahead that has 0 delta time?
			}

			return null;
		}

		// Parses event into JSON and advances pointer for the track

	}, {
		key: 'parseEvent',
		value: function parseEvent() {
			var eventStartIndex = this.pointer + this.getDeltaByteCount();
			var eventJson = {};
			var deltaByteCount = this.getDeltaByteCount();
			eventJson.track = this.index + 1;
			eventJson.delta = this.getDelta();
			this.lastTick = this.lastTick + eventJson.delta;

			//eventJson.raw = event;
			if (this.data[eventStartIndex] == 0xff) {
				// Meta Event

				// If this is a meta event we should emit the data and immediately move to the next event
				// otherwise if we let it run through the next cycle a slight delay will accumulate if multiple tracks
				// are being played simultaneously

				switch (this.data[eventStartIndex + 1]) {
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
						var currentByte = this.pointer;
						var byteCount = 1;
						while (currentByte >= 128) {
							currentByte = this.data[this.pointer + byteCount];
							byteCount++;
						}
						eventJson.vlv = byteCount;
						var length = Utils.readVarInt(this.data.slice(eventStartIndex + 2, eventStartIndex + 2 + byteCount));
						eventJson.stringLength = length;
						eventJson.string = Utils.bytesToLetters(this.data.slice(eventStartIndex + byteCount + 2, eventStartIndex + byteCount + length + 2));
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
						eventJson.data = Utils.bytesToNumber([this.data[eventStartIndex + 3]]);
						break;
					case 0x2F:
						// End of Track
						eventJson.name = 'End of Track';
						break;
					case 0x51:
						// Set Tempo
						eventJson.name = 'Set Tempo';
						eventJson.data = Math.round(60000000 / Utils.bytesToNumber(this.data.slice(eventStartIndex + 3, eventStartIndex + 6)));
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
						eventJson.name = 'Unknown: ' + this.data[eventStartIndex + 1].toString(16);
						break;
				}

				var length = this.data[this.pointer + deltaByteCount + 2];
				// Some meta events will have vlv that needs to be handled

				this.pointer += deltaByteCount + 3 + length;
			} else if (this.data[eventStartIndex] == 0xf0) {
				// Sysex
				eventJson.name = 'Sysex';
				var length = this.data[this.pointer + deltaByteCount + 1];
				this.pointer += deltaByteCount + 2 + length;
			} else {
				// Voice event
				if (this.data[eventStartIndex] < 0x80) {
					// Running status
					eventJson.running = true;
					eventJson.noteNumber = this.data[eventStartIndex];
					eventJson.noteName = Constants.NOTES[this.data[eventStartIndex]];
					eventJson.velocity = this.data[eventStartIndex + 1];

					if (this.lastStatus <= 0x8f) {
						eventJson.name = 'Note off';
					} else if (this.lastStatus <= 0x9f) {
						eventJson.name = 'Note on';
					}

					this.pointer += deltaByteCount + 2;
				} else {
					this.lastStatus = this.data[eventStartIndex];

					if (this.data[eventStartIndex] <= 0x8f) {
						// Note off
						eventJson.name = 'Note off';
						eventJson.noteNumber = this.data[eventStartIndex + 1];
						eventJson.noteName = Constants.NOTES[this.data[eventStartIndex + 1]];
						eventJson.velocity = Math.round(this.data[eventStartIndex + 2] / 127 * 100);
						this.pointer += deltaByteCount + 3;
					} else if (this.data[eventStartIndex] <= 0x9f) {
						// Note on
						eventJson.name = 'Note on';
						eventJson.noteNumber = this.data[eventStartIndex + 1];
						eventJson.noteName = Constants.NOTES[this.data[eventStartIndex + 1]];
						eventJson.velocity = Math.round(this.data[eventStartIndex + 2] / 127 * 100);
						this.pointer += deltaByteCount + 3;
					} else if (this.data[eventStartIndex] <= 0xaf) {
						// Polyphonic Key Pressure
						eventJson.name = 'Polyphonic Key Pressure';
						eventJson.note = Constants.NOTES[this.data[eventStartIndex + 1]];
						eventJson.pressure = event[2];
						this.pointer += deltaByteCount + 3;
					} else if (this.data[eventStartIndex] <= 0xbf) {
						// Controller Change
						eventJson.name = 'Controller Change';
						eventJson.number = this.data[eventStartIndex + 1];
						eventJson.value = this.data[eventStartIndex + 2];
						this.pointer += deltaByteCount + 3;
					} else if (this.data[eventStartIndex] <= 0xcf) {
						// Program Change
						eventJson.name = 'Program Change';
						this.pointer += deltaByteCount + 2;
					} else if (this.data[eventStartIndex] <= 0xdf) {
						// Channel Key Pressure
						eventJson.name = 'Channel Key Pressure';
						this.pointer += deltaByteCount + 2;
					} else if (this.data[eventStartIndex] <= 0xef) {
						// Pitch Bend
						eventJson.name = 'Pitch Bend';
						this.pointer += deltaByteCount + 3;
					}
				}
			}

			return eventJson;
		}
	}]);

	return Track;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFjay5qcyJdLCJuYW1lcyI6WyJUcmFjayIsImluZGV4IiwiZGF0YSIsImVuYWJsZWQiLCJwb2ludGVyIiwibGFzdFRpY2siLCJsYXN0U3RhdHVzIiwiY3VycmVudEJ5dGUiLCJnZXRDdXJyZW50Qnl0ZSIsImJ5dGVDb3VudCIsIlV0aWxzIiwicmVhZFZhckludCIsInNsaWNlIiwiZ2V0RGVsdGFCeXRlQ291bnQiLCJjdXJyZW50VGljayIsImV4cG9ydGluZ0pTT04iLCJsZW5ndGgiLCJnZXREZWx0YSIsImV2ZW50IiwicGFyc2VFdmVudCIsImV2ZW50U3RhcnRJbmRleCIsImV2ZW50SnNvbiIsImRlbHRhQnl0ZUNvdW50IiwidHJhY2siLCJkZWx0YSIsIm5hbWUiLCJ2bHYiLCJzdHJpbmdMZW5ndGgiLCJzdHJpbmciLCJieXRlc1RvTGV0dGVycyIsImJ5dGVzVG9OdW1iZXIiLCJNYXRoIiwicm91bmQiLCJ0ZW1wbyIsInRvU3RyaW5nIiwicnVubmluZyIsIm5vdGVOdW1iZXIiLCJub3RlTmFtZSIsIkNvbnN0YW50cyIsIk5PVEVTIiwidmVsb2NpdHkiLCJub3RlIiwicHJlc3N1cmUiLCJudW1iZXIiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLEs7QUFDTCxnQkFBWUMsS0FBWixFQUFtQkMsSUFBbkIsRUFBeUI7QUFBQTs7QUFDeEIsT0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxPQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsT0FBS0wsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0E7Ozs7MkJBRVE7QUFDUixRQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLFVBQU8sSUFBUDtBQUNBOzs7NEJBRVM7QUFDVCxRQUFLQSxPQUFMLEdBQWUsS0FBZjtBQUNBLFVBQU8sSUFBUDtBQUNBOzs7bUNB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LEdBQWlCLFlBQWpCO0FBQ0EsV0FBS3JCLE9BQUwsSUFBZ0JrQixpQkFBaUIsQ0FBakM7QUFDQTtBQUNEO0FBQ0Q7O0FBRUQsVUFBT0QsU0FBUDtBQUNBIiwiZmlsZSI6InRyYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHJhY2tcdHtcblx0Y29uc3RydWN0b3IoaW5kZXgsIGRhdGEpIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdHRoaXMucG9pbnRlciA9IDA7XG5cdFx0dGhpcy5sYXN0VGljayA9IDA7XG5cdFx0dGhpcy5sYXN0U3RhdHVzID0gbnVsbDtcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0fVxuXG5cdGVuYWJsZSgpIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGlzYWJsZSgpIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldEN1cnJlbnRCeXRlKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGFbdGhpcy5wb2ludGVyXTtcblx0fVxuXG5cdGdldERlbHRhQnl0ZUNvdW50KCkge1xuXHRcdC8vIEdldCBieXRlIGNvdW50IG9mIGRlbHRhIFZMVlxuXHRcdC8vIGh0dHA6Ly93d3cuY2Nhcmgub3JnL2NvdXJzZXMvMjUzL2hhbmRvdXQvdmx2L1xuXHRcdC8vIElmIGJ5dGUgaXMgZ3JlYXRlciBvciBlcXVhbCB0byA4MGggKDEyOCBkZWNpbWFsKSB0aGVuIHRoZSBuZXh0IGJ5dGUgXG5cdCAgICAvLyBpcyBhbHNvIHBhcnQgb2YgdGhlIFZMVixcblx0ICAgXHQvLyBlbHNlIGJ5dGUgaXMgdGhlIGxhc3QgYnl0ZSBpbiBhIFZMVi5cblx0ICAgXHR2YXIgY3VycmVudEJ5dGUgPSB0aGlzLmdldEN1cnJlbnRCeXRlKCk7XG5cdCAgIFx0dmFyIGJ5dGVDb3VudCA9IDE7XG5cblx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRjdXJyZW50Qnl0ZSA9IHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyBieXRlQ291bnRdO1xuXHRcdFx0Ynl0ZUNvdW50Kys7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJ5dGVDb3VudDtcblx0fVxuXG5cdGdldERlbHRhKCkge1xuXHRcdHJldHVybiBVdGlscy5yZWFkVmFySW50KHRoaXMuZGF0YS5zbGljZSh0aGlzLnBvaW50ZXIsIHRoaXMucG9pbnRlciArIHRoaXMuZ2V0RGVsdGFCeXRlQ291bnQoKSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgZXZlbnQgd2l0aGluIGEgZ2l2ZW4gdHJhY2sgc3RhcnRpbmcgYXQgc3BlY2lmaWVkIGluZGV4XG5cdCAqIEBwYXJhbSB0cmFja0luZGV4XG5cdCAqL1xuXHRoYW5kbGVFdmVudChjdXJyZW50VGljaykge1xuXHRcdC8vIFBhcnNlIGRlbHRhIHZhbHVlXG5cdFx0Lypcblx0XHR2YXIgdHJhY2sgPSB0aGlzLnRyYWNrc1t0cmFja0luZGV4XTtcblx0XHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0dmFyIGRlbHRhQnl0ZUNvdW50ID0gdGhpcy5nZXREZWx0YUJ5dGVDb3VudCh0cmFja0luZGV4KTtcblx0XHR2YXIgZGVsdGEgPSBVdGlscy5yZWFkVmFySW50KHRyYWNrLnNsaWNlKHBvaW50ZXIsIHBvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudCkpO1xuXHRcdCovXG5cblx0XHRpZiAodGhpcy5leHBvcnRpbmdKU09OIHx8IHRoaXMucG9pbnRlciA8IHRoaXMuZGF0YS5sZW5ndGggJiYgY3VycmVudFRpY2sgLSB0aGlzLmxhc3RUaWNrID49IHRoaXMuZ2V0RGVsdGEoKSkge1xuXHRcdFx0bGV0IGV2ZW50ID0gdGhpcy5wYXJzZUV2ZW50KCk7XG5cblx0XHRcdGlmICh0aGlzLmVuYWJsZWQpIHJldHVybiBldmVudDtcblxuXHRcdFx0Ly8gUmVjdXJzaXZlbHkgY2FsbCB0aGlzIGZ1bmN0aW9uIGZvciBlYWNoIGV2ZW50IGFoZWFkIHRoYXQgaGFzIDAgZGVsdGEgdGltZT9cblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIFBhcnNlcyBldmVudCBpbnRvIEpTT04gYW5kIGFkdmFuY2VzIHBvaW50ZXIgZm9yIHRoZSB0cmFja1xuXHRwYXJzZUV2ZW50KCkge1xuXHRcdHZhciBldmVudFN0YXJ0SW5kZXggPSB0aGlzLnBvaW50ZXIgKyB0aGlzLmdldERlbHRhQnl0ZUNvdW50KCk7XG5cdFx0dmFyIGV2ZW50SnNvbiA9IHt9O1xuXHRcdHZhciBkZWx0YUJ5dGVDb3VudCA9IHRoaXMuZ2V0RGVsdGFCeXRlQ291bnQoKTtcblx0XHRldmVudEpzb24udHJhY2sgPSB0aGlzLmluZGV4ICsgMTtcblx0XHRldmVudEpzb24uZGVsdGEgPSB0aGlzLmdldERlbHRhKCk7XG5cdFx0dGhpcy5sYXN0VGljayA9IHRoaXMubGFzdFRpY2sgKyBldmVudEpzb24uZGVsdGE7XG5cblx0XHQvL2V2ZW50SnNvbi5yYXcgPSBldmVudDtcblx0XHRpZiAodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF0gPT0gMHhmZikge1xuXHRcdFx0Ly8gTWV0YSBFdmVudFxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgbWV0YSBldmVudCB3ZSBzaG91bGQgZW1pdCB0aGUgZGF0YSBhbmQgaW1tZWRpYXRlbHkgbW92ZSB0byB0aGUgbmV4dCBldmVudFxuXHRcdFx0Ly8gb3RoZXJ3aXNlIGlmIHdlIGxldCBpdCBydW4gdGhyb3VnaCB0aGUgbmV4dCBjeWNsZSBhIHNsaWdodCBkZWxheSB3aWxsIGFjY3VtdWxhdGUgaWYgbXVsdGlwbGUgdHJhY2tzXG5cdFx0XHQvLyBhcmUgYmVpbmcgcGxheWVkIHNpbXVsdGFuZW91c2x5XG5cblx0XHRcdHN3aXRjaCh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMV0pIHtcblx0XHRcdFx0Y2FzZSAweDAwOiAvLyBTZXF1ZW5jZSBOdW1iZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZSBOdW1iZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDE6IC8vIFRleHQgRXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUZXh0IEV2ZW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAyOiAvLyBDb3B5cmlnaHQgTm90aWNlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ29weXJpZ2h0IE5vdGljZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMzogLy8gU2VxdWVuY2UvVHJhY2sgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlL1RyYWNrIE5hbWUnO1xuXHRcdFx0XHRcdC8vIEdldCB2bHYgbGVuZ3RoXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRCeXRlID0gdGhpcy5wb2ludGVyO1xuXHRcdFx0XHRcdHZhciBieXRlQ291bnQgPSAxO1xuXHRcdFx0XHRcdHdoaWxlIChjdXJyZW50Qnl0ZSA+PSAxMjgpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRCeXRlID0gdGhpcy5kYXRhW3RoaXMucG9pbnRlciArIGJ5dGVDb3VudF07XG5cdFx0XHRcdFx0XHRieXRlQ291bnQrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZsdiA9IGJ5dGVDb3VudDtcblx0XHRcdFx0XHR2YXIgbGVuZ3RoID0gVXRpbHMucmVhZFZhckludCh0aGlzLmRhdGEuc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgMiwgZXZlbnRTdGFydEluZGV4ICsgMiArIGJ5dGVDb3VudCkpO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5zdHJpbmdMZW5ndGggPSBsZW5ndGg7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnN0cmluZyA9IFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRoaXMuZGF0YS5zbGljZShldmVudFN0YXJ0SW5kZXggKyBieXRlQ291bnQgKyAyLCBldmVudFN0YXJ0SW5kZXggKyBieXRlQ291bnQgKyBsZW5ndGggKyAyKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNDogLy8gSW5zdHJ1bWVudCBOYW1lXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnSW5zdHJ1bWVudCBOYW1lJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA1OiAvLyBMeXJpY1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0x5cmljJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA2OiAvLyBNYXJrZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNYXJrZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDc6IC8vIEN1ZSBQb2ludFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0N1ZSBQb2ludCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyMDogLy8gTUlESSBDaGFubmVsIFByZWZpeFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01JREkgQ2hhbm5lbCBQcmVmaXgnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MjE6IC8vIE1JREkgUG9ydFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01JREkgUG9ydCc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmRhdGEgPSBVdGlscy5ieXRlc1RvTnVtYmVyKFt0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgM11dKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDJGOiAvLyBFbmQgb2YgVHJhY2tcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdFbmQgb2YgVHJhY2snO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTE6IC8vIFNldCBUZW1wb1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NldCBUZW1wbyc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmRhdGEgPSBNYXRoLnJvdW5kKDYwMDAwMDAwIC8gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmRhdGEuc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgMywgZXZlbnRTdGFydEluZGV4ICsgNikpKTtcblx0XHRcdFx0XHR0aGlzLnRlbXBvID0gZXZlbnRKc29uLmRhdGE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1NDogLy8gU01UUEUgT2Zmc2V0XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU01UUEUgT2Zmc2V0Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU4OiAvLyBUaW1lIFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RpbWUgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU5OiAvLyBLZXkgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnS2V5IFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg3RjogLy8gU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVW5rbm93bjogJyArIHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXS50b1N0cmluZygxNik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsZW5ndGggPSB0aGlzLmRhdGFbdGhpcy5wb2ludGVyICsgZGVsdGFCeXRlQ291bnQgKyAyXTtcblx0XHRcdC8vIFNvbWUgbWV0YSBldmVudHMgd2lsbCBoYXZlIHZsdiB0aGF0IG5lZWRzIHRvIGJlIGhhbmRsZWRcblxuXHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMyArIGxlbmd0aDtcblxuXHRcdH0gZWxzZSBpZih0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA9PSAweGYwKSB7XG5cdFx0XHQvLyBTeXNleFxuXHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU3lzZXgnO1xuXHRcdFx0dmFyIGxlbmd0aCA9IHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudCArIDFdO1xuXHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMiArIGxlbmd0aDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBWb2ljZSBldmVudFxuXHRcdFx0aWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDwgMHg4MCkge1xuXHRcdFx0XHQvLyBSdW5uaW5nIHN0YXR1c1xuXHRcdFx0XHRldmVudEpzb24ucnVubmluZyA9IHRydWU7XG5cdFx0XHRcdGV2ZW50SnNvbi5ub3RlTnVtYmVyID0gdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF07XG5cdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XV07XG5cdFx0XHRcdGV2ZW50SnNvbi52ZWxvY2l0eSA9IHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICh0aGlzLmxhc3RTdGF0dXMgPD0gMHg4Zikge1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb2ZmJztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMubGFzdFN0YXR1cyA8PSAweDlmKSB7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnBvaW50ZXIgKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxhc3RTdGF0dXMgPSB0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XTtcblxuXHRcdFx0XHRpZiAodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF0gPD0gMHg4Zikge1xuXHRcdFx0XHRcdC8vIE5vdGUgb2ZmXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvZmYnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTnVtYmVyID0gdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi52ZWxvY2l0eSA9IE1hdGgucm91bmQodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDJdIC8gMTI3ICogMTAwKTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXIgKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF0gPD0gMHg5Zikge1xuXHRcdFx0XHRcdC8vIE5vdGUgb25cblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9uJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHRldmVudEpzb24udmVsb2NpdHkgPSBNYXRoLnJvdW5kKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAyXSAvIDEyNyAqIDEwMCk7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDw9IDB4YWYpIHtcblx0XHRcdFx0XHQvLyBQb2x5cGhvbmljIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BvbHlwaG9uaWMgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZSA9IENvbnN0YW50cy5OT1RFU1t0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5wcmVzc3VyZSA9IGV2ZW50WzJdO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlciArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA8PSAweGJmKSB7XG5cdFx0XHRcdFx0Ly8gQ29udHJvbGxlciBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDb250cm9sbGVyIENoYW5nZSc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm51bWJlciA9IHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24udmFsdWUgPSB0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMl07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDw9IDB4Y2YpIHtcblx0XHRcdFx0XHQvLyBQcm9ncmFtIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1Byb2dyYW0gQ2hhbmdlJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXIgKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhkZikge1xuXHRcdFx0XHRcdC8vIENoYW5uZWwgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ2hhbm5lbCBLZXkgUHJlc3N1cmUnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlciArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA8PSAweGVmKSB7XG5cdFx0XHRcdFx0Ly8gUGl0Y2ggQmVuZFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BpdGNoIEJlbmQnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlciArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRKc29uO1xuXHR9XG59Il19
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
