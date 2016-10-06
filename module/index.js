'use strict';

var Constants = {
	VERSION: '1.0.0',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJDb25zdGFudHMiLCJWRVJTSU9OIiwiTk9URVMiLCJhbGxOb3RlcyIsImNvdW50ZXIiLCJpIiwiZm9yRWFjaCIsIm5vdGVHcm91cCIsIm5vdGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFlBQVk7QUFDZkMsVUFBUyxPQURNO0FBRWZDLFFBQU87QUFGUSxDQUFoQjs7QUFLQSxDQUFDLFlBQVc7QUFDWDtBQUNBLEtBQUlDLFdBQVcsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxFQUFRLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBUixFQUFxQixDQUFDLEdBQUQsQ0FBckIsRUFBNEIsQ0FBQyxJQUFELEVBQU0sSUFBTixDQUE1QixFQUF5QyxDQUFDLEdBQUQsQ0FBekMsRUFBK0MsQ0FBQyxHQUFELENBQS9DLEVBQXNELENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBdEQsRUFBbUUsQ0FBQyxHQUFELENBQW5FLEVBQTBFLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBMUUsRUFBdUYsQ0FBQyxHQUFELENBQXZGLEVBQThGLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBOUYsRUFBMkcsQ0FBQyxHQUFELENBQTNHLENBQWY7QUFDQSxLQUFJQyxVQUFVLENBQWQ7O0FBRUE7QUFDQSxNQUFLLElBQUlDLElBQUksQ0FBQyxDQUFkLEVBQWlCQSxLQUFLLENBQXRCLEVBQXlCQSxHQUF6QixFQUE4QjtBQUM3QkYsV0FBU0csT0FBVCxDQUFpQixVQUFTQyxTQUFULEVBQW9CO0FBQ3BDQSxhQUFVRCxPQUFWLENBQWtCLFVBQVNFLElBQVQsRUFBZTtBQUFDUixjQUFVRSxLQUFWLENBQWdCRSxPQUFoQixJQUEyQkksT0FBT0gsQ0FBbEM7QUFBb0MsSUFBdEU7QUFDQUQ7QUFDQSxHQUhEO0FBSUE7QUFDRCxDQVpEOztBQWNBSyxRQUFRVCxTQUFSLEdBQW9CQSxTQUFwQiIsImZpbGUiOiJjb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29uc3RhbnRzID0ge1xuXHRWRVJTSU9OOiAnMS4wLjAnLFxuXHROT1RFUzogW11cbn07XG5cbihmdW5jdGlvbigpIHtcblx0Ly8gQnVpbGRzIG5vdGVzIG9iamVjdCBmb3IgcmVmZXJlbmNlIGFnYWluc3QgYmluYXJ5IHZhbHVlcy5cblx0dmFyIGFsbE5vdGVzID0gW1snQyddLCBbJ0MjJywnRGInXSwgWydEJ10sIFsnRCMnLCdFYiddLCBbJ0UnXSxbJ0YnXSwgWydGIycsJ0diJ10sIFsnRyddLCBbJ0cjJywnQWInXSwgWydBJ10sIFsnQSMnLCdCYiddLCBbJ0InXV07XG5cdHZhciBjb3VudGVyID0gMDtcblxuXHQvLyBBbGwgYXZhaWxhYmxlIG9jdGF2ZXMuXG5cdGZvciAodmFyIGkgPSAtMTsgaSA8PSA5OyBpKyspIHtcblx0XHRhbGxOb3Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vdGVHcm91cCkge1xuXHRcdFx0bm90ZUdyb3VwLmZvckVhY2goZnVuY3Rpb24obm90ZSkge0NvbnN0YW50cy5OT1RFU1tjb3VudGVyXSA9IG5vdGUgKyBpfSk7XG5cdFx0XHRjb3VudGVyICsrO1xuXHRcdH0pO1xuXHR9XG59KSgpO1xuXG5leHBvcnRzLkNvbnN0YW50cyA9IENvbnN0YW50czsiXX0=
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
	function Player(eventHandler, buffer) {
		_classCallCheck(this, Player);

		this.startTime = 0;
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
			}, 1);

			return this;
		}
	}, {
		key: 'pause',
		value: function pause() {
			clearInterval(this.setIntervalId);
			this.setIntervalId = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJldmVudEhhbmRsZXIiLCJidWZmZXIiLCJzdGFydFRpbWUiLCJkaXZpc2lvbiIsInNldEludGVydmFsSWQiLCJ0cmFja3MiLCJ0cmFja3NFbmFibGVkIiwidGVtcG8iLCJ0aWNrIiwibGFzdFN0YXR1c2VzIiwibGFzdFRpY2siLCJsYXN0VGlja3MiLCJwb2ludGVycyIsInBhdGgiLCJmcyIsInJlcXVpcmUiLCJyZWFkRmlsZVN5bmMiLCJmaWxlTG9hZGVkIiwiYXJyYXlCdWZmZXIiLCJVaW50OEFycmF5IiwiZGF0YVVyaSIsImJ5dGVTdHJpbmciLCJVdGlscyIsImF0b2IiLCJzcGxpdCIsIm1pbWVTdHJpbmciLCJpYSIsImxlbmd0aCIsImkiLCJjaGFyQ29kZUF0IiwidmFsaWRhdGUiLCJnZXREaXZpc2lvbiIsImdldFRyYWNrcyIsImJ5dGVzVG9MZXR0ZXJzIiwic2xpY2UiLCJieXRlc1RvTnVtYmVyIiwiZm9yRWFjaCIsImJ5dGUiLCJpbmRleCIsInRyYWNrTGVuZ3RoIiwicHVzaCIsInRyYWNrTnVtYmVyIiwidHJhY2tJbmRleCIsInRyYWNrIiwicG9pbnRlciIsImRlbHRhQnl0ZUNvdW50IiwiZ2V0RGVsdGFCeXRlQ291bnQiLCJkZWx0YSIsInJlYWRWYXJJbnQiLCJldmVudFNpZyIsImV2ZW50IiwicGFyc2VFdmVudCIsImVtaXRFdmVudCIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZ2V0VGltZSIsIm1lIiwic2V0SW50ZXJ2YWwiLCJnZXRDdXJyZW50VGljayIsImVuZE9mRmlsZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVFdmVudCIsInJlZHVjZSIsImEiLCJiIiwiY3VycmVudEJ5dGUiLCJieXRlQ291bnQiLCJNYXRoIiwicm91bmQiLCJldmVudFN0YXJ0SW5kZXgiLCJldmVudEpzb24iLCJuYW1lIiwidmx2Iiwic3RyaW5nTGVuZ3RoIiwic3RyaW5nIiwiZGF0YSIsInJ1bm5pbmciLCJub3RlTnVtYmVyIiwibm90ZU5hbWUiLCJDb25zdGFudHMiLCJOT1RFUyIsInZlbG9jaXR5Iiwibm90ZSIsInByZXNzdXJlIiwibnVtYmVyIiwidmFsdWUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsTTtBQUNMLGlCQUFZQyxZQUFaLEVBQTBCQyxNQUExQixFQUFrQztBQUFBOztBQUNqQyxPQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsT0FBS0QsTUFBTCxHQUFjQSxVQUFVLElBQXhCO0FBQ0EsT0FBS0UsUUFBTDtBQUNBLE9BQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxPQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLE9BQUtDLGFBQUwsR0FBcUIsRUFBckIsQ0FOaUMsQ0FNUjtBQUN6QixPQUFLQyxLQUFMLEdBQWEsR0FBYjtBQUNBLE9BQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixFQUFoQjs7QUFFQSxPQUFLWixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBOztBQUVEOzs7OzsyQkFDU2EsSSxFQUFNO0FBQ2QsT0FBSUMsS0FBS0MsUUFBUSxJQUFSLENBQVQ7QUFDQSxRQUFLZCxNQUFMLEdBQWNhLEdBQUdFLFlBQUgsQ0FBZ0JILElBQWhCLENBQWQ7QUFDQSxVQUFPLEtBQUtJLFVBQUwsRUFBUDtBQUNBOzs7a0NBRWVDLFcsRUFBYTtBQUM1QixRQUFLakIsTUFBTCxHQUFjLElBQUlrQixVQUFKLENBQWVELFdBQWYsQ0FBZDtBQUNBLFVBQU8sS0FBS0QsVUFBTCxFQUFQO0FBQ0E7Ozs4QkFFV0csTyxFQUFTO0FBQ3BCO0FBQ0E7QUFDQSxPQUFJQyxhQUFhQyxNQUFNQyxJQUFOLENBQVdILFFBQVFJLEtBQVIsQ0FBYyxHQUFkLEVBQW1CLENBQW5CLENBQVgsQ0FBakI7O0FBRUE7QUFDQSxPQUFJQyxhQUFh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Q0FBOUM7QUFFQSxNQVBNLE1BT0EsSUFBSUYsTUFBTTJCLGVBQU4sS0FBMEIsSUFBOUIsRUFBb0M7QUFDMUM7QUFDQUMsZ0JBQVVDLElBQVYsR0FBaUIsZ0JBQWpCO0FBQ0EsV0FBSzVELFFBQUwsQ0FBYzhCLFVBQWQsS0FBNkJHLGlCQUFpQixDQUE5QztBQUVBLE1BTE0sTUFLQSxJQUFJRixNQUFNMkIsZUFBTixLQUEwQixJQUE5QixFQUFvQztBQUMxQztBQUNBQyxnQkFBVUMsSUFBVixHQUFpQixzQkFBakI7QUFDQSxXQUFLNUQsUUFBTCxDQUFjOEIsVUFBZCxLQUE2QkcsaUJBQWlCLENBQTlDO0FBRUEsTUFMTSxNQUtBLElBQUlGLE1BQU0yQixlQUFOLEtBQTBCLElBQTlCLEVBQW9DO0FBQzFDO0FBQ0FDLGdCQUFVQyxJQUFWLEdBQWlCLFlBQWpCO0FBQ0EsV0FBSzVELFFBQUwsQ0FBYzhCLFVBQWQsS0FBNkJHLGlCQUFpQixDQUE5QztBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxVQUFPMEIsU0FBUDtBQUNBOzs7Ozs7QUFJRmdCLFFBQVF4RixNQUFSLEdBQWlCQSxNQUFqQiIsImZpbGUiOiJwbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF5ZXIge1xuXHRjb25zdHJ1Y3RvcihldmVudEhhbmRsZXIsIGJ1ZmZlcikge1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblx0XHR0aGlzLmJ1ZmZlciA9IGJ1ZmZlciB8fCBudWxsO1xuXHRcdHRoaXMuZGl2aXNpb247XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gbnVsbDtcblx0XHR0aGlzLnRyYWNrcyA9IFtdO1xuXHRcdHRoaXMudHJhY2tzRW5hYmxlZCA9IFtdOyAvLyAwIGRpc2FibGVkLCAxIGVuYWJsZWRcblx0XHR0aGlzLnRlbXBvID0gMTAwO1xuXHRcdHRoaXMudGljayA9IDA7XG5cdFx0dGhpcy5sYXN0U3RhdHVzZXMgPSBbXTtcblx0XHR0aGlzLmxhc3RUaWNrID0gbnVsbDtcblx0XHR0aGlzLmxhc3RUaWNrcyA9IFtdO1xuXHRcdHRoaXMucG9pbnRlcnMgPSBbXTtcblxuXHRcdHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyO1xuXHR9XG5cblx0Ly8gT25seSBmb3IgTm9kZUpTXG5cdGxvYWRGaWxlKHBhdGgpIHtcblx0XHR2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXHRcdHRoaXMuYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKHBhdGgpO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGxvYWRBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuXHRcdHRoaXMuYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGxvYWREYXRhVXJpKGRhdGFVcmkpIHtcblx0XHQvLyBjb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZ1xuXHRcdC8vIGRvZXNuJ3QgaGFuZGxlIFVSTEVuY29kZWQgRGF0YVVSSXMgLSBzZWUgU08gYW5zd2VyICM2ODUwMjc2IGZvciBjb2RlIHRoYXQgZG9lcyB0aGlzXG5cdFx0dmFyIGJ5dGVTdHJpbmcgPSBVdGlscy5hdG9iKGRhdGFVcmkuc3BsaXQoJywnKVsxXSk7XG5cblx0XHQvLyBzZXBhcmF0ZSBvdXQgdGhlIG1pbWUgY29tcG9uZW50XG5cdFx0dmFyIG1pbWVTdHJpbmcgPSBkYXRhVXJpLnNwbGl0KCcsJylbMF0uc3BsaXQoJzonKVsxXS5zcGxpdCgnOycpWzBdO1xuXG5cdFx0Ly8gd3JpdGUgdGhlIGJ5dGVzIG9mIHRoZSBzdHJpbmcgdG8gYW4gQXJyYXlCdWZmZXJcblx0XHR2YXIgaWEgPSBuZXcgVWludDhBcnJheShieXRlU3RyaW5nLmxlbmd0aCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpYVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcblx0XHR9XG5cblx0XHR0aGlzLmJ1ZmZlciA9IGlhO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGZpbGVMb2FkZWQoKSB7XG5cdFx0aWYgKCF0aGlzLnZhbGlkYXRlKCkpIHRocm93ICdJbnZhbGlkIE1JREkgZmlsZTsgc2hvdWxkIHN0YXJ0IHdpdGggTVRoZCc7XG5cdFx0dGhpcy5nZXREaXZpc2lvbigpLmdldFRyYWNrcygpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Ly8gRmlyc3QgZm91ciBieXRlcyBzaG91bGQgYmUgTVRoZFxuXHR2YWxpZGF0ZSgpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoMCwgNCkpID09PSAnTVRoZCc7XG5cdH1cblxuXHRnZXRGb3JtYXQoKSB7XG5cdFx0Lypcblx0XHRNSURJIGZpbGVzIGNvbWUgaW4gMyB2YXJpYXRpb25zOlxuXHRcdEZvcm1hdCAwIHdoaWNoIGNvbnRhaW4gYSBzaW5nbGUgdHJhY2tcblx0XHRGb3JtYXQgMSB3aGljaCBjb250YWluIG9uZSBvciBtb3JlIHNpbXVsdGFuZW91cyB0cmFja3MgXG5cdFx0KGllIGFsbCB0cmFja3MgYXJlIHRvIGJlIHBsYXllZCBzaW11bHRhbmVvdXNseSkuXG5cdFx0Rm9ybWF0IDIgd2hpY2ggY29udGFpbiBvbmUgb3IgbW9yZSBpbmRlcGVuZGFudCB0cmFja3MgXG5cdFx0KGllIGVhY2ggdHJhY2sgaXMgdG8gYmUgcGxheWVkIGluZGVwZW5kYW50bHkgb2YgdGhlIG90aGVycykuXG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0XHQqL1xuXG5cdFx0cmV0dXJuIFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0fVxuXG5cdC8vIFBhcnNlcyBvdXQgdHJhY2tzIGFuZCBwbGFjZXMgdGhlbSBpbiB0aGlzLnRyYWNrcyBhbmQgaW5pdGlhbGl6ZXMgdGhpcy5wb2ludGVyc1xuXHRnZXRUcmFja3MoKSB7XG5cdFx0dGhpcy50cmFja3MgPSBbXTtcblx0XHR0aGlzLnBvaW50ZXJzID0gW107XG5cdFx0dGhpcy5sYXN0VGlja3MgPSBbXTtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWQgPSBbXTtcblx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUsIGluZGV4KSB7XG5cdFx0XHRpZiAoVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoaW5kZXgsIGluZGV4ICsgNCkpID09ICdNVHJrJykge1xuXHRcdFx0XHR2YXIgdHJhY2tMZW5ndGggPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgNCwgaW5kZXggKyA4KSk7XG5cdFx0XHRcdHRoaXMudHJhY2tzLnB1c2godGhpcy5idWZmZXIuc2xpY2UoaW5kZXggKyA4LCBpbmRleCArIDggKyB0cmFja0xlbmd0aCkpO1xuXHRcdFx0XHR0aGlzLnBvaW50ZXJzLnB1c2goMCk7XG5cdFx0XHRcdHRoaXMubGFzdFRpY2tzLnB1c2goMCk7XG5cdFx0XHRcdHRoaXMudHJhY2tzRW5hYmxlZC5wdXNoKDEpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlbmFibGVUcmFjayh0cmFja051bWJlcikge1xuXHRcdHRoaXMudHJhY2tzRW5hYmxlZFt0cmFja051bWJlciAtIDFdID0gMTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpc2FibGVUcmFjayh0cmFja051bWJlcikge1xuXHRcdHRoaXMudHJhY2tzRW5hYmxlZFt0cmFja051bWJlciAtIDFdID0gMDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldERpdmlzaW9uKCkge1xuXHRcdHRoaXMuZGl2aXNpb24gPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKDEyLCAxNCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgZXZlbnQgd2l0aGluIGEgZ2l2ZW4gdHJhY2sgc3RhcnRpbmcgYXQgc3BlY2lmaWVkIGluZGV4XG5cdCAqIEBwYXJhbSB0cmFja1xuXHQgKi9cblx0aGFuZGxlRXZlbnQodHJhY2tJbmRleCkge1xuXHRcdC8vIFBhcnNlIGRlbHRhIHZhbHVlXG5cdFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBkZWx0YUJ5dGVDb3VudCA9IHRoaXMuZ2V0RGVsdGFCeXRlQ291bnQodHJhY2tJbmRleCk7XG5cdFx0dmFyIGRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZShwb2ludGVyLCBwb2ludGVyICsgZGVsdGFCeXRlQ291bnQpKTtcblx0XHR2YXIgZXZlbnRTaWcgPSB0cmFja1twb2ludGVyICsgZGVsdGFCeXRlQ291bnRdO1xuXG5cdFx0aWYgKHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gPCB0aGlzLnRyYWNrc1t0cmFja0luZGV4XS5sZW5ndGggJiYgdGhpcy50aWNrIC0gdGhpcy5sYXN0VGlja3NbdHJhY2tJbmRleF0gPj0gZGVsdGEpIHtcblx0XHRcdHZhciBldmVudCA9IHRoaXMucGFyc2VFdmVudCh0cmFja0luZGV4LCBkZWx0YUJ5dGVDb3VudCk7XG5cblx0XHRcdGlmICh0aGlzLnRyYWNrc0VuYWJsZWRbdHJhY2tJbmRleF0gPT0gMSkgdGhpcy5lbWl0RXZlbnQoZXZlbnQpO1xuXHRcdFx0XG5cdFx0XHQvLyBSZWN1cnNpdmVseSBjYWxsIHRoaXMgZnVuY3Rpb24gZm9yIGVhY2ggZXZlbnQgYWhlYWQgdGhhdCBoYXMgMCBkZWx0YSB0aW1lP1xuXHRcdH1cblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0aWYgKHRoaXMuc2V0SW50ZXJ2YWxJZCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0FscmVhZHkgcGxheWluZy4uLicpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemVcblx0XHRpZiAoIXRoaXMuc3RhcnRUaW1lKSB7XG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdFx0fVxuXG5cdFx0Ly8gU3RhcnQgcGxheSBsb29wXG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdG1lLnRpY2sgPSBtZS5nZXRDdXJyZW50VGljaygpO1xuXHRcdFx0XG5cdFx0XHQvLyBXaGljaCBvbmUncyBmYXN0ZXI/XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IG1lLnRyYWNrcy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhtZS50aWNrKVxuXHRcdFx0XHQvLyBIYW5kbGUgbmV4dCBldmVudFxuXHRcdFx0XHRpZiAobWUuZW5kT2ZGaWxlKCkpIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKG1lLnNldEludGVydmFsSWQpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWUuaGFuZGxlRXZlbnQoaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8qXG5cdFx0XHRtZS50cmFja3MuZm9yRWFjaChmdW5jdGlvbih0cmFjaywgaW5kZXgpIHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhtZS50aWNrKVxuXHRcdFx0XHQvLyBIYW5kbGUgbmV4dCBldmVudFxuXHRcdFx0XHRpZiAobWUuZW5kT2ZUcmFjayhpbmRleCkpIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKG1lLnNldEludGVydmFsSWQpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWUuaGFuZGxlRXZlbnQoaW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcdFxuXHRcdFx0Ki9cblx0XHRcdFxuXHRcdH0sIDEpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gZmFsc2U7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdG9wKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZXRJbnRlcnZhbElkKTtcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBmYWxzZTtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdFx0cmV0dXJuIHRoaXMuZmlsZUxvYWRlZCgpO1xuXHR9XG5cblx0aXNQbGF5aW5nKCkge1xuXHRcdHJldHVybiB0aGlzLnNldEludGVydmFsSWQgPiAwO1xuXHR9XG5cblx0ZW5kT2ZUcmFjayh0cmFja0luZGV4KSB7XG5cdFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdGlmICh0aGlzLnRyYWNrc1t0cmFja0luZGV4XVtwb2ludGVyICsgMV0gPT0gMHhmZiAmJiB0aGlzLnRyYWNrc1t0cmFja0luZGV4XVtwb2ludGVyICsgMl0gPT0gMHgyZiAmJiB0aGlzLnRyYWNrc1t0cmFja0luZGV4XVtwb2ludGVyICsgM10gPT0gMHgwMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZW5kT2ZGaWxlKCkge1xuXHRcdC8vIEN1cnJlbnRseSBhc3N1bWUgaGVhZGVyIGNodW5rIGlzIHN0cmljdGx5IDE0IGJ5dGVzXG5cdFx0cmV0dXJuIDE0ICsgdGhpcy50cmFja3MubGVuZ3RoICogOCArIHRoaXMucG9pbnRlcnMucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtyZXR1cm4gYStifSwgMCkgPT0gdGhpcy5idWZmZXIubGVuZ3RoO1xuXHR9XG5cblx0Z2V0RGVsdGFCeXRlQ291bnQodHJhY2tJbmRleCkge1xuXHRcdC8vIEdldCBieXRlIGNvdW50IG9mIGRlbHRhIFZMVlxuXHRcdC8vIGh0dHA6Ly93d3cuY2Nhcmgub3JnL2NvdXJzZXMvMjUzL2hhbmRvdXQvdmx2L1xuXHRcdC8vIElmIGJ5dGUgaXMgZ3JlYXRlciBvciBlcXVhbCB0byA4MGggKDEyOCBkZWNpbWFsKSB0aGVuIHRoZSBuZXh0IGJ5dGUgXG5cdCAgICAvLyBpcyBhbHNvIHBhcnQgb2YgdGhlIFZMVixcblx0ICAgXHQvLyBlbHNlIGJ5dGUgaXMgdGhlIGxhc3QgYnl0ZSBpbiBhIFZMVi5cblx0ICAgXHR2YXIgdHJhY2sgPSB0aGlzLnRyYWNrc1t0cmFja0luZGV4XTtcblx0ICAgXHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdCAgIFx0dmFyIGN1cnJlbnRCeXRlID0gdHJhY2tbcG9pbnRlcl07XG5cdCAgIFx0dmFyIGJ5dGVDb3VudCA9IDE7XG5cblx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRjdXJyZW50Qnl0ZSA9IHRyYWNrW3BvaW50ZXIgKyBieXRlQ291bnRdO1xuXHRcdFx0Ynl0ZUNvdW50Kys7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJ5dGVDb3VudDtcblx0fVxuXG5cdGdldEN1cnJlbnRUaWNrKCkge1xuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgobmV3IERhdGUpLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDAgKiAodGhpcy5kaXZpc2lvbiAqICh0aGlzLnRlbXBvIC8gNjApKSk7XG5cdH1cblxuXHRlbWl0RXZlbnQoZXZlbnQpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMuZXZlbnRIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB0aGlzLmV2ZW50SGFuZGxlcihldmVudCk7XG5cdH1cblxuXHQvLyBQYXJzZXMgZXZlbnQgaW50byBKU09OIGFuZCBhZHZhbmNlcyBwb2ludGVyIGZvciB0aGUgdHJhY2tcblx0cGFyc2VFdmVudCh0cmFja0luZGV4LCBkZWx0YUJ5dGVDb3VudCkge1xuXHRcdC8vY29uc29sZS5sb2codGhpcy50aWNrKTtcblx0XHR2YXIgdHJhY2sgPSB0aGlzLnRyYWNrc1t0cmFja0luZGV4XTtcblx0XHR2YXIgZXZlbnRTdGFydEluZGV4ID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50O1xuXHRcdHZhciBldmVudEpzb24gPSB7fTtcblx0XHRldmVudEpzb24udHJhY2sgPSB0cmFja0luZGV4ICsgMTtcblx0XHRldmVudEpzb24uZGVsdGEgPSBVdGlscy5yZWFkVmFySW50KHRyYWNrLnNsaWNlKHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0sIHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBkZWx0YUJ5dGVDb3VudCkpO1xuXHRcdHRoaXMubGFzdFRpY2tzW3RyYWNrSW5kZXhdID0gdGhpcy5sYXN0VGlja3NbdHJhY2tJbmRleF0gKyBldmVudEpzb24uZGVsdGE7XG5cblx0XHQvL2V2ZW50SnNvbi5yYXcgPSBldmVudDtcblx0XHRpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA9PSAweGZmKSB7XG5cdFx0XHQvLyBNZXRhIEV2ZW50XG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYSBtZXRhIGV2ZW50IHdlIHNob3VsZCBlbWl0IHRoZSBkYXRhIGFuZCBpbW1lZGlhdGVseSBtb3ZlIHRvIHRoZSBuZXh0IGV2ZW50XG5cdFx0XHQvLyBvdGhlcndpc2UgaWYgd2UgbGV0IGl0IHJ1biB0aHJvdWdoIHRoZSBuZXh0IGN5Y2xlIGEgc2xpZ2h0IGRlbGF5IHdpbGwgYWNjdW11bGF0ZSBpZiBtdWx0aXBsZSB0cmFja3Ncblx0XHRcdC8vIGFyZSBiZWluZyBwbGF5ZWQgc2ltdWx0YW5lb3VzbHlcblxuXHRcdFx0c3dpdGNoKHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdKSB7XG5cdFx0XHRcdGNhc2UgMHgwMDogLy8gU2VxdWVuY2UgTnVtYmVyXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2UgTnVtYmVyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAxOiAvLyBUZXh0IEV2ZW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVGV4dCBFdmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMjogLy8gQ29weXJpZ2h0IE5vdGljZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvcHlyaWdodCBOb3RpY2UnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDM6IC8vIFNlcXVlbmNlL1RyYWNrIE5hbWVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZS9UcmFjayBOYW1lJztcblx0XHRcdFx0XHQvLyBHZXQgdmx2IGxlbmd0aFxuXHRcdFx0XHRcdHZhciBjdXJyZW50Qnl0ZSA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0XHRcdFx0dmFyIGJ5dGVDb3VudCA9IDE7XG5cdFx0XHRcdFx0d2hpbGUgKGN1cnJlbnRCeXRlID49IDEyOCkge1xuXHRcdFx0XHRcdFx0Y3VycmVudEJ5dGUgPSB0cmFja1t0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgYnl0ZUNvdW50XTtcblx0XHRcdFx0XHRcdGJ5dGVDb3VudCsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudEpzb24udmx2ID0gYnl0ZUNvdW50O1xuXHRcdFx0XHRcdHZhciBsZW5ndGggPSBVdGlscy5yZWFkVmFySW50KHRyYWNrLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIDIsIGV2ZW50U3RhcnRJbmRleCArIDIgKyBieXRlQ291bnQpKTtcblx0XHRcdFx0XHRldmVudEpzb24uc3RyaW5nTGVuZ3RoID0gbGVuZ3RoO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5zdHJpbmcgPSBVdGlscy5ieXRlc1RvTGV0dGVycyh0cmFjay5zbGljZShldmVudFN0YXJ0SW5kZXggKyBieXRlQ291bnQgKyAyLCBldmVudFN0YXJ0SW5kZXggKyBieXRlQ291bnQgKyBsZW5ndGggKyAyKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNDogLy8gSW5zdHJ1bWVudCBOYW1lXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnSW5zdHJ1bWVudCBOYW1lJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA1OiAvLyBMeXJpY1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0x5cmljJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA2OiAvLyBNYXJrZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNYXJrZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDc6IC8vIEN1ZSBQb2ludFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0N1ZSBQb2ludCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyMDogLy8gTUlESSBDaGFubmVsIFByZWZpeFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01JREkgQ2hhbm5lbCBQcmVmaXgnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MkY6IC8vIEVuZCBvZiBUcmFja1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0VuZCBvZiBUcmFjayc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1MTogLy8gU2V0IFRlbXBvXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2V0IFRlbXBvJztcblx0XHRcdFx0XHRldmVudEpzb24uZGF0YSA9IDYwMDAwMDAwIC8gVXRpbHMuYnl0ZXNUb051bWJlcih0cmFjay5zbGljZShldmVudFN0YXJ0SW5kZXggKyAzLCBldmVudFN0YXJ0SW5kZXggKyA2KSk7XG5cdFx0XHRcdFx0dGhpcy50ZW1wbyA9IGV2ZW50SnNvbi5kYXRhO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTQ6IC8vIFNNVFBFIE9mZnNldFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NNVFBFIE9mZnNldCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1ODogLy8gVGltZSBTaWduYXR1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUaW1lIFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1OTogLy8gS2V5IFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0tleSBTaWduYXR1cmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4N0Y6IC8vIFNlcXVlbmNlci1TcGVjaWZpYyBNZXRhLWV2ZW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGVuZ3RoID0gdHJhY2tbdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50ICsgMl07XG5cdFx0XHQvLyBTb21lIG1ldGEgZXZlbnRzIHdpbGwgaGF2ZSB2bHYgdGhhdCBuZWVkcyB0byBiZSBoYW5kbGVkXG5cblx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gbGVuZ3RoICsgNDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBWb2ljZSBldmVudFxuXHRcdFx0aWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPCAweDgwKSB7XG5cdFx0XHRcdC8vIFJ1bm5pbmcgc3RhdHVzXG5cdFx0XHRcdGV2ZW50SnNvbi5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXhdO1xuXHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4XV07XG5cdFx0XHRcdGV2ZW50SnNvbi52ZWxvY2l0eSA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHRoaXMubGFzdFN0YXR1c2VzW3RyYWNrSW5kZXhdIDw9IDB4OGYpIHtcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9mZic7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmxhc3RTdGF0dXNlc1t0cmFja0luZGV4XSA8PSAweDlmKSB7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5sYXN0U3RhdHVzZXNbdHJhY2tJbmRleF0gPSB0cmFja1tldmVudFN0YXJ0SW5kZXhdO1xuXG5cdFx0XHRcdGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4OGYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9mZlxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb2ZmJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gTWF0aC5yb3VuZCh0cmFja1tldmVudFN0YXJ0SW5kZXggKyAyXSAvIDEyNyAqIDEwMCk7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4OWYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9uXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi52ZWxvY2l0eSA9IE1hdGgucm91bmQodHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMl0gLyAxMjcgKiAxMDApO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGFmKSB7XG5cdFx0XHRcdFx0Ly8gUG9seXBob25pYyBLZXkgUHJlc3N1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQb2x5cGhvbmljIEtleSBQcmVzc3VyZSc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5wcmVzc3VyZSA9IGV2ZW50WzJdO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGJmKSB7XG5cdFx0XHRcdFx0Ly8gQ29udHJvbGxlciBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDb250cm9sbGVyIENoYW5nZSc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi52YWx1ZSA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDJdO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGNmKSB7XG5cdFx0XHRcdFx0Ly8gUHJvZ3JhbSBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQcm9ncmFtIENoYW5nZSc7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4ZGYpIHtcblx0XHRcdFx0XHQvLyBDaGFubmVsIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NoYW5uZWwgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhlZikge1xuXHRcdFx0XHRcdC8vIFBpdGNoIEJlbmRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQaXRjaCBCZW5kJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudEpzb247XG5cdH1cblxufVxuXG5leHBvcnRzLlBsYXllciA9IFBsYXllcjsiXX0=
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
