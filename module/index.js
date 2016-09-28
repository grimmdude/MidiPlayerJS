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
			if (this.setIntervalId) {
				console.log('Already playing...');
				return false;
			}

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
			this.lastStatuses = [];
			this.lastTick = null;
			this.lastTicks = [];
			this.pointers = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJldmVudEhhbmRsZXIiLCJidWZmZXIiLCJzdGFydFRpbWUiLCJkaXZpc2lvbiIsInNldEludGVydmFsSWQiLCJ0cmFja3MiLCJ0cmFja3NFbmFibGVkIiwidGVtcG8iLCJ0aWNrIiwibGFzdFN0YXR1c2VzIiwibGFzdFRpY2siLCJsYXN0VGlja3MiLCJwb2ludGVycyIsInBhdGgiLCJmcyIsInJlcXVpcmUiLCJyZWFkRmlsZVN5bmMiLCJmaWxlTG9hZGVkIiwiYXJyYXlCdWZmZXIiLCJVaW50OEFycmF5IiwiZGF0YVVyaSIsImFycmF5IiwidmFsaWRhdGUiLCJnZXREaXZpc2lvbiIsImdldFRyYWNrcyIsIlV0aWxzIiwiYnl0ZXNUb0xldHRlcnMiLCJzbGljZSIsImZvckVhY2giLCJieXRlIiwiY29uc29sZSIsImxvZyIsImJ5dGVzVG9OdW1iZXIiLCJpbmRleCIsInRyYWNrTGVuZ3RoIiwicHVzaCIsInRyYWNrTnVtYmVyIiwidHJhY2tJbmRleCIsInRyYWNrIiwicG9pbnRlciIsImRlbHRhQnl0ZUNvdW50IiwiZ2V0RGVsdGFCeXRlQ291bnQiLCJkZWx0YSIsInJlYWRWYXJJbnQiLCJldmVudFNpZyIsImxlbmd0aCIsImV2ZW50IiwicGFyc2VFdmVudCIsImVtaXRFdmVudCIsIkRhdGUiLCJnZXRUaW1lIiwibWUiLCJzZXRJbnRlcnZhbCIsImdldEN1cnJlbnRUaWNrIiwiaSIsImVuZE9mRmlsZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVFdmVudCIsInJlZHVjZSIsImEiLCJiIiwiY3VycmVudEJ5dGUiLCJieXRlQ291bnQiLCJNYXRoIiwicm91bmQiLCJldmVudFN0YXJ0SW5kZXgiLCJldmVudEpzb24iLCJuYW1lIiwidmx2Iiwic3RyaW5nTGVuZ3RoIiwic3RyaW5nIiwiZGF0YSIsInJ1bm5pbmciLCJub3RlTnVtYmVyIiwibm90ZU5hbWUiLCJDb25zdGFudHMiLCJOT1RFUyIsInZlbG9jaXR5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c3MgUGxheWVyIHtcblx0Y29uc3RydWN0b3IoZXZlbnRIYW5kbGVyLCBidWZmZXIpIHtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdFx0dGhpcy5idWZmZXIgPSBidWZmZXIgfHwgbnVsbDtcblx0XHR0aGlzLmRpdmlzaW9uO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IG51bGw7XG5cdFx0dGhpcy50cmFja3MgPSBbXTtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWQgPSBbXTsgLy8gMCBkaXNhYmxlZCwgMSBlbmFibGVkXG5cdFx0dGhpcy50ZW1wbyA9IDEwMDtcblx0XHR0aGlzLnRpY2sgPSAwO1xuXHRcdHRoaXMubGFzdFN0YXR1c2VzID0gW107XG5cdFx0dGhpcy5sYXN0VGljayA9IG51bGw7XG5cdFx0dGhpcy5sYXN0VGlja3MgPSBbXTtcblx0XHR0aGlzLnBvaW50ZXJzID0gW107XG5cblx0XHR0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcjtcblx0fVxuXG5cdC8vIE9ubHkgZm9yIE5vZGVKU1xuXHRsb2FkRmlsZShwYXRoKSB7XG5cdFx0dmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblx0XHR0aGlzLmJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhwYXRoKTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRsb2FkQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRsb2FkRGF0YVVyaShkYXRhVXJpKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBhcnJheTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRmaWxlTG9hZGVkKCkge1xuXHRcdGlmICghdGhpcy52YWxpZGF0ZSgpKSB0aHJvdyAnSW52YWxpZCBmaWxlOyBzaG91bGQgc3RhcnQgd2l0aCBNVGhkJztcblx0XHR0aGlzLmdldERpdmlzaW9uKCkuZ2V0VHJhY2tzKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyBGaXJzdCBmb3VyIGJ5dGVzIHNob3VsZCBiZSBNVGhkXG5cdHZhbGlkYXRlKCkge1xuXHRcdHJldHVybiBVdGlscy5ieXRlc1RvTGV0dGVycyh0aGlzLmJ1ZmZlci5zbGljZSgwLCA0KSkgPT09ICdNVGhkJztcblx0fVxuXG5cdGdldExlbmd0aCgpIHtcblx0XHR0aGlzLmJ1ZmZlci5zbGljZSg0LDgpLmZvckVhY2goZnVuY3Rpb24oYnl0ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coYnl0ZSlcblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLmJ1ZmZlci5zbGljZSg0LCA4KTtcblx0fVxuXG5cdGdldEZvcm1hdCgpIHtcblx0XHQvKlxuXHRcdE1JREkgZmlsZXMgY29tZSBpbiAzIHZhcmlhdGlvbnM6XG5cdFx0Rm9ybWF0IDAgd2hpY2ggY29udGFpbiBhIHNpbmdsZSB0cmFja1xuXHRcdEZvcm1hdCAxIHdoaWNoIGNvbnRhaW4gb25lIG9yIG1vcmUgc2ltdWx0YW5lb3VzIHRyYWNrcyBcblx0XHQoaWUgYWxsIHRyYWNrcyBhcmUgdG8gYmUgcGxheWVkIHNpbXVsdGFuZW91c2x5KS5cblx0XHRGb3JtYXQgMiB3aGljaCBjb250YWluIG9uZSBvciBtb3JlIGluZGVwZW5kYW50IHRyYWNrcyBcblx0XHQoaWUgZWFjaCB0cmFjayBpcyB0byBiZSBwbGF5ZWQgaW5kZXBlbmRhbnRseSBvZiB0aGUgb3RoZXJzKS5cblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSg4LCAxMCkpO1xuXHRcdCovXG5cblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSg4LCAxMCkpO1xuXHR9XG5cblx0Z2V0VHJhY2tDb3VudCgpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMCwgMTIpKTtcblx0fVxuXG5cdC8vIFBhcnNlcyBvdXQgdHJhY2tzIGFuZCBwbGFjZXMgdGhlbSBpbiB0aGlzLnRyYWNrcyBhbmQgaW5pdGlhbGl6ZXMgdGhpcy5wb2ludGVyc1xuXHRnZXRUcmFja3MoKSB7XG5cdFx0dGhpcy5idWZmZXIuZm9yRWFjaChmdW5jdGlvbihieXRlLCBpbmRleCkge1xuXHRcdFx0aWYgKFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4LCBpbmRleCArIDQpKSA9PSAnTVRyaycpIHtcblx0XHRcdFx0dmFyIHRyYWNrTGVuZ3RoID0gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZShpbmRleCArIDQsIGluZGV4ICsgOCkpO1xuXHRcdFx0XHR0aGlzLnRyYWNrcy5wdXNoKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgOCwgaW5kZXggKyA4ICsgdHJhY2tMZW5ndGgpKTtcblx0XHRcdFx0dGhpcy5wb2ludGVycy5wdXNoKDApO1xuXHRcdFx0XHR0aGlzLmxhc3RUaWNrcy5wdXNoKDApO1xuXHRcdFx0XHR0aGlzLnRyYWNrc0VuYWJsZWQucHVzaCgxKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZW5hYmxlVHJhY2sodHJhY2tOdW1iZXIpIHtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWRbdHJhY2tOdW1iZXIgLSAxXSA9IDE7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRkaXNhYmxlVHJhY2sodHJhY2tOdW1iZXIpIHtcblx0XHR0aGlzLnRyYWNrc0VuYWJsZWRbdHJhY2tOdW1iZXIgLSAxXSA9IDA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXREaXZpc2lvbigpIHtcblx0XHR0aGlzLmRpdmlzaW9uID0gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMiwgMTQpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGV2ZW50IHdpdGhpbiBhIGdpdmVuIHRyYWNrIHN0YXJ0aW5nIGF0IHNwZWNpZmllZCBpbmRleFxuXHQgKiBAcGFyYW0gdHJhY2tcblx0ICovXG5cdGhhbmRsZUV2ZW50KHRyYWNrSW5kZXgpIHtcblx0XHQvLyBQYXJzZSBkZWx0YSB2YWx1ZVxuXHRcdHZhciB0cmFjayA9IHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBwb2ludGVyID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0XHR2YXIgZGVsdGFCeXRlQ291bnQgPSB0aGlzLmdldERlbHRhQnl0ZUNvdW50KHRyYWNrSW5kZXgpO1xuXHRcdHZhciBkZWx0YSA9IFV0aWxzLnJlYWRWYXJJbnQodHJhY2suc2xpY2UocG9pbnRlciwgcG9pbnRlciArIGRlbHRhQnl0ZUNvdW50KSk7XG5cdFx0dmFyIGV2ZW50U2lnID0gdHJhY2tbcG9pbnRlciArIGRlbHRhQnl0ZUNvdW50XTtcblxuXHRcdGlmICh0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdIDwgdGhpcy50cmFja3NbdHJhY2tJbmRleF0ubGVuZ3RoICYmIHRoaXMudGljayAtIHRoaXMubGFzdFRpY2tzW3RyYWNrSW5kZXhdID49IGRlbHRhKSB7XG5cdFx0XHR2YXIgZXZlbnQgPSB0aGlzLnBhcnNlRXZlbnQodHJhY2tJbmRleCwgZGVsdGFCeXRlQ291bnQpO1xuXG5cdFx0XHRpZiAodGhpcy50cmFja3NFbmFibGVkW3RyYWNrSW5kZXhdID09IDEpIHRoaXMuZW1pdEV2ZW50KGV2ZW50KTtcblx0XHRcdFxuXHRcdFx0Ly8gUmVjdXJzaXZlbHkgY2FsbCB0aGlzIGZ1bmN0aW9uIGZvciBlYWNoIGV2ZW50IGFoZWFkIHRoYXQgaGFzIDAgZGVsdGEgdGltZT9cblx0XHR9XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdGlmICh0aGlzLnNldEludGVydmFsSWQpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdBbHJlYWR5IHBsYXlpbmcuLi4nKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplXG5cdFx0dGhpcy5zdGFydFRpbWUgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRcdC8vIFN0YXJ0IHBsYXkgbG9vcFxuXHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRtZS50aWNrID0gbWUuZ2V0Q3VycmVudFRpY2soKTtcblx0XHRcdFxuXHRcdFx0Ly8gV2hpY2ggb25lJ3MgZmFzdGVyP1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8PSBtZS50cmFja3MubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRcdC8vY29uc29sZS5sb2cobWUudGljaylcblx0XHRcdFx0Ly8gSGFuZGxlIG5leHQgZXZlbnRcblx0XHRcdFx0aWYgKG1lLmVuZE9mRmlsZSgpKSB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChtZS5zZXRJbnRlcnZhbElkKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lLmhhbmRsZUV2ZW50KGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvKlxuXHRcdFx0bWUudHJhY2tzLmZvckVhY2goZnVuY3Rpb24odHJhY2ssIGluZGV4KSB7XG5cdFx0XHRcdC8vY29uc29sZS5sb2cobWUudGljaylcblx0XHRcdFx0Ly8gSGFuZGxlIG5leHQgZXZlbnRcblx0XHRcdFx0aWYgKG1lLmVuZE9mVHJhY2soaW5kZXgpKSB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChtZS5zZXRJbnRlcnZhbElkKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lLmhhbmRsZUV2ZW50KGluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XHRcblx0XHRcdCovXG5cdFx0XHRcblx0XHR9LCAxKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cGF1c2UoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNldEludGVydmFsSWQpO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IGZhbHNlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3RvcCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdFx0dGhpcy5sYXN0U3RhdHVzZXMgPSBbXTtcblx0XHR0aGlzLmxhc3RUaWNrID0gbnVsbDtcblx0XHR0aGlzLmxhc3RUaWNrcyA9IFtdO1xuXHRcdHRoaXMucG9pbnRlcnMgPSBbXTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVuZE9mVHJhY2sodHJhY2tJbmRleCkge1xuXHRcdHZhciBwb2ludGVyID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0XHRpZiAodGhpcy50cmFja3NbdHJhY2tJbmRleF1bcG9pbnRlciArIDFdID09IDB4ZmYgJiYgdGhpcy50cmFja3NbdHJhY2tJbmRleF1bcG9pbnRlciArIDJdID09IDB4MmYgJiYgdGhpcy50cmFja3NbdHJhY2tJbmRleF1bcG9pbnRlciArIDNdID09IDB4MDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGVuZE9mRmlsZSgpIHtcblx0XHQvLyBDdXJyZW50bHkgYXNzdW1lIGhlYWRlciBjaHVuayBpcyBzdHJpY3RseSAxNCBieXRlc1xuXHRcdHJldHVybiAxNCArIHRoaXMudHJhY2tzLmxlbmd0aCAqIDggKyB0aGlzLnBvaW50ZXJzLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7cmV0dXJuIGErYn0sIDApID09IHRoaXMuYnVmZmVyLmxlbmd0aDtcblx0fVxuXG5cdGdldERlbHRhQnl0ZUNvdW50KHRyYWNrSW5kZXgpIHtcblx0XHQvLyBHZXQgYnl0ZSBjb3VudCBvZiBkZWx0YSBWTFZcblx0XHQvLyBodHRwOi8vd3d3LmNjYXJoLm9yZy9jb3Vyc2VzLzI1My9oYW5kb3V0L3Zsdi9cblx0XHQvLyBJZiBieXRlIGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gODBoICgxMjggZGVjaW1hbCkgdGhlbiB0aGUgbmV4dCBieXRlIFxuXHQgICAgLy8gaXMgYWxzbyBwYXJ0IG9mIHRoZSBWTFYsXG5cdCAgIFx0Ly8gZWxzZSBieXRlIGlzIHRoZSBsYXN0IGJ5dGUgaW4gYSBWTFYuXG5cdCAgIFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdCAgIFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHQgICBcdHZhciBjdXJyZW50Qnl0ZSA9IHRyYWNrW3BvaW50ZXJdO1xuXHQgICBcdHZhciBieXRlQ291bnQgPSAxO1xuXG5cdFx0d2hpbGUgKGN1cnJlbnRCeXRlID49IDEyOCkge1xuXHRcdFx0Y3VycmVudEJ5dGUgPSB0cmFja1twb2ludGVyICsgYnl0ZUNvdW50XTtcblx0XHRcdGJ5dGVDb3VudCsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBieXRlQ291bnQ7XG5cdH1cblxuXHRnZXRDdXJyZW50VGljaygpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKG5ldyBEYXRlKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwICogKHRoaXMuZGl2aXNpb24gKiAodGhpcy50ZW1wbyAvIDYwKSkpO1xuXHR9XG5cblx0ZW1pdEV2ZW50KGV2ZW50KSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV2ZW50SGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5ldmVudEhhbmRsZXIoZXZlbnQpO1xuXHR9XG5cblx0Ly8gUGFyc2VzIGV2ZW50IGludG8gSlNPTiBhbmQgYWR2YW5jZXMgcG9pbnRlciBmb3IgdGhlIHRyYWNrXG5cdHBhcnNlRXZlbnQodHJhY2tJbmRleCwgZGVsdGFCeXRlQ291bnQpIHtcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMudGljayk7XG5cdFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdFx0dmFyIGV2ZW50U3RhcnRJbmRleCA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBkZWx0YUJ5dGVDb3VudDtcblx0XHR2YXIgZXZlbnRKc29uID0ge307XG5cdFx0ZXZlbnRKc29uLnRyYWNrID0gdHJhY2tJbmRleCArIDE7XG5cdFx0ZXZlbnRKc29uLmRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZSh0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdLCB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQpKTtcblx0XHR0aGlzLmxhc3RUaWNrc1t0cmFja0luZGV4XSA9IHRoaXMubGFzdFRpY2tzW3RyYWNrSW5kZXhdICsgZXZlbnRKc29uLmRlbHRhO1xuXG5cdFx0Ly9ldmVudEpzb24ucmF3ID0gZXZlbnQ7XG5cdFx0aWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPT0gMHhmZikge1xuXHRcdFx0Ly8gTWV0YSBFdmVudFxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgbWV0YSBldmVudCB3ZSBzaG91bGQgZW1pdCB0aGUgZGF0YSBhbmQgaW1tZWRpYXRlbHkgbW92ZSB0byB0aGUgbmV4dCBldmVudFxuXHRcdFx0Ly8gb3RoZXJ3aXNlIGlmIHdlIGxldCBpdCBydW4gdGhyb3VnaCB0aGUgbmV4dCBjeWNsZSBhIHNsaWdodCBkZWxheSB3aWxsIGFjY3VtdWxhdGUgaWYgbXVsdGlwbGUgdHJhY2tzXG5cdFx0XHQvLyBhcmUgYmVpbmcgcGxheWVkIHNpbXVsdGFuZW91c2x5XG5cblx0XHRcdHN3aXRjaCh0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXSkge1xuXHRcdFx0XHRjYXNlIDB4MDA6IC8vIFNlcXVlbmNlIE51bWJlclxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlIE51bWJlcic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMTogLy8gVGV4dCBFdmVudFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RleHQgRXZlbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDI6IC8vIENvcHlyaWdodCBOb3RpY2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDb3B5cmlnaHQgTm90aWNlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAzOiAvLyBTZXF1ZW5jZS9UcmFjayBOYW1lXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2UvVHJhY2sgTmFtZSc7XG5cdFx0XHRcdFx0Ly8gR2V0IHZsdiBsZW5ndGhcblx0XHRcdFx0XHR2YXIgY3VycmVudEJ5dGUgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHRcdFx0XHRcdHZhciBieXRlQ291bnQgPSAxO1xuXHRcdFx0XHRcdHdoaWxlIChjdXJyZW50Qnl0ZSA+PSAxMjgpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRCeXRlID0gdHJhY2tbdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArIGJ5dGVDb3VudF07XG5cdFx0XHRcdFx0XHRieXRlQ291bnQrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZsdiA9IGJ5dGVDb3VudDtcblx0XHRcdFx0XHR2YXIgbGVuZ3RoID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZShldmVudFN0YXJ0SW5kZXggKyAyLCBldmVudFN0YXJ0SW5kZXggKyAyICsgYnl0ZUNvdW50KSk7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnN0cmluZ0xlbmd0aCA9IGxlbmd0aDtcblx0XHRcdFx0XHRldmVudEpzb24uc3RyaW5nID0gVXRpbHMuYnl0ZXNUb0xldHRlcnModHJhY2suc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgYnl0ZUNvdW50ICsgMiwgZXZlbnRTdGFydEluZGV4ICsgYnl0ZUNvdW50ICsgbGVuZ3RoICsgMikpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDQ6IC8vIEluc3RydW1lbnQgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0luc3RydW1lbnQgTmFtZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNTogLy8gTHlyaWNcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdMeXJpYyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNjogLy8gTWFya2VyXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTWFya2VyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA3OiAvLyBDdWUgUG9pbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDdWUgUG9pbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MjA6IC8vIE1JREkgQ2hhbm5lbCBQcmVmaXhcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdNSURJIENoYW5uZWwgUHJlZml4Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDJGOiAvLyBFbmQgb2YgVHJhY2tcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdFbmQgb2YgVHJhY2snO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTE6IC8vIFNldCBUZW1wb1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NldCBUZW1wbyc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLmRhdGEgPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRyYWNrLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIDMsIGV2ZW50U3RhcnRJbmRleCArIDYpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU0OiAvLyBTTVRQRSBPZmZzZXRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTTVRQRSBPZmZzZXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTg6IC8vIFRpbWUgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVGltZSBTaWduYXR1cmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTk6IC8vIEtleSBTaWduYXR1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdLZXkgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDdGOiAvLyBTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlci1TcGVjaWZpYyBNZXRhLWV2ZW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxlbmd0aCA9IHRyYWNrW3RoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBkZWx0YUJ5dGVDb3VudCArIDJdO1xuXHRcdFx0Ly8gU29tZSBtZXRhIGV2ZW50cyB3aWxsIGhhdmUgdmx2IHRoYXQgbmVlZHMgdG8gYmUgaGFuZGxlZFxuXG5cdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGxlbmd0aCArIDQ7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gVm9pY2UgZXZlbnRcblx0XHRcdGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDwgMHg4MCkge1xuXHRcdFx0XHQvLyBSdW5uaW5nIHN0YXR1c1xuXHRcdFx0XHRldmVudEpzb24ucnVubmluZyA9IHRydWU7XG5cdFx0XHRcdGV2ZW50SnNvbi5ub3RlTnVtYmVyID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXhdXTtcblx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAodGhpcy5sYXN0U3RhdHVzZXNbdHJhY2tJbmRleF0gPD0gMHg4Zikge1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb2ZmJztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMubGFzdFN0YXR1c2VzW3RyYWNrSW5kZXhdIDw9IDB4OWYpIHtcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9uJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxhc3RTdGF0dXNlc1t0cmFja0luZGV4XSA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleF07XG5cblx0XHRcdFx0aWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHg4Zikge1xuXHRcdFx0XHRcdC8vIE5vdGUgb2ZmXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvZmYnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTnVtYmVyID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOYW1lID0gQ29uc3RhbnRzLk5PVEVTW3RyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdXTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHg5Zikge1xuXHRcdFx0XHRcdC8vIE5vdGUgb25cblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9uJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4YWYpIHtcblx0XHRcdFx0XHQvLyBQb2x5cGhvbmljIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BvbHlwaG9uaWMgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnByZXNzdXJlID0gZXZlbnRbMl07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4YmYpIHtcblx0XHRcdFx0XHQvLyBDb250cm9sbGVyIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvbnRyb2xsZXIgQ2hhbmdlJztcblx0XHRcdFx0XHRldmVudEpzb24ubnVtYmVyID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZhbHVlID0gdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMl07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4Y2YpIHtcblx0XHRcdFx0XHQvLyBQcm9ncmFtIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1Byb2dyYW0gQ2hhbmdlJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhkZikge1xuXHRcdFx0XHRcdC8vIENoYW5uZWwgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ2hhbm5lbCBLZXkgUHJlc3N1cmUnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAyO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGVmKSB7XG5cdFx0XHRcdFx0Ly8gUGl0Y2ggQmVuZFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1BpdGNoIEJlbmQnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50SnNvbjtcblx0fVxuXG59XG5cbmV4cG9ydHMuUGxheWVyID0gUGxheWVyOyJdfQ==
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
