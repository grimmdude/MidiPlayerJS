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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJDb25zdGFudHMiLCJOT1RFUyIsImFsbE5vdGVzIiwiY291bnRlciIsImkiLCJmb3JFYWNoIiwibm90ZUdyb3VwIiwibm90ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZO0FBQ2ZDLFFBQU87QUFEUSxDQUFoQjs7QUFJQSxDQUFDLFlBQVc7QUFDWDtBQUNBLEtBQUlDLFdBQVcsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxFQUFRLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBUixFQUFxQixDQUFDLEdBQUQsQ0FBckIsRUFBNEIsQ0FBQyxJQUFELEVBQU0sSUFBTixDQUE1QixFQUF5QyxDQUFDLEdBQUQsQ0FBekMsRUFBK0MsQ0FBQyxHQUFELENBQS9DLEVBQXNELENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBdEQsRUFBbUUsQ0FBQyxHQUFELENBQW5FLEVBQTBFLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBMUUsRUFBdUYsQ0FBQyxHQUFELENBQXZGLEVBQThGLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBOUYsRUFBMkcsQ0FBQyxHQUFELENBQTNHLENBQWY7QUFDQSxLQUFJQyxVQUFVLENBQWQ7O0FBRUE7QUFDQSxNQUFLLElBQUlDLElBQUksQ0FBQyxDQUFkLEVBQWlCQSxLQUFLLENBQXRCLEVBQXlCQSxHQUF6QixFQUE4QjtBQUM3QkYsV0FBU0csT0FBVCxDQUFpQixVQUFTQyxTQUFULEVBQW9CO0FBQ3BDQSxhQUFVRCxPQUFWLENBQWtCLFVBQVNFLElBQVQsRUFBZTtBQUFDUCxjQUFVQyxLQUFWLENBQWdCRSxPQUFoQixJQUEyQkksT0FBT0gsQ0FBbEM7QUFBb0MsSUFBdEU7QUFDQUQ7QUFDQSxHQUhEO0FBSUE7QUFDRCxDQVpEIiwiZmlsZSI6ImNvbnN0YW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb25zdGFudHMgPSB7XG5cdE5PVEVTOiBbXVxufTtcblxuKGZ1bmN0aW9uKCkge1xuXHQvLyBCdWlsZHMgbm90ZXMgb2JqZWN0IGZvciByZWZlcmVuY2UgYWdhaW5zdCBiaW5hcnkgdmFsdWVzLlxuXHR2YXIgYWxsTm90ZXMgPSBbWydDJ10sIFsnQyMnLCdEYiddLCBbJ0QnXSwgWydEIycsJ0ViJ10sIFsnRSddLFsnRiddLCBbJ0YjJywnR2InXSwgWydHJ10sIFsnRyMnLCdBYiddLCBbJ0EnXSwgWydBIycsJ0JiJ10sIFsnQiddXTtcblx0dmFyIGNvdW50ZXIgPSAwO1xuXG5cdC8vIEFsbCBhdmFpbGFibGUgb2N0YXZlcy5cblx0Zm9yICh2YXIgaSA9IC0xOyBpIDw9IDk7IGkrKykge1xuXHRcdGFsbE5vdGVzLmZvckVhY2goZnVuY3Rpb24obm90ZUdyb3VwKSB7XG5cdFx0XHRub3RlR3JvdXAuZm9yRWFjaChmdW5jdGlvbihub3RlKSB7Q29uc3RhbnRzLk5PVEVTW2NvdW50ZXJdID0gbm90ZSArIGl9KTtcblx0XHRcdGNvdW50ZXIgKys7XG5cdFx0fSk7XG5cdH1cbn0pKCk7Il19
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
	function Player(eventHandler, buffer) {
		_classCallCheck(this, Player);

		this.startTime = 0;
		this.buffer = buffer || null;
		this.division;
		this.setIntervalId;
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
			this.buffer = array;
			return this.fileLoaded();
		}
	}, {
		key: 'fileLoaded',
		value: function fileLoaded() {
			if (!this.validate()) throw 'Invalid file; should start with MThd';
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
		key: 'stop',
		value: function stop() {
			clearInterval(this.setIntervalId);
			this.lastStatuses = [];
			this.lastTick = null;
			this.lastTicks = [];
			this.pointers = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJldmVudEhhbmRsZXIiLCJidWZmZXIiLCJzdGFydFRpbWUiLCJkaXZpc2lvbiIsInNldEludGVydmFsSWQiLCJ0cmFja3MiLCJ0cmFja3NFbmFibGVkIiwidGVtcG8iLCJ0aWNrIiwibGFzdFN0YXR1c2VzIiwibGFzdFRpY2siLCJsYXN0VGlja3MiLCJwb2ludGVycyIsInBhdGgiLCJmcyIsInJlcXVpcmUiLCJyZWFkRmlsZVN5bmMiLCJmaWxlTG9hZGVkIiwiYXJyYXlCdWZmZXIiLCJVaW50OEFycmF5IiwiZGF0YVVyaSIsImFycmF5IiwidmFsaWRhdGUiLCJnZXREaXZpc2lvbiIsImdldFRyYWNrcyIsIlV0aWxzIiwiYnl0ZXNUb0xldHRlcnMiLCJzbGljZSIsImZvckVhY2giLCJieXRlIiwiY29uc29sZSIsImxvZyIsImJ5dGVzVG9OdW1iZXIiLCJpbmRleCIsInRyYWNrTGVuZ3RoIiwicHVzaCIsInRyYWNrTnVtYmVyIiwidHJhY2tJbmRleCIsInRyYWNrIiwicG9pbnRlciIsImRlbHRhQnl0ZUNvdW50IiwiZ2V0RGVsdGFCeXRlQ291bnQiLCJkZWx0YSIsInJlYWRWYXJJbnQiLCJldmVudFNpZyIsImxlbmd0aCIsImV2ZW50IiwicGFyc2VFdmVudCIsImVtaXRFdmVudCIsIkRhdGUiLCJnZXRUaW1lIiwibWUiLCJzZXRJbnRlcnZhbCIsImdldEN1cnJlbnRUaWNrIiwiaSIsImVuZE9mRmlsZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVFdmVudCIsInJlZHVjZSIsImEiLCJiIiwiY3VycmVudEJ5dGUiLCJieXRlQ291bnQiLCJNYXRoIiwicm91bmQiLCJldmVudFN0YXJ0SW5kZXgiLCJldmVudEpzb24iLCJuYW1lIiwidmx2Iiwic3RyaW5nTGVuZ3RoIiwic3RyaW5nIiwiZGF0YSIsInJ1bm5pbmciLCJub3RlTnVtYmVyIiwibm90ZU5hbWUiLCJDb25zdGFudHMiLCJOT1RFUyIsInZlbG9jaXR5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O0FBQ0FDLGdCQUFVQyxJQUFWLEdBQWlCLG1CQUFqQjtBQUNBRCxnQkFBVWMsTUFBVixHQUFtQjFDLE1BQU0yQixrQkFBa0IsQ0FBeEIsQ0FBbkI7QUFDQUMsZ0JBQVVlLEtBQVYsR0FBa0IzQyxNQUFNMkIsa0JBQWtCLENBQXhCLENBQWxCO0FBQ0EsV0FBS3JELFFBQUwsQ0FBY3lCLFVBQWQsS0FBNkJHLGlCQUFpQixDQUE5QztBQUVBLE1BUE0sTUFPQSxJQUFJRixNQUFNMkIsZUFBTixLQUEwQixJQUE5QixFQUFvQztBQUMxQztBQUNBQyxnQkFBVUMsSUFBVixHQUFpQixnQkFBakI7QUFDQSxXQUFLdkQsUUFBTCxDQUFjeUIsVUFBZCxLQUE2QkcsaUJBQWlCLENBQTlDO0FBRUEsTUFMTSxNQUtBLElBQUlGLE1BQU0yQixlQUFOLEtBQTBCLElBQTlCLEVBQW9DO0FBQzFDO0FBQ0FDLGdCQUFVQyxJQUFWLEdBQWlCLHNCQUFqQjtBQUNBLFdBQUt2RCxRQUFMLENBQWN5QixVQUFkLEtBQTZCRyxpQkFBaUIsQ0FBOUM7QUFFQSxNQUxNLE1BS0EsSUFBSUYsTUFBTTJCLGVBQU4sS0FBMEIsSUFBOUIsRUFBb0M7QUFDMUM7QUFDQUMsZ0JBQVVDLElBQVYsR0FBaUIsWUFBakI7QUFDQSxXQUFLdkQsUUFBTCxDQUFjeUIsVUFBZCxLQUE2QkcsaUJBQWlCLENBQTlDO0FBQ0E7QUFDRDtBQUNEOztBQUVELFVBQU8wQixTQUFQO0FBQ0E7Ozs7OztBQUlGZ0IsUUFBUW5GLE1BQVIsR0FBaUJBLE1BQWpCIiwiZmlsZSI6InBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKGV2ZW50SGFuZGxlciwgYnVmZmVyKSB7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHRoaXMuYnVmZmVyID0gYnVmZmVyIHx8IG51bGw7XG5cdFx0dGhpcy5kaXZpc2lvbjtcblx0XHR0aGlzLnNldEludGVydmFsSWQ7XG5cdFx0dGhpcy50cmFja3MgPSBbXTtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWQgPSBbXTsgLy8gMCBkaXNhYmxlZCwgMSBlbmFibGVkXG5cdFx0dGhpcy50ZW1wbyA9IDEwMDtcblx0XHR0aGlzLnRpY2sgPSAwO1xuXHRcdHRoaXMubGFzdFN0YXR1c2VzID0gW107XG5cdFx0dGhpcy5sYXN0VGljayA9IG51bGw7XG5cdFx0dGhpcy5sYXN0VGlja3MgPSBbXTtcblx0XHR0aGlzLnBvaW50ZXJzID0gW107XG5cblx0XHR0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcjtcblx0fVxuXG5cdC8vIE9ubHkgZm9yIE5vZGVKU1xuXHRsb2FkRmlsZShwYXRoKSB7XG5cdFx0dmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblx0XHR0aGlzLmJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhwYXRoKTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRsb2FkQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRsb2FkRGF0YVVyaShkYXRhVXJpKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBhcnJheTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRmaWxlTG9hZGVkKCkge1xuXHRcdGlmICghdGhpcy52YWxpZGF0ZSgpKSB0aHJvdyAnSW52YWxpZCBmaWxlOyBzaG91bGQgc3RhcnQgd2l0aCBNVGhkJztcblx0XHR0aGlzLmdldERpdmlzaW9uKCkuZ2V0VHJhY2tzKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyBGaXJzdCBmb3VyIGJ5dGVzIHNob3VsZCBiZSBNVGhkXG5cdHZhbGlkYXRlKCkge1xuXHRcdHJldHVybiBVdGlscy5ieXRlc1RvTGV0dGVycyh0aGlzLmJ1ZmZlci5zbGljZSgwLCA0KSkgPT09ICdNVGhkJztcblx0fVxuXG5cdGdldExlbmd0aCgpIHtcblx0XHR0aGlzLmJ1ZmZlci5zbGljZSg0LDgpLmZvckVhY2goZnVuY3Rpb24oYnl0ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coYnl0ZSlcblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLmJ1ZmZlci5zbGljZSg0LCA4KTtcblx0fVxuXG5cdGdldEZvcm1hdCgpIHtcblx0XHQvKlxuXHRcdE1JREkgZmlsZXMgY29tZSBpbiAzIHZhcmlhdGlvbnM6XG5cdFx0Rm9ybWF0IDAgd2hpY2ggY29udGFpbiBhIHNpbmdsZSB0cmFja1xuXHRcdEZvcm1hdCAxIHdoaWNoIGNvbnRhaW4gb25lIG9yIG1vcmUgc2ltdWx0YW5lb3VzIHRyYWNrcyBcblx0XHQoaWUgYWxsIHRyYWNrcyBhcmUgdG8gYmUgcGxheWVkIHNpbXVsdGFuZW91c2x5KS5cblx0XHRGb3JtYXQgMiB3aGljaCBjb250YWluIG9uZSBvciBtb3JlIGluZGVwZW5kYW50IHRyYWNrcyBcblx0XHQoaWUgZWFjaCB0cmFjayBpcyB0byBiZSBwbGF5ZWQgaW5kZXBlbmRhbnRseSBvZiB0aGUgb3RoZXJzKS5cblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSg4LCAxMCkpO1xuXHRcdCovXG5cblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSg4LCAxMCkpO1xuXHR9XG5cblx0Z2V0VHJhY2tDb3VudCgpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMCwgMTIpKTtcblx0fVxuXG5cdC8vIFBhcnNlcyBvdXQgdHJhY2tzIGFuZCBwbGFjZXMgdGhlbSBpbiB0aGlzLnRyYWNrcyBhbmQgaW5pdGlhbGl6ZXMgdGhpcy5wb2ludGVyc1xuXHRnZXRUcmFja3MoKSB7XG5cdFx0dGhpcy5idWZmZXIuZm9yRWFjaChmdW5jdGlvbihieXRlLCBpbmRleCkge1xuXHRcdFx0aWYgKFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4LCBpbmRleCArIDQpKSA9PSAnTVRyaycpIHtcblx0XHRcdFx0dmFyIHRyYWNrTGVuZ3RoID0gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZShpbmRleCArIDQsIGluZGV4ICsgOCkpO1xuXHRcdFx0XHR0aGlzLnRyYWNrcy5wdXNoKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgOCwgaW5kZXggKyA4ICsgdHJhY2tMZW5ndGgpKTtcblx0XHRcdFx0dGhpcy5wb2ludGVycy5wdXNoKDApO1xuXHRcdFx0XHR0aGlzLmxhc3RUaWNrcy5wdXNoKDApO1xuXHRcdFx0XHR0aGlzLnRyYWNrc0VuYWJsZWQucHVzaCgxKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZW5hYmxlVHJhY2sodHJhY2tOdW1iZXIpIHtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWRbdHJhY2tOdW1iZXIgLSAxXSA9IDE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkaXNhYmxlVHJhY2sodHJhY2tOdW1iZXIpIHtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWRbdHJhY2tOdW1iZXIgLSAxXSA9IDA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXREaXZpc2lvbigpIHtcblx0XHR0aGlzLmRpdmlzaW9uID0gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMiwgMTQpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGV2ZW50IHdpdGhpbiBhIGdpdmVuIHRyYWNrIHN0YXJ0aW5nIGF0IHNwZWNpZmllZCBpbmRleFxuXHQgKiBAcGFyYW0gdHJhY2tcblx0ICovXG5cdGhhbmRsZUV2ZW50KHRyYWNrSW5kZXgpIHtcblx0XHQvLyBQYXJzZSBkZWx0YSB2YWx1ZVxuXHRcdHZhciB0cmFjayA9IHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBwb2ludGVyID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0XHR2YXIgZGVsdGFCeXRlQ291bnQgPSB0aGlzLmdldERlbHRhQnl0ZUNvdW50KHRyYWNrSW5kZXgpO1xuXHRcdHZhciBkZWx0YSA9IFV0aWxzLnJlYWRWYXJJbnQodHJhY2suc2xpY2UocG9pbnRlciwgcG9pbnRlciArIGRlbHRhQnl0ZUNvdW50KSk7XG5cdFx0dmFyIGV2ZW50U2lnID0gdHJhY2tbcG9pbnRlciArIGRlbHRhQnl0ZUNvdW50XTtcblxuXHRcdGlmICh0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdIDwgdGhpcy50cmFja3NbdHJhY2tJbmRleF0ubGVuZ3RoICYmIHRoaXMudGljayAtIHRoaXMubGFzdFRpY2tzW3RyYWNrSW5kZXhdID49IGRlbHRhKSB7XG5cdFx0XHR2YXIgZXZlbnQgPSB0aGlzLnBhcnNlRXZlbnQodHJhY2tJbmRleCwgZGVsdGFCeXRlQ291bnQpO1xuXG5cdFx0XHRpZiAodGhpcy50cmFja3NFbmFibGVkW3RyYWNrSW5kZXhdID09IDEpIHRoaXMuZW1pdEV2ZW50KGV2ZW50KTtcblx0XHRcdFxuXHRcdFx0Ly8gUmVjdXJzaXZlbHkgY2FsbCB0aGlzIGZ1bmN0aW9uIGZvciBlYWNoIGV2ZW50IGFoZWFkIHRoYXQgaGFzIDAgZGVsdGEgdGltZT9cblx0XHR9XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdC8vIEluaXRpYWxpemVcblx0XHR0aGlzLnN0YXJ0VGltZSA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdFx0Ly8gU3RhcnQgcGxheSBsb29wXG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdG1lLnRpY2sgPSBtZS5nZXRDdXJyZW50VGljaygpO1xuXHRcdFx0XG5cdFx0XHQvLyBXaGljaCBvbmUncyBmYXN0ZXI/XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IG1lLnRyYWNrcy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhtZS50aWNrKVxuXHRcdFx0XHQvLyBIYW5kbGUgbmV4dCBldmVudFxuXHRcdFx0XHRpZiAobWUuZW5kT2ZGaWxlKCkpIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKG1lLnNldEludGVydmFsSWQpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWUuaGFuZGxlRXZlbnQoaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8qXG5cdFx0XHRtZS50cmFja3MuZm9yRWFjaChmdW5jdGlvbih0cmFjaywgaW5kZXgpIHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhtZS50aWNrKVxuXHRcdFx0XHQvLyBIYW5kbGUgbmV4dCBldmVudFxuXHRcdFx0XHRpZiAobWUuZW5kT2ZUcmFjayhpbmRleCkpIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKG1lLnNldEludGVydmFsSWQpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWUuaGFuZGxlRXZlbnQoaW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcdFxuXHRcdFx0Ki9cblx0XHRcdFxuXHRcdH0sIDEpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzdG9wKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZXRJbnRlcnZhbElkKTtcblx0XHR0aGlzLmxhc3RTdGF0dXNlcyA9IFtdO1xuXHRcdHRoaXMubGFzdFRpY2sgPSBudWxsO1xuXHRcdHRoaXMubGFzdFRpY2tzID0gW107XG5cdFx0dGhpcy5wb2ludGVycyA9IFtdO1xuXHR9XG5cblx0ZW5kT2ZUcmFjayh0cmFja0luZGV4KSB7XG5cdFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdGlmICh0aGlzLnRyYWNrc1t0cmFja0luZGV4XVtwb2ludGVyICsgMV0gPT0gMHhmZiAmJiB0aGlzLnRyYWNrc1t0cmFja0luZGV4XVtwb2ludGVyICsgMl0gPT0gMHgyZiAmJiB0aGlzLnRyYWNrc1t0cmFja0luZGV4XVtwb2ludGVyICsgM10gPT0gMHgwMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZW5kT2ZGaWxlKCkge1xuXHRcdC8vIEN1cnJlbnRseSBhc3N1bWUgaGVhZGVyIGNodW5rIGlzIHN0cmljdGx5IDE0IGJ5dGVzXG5cdFx0cmV0dXJuIDE0ICsgdGhpcy50cmFja3MubGVuZ3RoICogOCArIHRoaXMucG9pbnRlcnMucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtyZXR1cm4gYStifSwgMCkgPT0gdGhpcy5idWZmZXIubGVuZ3RoO1xuXHR9XG5cblx0Z2V0RGVsdGFCeXRlQ291bnQodHJhY2tJbmRleCkge1xuXHRcdC8vIEdldCBieXRlIGNvdW50IG9mIGRlbHRhIFZMVlxuXHRcdC8vIGh0dHA6Ly93d3cuY2Nhcmgub3JnL2NvdXJzZXMvMjUzL2hhbmRvdXQvdmx2L1xuXHRcdC8vIElmIGJ5dGUgaXMgZ3JlYXRlciBvciBlcXVhbCB0byA4MGggKDEyOCBkZWNpbWFsKSB0aGVuIHRoZSBuZXh0IGJ5dGUgXG5cdCAgICAvLyBpcyBhbHNvIHBhcnQgb2YgdGhlIFZMVixcblx0ICAgXHQvLyBlbHNlIGJ5dGUgaXMgdGhlIGxhc3QgYnl0ZSBpbiBhIFZMVi5cblx0ICAgXHR2YXIgdHJhY2sgPSB0aGlzLnRyYWNrc1t0cmFja0luZGV4XTtcblx0ICAgXHR2YXIgcG9pbnRlciA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdCAgIFx0dmFyIGN1cnJlbnRCeXRlID0gdHJhY2tbcG9pbnRlcl07XG5cdCAgIFx0dmFyIGJ5dGVDb3VudCA9IDE7XG5cblx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRjdXJyZW50Qnl0ZSA9IHRyYWNrW3BvaW50ZXIgKyBieXRlQ291bnRdO1xuXHRcdFx0Ynl0ZUNvdW50Kys7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJ5dGVDb3VudDtcblx0fVxuXG5cdGdldEN1cnJlbnRUaWNrKCkge1xuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgobmV3IERhdGUpLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDAgKiAodGhpcy5kaXZpc2lvbiAqICh0aGlzLnRlbXBvIC8gNjApKSk7XG5cdH1cblxuXHRlbWl0RXZlbnQoZXZlbnQpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMuZXZlbnRIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB0aGlzLmV2ZW50SGFuZGxlcihldmVudCk7XG5cdH1cblxuXHQvLyBQYXJzZXMgZXZlbnQgaW50byBKU09OIGFuZCBhZHZhbmNlcyBwb2ludGVyIGZvciB0aGUgdHJhY2tcblx0cGFyc2VFdmVudCh0cmFja0luZGV4LCBkZWx0YUJ5dGVDb3VudCkge1xuXHRcdC8vY29uc29sZS5sb2codGhpcy50aWNrKTtcblx0XHR2YXIgdHJhY2sgPSB0aGlzLnRyYWNrc1t0cmFja0luZGV4XTtcblx0XHR2YXIgZXZlbnRTdGFydEluZGV4ID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50O1xuXHRcdHZhciBldmVudEpzb24gPSB7fTtcblx0XHRldmVudEpzb24udHJhY2sgPSB0cmFja0luZGV4ICsgMTtcblx0XHRldmVudEpzb24uZGVsdGEgPSBVdGlscy5yZWFkVmFySW50KHRyYWNrLnNsaWNlKHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0sIHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBkZWx0YUJ5dGVDb3VudCkpO1xuXHRcdHRoaXMubGFzdFRpY2tzW3RyYWNrSW5kZXhdID0gdGhpcy5sYXN0VGlja3NbdHJhY2tJbmRleF0gKyBldmVudEpzb24uZGVsdGE7XG5cblx0XHQvL2V2ZW50SnNvbi5yYXcgPSBldmVudDtcblx0XHRpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA9PSAweGZmKSB7XG5cdFx0XHQvLyBNZXRhIEV2ZW50XG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYSBtZXRhIGV2ZW50IHdlIHNob3VsZCBlbWl0IHRoZSBkYXRhIGFuZCBpbW1lZGlhdGVseSBtb3ZlIHRvIHRoZSBuZXh0IGV2ZW50XG5cdFx0XHQvLyBvdGhlcndpc2UgaWYgd2UgbGV0IGl0IHJ1biB0aHJvdWdoIHRoZSBuZXh0IGN5Y2xlIGEgc2xpZ2h0IGRlbGF5IHdpbGwgYWNjdW11bGF0ZSBpZiBtdWx0aXBsZSB0cmFja3Ncblx0XHRcdC8vIGFyZSBiZWluZyBwbGF5ZWQgc2ltdWx0YW5lb3VzbHlcblxuXHRcdFx0c3dpdGNoKHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdKSB7XG5cdFx0XHRcdGNhc2UgMHgwMDogLy8gU2VxdWVuY2UgTnVtYmVyXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2UgTnVtYmVyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAxOiAvLyBUZXh0IEV2ZW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVGV4dCBFdmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMjogLy8gQ29weXJpZ2h0IE5vdGljZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvcHlyaWdodCBOb3RpY2UnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDM6IC8vIFNlcXVlbmNlL1RyYWNrIE5hbWVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZS9UcmFjayBOYW1lJztcblx0XHRcdFx0XHQvLyBHZXQgdmx2IGxlbmd0aFxuXHRcdFx0XHRcdHZhciBjdXJyZW50Qnl0ZSA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF07XG5cdFx0XHRcdFx0dmFyIGJ5dGVDb3VudCA9IDE7XG5cdFx0XHRcdFx0d2hpbGUgKGN1cnJlbnRCeXRlID49IDEyOCkge1xuXHRcdFx0XHRcdFx0Y3VycmVudEJ5dGUgPSB0cmFja1t0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgYnl0ZUNvdW50XTtcblx0XHRcdFx0XHRcdGJ5dGVDb3VudCsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudEpzb24udmx2ID0gYnl0ZUNvdW50O1xuXHRcdFx0XHRcdHZhciBsZW5ndGggPSBVdGlscy5yZWFkVmFySW50KHRyYWNrLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIDIsIGV2ZW50U3RhcnRJbmRleCArIDIgKyBieXRlQ291bnQpKTtcblx0XHRcdFx0XHRldmVudEpzb24uc3RyaW5nTGVuZ3RoID0gbGVuZ3RoO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5zdHJpbmcgPSBVdGlscy5ieXRlc1RvTGV0dGVycyh0cmFjay5zbGljZShldmVudFN0YXJ0SW5kZXggKyBieXRlQ291bnQgKyAyLCBldmVudFN0YXJ0SW5kZXggKyBieXRlQ291bnQgKyBsZW5ndGggKyAyKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNDogLy8gSW5zdHJ1bWVudCBOYW1lXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnSW5zdHJ1bWVudCBOYW1lJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA1OiAvLyBMeXJpY1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0x5cmljJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA2OiAvLyBNYXJrZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNYXJrZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDc6IC8vIEN1ZSBQb2ludFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0N1ZSBQb2ludCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyMDogLy8gTUlESSBDaGFubmVsIFByZWZpeFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01JREkgQ2hhbm5lbCBQcmVmaXgnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MkY6IC8vIEVuZCBvZiBUcmFja1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0VuZCBvZiBUcmFjayc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1MTogLy8gU2V0IFRlbXBvXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2V0IFRlbXBvJztcblx0XHRcdFx0XHRldmVudEpzb24uZGF0YSA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodHJhY2suc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgMywgZXZlbnRTdGFydEluZGV4ICsgNikpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTQ6IC8vIFNNVFBFIE9mZnNldFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NNVFBFIE9mZnNldCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1ODogLy8gVGltZSBTaWduYXR1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUaW1lIFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1OTogLy8gS2V5IFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0tleSBTaWduYXR1cmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4N0Y6IC8vIFNlcXVlbmNlci1TcGVjaWZpYyBNZXRhLWV2ZW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGVuZ3RoID0gdHJhY2tbdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGRlbHRhQnl0ZUNvdW50ICsgMl07XG5cdFx0XHQvLyBTb21lIG1ldGEgZXZlbnRzIHdpbGwgaGF2ZSB2bHYgdGhhdCBuZWVkcyB0byBiZSBoYW5kbGVkXG5cblx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gbGVuZ3RoICsgNDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBWb2ljZSBldmVudFxuXHRcdFx0aWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPCAweDgwKSB7XG5cdFx0XHRcdC8vIFJ1bm5pbmcgc3RhdHVzXG5cdFx0XHRcdGV2ZW50SnNvbi5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOYW1lID0gQ29uc3RhbnRzLk5PVEVTW3RyYWNrW2V2ZW50U3RhcnRJbmRleF1dO1xuXHRcdFx0XHRldmVudEpzb24udmVsb2NpdHkgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICh0aGlzLmxhc3RTdGF0dXNlc1t0cmFja0luZGV4XSA8PSAweDhmKSB7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvZmYnO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5sYXN0U3RhdHVzZXNbdHJhY2tJbmRleF0gPD0gMHg5Zikge1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb24nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubGFzdFN0YXR1c2VzW3RyYWNrSW5kZXhdID0gdHJhY2tbZXZlbnRTdGFydEluZGV4XTtcblxuXHRcdFx0XHRpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweDhmKSB7XG5cdFx0XHRcdFx0Ly8gTm90ZSBvZmZcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9mZic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweDlmKSB7XG5cdFx0XHRcdFx0Ly8gTm90ZSBvblxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb24nO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTnVtYmVyID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOYW1lID0gQ29uc3RhbnRzLk5PVEVTW3RyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhhZikge1xuXHRcdFx0XHRcdC8vIFBvbHlwaG9uaWMgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUG9seXBob25pYyBLZXkgUHJlc3N1cmUnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlID0gQ29uc3RhbnRzLk5PVEVTW3RyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHRldmVudEpzb24ucHJlc3N1cmUgPSBldmVudFsyXTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhiZikge1xuXHRcdFx0XHRcdC8vIENvbnRyb2xsZXIgQ2hhbmdlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ29udHJvbGxlciBDaGFuZ2UnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5udW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24udmFsdWUgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAyXTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhjZikge1xuXHRcdFx0XHRcdC8vIFByb2dyYW0gQ2hhbmdlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUHJvZ3JhbSBDaGFuZ2UnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGRmKSB7XG5cdFx0XHRcdFx0Ly8gQ2hhbm5lbCBLZXkgUHJlc3N1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDaGFubmVsIEtleSBQcmVzc3VyZSc7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4ZWYpIHtcblx0XHRcdFx0XHQvLyBQaXRjaCBCZW5kXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUGl0Y2ggQmVuZCc7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRKc29uO1xuXHR9XG5cbn1cblxuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7Il19
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIlV0aWxzIiwiYnl0ZSIsInRvU3RyaW5nIiwiYnl0ZUFycmF5IiwiaGV4IiwiZm9yRWFjaCIsInB1c2giLCJieXRlVG9IZXgiLCJqb2luIiwiaGV4U3RyaW5nIiwicGFyc2VJbnQiLCJoZXhUb051bWJlciIsImJ5dGVzVG9IZXgiLCJsZXR0ZXJzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZGVjIiwicmVzdWx0IiwibnVtYmVyIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLEs7Ozs7Ozs7NEJBQ1lDLEksRUFBTTtBQUN0QixVQUFPQSxLQUFLQyxRQUFMLENBQWMsRUFBZCxDQUFQO0FBQ0E7Ozs2QkFFaUJDLFMsRUFBVztBQUM1QixPQUFJQyxNQUFNLEVBQVY7O0FBRUFELGFBQVVFLE9BQVYsQ0FBa0IsVUFBU0osSUFBVCxFQUFlO0FBQ2hDRyxRQUFJRSxJQUFKLENBQVNOLE1BQU1PLFNBQU4sQ0FBZ0JOLElBQWhCLENBQVQ7QUFDQSxJQUZEOztBQUlBLFVBQU9HLElBQUlJLElBQUosQ0FBUyxFQUFULENBQVA7QUFDQTs7OzhCQUVrQkMsUyxFQUFXO0FBQzdCLFVBQU9DLFNBQVNELFNBQVQsRUFBb0IsRUFBcEIsQ0FBUDtBQUNBOzs7Z0NBRW9CTixTLEVBQVc7QUFDL0IsVUFBT0gsTUFBTVcsV0FBTixDQUFrQlgsTUFBTVksVUFBTixDQUFpQlQsU0FBakIsQ0FBbEIsQ0FBUDtBQUNBOzs7aUNBRXFCQSxTLEVBQVc7QUFDaEMsT0FBSVUsVUFBVSxFQUFkO0FBQ0FWLGFBQVVFLE9BQVYsQ0FBa0IsVUFBU0osSUFBVCxFQUFlO0FBQ2hDWSxZQUFRUCxJQUFSLENBQWFRLE9BQU9DLFlBQVAsQ0FBb0JkLElBQXBCLENBQWI7QUFDQSxJQUZEOztBQUlBLFVBQU9ZLFFBQVFMLElBQVIsQ0FBYSxFQUFiLENBQVA7QUFDQTs7OzhCQUVrQlEsRyxFQUFLO0FBQ3BCLFVBQU8sQ0FBQ0EsUUFBUSxDQUFULEVBQVlkLFFBQVosQ0FBcUIsQ0FBckIsQ0FBUDtBQUNIOzs7NkJBRWlCQyxTLEVBQVc7QUFDNUIsT0FBSWMsU0FBUyxDQUFiO0FBQ0FkLGFBQVVFLE9BQVYsQ0FBa0IsVUFBU2EsTUFBVCxFQUFpQjtBQUNsQyxRQUFJQyxJQUFJRCxNQUFSO0FBQ0EsUUFBSUMsSUFBSSxJQUFSLEVBQWM7QUFDYkYsZUFBV0UsSUFBSSxJQUFmO0FBQ0FGLGdCQUFXLENBQVg7QUFDQSxLQUhELE1BR087QUFDTjtBQUNBQSxlQUFVRSxDQUFWO0FBQ0E7QUFDRCxJQVREOztBQVdBLFVBQU9GLE1BQVA7QUFDQSIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFV0aWxzIHtcblx0c3RhdGljIGJ5dGVUb0hleChieXRlKSB7XG5cdFx0cmV0dXJuIGJ5dGUudG9TdHJpbmcoMTYpO1xuXHR9XG5cblx0c3RhdGljIGJ5dGVzVG9IZXgoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIGhleCA9IFtdO1xuXG5cdFx0Ynl0ZUFycmF5LmZvckVhY2goZnVuY3Rpb24oYnl0ZSkge1xuXHRcdFx0aGV4LnB1c2goVXRpbHMuYnl0ZVRvSGV4KGJ5dGUpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBoZXguam9pbignJyk7XG5cdH1cblxuXHRzdGF0aWMgaGV4VG9OdW1iZXIoaGV4U3RyaW5nKSB7XG5cdFx0cmV0dXJuIHBhcnNlSW50KGhleFN0cmluZywgMTYpO1xuXHR9XG5cblx0c3RhdGljIGJ5dGVzVG9OdW1iZXIoYnl0ZUFycmF5KSB7XG5cdFx0cmV0dXJuIFV0aWxzLmhleFRvTnVtYmVyKFV0aWxzLmJ5dGVzVG9IZXgoYnl0ZUFycmF5KSk7XG5cdH1cblxuXHRzdGF0aWMgYnl0ZXNUb0xldHRlcnMoYnl0ZUFycmF5KSB7XG5cdFx0dmFyIGxldHRlcnMgPSBbXTtcblx0XHRieXRlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihieXRlKSB7XG5cdFx0XHRsZXR0ZXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbGV0dGVycy5qb2luKCcnKTtcblx0fVxuXG5cdHN0YXRpYyBkZWNUb0JpbmFyeShkZWMpIHtcbiAgICBcdHJldHVybiAoZGVjID4+PiAwKS50b1N0cmluZygyKTtcblx0fVxuXG5cdHN0YXRpYyByZWFkVmFySW50KGJ5dGVBcnJheSkge1xuXHRcdHZhciByZXN1bHQgPSAwO1xuXHRcdGJ5dGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdFx0dmFyIGIgPSBudW1iZXI7XG5cdFx0XHRpZiAoYiAmIDB4ODApIHtcblx0XHRcdFx0cmVzdWx0ICs9IChiICYgMHg3Zik7XG5cdFx0XHRcdHJlc3VsdCA8PD0gNztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8qIGIgaXMgdGhlIGxhc3QgYnl0ZSAqL1xuXHRcdFx0XHRyZXN1bHQgKz0gYjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn0iXX0=
