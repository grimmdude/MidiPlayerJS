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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJDb25zdGFudHMiLCJWRVJTSU9OIiwiTk9URVMiLCJhbGxOb3RlcyIsImNvdW50ZXIiLCJpIiwiZm9yRWFjaCIsIm5vdGVHcm91cCIsIm5vdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFlBQVk7QUFDZkMsVUFBUyxPQURNO0FBRWZDLFFBQU87QUFGUSxDQUFoQjs7QUFLQSxDQUFDLFlBQVc7QUFDWDtBQUNBLEtBQUlDLFdBQVcsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxFQUFRLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBUixFQUFxQixDQUFDLEdBQUQsQ0FBckIsRUFBNEIsQ0FBQyxJQUFELEVBQU0sSUFBTixDQUE1QixFQUF5QyxDQUFDLEdBQUQsQ0FBekMsRUFBK0MsQ0FBQyxHQUFELENBQS9DLEVBQXNELENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBdEQsRUFBbUUsQ0FBQyxHQUFELENBQW5FLEVBQTBFLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBMUUsRUFBdUYsQ0FBQyxHQUFELENBQXZGLEVBQThGLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBOUYsRUFBMkcsQ0FBQyxHQUFELENBQTNHLENBQWY7QUFDQSxLQUFJQyxVQUFVLENBQWQ7O0FBRUE7QUFDQSxNQUFLLElBQUlDLElBQUksQ0FBQyxDQUFkLEVBQWlCQSxLQUFLLENBQXRCLEVBQXlCQSxHQUF6QixFQUE4QjtBQUM3QkYsV0FBU0csT0FBVCxDQUFpQixVQUFTQyxTQUFULEVBQW9CO0FBQ3BDQSxhQUFVRCxPQUFWLENBQWtCLFVBQVNFLElBQVQsRUFBZTtBQUFDUixjQUFVRSxLQUFWLENBQWdCRSxPQUFoQixJQUEyQkksT0FBT0gsQ0FBbEM7QUFBb0MsSUFBdEU7QUFDQUQ7QUFDQSxHQUhEO0FBSUE7QUFDRCxDQVpEOztBQWNBSyxRQUFRVCxTQUFSLEdBQW9CQSxTQUFwQiIsImZpbGUiOiJjb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29uc3RhbnRzID0ge1xuXHRWRVJTSU9OOiAnMS4wLjEnLFxuXHROT1RFUzogW11cbn07XG5cbihmdW5jdGlvbigpIHtcblx0Ly8gQnVpbGRzIG5vdGVzIG9iamVjdCBmb3IgcmVmZXJlbmNlIGFnYWluc3QgYmluYXJ5IHZhbHVlcy5cblx0dmFyIGFsbE5vdGVzID0gW1snQyddLCBbJ0MjJywnRGInXSwgWydEJ10sIFsnRCMnLCdFYiddLCBbJ0UnXSxbJ0YnXSwgWydGIycsJ0diJ10sIFsnRyddLCBbJ0cjJywnQWInXSwgWydBJ10sIFsnQSMnLCdCYiddLCBbJ0InXV07XG5cdHZhciBjb3VudGVyID0gMDtcblxuXHQvLyBBbGwgYXZhaWxhYmxlIG9jdGF2ZXMuXG5cdGZvciAodmFyIGkgPSAtMTsgaSA8PSA5OyBpKyspIHtcblx0XHRhbGxOb3Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vdGVHcm91cCkge1xuXHRcdFx0bm90ZUdyb3VwLmZvckVhY2goZnVuY3Rpb24obm90ZSkge0NvbnN0YW50cy5OT1RFU1tjb3VudGVyXSA9IG5vdGUgKyBpfSk7XG5cdFx0XHRjb3VudGVyICsrO1xuXHRcdH0pO1xuXHR9XG59KSgpO1xuXG5leHBvcnRzLkNvbnN0YW50cyA9IENvbnN0YW50czsiXX0=
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
			this.getDivision().getTracks();
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

			return Utils.bytesToNumber(this.buffer.slice(8, 10));
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
					case 0x2F:
						// End of Track
						eventJson.name = 'End of Track';
						break;
					case 0x51:
						// Set Tempo
						eventJson.name = 'Set Tempo';
						eventJson.data = 60000000 / Utils.bytesToNumber(track.slice(eventStartIndex + 3, eventStartIndex + 6));
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
				}

				var length = track[this.pointers[trackIndex] + deltaByteCount + 2];
				// Some meta events will have vlv that needs to be handled

				this.pointers[trackIndex] += length + 4;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJldmVudEhhbmRsZXIiLCJidWZmZXIiLCJzdGFydFRpbWUiLCJwYXVzZVRpbWUiLCJkaXZpc2lvbiIsInNldEludGVydmFsSWQiLCJ0cmFja3MiLCJ0cmFja3NFbmFibGVkIiwidGVtcG8iLCJ0aWNrIiwibGFzdFN0YXR1c2VzIiwibGFzdFRpY2siLCJsYXN0VGlja3MiLCJwb2ludGVycyIsInBhdGgiLCJmcyIsInJlcXVpcmUiLCJyZWFkRmlsZVN5bmMiLCJmaWxlTG9hZGVkIiwiYXJyYXlCdWZmZXIiLCJVaW50OEFycmF5IiwiZGF0YVVyaSIsImJ5dGVTdHJpbmciLCJVdGlscyIsImF0b2IiLCJzcGxpdCIsIm1pbWVTdHJpbmciLCJpYSIsImxlbmd0aCIsImkiLCJjaGFyQ29kZUF0IiwidmFsaWRhdGUiLCJnZXREaXZpc2lvbiIsImdldFRyYWNrcyIsImJ5dGVzVG9MZXR0ZXJzIiwic2xpY2UiLCJieXRlc1RvTnVtYmVyIiwiZm9yRWFjaCIsImJ5dGUiLCJpbmRleCIsInRyYWNrTGVuZ3RoIiwicHVzaCIsInRyYWNrTnVtYmVyIiwidHJhY2tJbmRleCIsInRyYWNrIiwicG9pbnRlciIsImRlbHRhQnl0ZUNvdW50IiwiZ2V0RGVsdGFCeXRlQ291bnQiLCJkZWx0YSIsInJlYWRWYXJJbnQiLCJldmVudFNpZyIsImV2ZW50IiwicGFyc2VFdmVudCIsImVtaXRFdmVudCIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZ2V0VGltZSIsIm1lIiwic2V0SW50ZXJ2YWwiLCJnZXRDdXJyZW50VGljayIsImVuZE9mRmlsZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVFdmVudCIsInJlZHVjZSIsImEiLCJiIiwiY3VycmVudEJ5dGUiLCJieXRlQ291bnQiLCJNYXRoIiwicm91bmQiLCJldmVudFN0YXJ0SW5kZXgiLCJldmVudEpzb24iLCJuYW1lIiwidmx2Iiwic3RyaW5nTGVuZ3RoIiwic3RyaW5nIiwiZGF0YSIsInJ1bm5pbmciLCJub3RlTnVtYmVyIiwibm90ZU5hbWUiLCJDb25zdGFudHMiLCJOT1RFUyIsInZlbG9jaXR5Iiwibm90ZSIsInByZXNzdXJlIiwibnVtYmVyIiwidmFsdWUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsTTtBQUNMLGlCQUFZQyxZQUFaLEVBQTBCQyxNQUExQixFQUFrQztBQUFBOztBQUNqQyxPQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLE9BQUtGLE1BQUwsR0FBY0EsVUFBVSxJQUF4QjtBQUNBLE9BQUtHLFFBQUw7QUFDQSxPQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxPQUFLQyxhQUFMLEdBQXFCLEVBQXJCLENBUGlDLENBT1I7QUFDekIsT0FBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxPQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLE9BQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsRUFBaEI7O0FBRUEsT0FBS2IsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQTs7QUFFRDs7Ozs7MkJBQ1NjLEksRUFBTTtBQUNkLE9BQUlDLEtBQUtDLFFBQVEsSUFBUixDQUFUO0FBQ0EsUUFBS2YsTUFBTCxHQUFjYyxHQUFHRSxZQUFILENBQWdCSCxJQUFoQixDQUFkO0FBQ0EsVUFBTyxLQUFLSSxVQUFMLEVBQVA7QUFDQTs7O2tDQUVlQyxXLEVBQWE7QUFDNUIsUUFBS2xCLE1BQUwsR0FBYyxJQUFJbUIsVUFBSixDQUFlRCxXQUFmLENBQWQ7QUFDQSxVQUFPLEtBQUtELFVBQUwsRUFBUDtBQUNBOzs7OEJBRVdHLE8sRUFBUztBQUNwQjtBQUNBO0FBQ0EsT0FBSUMsYUFBYUMsTUFBTUMsSUFBTixDQUFXSCxRQUFRSSxLQUFSLENBQWMsR0FBZCxFQUFt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QUFVQyxJQUFWLEdBQWlCLG1CQUFqQjtBQUNBRCxnQkFBVWMsTUFBVixHQUFtQjFDLE1BQU0yQixrQkFBa0IsQ0FBeEIsQ0FBbkI7QUFDQUMsZ0JBQVVlLEtBQVYsR0FBa0IzQyxNQUFNMkIsa0JBQWtCLENBQXhCLENBQWxCO0FBQ0EsV0FBSzFELFFBQUwsQ0FBYzhCLFVBQWQsS0FBNkJHLGlCQUFpQixDQUE5QztBQUVBLE1BUE0sTUFPQSxJQUFJRixNQUFNMkIsZUFBTixLQUEwQixJQUE5QixFQUFvQztBQUMxQztBQUNBQyxnQkFBVUMsSUFBVixHQUFpQixnQkFBakI7QUFDQSxXQUFLNUQsUUFBTCxDQUFjOEIsVUFBZCxLQUE2QkcsaUJBQWlCLENBQTlDO0FBRUEsTUFMTSxNQUtBLElBQUlGLE1BQU0yQixlQUFOLEtBQTBCLElBQTlCLEVBQW9DO0FBQzFDO0FBQ0FDLGdCQUFVQyxJQUFWLEdBQWlCLHNCQUFqQjtBQUNBLFdBQUs1RCxRQUFMLENBQWM4QixVQUFkLEtBQTZCRyxpQkFBaUIsQ0FBOUM7QUFFQSxNQUxNLE1BS0EsSUFBSUYsTUFBTTJCLGVBQU4sS0FBMEIsSUFBOUIsRUFBb0M7QUFDMUM7QUFDQUMsZ0JBQVVDLElBQVYsR0FBaUIsWUFBakI7QUFDQSxXQUFLNUQsUUFBTCxDQUFjOEIsVUFBZCxLQUE2QkcsaUJBQWlCLENBQTlDO0FBQ0E7QUFDRDtBQUNEOztBQUVELFVBQU8wQixTQUFQO0FBQ0E7Ozs7OztBQUlGZ0IsUUFBUXpGLE1BQVIsR0FBaUJBLE1BQWpCIiwiZmlsZSI6InBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKGV2ZW50SGFuZGxlciwgYnVmZmVyKSB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHRoaXMucGF1c2VUaW1lID0gMDtcblx0XHR0aGlzLmJ1ZmZlciA9IGJ1ZmZlciB8fCBudWxsO1xuXHRcdHRoaXMuZGl2aXNpb247XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gbnVsbDtcblx0XHR0aGlzLnRyYWNrcyA9IFtdO1xuXHRcdHRoaXMudHJhY2tzRW5hYmxlZCA9IFtdOyAvLyAwIGRpc2FibGVkLCAxIGVuYWJsZWRcblx0XHR0aGlzLnRlbXBvID0gMTAwO1xuXHRcdHRoaXMudGljayA9IDA7XG5cdFx0dGhpcy5sYXN0U3RhdHVzZXMgPSBbXTtcblx0XHR0aGlzLmxhc3RUaWNrID0gbnVsbDtcblx0XHR0aGlzLmxhc3RUaWNrcyA9IFtdO1xuXHRcdHRoaXMucG9pbnRlcnMgPSBbXTtcblxuXHRcdHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyO1xuXHR9XG5cblx0Ly8gT25seSBmb3IgTm9kZUpTXG5cdGxvYWRGaWxlKHBhdGgpIHtcblx0XHR2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXHRcdHRoaXMuYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKHBhdGgpO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGxvYWRBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuXHRcdHRoaXMuYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGxvYWREYXRhVXJpKGRhdGFVcmkpIHtcblx0XHQvLyBjb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZ1xuXHRcdC8vIGRvZXNuJ3QgaGFuZGxlIFVSTEVuY29kZWQgRGF0YVVSSXMgLSBzZWUgU08gYW5zd2VyICM2ODUwMjc2IGZvciBjb2RlIHRoYXQgZG9lcyB0aGlzXG5cdFx0dmFyIGJ5dGVTdHJpbmcgPSBVdGlscy5hdG9iKGRhdGFVcmkuc3BsaXQoJywnKVsxXSk7XG5cblx0XHQvLyBzZXBhcmF0ZSBvdXQgdGhlIG1pbWUgY29tcG9uZW50XG5cdFx0dmFyIG1pbWVTdHJpbmcgPSBkYXRhVXJpLnNwbGl0KCcsJylbMF0uc3BsaXQoJzonKVsxXS5zcGxpdCgnOycpWzBdO1xuXG5cdFx0Ly8gd3JpdGUgdGhlIGJ5dGVzIG9mIHRoZSBzdHJpbmcgdG8gYW4gQXJyYXlCdWZmZXJcblx0XHR2YXIgaWEgPSBuZXcgVWludDhBcnJheShieXRlU3RyaW5nLmxlbmd0aCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpYVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcblx0XHR9XG5cblx0XHR0aGlzLmJ1ZmZlciA9IGlhO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGZpbGVMb2FkZWQoKSB7XG5cdFx0aWYgKCF0aGlzLnZhbGlkYXRlKCkpIHRocm93ICdJbnZhbGlkIE1JREkgZmlsZTsgc2hvdWxkIHN0YXJ0IHdpdGggTVRoZCc7XG5cdFx0dGhpcy5nZXREaXZpc2lvbigpLmdldFRyYWNrcygpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Ly8gRmlyc3QgZm91ciBieXRlcyBzaG91bGQgYmUgTVRoZFxuXHR2YWxpZGF0ZSgpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoMCwgNCkpID09PSAnTVRoZCc7XG5cdH1cblxuXHRnZXRGb3JtYXQoKSB7XG5cdFx0Lypcblx0XHRNSURJIGZpbGVzIGNvbWUgaW4gMyB2YXJpYXRpb25zOlxuXHRcdEZvcm1hdCAwIHdoaWNoIGNvbnRhaW4gYSBzaW5nbGUgdHJhY2tcblx0XHRGb3JtYXQgMSB3aGljaCBjb250YWluIG9uZSBvciBtb3JlIHNpbXVsdGFuZW91cyB0cmFja3MgXG5cdFx0KGllIGFsbCB0cmFja3MgYXJlIHRvIGJlIHBsYXllZCBzaW11bHRhbmVvdXNseSkuXG5cdFx0Rm9ybWF0IDIgd2hpY2ggY29udGFpbiBvbmUgb3IgbW9yZSBpbmRlcGVuZGFudCB0cmFja3MgXG5cdFx0KGllIGVhY2ggdHJhY2sgaXMgdG8gYmUgcGxheWVkIGluZGVwZW5kYW50bHkgb2YgdGhlIG90aGVycykuXG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0XHQqL1xuXG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0fVxuXG5cdC8vIFBhcnNlcyBvdXQgdHJhY2tzIGFuZCBwbGFjZXMgdGhlbSBpbiB0aGlzLnRyYWNrcyBhbmQgaW5pdGlhbGl6ZXMgdGhpcy5wb2ludGVyc1xuXHRnZXRUcmFja3MoKSB7XG5cdFx0dGhpcy50cmFja3MgPSBbXTtcblx0XHR0aGlzLnBvaW50ZXJzID0gW107XG5cdFx0dGhpcy5sYXN0VGlja3MgPSBbXTtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWQgPSBbXTtcblx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUsIGluZGV4KSB7XG5cdFx0XHRpZiAoVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoaW5kZXgsIGluZGV4ICsgNCkpID09ICdNVHJrJykge1xuXHRcdFx0XHR2YXIgdHJhY2tMZW5ndGggPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgNCwgaW5kZXggKyA4KSk7XG5cdFx0XHRcdHRoaXMudHJhY2tzLnB1c2godGhpcy5idWZmZXIuc2xpY2UoaW5kZXggKyA4LCBpbmRleCArIDggKyB0cmFja0xlbmd0aCkpO1xuXHRcdFx0XHR0aGlzLnBvaW50ZXJzLnB1c2goMCk7XG5cdFx0XHRcdHRoaXMubGFzdFRpY2tzLnB1c2goMCk7XG5cdFx0XHRcdHRoaXMudHJhY2tzRW5hYmxlZC5wdXNoKDEpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlbmFibGVUcmFjayh0cmFja051bWJlcikge1xuXHRcdHRoaXMudHJhY2tzRW5hYmxlZFt0cmFja051bWJlciAtIDFdID0gMTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpc2FibGVUcmFjayh0cmFja051bWJlcikge1xuXHRcdHRoaXMudHJhY2tzRW5hYmxlZFt0cmFja051bWJlciAtIDFdID0gMDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldERpdmlzaW9uKCkge1xuXHRcdHRoaXMuZGl2aXNpb24gPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDEyLCAxNCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgZXZlbnQgd2l0aGluIGEgZ2l2ZW4gdHJhY2sgc3RhcnRpbmcgYXQgc3BlY2lmaWVkIGluZGV4XG5cdCAqIEBwYXJhbSB0cmFja1xuXHQgKi9cblx0aGFuZGxlRXZlbnQodHJhY2tJbmRleCkge1xuXHRcdC8vIFBhcnNlIGRlbHRhIHZhbHVlXG5cdFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBkZWx0YUJ5dGVDb3VudCA9IHRoaXMuZ2V0RGVsdGFCeXRlQ291bnQodHJhY2tJbmRleCk7XG5cdFx0dmFyIGRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZShwb2ludGVyLCBwb2ludGVyICsgZGVsdGFCeXRlQ291bnQpKTtcblx0XHR2YXIgZXZlbnRTaWcgPSB0cmFja1twb2ludGVyICsgZGVsdGFCeXRlQ291bnRdO1xuXG5cdFx0aWYgKHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gPCB0aGlzLnRyYWNrc1t0cmFja0luZGV4XS5sZW5ndGggJiYgdGhpcy50aWNrIC0gdGhpcy5sYXN0VGlja3NbdHJhY2tJbmRleF0gPj0gZGVsdGEpIHtcblx0XHRcdHZhciBldmVudCA9IHRoaXMucGFyc2VFdmVudCh0cmFja0luZGV4LCBkZWx0YUJ5dGVDb3VudCk7XG5cblx0XHRcdGlmICh0aGlzLnRyYWNrc0VuYWJsZWRbdHJhY2tJbmRleF0gPT0gMSkgdGhpcy5lbWl0RXZlbnQoZXZlbnQpO1xuXHRcdFx0XG5cdFx0XHQvLyBSZWN1cnNpdmVseSBjYWxsIHRoaXMgZnVuY3Rpb24gZm9yIGVhY2ggZXZlbnQgYWhlYWQgdGhhdCBoYXMgMCBkZWx0YSB0aW1lP1xuXHRcdH1cblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0aWYgKHRoaXMuc2V0SW50ZXJ2YWxJZCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0FscmVhZHkgcGxheWluZy4uLicpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemVcblx0XHRpZiAoIXRoaXMuc3RhcnRUaW1lKSB7XG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdFx0fSBlbHNlIGlmICh0aGlzLnBhdXNlVGltZSkge1xuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSB0aGlzLnBhdXNlVGltZTtcblx0XHR9XG5cblx0XHQvLyBTdGFydCBwbGF5IGxvb3Bcblx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0bWUudGljayA9IG1lLmdldEN1cnJlbnRUaWNrKCk7XG5cdFx0XHRcblx0XHRcdC8vIFdoaWNoIG9uZSdzIGZhc3Rlcj9cblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPD0gbWUudHJhY2tzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKG1lLnRpY2spXG5cdFx0XHRcdC8vIEhhbmRsZSBuZXh0IGV2ZW50XG5cdFx0XHRcdGlmIChtZS5lbmRPZkZpbGUoKSkge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwobWUuc2V0SW50ZXJ2YWxJZCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZS5oYW5kbGVFdmVudChpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Lypcblx0XHRcdG1lLnRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrLCBpbmRleCkge1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKG1lLnRpY2spXG5cdFx0XHRcdC8vIEhhbmRsZSBuZXh0IGV2ZW50XG5cdFx0XHRcdGlmIChtZS5lbmRPZlRyYWNrKGluZGV4KSkge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwobWUuc2V0SW50ZXJ2YWxJZCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZS5oYW5kbGVFdmVudChpbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1x0XG5cdFx0XHQqL1xuXHRcdFx0XG5cdFx0fSwgMTApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gZmFsc2U7XG5cdFx0dGhpcy5wYXVzZVRpbWUgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHN0b3AoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNldEludGVydmFsSWQpO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IGZhbHNlO1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRpc1BsYXlpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0SW50ZXJ2YWxJZCA+IDA7XG5cdH1cblxuXHRlbmRPZlRyYWNrKHRyYWNrSW5kZXgpIHtcblx0XHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0aWYgKHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAxXSA9PSAweGZmICYmIHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAyXSA9PSAweDJmICYmIHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdW3BvaW50ZXIgKyAzXSA9PSAweDAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRlbmRPZkZpbGUoKSB7XG5cdFx0Ly8gQ3VycmVudGx5IGFzc3VtZSBoZWFkZXIgY2h1bmsgaXMgc3RyaWN0bHkgMTQgYnl0ZXNcblx0XHRyZXR1cm4gMTQgKyB0aGlzLnRyYWNrcy5sZW5ndGggKiA4ICsgdGhpcy5wb2ludGVycy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge3JldHVybiBhK2J9LCAwKSA9PSB0aGlzLmJ1ZmZlci5sZW5ndGg7XG5cdH1cblxuXHRnZXREZWx0YUJ5dGVDb3VudCh0cmFja0luZGV4KSB7XG5cdFx0Ly8gR2V0IGJ5dGUgY291bnQgb2YgZGVsdGEgVkxWXG5cdFx0Ly8gaHR0cDovL3d3dy5jY2FyaC5vcmcvY291cnNlcy8yNTMvaGFuZG91dC92bHYvXG5cdFx0Ly8gSWYgYnl0ZSBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIDgwaCAoMTI4IGRlY2ltYWwpIHRoZW4gdGhlIG5leHQgYnl0ZSBcblx0ICAgIC8vIGlzIGFsc28gcGFydCBvZiB0aGUgVkxWLFxuXHQgICBcdC8vIGVsc2UgYnl0ZSBpcyB0aGUgbGFzdCBieXRlIGluIGEgVkxWLlxuXHQgICBcdHZhciB0cmFjayA9IHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdO1xuXHQgICBcdHZhciBwb2ludGVyID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0ICAgXHR2YXIgY3VycmVudEJ5dGUgPSB0cmFja1twb2ludGVyXTtcblx0ICAgXHR2YXIgYnl0ZUNvdW50ID0gMTtcblxuXHRcdHdoaWxlIChjdXJyZW50Qnl0ZSA+PSAxMjgpIHtcblx0XHRcdGN1cnJlbnRCeXRlID0gdHJhY2tbcG9pbnRlciArIGJ5dGVDb3VudF07XG5cdFx0XHRieXRlQ291bnQrKztcblx0XHR9XG5cblx0XHRyZXR1cm4gYnl0ZUNvdW50O1xuXHR9XG5cblx0Z2V0Q3VycmVudFRpY2soKSB7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChuZXcgRGF0ZSkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMCAqICh0aGlzLmRpdmlzaW9uICogKHRoaXMudGVtcG8gLyA2MCkpKTtcblx0fVxuXG5cdGVtaXRFdmVudChldmVudCkge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5ldmVudEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHRoaXMuZXZlbnRIYW5kbGVyKGV2ZW50KTtcblx0fVxuXG5cdC8vIFBhcnNlcyBldmVudCBpbnRvIEpTT04gYW5kIGFkdmFuY2VzIHBvaW50ZXIgZm9yIHRoZSB0cmFja1xuXHRwYXJzZUV2ZW50KHRyYWNrSW5kZXgsIGRlbHRhQnl0ZUNvdW50KSB7XG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLnRpY2spO1xuXHRcdHZhciB0cmFjayA9IHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBldmVudFN0YXJ0SW5kZXggPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQ7XG5cdFx0dmFyIGV2ZW50SnNvbiA9IHt9O1xuXHRcdGV2ZW50SnNvbi50cmFjayA9IHRyYWNrSW5kZXggKyAxO1xuXHRcdGV2ZW50SnNvbi5kZWx0YSA9IFV0aWxzLnJlYWRWYXJJbnQodHJhY2suc2xpY2UodGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSwgdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50KSk7XG5cdFx0dGhpcy5sYXN0VGlja3NbdHJhY2tJbmRleF0gPSB0aGlzLmxhc3RUaWNrc1t0cmFja0luZGV4XSArIGV2ZW50SnNvbi5kZWx0YTtcblxuXHRcdC8vZXZlbnRKc29uLnJhdyA9IGV2ZW50O1xuXHRcdGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdID09IDB4ZmYpIHtcblx0XHRcdC8vIE1ldGEgRXZlbnRcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIG1ldGEgZXZlbnQgd2Ugc2hvdWxkIGVtaXQgdGhlIGRhdGEgYW5kIGltbWVkaWF0ZWx5IG1vdmUgdG8gdGhlIG5leHQgZXZlbnRcblx0XHRcdC8vIG90aGVyd2lzZSBpZiB3ZSBsZXQgaXQgcnVuIHRocm91Z2ggdGhlIG5leHQgY3ljbGUgYSBzbGlnaHQgZGVsYXkgd2lsbCBhY2N1bXVsYXRlIGlmIG11bHRpcGxlIHRyYWNrc1xuXHRcdFx0Ly8gYXJlIGJlaW5nIHBsYXllZCBzaW11bHRhbmVvdXNseVxuXG5cdFx0XHRzd2l0Y2godHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV0pIHtcblx0XHRcdFx0Y2FzZSAweDAwOiAvLyBTZXF1ZW5jZSBOdW1iZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZSBOdW1iZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDE6IC8vIFRleHQgRXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUZXh0IEV2ZW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAyOiAvLyBDb3B5cmlnaHQgTm90aWNlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ29weXJpZ2h0IE5vdGljZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMzogLy8gU2VxdWVuY2UvVHJhY2sgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlL1RyYWNrIE5hbWUnO1xuXHRcdFx0XHRcdC8vIEdldCB2bHYgbGVuZ3RoXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRCeXRlID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0XHRcdFx0XHR2YXIgYnl0ZUNvdW50ID0gMTtcblx0XHRcdFx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50Qnl0ZSA9IHRyYWNrW3RoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBieXRlQ291bnRdO1xuXHRcdFx0XHRcdFx0Ynl0ZUNvdW50Kys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50SnNvbi52bHYgPSBieXRlQ291bnQ7XG5cdFx0XHRcdFx0dmFyIGxlbmd0aCA9IFV0aWxzLnJlYWRWYXJJbnQodHJhY2suc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgMiwgZXZlbnRTdGFydEluZGV4ICsgMiArIGJ5dGVDb3VudCkpO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5zdHJpbmdMZW5ndGggPSBsZW5ndGg7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnN0cmluZyA9IFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRyYWNrLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIGJ5dGVDb3VudCArIDIsIGV2ZW50U3RhcnRJbmRleCArIGJ5dGVDb3VudCArIGxlbmd0aCArIDIpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA0OiAvLyBJbnN0cnVtZW50IE5hbWVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdJbnN0cnVtZW50IE5hbWUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDU6IC8vIEx5cmljXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTHlyaWMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDY6IC8vIE1hcmtlclxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01hcmtlcic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNzogLy8gQ3VlIFBvaW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ3VlIFBvaW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDIwOiAvLyBNSURJIENoYW5uZWwgUHJlZml4XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTUlESSBDaGFubmVsIFByZWZpeCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyRjogLy8gRW5kIG9mIFRyYWNrXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnRW5kIG9mIFRyYWNrJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDUxOiAvLyBTZXQgVGVtcG9cblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXQgVGVtcG8nO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5kYXRhID0gNjAwMDAwMDAgLyBVdGlscy5ieXRlc1RvTnVtYmVyKHRyYWNrLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIDMsIGV2ZW50U3RhcnRJbmRleCArIDYpKTtcblx0XHRcdFx0XHR0aGlzLnRlbXBvID0gZXZlbnRKc29uLmRhdGE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1NDogLy8gU01UUEUgT2Zmc2V0XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU01UUEUgT2Zmc2V0Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU4OiAvLyBUaW1lIFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RpbWUgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU5OiAvLyBLZXkgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnS2V5IFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg3RjogLy8gU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsZW5ndGggPSB0cmFja1t0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQgKyAyXTtcblx0XHRcdC8vIFNvbWUgbWV0YSBldmVudHMgd2lsbCBoYXZlIHZsdiB0aGF0IG5lZWRzIHRvIGJlIGhhbmRsZWRcblxuXHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBsZW5ndGggKyA0O1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFZvaWNlIGV2ZW50XG5cdFx0XHRpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8IDB4ODApIHtcblx0XHRcdFx0Ly8gUnVubmluZyBzdGF0dXNcblx0XHRcdFx0ZXZlbnRKc29uLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleF07XG5cdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXhdXTtcblx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5sYXN0U3RhdHVzZXNbdHJhY2tJbmRleF0gPD0gMHg4Zikge1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb2ZmJztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMubGFzdFN0YXR1c2VzW3RyYWNrSW5kZXhdIDw9IDB4OWYpIHtcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9uJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxhc3RTdGF0dXNlc1t0cmFja0luZGV4XSA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleF07XG5cblx0XHRcdFx0aWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHg4Zikge1xuXHRcdFx0XHRcdC8vIE5vdGUgb2ZmXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvZmYnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTnVtYmVyID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOYW1lID0gQ29uc3RhbnRzLk5PVEVTW3RyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHRldmVudEpzb24udmVsb2NpdHkgPSBNYXRoLnJvdW5kKHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDJdIC8gMTI3ICogMTAwKTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHg5Zikge1xuXHRcdFx0XHRcdC8vIE5vdGUgb25cblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9uJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gTWF0aC5yb3VuZCh0cmFja1tldmVudFN0YXJ0SW5kZXggKyAyXSAvIDEyNyAqIDEwMCk7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4YWYpIHtcblx0XHRcdFx0XHQvLyBQb2x5cGhvbmljIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BvbHlwaG9uaWMgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnByZXNzdXJlID0gZXZlbnRbMl07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4YmYpIHtcblx0XHRcdFx0XHQvLyBDb250cm9sbGVyIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvbnRyb2xsZXIgQ2hhbmdlJztcblx0XHRcdFx0XHRldmVudEpzb24ubnVtYmVyID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZhbHVlID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMl07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4Y2YpIHtcblx0XHRcdFx0XHQvLyBQcm9ncmFtIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1Byb2dyYW0gQ2hhbmdlJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhkZikge1xuXHRcdFx0XHRcdC8vIENoYW5uZWwgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ2hhbm5lbCBLZXkgUHJlc3N1cmUnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGVmKSB7XG5cdFx0XHRcdFx0Ly8gUGl0Y2ggQmVuZFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BpdGNoIEJlbmQnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50SnNvbjtcblx0fVxuXG59XG5cbmV4cG9ydHMuUGxheWVyID0gUGxheWVyOyJdfQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIlV0aWxzIiwiYnl0ZSIsInRvU3RyaW5nIiwiYnl0ZUFycmF5IiwiaGV4IiwiZm9yRWFjaCIsInB1c2giLCJieXRlVG9IZXgiLCJqb2luIiwiaGV4U3RyaW5nIiwicGFyc2VJbnQiLCJoZXhUb051bWJlciIsImJ5dGVzVG9IZXgiLCJsZXR0ZXJzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZGVjIiwicmVzdWx0IiwibnVtYmVyIiwiYiIsInN0cmluZyIsImF0b2IiLCJCdWZmZXIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsSzs7Ozs7Ozs0QkFDWUMsSSxFQUFNO0FBQ3RCLFVBQU9BLEtBQUtDLFFBQUwsQ0FBYyxFQUFkLENBQVA7QUFDQTs7OzZCQUVpQkMsUyxFQUFXO0FBQzVCLE9BQUlDLE1BQU0sRUFBVjs7QUFFQUQsYUFBVUUsT0FBVixDQUFrQixVQUFTSixJQUFULEVBQWU7QUFDaENHLFFBQUlFLElBQUosQ0FBU04sTUFBTU8sU0FBTixDQUFnQk4sSUFBaEIsQ0FBVDtBQUNBLElBRkQ7O0FBSUEsVUFBT0csSUFBSUksSUFBSixDQUFTLEVBQVQsQ0FBUDtBQUNBOzs7OEJBRWtCQyxTLEVBQVc7QUFDN0IsVUFBT0MsU0FBU0QsU0FBVCxFQUFvQixFQUFwQixDQUFQO0FBQ0E7OztnQ0FFb0JOLFMsRUFBVztBQUMvQixVQUFPSCxNQUFNVyxXQUFOLENBQWtCWCxNQUFNWSxVQUFOLENBQWlCVCxTQUFqQixDQUFsQixDQUFQO0FBQ0E7OztpQ0FFcUJBLFMsRUFBVztBQUNoQyxPQUFJVSxVQUFVLEVBQWQ7QUFDQVYsYUFBVUUsT0FBVixDQUFrQixVQUFTSixJQUFULEVBQWU7QUFDaENZLFlBQVFQLElBQVIsQ0FBYVEsT0FBT0MsWUFBUCxDQUFvQmQsSUFBcEIsQ0FBYjtBQUNBLElBRkQ7O0FBSUEsVUFBT1ksUUFBUUwsSUFBUixDQUFhLEVBQWIsQ0FBUDtBQUNBOzs7OEJBRWtCUSxHLEVBQUs7QUFDcEIsVUFBTyxDQUFDQSxRQUFRLENBQVQsRUFBWWQsUUFBWixDQUFxQixDQUFyQixDQUFQO0FBQ0g7Ozs2QkFFaUJDLFMsRUFBVztBQUM1QixPQUFJYyxTQUFTLENBQWI7QUFDQWQsYUFBVUUsT0FBVixDQUFrQixVQUFTYSxNQUFULEVBQWlCO0FBQ2xDLFFBQUlDLElBQUlELE1BQVI7QUFDQSxRQUFJQyxJQUFJLElBQVIsRUFBYztBQUNiRixlQUFXRSxJQUFJLElBQWY7QUFDQUYsZ0JBQVcsQ0FBWDtBQUNBLEtBSEQsTUFHTztBQUNOO0FBQ0FBLGVBQVVFLENBQVY7QUFDQTtBQUNELElBVEQ7O0FBV0EsVUFBT0YsTUFBUDtBQUNBOzs7Ozs7Ozs7Ozs7O2NBRVdHLE0sRUFBUTtBQUNuQixPQUFJLE9BQU9DLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0MsT0FBT0EsS0FBS0QsTUFBTCxDQUFQO0FBQ2hDLFVBQU8sSUFBSUUsTUFBSixDQUFXRixNQUFYLEVBQW1CLFFBQW5CLEVBQTZCbEIsUUFBN0IsQ0FBc0MsUUFBdEMsQ0FBUDtBQUNBLEc7Ozs7OztBQUdGcUIsUUFBUXZCLEtBQVIsR0FBZ0JBLEtBQWhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVXRpbHMge1xuXHRzdGF0aWMgYnl0ZVRvSGV4KGJ5dGUpIHtcblx0XHRyZXR1cm4gYnl0ZS50b1N0cmluZygxNik7XG5cdH1cblxuXHRzdGF0aWMgYnl0ZXNUb0hleChieXRlQXJyYXkpIHtcblx0XHR2YXIgaGV4ID0gW107XG5cblx0XHRieXRlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihieXRlKSB7XG5cdFx0XHRoZXgucHVzaChVdGlscy5ieXRlVG9IZXgoYnl0ZSkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGhleC5qb2luKCcnKTtcblx0fVxuXG5cdHN0YXRpYyBoZXhUb051bWJlcihoZXhTdHJpbmcpIHtcblx0XHRyZXR1cm4gcGFyc2VJbnQoaGV4U3RyaW5nLCAxNik7XG5cdH1cblxuXHRzdGF0aWMgYnl0ZXNUb051bWJlcihieXRlQXJyYXkpIHtcblx0XHRyZXR1cm4gVXRpbHMuaGV4VG9OdW1iZXIoVXRpbHMuYnl0ZXNUb0hleChieXRlQXJyYXkpKTtcblx0fVxuXG5cdHN0YXRpYyBieXRlc1RvTGV0dGVycyhieXRlQXJyYXkpIHtcblx0XHR2YXIgbGV0dGVycyA9IFtdO1xuXHRcdGJ5dGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUpIHtcblx0XHRcdGxldHRlcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBsZXR0ZXJzLmpvaW4oJycpO1xuXHR9XG5cblx0c3RhdGljIGRlY1RvQmluYXJ5KGRlYykge1xuICAgIFx0cmV0dXJuIChkZWMgPj4+IDApLnRvU3RyaW5nKDIpO1xuXHR9XG5cblx0c3RhdGljIHJlYWRWYXJJbnQoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIHJlc3VsdCA9IDA7XG5cdFx0Ynl0ZUFycmF5LmZvckVhY2goZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0XHR2YXIgYiA9IG51bWJlcjtcblx0XHRcdGlmIChiICYgMHg4MCkge1xuXHRcdFx0XHRyZXN1bHQgKz0gKGIgJiAweDdmKTtcblx0XHRcdFx0cmVzdWx0IDw8PSA3O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0LyogYiBpcyB0aGUgbGFzdCBieXRlICovXG5cdFx0XHRcdHJlc3VsdCArPSBiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHN0YXRpYyBhdG9iKHN0cmluZykge1xuXHRcdGlmICh0eXBlb2YgYXRvYiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGF0b2Ioc3RyaW5nKTtcblx0XHRyZXR1cm4gbmV3IEJ1ZmZlcihzdHJpbmcsICdiYXNlNjQnKS50b1N0cmluZygnYmluYXJ5Jyk7XG5cdH1cbn1cblxuZXhwb3J0cy5VdGlscyA9IFV0aWxzOyJdfQ==
