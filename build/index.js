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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJDb25zdGFudHMiLCJOT1RFUyIsImFsbE5vdGVzIiwiY291bnRlciIsImkiLCJmb3JFYWNoIiwibm90ZUdyb3VwIiwibm90ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsWUFBWTtBQUNmQyxRQUFPO0FBRFEsQ0FBaEI7O0FBSUEsQ0FBQyxZQUFXO0FBQ1g7QUFDQSxLQUFJQyxXQUFXLENBQUMsQ0FBQyxHQUFELENBQUQsRUFBUSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQVIsRUFBcUIsQ0FBQyxHQUFELENBQXJCLEVBQTRCLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBNUIsRUFBeUMsQ0FBQyxHQUFELENBQXpDLEVBQStDLENBQUMsR0FBRCxDQUEvQyxFQUFzRCxDQUFDLElBQUQsRUFBTSxJQUFOLENBQXRELEVBQW1FLENBQUMsR0FBRCxDQUFuRSxFQUEwRSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQTFFLEVBQXVGLENBQUMsR0FBRCxDQUF2RixFQUE4RixDQUFDLElBQUQsRUFBTSxJQUFOLENBQTlGLEVBQTJHLENBQUMsR0FBRCxDQUEzRyxDQUFmO0FBQ0EsS0FBSUMsVUFBVSxDQUFkOztBQUVBO0FBQ0EsTUFBSyxJQUFJQyxJQUFJLENBQUMsQ0FBZCxFQUFpQkEsS0FBSyxDQUF0QixFQUF5QkEsR0FBekIsRUFBOEI7QUFDN0JGLFdBQVNHLE9BQVQsQ0FBaUIsVUFBU0MsU0FBVCxFQUFvQjtBQUNwQ0EsYUFBVUQsT0FBVixDQUFrQixVQUFTRSxJQUFULEVBQWU7QUFBQ1AsY0FBVUMsS0FBVixDQUFnQkUsT0FBaEIsSUFBMkJJLE9BQU9ILENBQWxDO0FBQW9DLElBQXRFO0FBQ0FEO0FBQ0EsR0FIRDtBQUlBO0FBQ0QsQ0FaRDs7QUFjQUssUUFBUVIsU0FBUixHQUFvQkEsU0FBcEIiLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbnN0YW50cyA9IHtcblx0Tk9URVM6IFtdXG59O1xuXG4oZnVuY3Rpb24oKSB7XG5cdC8vIEJ1aWxkcyBub3RlcyBvYmplY3QgZm9yIHJlZmVyZW5jZSBhZ2FpbnN0IGJpbmFyeSB2YWx1ZXMuXG5cdHZhciBhbGxOb3RlcyA9IFtbJ0MnXSwgWydDIycsJ0RiJ10sIFsnRCddLCBbJ0QjJywnRWInXSwgWydFJ10sWydGJ10sIFsnRiMnLCdHYiddLCBbJ0cnXSwgWydHIycsJ0FiJ10sIFsnQSddLCBbJ0EjJywnQmInXSwgWydCJ11dO1xuXHR2YXIgY291bnRlciA9IDA7XG5cblx0Ly8gQWxsIGF2YWlsYWJsZSBvY3RhdmVzLlxuXHRmb3IgKHZhciBpID0gLTE7IGkgPD0gOTsgaSsrKSB7XG5cdFx0YWxsTm90ZXMuZm9yRWFjaChmdW5jdGlvbihub3RlR3JvdXApIHtcblx0XHRcdG5vdGVHcm91cC5mb3JFYWNoKGZ1bmN0aW9uKG5vdGUpIHtDb25zdGFudHMuTk9URVNbY291bnRlcl0gPSBub3RlICsgaX0pO1xuXHRcdFx0Y291bnRlciArKztcblx0XHR9KTtcblx0fVxufSkoKTtcblxuZXhwb3J0cy5Db25zdGFudHMgPSBDb25zdGFudHM7Il19
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

			if (this.tick - this.lastTicks[trackIndex] >= delta) {
				this.lastTicks[trackIndex] = this.tick;
				this.emitEvent(this.parseEvent(trackIndex, deltaByteCount));
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
					if (me.endOfTrack(i)) {
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
	}, {
		key: 'toggleTrack',
		value: function toggleTrack(trackIndex) {}

		// Parses event into JSON and advances pointer for the track

	}, {
		key: 'parseEvent',
		value: function parseEvent(trackIndex, deltaByteCount) {
			console.log(this.tick);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5qcyJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJQbGF5ZXIiLCJldmVudEhhbmRsZXIiLCJzdGFydFRpbWUiLCJwb2ludGVycyIsImJ1ZmZlciIsImRpdmlzaW9uIiwic2V0SW50ZXJ2YWxJZCIsInRyYWNrcyIsInRlbXBvIiwidGljayIsImxhc3RTdGF0dXNlcyIsImxhc3RUaWNrIiwibGFzdFRpY2tzIiwicGF0aCIsInJlYWRGaWxlU3luYyIsInZhbGlkYXRlIiwiZ2V0RGl2aXNpb24iLCJnZXRUcmFja3MiLCJhcnJheSIsIlV0aWxzIiwiYnl0ZXNUb0xldHRlcnMiLCJzbGljZSIsImZvckVhY2giLCJieXRlIiwiY29uc29sZSIsImxvZyIsImJ5dGVzVG9OdW1iZXIiLCJpbmRleCIsInRyYWNrTGVuZ3RoIiwicHVzaCIsInRyYWNrSW5kZXgiLCJ0cmFjayIsInBvaW50ZXIiLCJkZWx0YUJ5dGVDb3VudCIsImdldERlbHRhQnl0ZUNvdW50IiwiZGVsdGEiLCJyZWFkVmFySW50IiwiZXZlbnRTaWciLCJlbWl0RXZlbnQiLCJwYXJzZUV2ZW50IiwiRGF0ZSIsImdldFRpbWUiLCJtZSIsInNldEludGVydmFsIiwiZ2V0Q3VycmVudFRpY2siLCJpIiwibGVuZ3RoIiwiZW5kT2ZUcmFjayIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVFdmVudCIsImN1cnJlbnRCeXRlIiwiYnl0ZUNvdW50IiwiTWF0aCIsInJvdW5kIiwiZXZlbnQiLCJldmVudFN0YXJ0SW5kZXgiLCJldmVudEpzb24iLCJuYW1lIiwidmx2Iiwic3RyaW5nTGVuZ3RoIiwic3RyaW5nIiwiZGF0YSIsInJ1bm5pbmciLCJub3RlTnVtYmVyIiwibm90ZU5hbWUiLCJDb25zdGFudHMiLCJOT1RFUyIsInZlbG9jaXR5Iiwibm90ZSIsInByZXNzdXJlIiwibnVtYmVyIiwidmFsdWUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJQSxLQUFLQyxRQUFRLElBQVIsQ0FB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QUNBLFdBQUtwRCxRQUFMLENBQWMyQixVQUFkLEtBQTZCRyxpQkFBaUIsQ0FBOUM7QUFFQSxNQVBNLE1BT0EsSUFBSUYsTUFBTXdCLGVBQU4sS0FBMEIsSUFBOUIsRUFBb0M7QUFDMUM7QUFDQUMsZ0JBQVVDLElBQVYsR0FBaUIsZ0JBQWpCO0FBQ0EsV0FBS3RELFFBQUwsQ0FBYzJCLFVBQWQsS0FBNkJHLGlCQUFpQixDQUE5QztBQUVBLE1BTE0sTUFLQSxJQUFJRixNQUFNd0IsZUFBTixLQUEwQixJQUE5QixFQUFvQztBQUMxQztBQUNBQyxnQkFBVUMsSUFBVixHQUFpQixzQkFBakI7QUFDQSxXQUFLdEQsUUFBTCxDQUFjMkIsVUFBZCxLQUE2QkcsaUJBQWlCLENBQTlDO0FBRUEsTUFMTSxNQUtBLElBQUlGLE1BQU13QixlQUFOLEtBQTBCLElBQTlCLEVBQW9DO0FBQzFDO0FBQ0FDLGdCQUFVQyxJQUFWLEdBQWlCLFlBQWpCO0FBQ0EsV0FBS3RELFFBQUwsQ0FBYzJCLFVBQWQsS0FBNkJHLGlCQUFpQixDQUE5QztBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxVQUFPdUIsU0FBUDtBQUNBOzs7Ozs7QUFJRmdCLFFBQVF4RSxNQUFSLEdBQWlCQSxNQUFqQiIsImZpbGUiOiJwbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5jbGFzcyBQbGF5ZXIge1xuXHRjb25zdHJ1Y3RvcihldmVudEhhbmRsZXIpIHtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdFx0dGhpcy5wb2ludGVycyA9IFtdO1xuXHRcdHRoaXMuYnVmZmVyO1xuXHRcdHRoaXMuZGl2aXNpb247XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkO1xuXHRcdHRoaXMudHJhY2tzID0gW107XG5cdFx0dGhpcy50ZW1wbyA9IDEwMDtcblx0XHR0aGlzLnRpY2sgPSAwO1xuXHRcdHRoaXMubGFzdFN0YXR1c2VzID0gW107XG5cdFx0dGhpcy5sYXN0VGljayA9IG51bGw7XG5cdFx0dGhpcy5sYXN0VGlja3MgPSBbXTtcblxuXHRcdHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyO1xuXHR9XG5cblx0bG9hZEZpbGUocGF0aCkge1xuXHRcdHRoaXMuYnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKHBhdGgpO1xuXHRcdGlmICghdGhpcy52YWxpZGF0ZSgpKSB0aHJvdyAnSW52YWxpZCBmaWxlOyBzaG91bGQgc3RhcnQgd2l0aCBNVGhkJztcblxuXHRcdHRoaXMuZ2V0RGl2aXNpb24oKS5nZXRUcmFja3MoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxvYWRBcnJheShhcnJheSkge1xuXHRcdHRoaXMuYnVmZmVyID0gYXJyYXk7XG5cdH1cblxuXHQvLyBGaXJzdCBmb3VyIGJ5dGVzIHNob3VsZCBiZSBNVGhkXG5cdHZhbGlkYXRlKCkge1xuXHRcdHJldHVybiBVdGlscy5ieXRlc1RvTGV0dGVycyh0aGlzLmJ1ZmZlci5zbGljZSgwLCA0KSkgPT09ICdNVGhkJztcblx0fVxuXG5cdGdldExlbmd0aCgpIHtcblx0XHR0aGlzLmJ1ZmZlci5zbGljZSg0LDgpLmZvckVhY2goZnVuY3Rpb24oYnl0ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coYnl0ZSlcblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLmJ1ZmZlci5zbGljZSg0LCA4KTtcblx0fVxuXG5cdGdldEZvcm1hdCgpIHtcblx0XHQvKlxuXHRcdE1JREkgZmlsZXMgY29tZSBpbiAzIHZhcmlhdGlvbnM6XG5cdFx0Rm9ybWF0IDAgd2hpY2ggY29udGFpbiBhIHNpbmdsZSB0cmFja1xuXHRcdEZvcm1hdCAxIHdoaWNoIGNvbnRhaW4gb25lIG9yIG1vcmUgc2ltdWx0YW5lb3VzIHRyYWNrcyBcblx0XHQoaWUgYWxsIHRyYWNrcyBhcmUgdG8gYmUgcGxheWVkIHNpbXVsdGFuZW91c2x5KS5cblx0XHRGb3JtYXQgMiB3aGljaCBjb250YWluIG9uZSBvciBtb3JlIGluZGVwZW5kYW50IHRyYWNrcyBcblx0XHQoaWUgZWFjaCB0cmFjayBpcyB0byBiZSBwbGF5ZWQgaW5kZXBlbmRhbnRseSBvZiB0aGUgb3RoZXJzKS5cblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSg4LCAxMCkpO1xuXHRcdCovXG5cblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSg4LCAxMCkpO1xuXHR9XG5cblx0Z2V0VHJhY2tDb3VudCgpIHtcblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMCwgMTIpKTtcblx0fVxuXG5cdC8vIFBhcnNlcyBvdXQgdHJhY2tzIGFuZCBwbGFjZXMgdGhlbSBpbiB0aGlzLnRyYWNrcyBhbmQgaW5pdGlhbGl6ZXMgdGhpcy5wb2ludGVyc1xuXHRnZXRUcmFja3MoKSB7XG5cdFx0dGhpcy5idWZmZXIuZm9yRWFjaChmdW5jdGlvbihieXRlLCBpbmRleCkge1xuXHRcdFx0aWYgKFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4LCBpbmRleCArIDQpKSA9PSAnTVRyaycpIHtcblx0XHRcdFx0dmFyIHRyYWNrTGVuZ3RoID0gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZShpbmRleCArIDQsIGluZGV4ICsgOCkpO1xuXHRcdFx0XHR0aGlzLnRyYWNrcy5wdXNoKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgOCwgaW5kZXggKyA4ICsgdHJhY2tMZW5ndGgpKTtcblx0XHRcdFx0dGhpcy5wb2ludGVycy5wdXNoKDApO1xuXHRcdFx0XHR0aGlzLmxhc3RUaWNrcy5wdXNoKDApO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXREaXZpc2lvbigpIHtcblx0XHR0aGlzLmRpdmlzaW9uID0gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMiwgMTQpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGV2ZW50IHdpdGhpbiBhIGdpdmVuIHRyYWNrIHN0YXJ0aW5nIGF0IHNwZWNpZmllZCBpbmRleFxuXHQgKiBAcGFyYW0gdHJhY2tcblx0ICovXG5cdGhhbmRsZUV2ZW50KHRyYWNrSW5kZXgpIHtcblx0XHQvLyBQYXJzZSBkZWx0YSB2YWx1ZVxuXHRcdHZhciB0cmFjayA9IHRoaXMudHJhY2tzW3RyYWNrSW5kZXhdO1xuXHRcdHZhciBwb2ludGVyID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0XHR2YXIgZGVsdGFCeXRlQ291bnQgPSB0aGlzLmdldERlbHRhQnl0ZUNvdW50KHRyYWNrSW5kZXgpO1xuXHRcdHZhciBkZWx0YSA9IFV0aWxzLnJlYWRWYXJJbnQodHJhY2suc2xpY2UocG9pbnRlciwgcG9pbnRlciArIGRlbHRhQnl0ZUNvdW50KSk7XG5cdFx0dmFyIGV2ZW50U2lnID0gdHJhY2tbcG9pbnRlciArIGRlbHRhQnl0ZUNvdW50XTtcblxuXHRcdGlmICh0aGlzLnRpY2sgLSB0aGlzLmxhc3RUaWNrc1t0cmFja0luZGV4XSA+PSBkZWx0YSkge1xuXHRcdFx0dGhpcy5sYXN0VGlja3NbdHJhY2tJbmRleF0gPSB0aGlzLnRpY2s7XG5cdFx0XHR0aGlzLmVtaXRFdmVudCh0aGlzLnBhcnNlRXZlbnQodHJhY2tJbmRleCwgZGVsdGFCeXRlQ291bnQpKTtcblx0XHR9XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdC8vIEluaXRpYWxpemVcblx0XHR0aGlzLnN0YXJ0VGltZSA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdFx0Ly8gU3RhcnQgcGxheSBsb29wXG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHR0aGlzLnNldEludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdG1lLnRpY2sgPSBtZS5nZXRDdXJyZW50VGljaygpO1xuXHRcdFx0XG5cdFx0XHQvLyBXaGljaCBvbmUncyBmYXN0ZXI/XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IG1lLnRyYWNrcy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhtZS50aWNrKVxuXHRcdFx0XHQvLyBIYW5kbGUgbmV4dCBldmVudFxuXHRcdFx0XHRpZiAobWUuZW5kT2ZUcmFjayhpKSkge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwobWUuc2V0SW50ZXJ2YWxJZCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZS5oYW5kbGVFdmVudChpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Lypcblx0XHRcdG1lLnRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrLCBpbmRleCkge1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKG1lLnRpY2spXG5cdFx0XHRcdC8vIEhhbmRsZSBuZXh0IGV2ZW50XG5cdFx0XHRcdGlmIChtZS5lbmRPZlRyYWNrKGluZGV4KSkge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwobWUuc2V0SW50ZXJ2YWxJZCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZS5oYW5kbGVFdmVudChpbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1x0XG5cdFx0XHQqL1xuXHRcdFx0XG5cdFx0fSwgMSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVuZE9mVHJhY2sodHJhY2tJbmRleCkge1xuXHRcdHZhciBwb2ludGVyID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0XHRpZiAodGhpcy50cmFja3NbdHJhY2tJbmRleF1bcG9pbnRlciArIDFdID09IDB4ZmYgJiYgdGhpcy50cmFja3NbdHJhY2tJbmRleF1bcG9pbnRlciArIDJdID09IDB4MmYgJiYgdGhpcy50cmFja3NbdHJhY2tJbmRleF1bcG9pbnRlciArIDNdID09IDB4MDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGdldERlbHRhQnl0ZUNvdW50KHRyYWNrSW5kZXgpIHtcblx0XHQvLyBHZXQgYnl0ZSBjb3VudCBvZiBkZWx0YSBWTFZcblx0XHQvLyBodHRwOi8vd3d3LmNjYXJoLm9yZy9jb3Vyc2VzLzI1My9oYW5kb3V0L3Zsdi9cblx0XHQvLyBJZiBieXRlIGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gODBoICgxMjggZGVjaW1hbCkgdGhlbiB0aGUgbmV4dCBieXRlIFxuXHQgICAgLy8gaXMgYWxzbyBwYXJ0IG9mIHRoZSBWTFYsXG5cdCAgIFx0Ly8gZWxzZSBieXRlIGlzIHRoZSBsYXN0IGJ5dGUgaW4gYSBWTFYuXG5cdCAgIFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdCAgIFx0dmFyIHBvaW50ZXIgPSB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdO1xuXHQgICBcdHZhciBjdXJyZW50Qnl0ZSA9IHRyYWNrW3BvaW50ZXJdO1xuXHQgICBcdHZhciBieXRlQ291bnQgPSAxO1xuXG5cdFx0d2hpbGUgKGN1cnJlbnRCeXRlID49IDEyOCkge1xuXHRcdFx0Y3VycmVudEJ5dGUgPSB0cmFja1twb2ludGVyICsgYnl0ZUNvdW50XTtcblx0XHRcdGJ5dGVDb3VudCsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBieXRlQ291bnQ7XG5cdH1cblxuXHRnZXRDdXJyZW50VGljaygpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKG5ldyBEYXRlKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwICogKHRoaXMuZGl2aXNpb24gKiAodGhpcy50ZW1wbyAvIDYwKSkpO1xuXHR9XG5cblx0ZW1pdEV2ZW50KGV2ZW50KSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV2ZW50SGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5ldmVudEhhbmRsZXIoZXZlbnQpO1xuXHR9XG5cblx0dG9nZ2xlVHJhY2sodHJhY2tJbmRleCkge1xuXG5cdH1cblxuXHQvLyBQYXJzZXMgZXZlbnQgaW50byBKU09OIGFuZCBhZHZhbmNlcyBwb2ludGVyIGZvciB0aGUgdHJhY2tcblx0cGFyc2VFdmVudCh0cmFja0luZGV4LCBkZWx0YUJ5dGVDb3VudCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMudGljayk7XG5cdFx0dmFyIHRyYWNrID0gdGhpcy50cmFja3NbdHJhY2tJbmRleF07XG5cdFx0dmFyIGV2ZW50U3RhcnRJbmRleCA9IHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBkZWx0YUJ5dGVDb3VudDtcblx0XHR2YXIgZXZlbnRKc29uID0ge307XG5cdFx0ZXZlbnRKc29uLnRyYWNrID0gdHJhY2tJbmRleCArIDE7XG5cdFx0ZXZlbnRKc29uLmRlbHRhID0gVXRpbHMucmVhZFZhckludCh0cmFjay5zbGljZSh0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdLCB0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQpKTtcblxuXHRcdC8vZXZlbnRKc29uLnJhdyA9IGV2ZW50O1xuXHRcdGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdID09IDB4ZmYpIHtcblx0XHRcdC8vIE1ldGEgRXZlbnRcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIG1ldGEgZXZlbnQgd2Ugc2hvdWxkIGVtaXQgdGhlIGRhdGEgYW5kIGltbWVkaWF0ZWx5IG1vdmUgdG8gdGhlIG5leHQgZXZlbnRcblx0XHRcdC8vIG90aGVyd2lzZSBpZiB3ZSBsZXQgaXQgcnVuIHRocm91Z2ggdGhlIG5leHQgY3ljbGUgYSBzbGlnaHQgZGVsYXkgd2lsbCBhY2N1bXVsYXRlIGlmIG11bHRpcGxlIHRyYWNrc1xuXHRcdFx0Ly8gYXJlIGJlaW5nIHBsYXllZCBzaW11bHRhbmVvdXNseVxuXG5cdFx0XHRzd2l0Y2godHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV0pIHtcblx0XHRcdFx0Y2FzZSAweDAwOiAvLyBTZXF1ZW5jZSBOdW1iZXJcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZSBOdW1iZXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDE6IC8vIFRleHQgRXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdUZXh0IEV2ZW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAyOiAvLyBDb3B5cmlnaHQgTm90aWNlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ29weXJpZ2h0IE5vdGljZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMzogLy8gU2VxdWVuY2UvVHJhY2sgTmFtZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlL1RyYWNrIE5hbWUnO1xuXHRcdFx0XHRcdC8vIEdldCB2bHYgbGVuZ3RoXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRCeXRlID0gdGhpcy5wb2ludGVyc1t0cmFja0luZGV4XTtcblx0XHRcdFx0XHR2YXIgYnl0ZUNvdW50ID0gMTtcblx0XHRcdFx0XHR3aGlsZSAoY3VycmVudEJ5dGUgPj0gMTI4KSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50Qnl0ZSA9IHRyYWNrW3RoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKyBieXRlQ291bnRdO1xuXHRcdFx0XHRcdFx0Ynl0ZUNvdW50Kys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50SnNvbi52bHYgPSBieXRlQ291bnQ7XG5cdFx0XHRcdFx0dmFyIGxlbmd0aCA9IFV0aWxzLnJlYWRWYXJJbnQodHJhY2suc2xpY2UoZXZlbnRTdGFydEluZGV4ICsgMiwgZXZlbnRTdGFydEluZGV4ICsgMiArIGJ5dGVDb3VudCkpO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5zdHJpbmdMZW5ndGggPSBsZW5ndGg7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnN0cmluZyA9IFV0aWxzLmJ5dGVzVG9MZXR0ZXJzKHRyYWNrLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIGJ5dGVDb3VudCArIDIsIGV2ZW50U3RhcnRJbmRleCArIGJ5dGVDb3VudCArIGxlbmd0aCArIDIpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA0OiAvLyBJbnN0cnVtZW50IE5hbWVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdJbnN0cnVtZW50IE5hbWUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDU6IC8vIEx5cmljXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTHlyaWMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDY6IC8vIE1hcmtlclxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01hcmtlcic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNzogLy8gQ3VlIFBvaW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ3VlIFBvaW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDIwOiAvLyBNSURJIENoYW5uZWwgUHJlZml4XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTUlESSBDaGFubmVsIFByZWZpeCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyRjogLy8gRW5kIG9mIFRyYWNrXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnRW5kIG9mIFRyYWNrJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDUxOiAvLyBTZXQgVGVtcG9cblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXQgVGVtcG8nO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5kYXRhID0gVXRpbHMuYnl0ZXNUb051bWJlcih0cmFjay5zbGljZShldmVudFN0YXJ0SW5kZXggKyAzLCBldmVudFN0YXJ0SW5kZXggKyA2KSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1NDogLy8gU01UUEUgT2Zmc2V0XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU01UUEUgT2Zmc2V0Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU4OiAvLyBUaW1lIFNpZ25hdHVyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RpbWUgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU5OiAvLyBLZXkgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnS2V5IFNpZ25hdHVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg3RjogLy8gU2VxdWVuY2VyLVNwZWNpZmljIE1ldGEtZXZlbnRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsZW5ndGggPSB0cmFja1t0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICsgZGVsdGFCeXRlQ291bnQgKyAyXTtcblx0XHRcdC8vIFNvbWUgbWV0YSBldmVudHMgd2lsbCBoYXZlIHZsdiB0aGF0IG5lZWRzIHRvIGJlIGhhbmRsZWRcblxuXHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBsZW5ndGggKyA0O1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFZvaWNlIGV2ZW50XG5cdFx0XHRpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8IDB4ODApIHtcblx0XHRcdFx0Ly8gUnVubmluZyBzdGF0dXNcblx0XHRcdFx0ZXZlbnRKc29uLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4XV07XG5cdFx0XHRcdGV2ZW50SnNvbi52ZWxvY2l0eSA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHRoaXMubGFzdFN0YXR1c2VzW3RyYWNrSW5kZXhdIDw9IDB4OGYpIHtcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9mZic7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmxhc3RTdGF0dXNlc1t0cmFja0luZGV4XSA8PSAweDlmKSB7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5sYXN0U3RhdHVzZXNbdHJhY2tJbmRleF0gPSB0cmFja1tldmVudFN0YXJ0SW5kZXhdO1xuXG5cdFx0XHRcdGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4OGYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9mZlxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb2ZmJztcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4OWYpIHtcblx0XHRcdFx0XHQvLyBOb3RlIG9uXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvbic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0cmFja1tldmVudFN0YXJ0SW5kZXggKyAxXTtcblx0XHRcdFx0XHRldmVudEpzb24ubm90ZU5hbWUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGFmKSB7XG5cdFx0XHRcdFx0Ly8gUG9seXBob25pYyBLZXkgUHJlc3N1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQb2x5cGhvbmljIEtleSBQcmVzc3VyZSc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGUgPSBDb25zdGFudHMuTk9URVNbdHJhY2tbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5wcmVzc3VyZSA9IGV2ZW50WzJdO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGJmKSB7XG5cdFx0XHRcdFx0Ly8gQ29udHJvbGxlciBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDb250cm9sbGVyIENoYW5nZSc7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm51bWJlciA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi52YWx1ZSA9IHRyYWNrW2V2ZW50U3RhcnRJbmRleCArIDJdO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlcnNbdHJhY2tJbmRleF0gKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodHJhY2tbZXZlbnRTdGFydEluZGV4XSA8PSAweGNmKSB7XG5cdFx0XHRcdFx0Ly8gUHJvZ3JhbSBDaGFuZ2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQcm9ncmFtIENoYW5nZSc7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyc1t0cmFja0luZGV4XSArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0cmFja1tldmVudFN0YXJ0SW5kZXhdIDw9IDB4ZGYpIHtcblx0XHRcdFx0XHQvLyBDaGFubmVsIEtleSBQcmVzc3VyZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NoYW5uZWwgS2V5IFByZXNzdXJlJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRyYWNrW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhlZikge1xuXHRcdFx0XHRcdC8vIFBpdGNoIEJlbmRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdQaXRjaCBCZW5kJztcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXJzW3RyYWNrSW5kZXhdICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudEpzb247XG5cdH1cblxufVxuXG5leHBvcnRzLlBsYXllciA9IFBsYXllcjsiXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIlV0aWxzIiwiYnl0ZSIsInRvU3RyaW5nIiwiYnl0ZUFycmF5IiwiaGV4IiwiZm9yRWFjaCIsInB1c2giLCJieXRlVG9IZXgiLCJqb2luIiwiaGV4U3RyaW5nIiwicGFyc2VJbnQiLCJoZXhUb051bWJlciIsImJ5dGVzVG9IZXgiLCJsZXR0ZXJzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZGVjIiwicmVzdWx0IiwibnVtYmVyIiwiYiIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNQSxLOzs7Ozs7OzRCQUNZQyxJLEVBQU07QUFDdEIsVUFBT0EsS0FBS0MsUUFBTCxDQUFjLEVBQWQsQ0FBUDtBQUNBOzs7NkJBRWlCQyxTLEVBQVc7QUFDNUIsT0FBSUMsTUFBTSxFQUFWOztBQUVBRCxhQUFVRSxPQUFWLENBQWtCLFVBQVNKLElBQVQsRUFBZTtBQUNoQ0csUUFBSUUsSUFBSixDQUFTTixNQUFNTyxTQUFOLENBQWdCTixJQUFoQixDQUFUO0FBQ0EsSUFGRDs7QUFJQSxVQUFPRyxJQUFJSSxJQUFKLENBQVMsRUFBVCxDQUFQO0FBQ0E7Ozs4QkFFa0JDLFMsRUFBVztBQUM3QixVQUFPQyxTQUFTRCxTQUFULEVBQW9CLEVBQXBCLENBQVA7QUFDQTs7O2dDQUVvQk4sUyxFQUFXO0FBQy9CLFVBQU9ILE1BQU1XLFdBQU4sQ0FBa0JYLE1BQU1ZLFVBQU4sQ0FBaUJULFNBQWpCLENBQWxCLENBQVA7QUFDQTs7O2lDQUVxQkEsUyxFQUFXO0FBQ2hDLE9BQUlVLFVBQVUsRUFBZDtBQUNBVixhQUFVRSxPQUFWLENBQWtCLFVBQVNKLElBQVQsRUFBZTtBQUNoQ1ksWUFBUVAsSUFBUixDQUFhUSxPQUFPQyxZQUFQLENBQW9CZCxJQUFwQixDQUFiO0FBQ0EsSUFGRDs7QUFJQSxVQUFPWSxRQUFRTCxJQUFSLENBQWEsRUFBYixDQUFQO0FBQ0E7Ozs4QkFFa0JRLEcsRUFBSztBQUNwQixVQUFPLENBQUNBLFFBQVEsQ0FBVCxFQUFZZCxRQUFaLENBQXFCLENBQXJCLENBQVA7QUFDSDs7OzZCQUVpQkMsUyxFQUFXO0FBQzVCLE9BQUljLFNBQVMsQ0FBYjtBQUNBZCxhQUFVRSxPQUFWLENBQWtCLFVBQVNhLE1BQVQsRUFBaUI7QUFDbEMsUUFBSUMsSUFBSUQsTUFBUjtBQUNBLFFBQUlDLElBQUksSUFBUixFQUFjO0FBQ2JGLGVBQVdFLElBQUksSUFBZjtBQUNBRixnQkFBVyxDQUFYO0FBQ0EsS0FIRCxNQUdPO0FBQ047QUFDQUEsZUFBVUUsQ0FBVjtBQUNBO0FBQ0QsSUFURDs7QUFXQSxVQUFPRixNQUFQO0FBQ0E7Ozs7OztBQUdGRyxRQUFRcEIsS0FBUixHQUFnQkEsS0FBaEIiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBVdGlscyB7XG5cdHN0YXRpYyBieXRlVG9IZXgoYnl0ZSkge1xuXHRcdHJldHVybiBieXRlLnRvU3RyaW5nKDE2KTtcblx0fVxuXG5cdHN0YXRpYyBieXRlc1RvSGV4KGJ5dGVBcnJheSkge1xuXHRcdHZhciBoZXggPSBbXTtcblxuXHRcdGJ5dGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUpIHtcblx0XHRcdGhleC5wdXNoKFV0aWxzLmJ5dGVUb0hleChieXRlKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gaGV4LmpvaW4oJycpO1xuXHR9XG5cblx0c3RhdGljIGhleFRvTnVtYmVyKGhleFN0cmluZykge1xuXHRcdHJldHVybiBwYXJzZUludChoZXhTdHJpbmcsIDE2KTtcblx0fVxuXG5cdHN0YXRpYyBieXRlc1RvTnVtYmVyKGJ5dGVBcnJheSkge1xuXHRcdHJldHVybiBVdGlscy5oZXhUb051bWJlcihVdGlscy5ieXRlc1RvSGV4KGJ5dGVBcnJheSkpO1xuXHR9XG5cblx0c3RhdGljIGJ5dGVzVG9MZXR0ZXJzKGJ5dGVBcnJheSkge1xuXHRcdHZhciBsZXR0ZXJzID0gW107XG5cdFx0Ynl0ZUFycmF5LmZvckVhY2goZnVuY3Rpb24oYnl0ZSkge1xuXHRcdFx0bGV0dGVycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSkpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGxldHRlcnMuam9pbignJyk7XG5cdH1cblxuXHRzdGF0aWMgZGVjVG9CaW5hcnkoZGVjKSB7XG4gICAgXHRyZXR1cm4gKGRlYyA+Pj4gMCkudG9TdHJpbmcoMik7XG5cdH1cblxuXHRzdGF0aWMgcmVhZFZhckludChieXRlQXJyYXkpIHtcblx0XHR2YXIgcmVzdWx0ID0gMDtcblx0XHRieXRlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihudW1iZXIpIHtcblx0XHRcdHZhciBiID0gbnVtYmVyO1xuXHRcdFx0aWYgKGIgJiAweDgwKSB7XG5cdFx0XHRcdHJlc3VsdCArPSAoYiAmIDB4N2YpO1xuXHRcdFx0XHRyZXN1bHQgPDw9IDc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvKiBiIGlzIHRoZSBsYXN0IGJ5dGUgKi9cblx0XHRcdFx0cmVzdWx0ICs9IGI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbmV4cG9ydHMuVXRpbHMgPSBVdGlscztcbiJdfQ==
