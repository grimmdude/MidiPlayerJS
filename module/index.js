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
		this.tempo = 120;
		this.startTick = 0;
		this.tick = 0;
		this.lastTick = null;
		this.inLoop = false;

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
			this.buffer.forEach(function (byte, index) {
				if (Utils.bytesToLetters(this.buffer.slice(index, index + 4)) == 'MTrk') {
					var trackLength = Utils.bytesToNumber(this.buffer.slice(index + 4, index + 8));
					this.tracks.push(new Track(this.tracks.length, this.buffer.slice(index + 8, index + 8 + trackLength)));
				}
			}, this);

			return this;
		}
	}, {
		key: 'enableTrack',
		value: function enableTrack(trackNumber) {
			this.tracks[trackNumber - 1].enable();
			return this;
		}
	}, {
		key: 'disableTrack',
		value: function disableTrack(trackNumber) {
			this.tracks[trackNumber - 1].disable();
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
		value: function playLoop(exportEvents) {
			if (!this.inLoop) {
				this.inLoop = true;
				this.tick = this.getCurrentTick();
				//console.log(this.tick)

				for (var i = 0; i <= this.tracks.length - 1; i++) {
					// Handle next event
					if (!exportEvents && this.endOfFile()) {
						console.log('End of file');
						this.stop();
					} else {
						var event = this.tracks[i].handleEvent(this.tick, exportEvents);
						if (event) {
							if (!exportEvents) {
								this.emitEvent(event);
							}
						}
					}
				}
				this.inLoop = false;
			}

			//window.requestAnimationFrame(this.playLoop.bind(this));
		}
	}, {
		key: 'play',
		value: function play() {
			//return this.exportEvents();
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
		key: 'exportEvents',
		value: function exportEvents() {
			while (!this.endOfFile()) {
				this.playLoop(true);
			}var events = this.getEvents();

			this.stop();
			return events;
		}
	}, {
		key: 'getEvents',
		value: function getEvents() {
			return this.tracks.map(function (track) {
				return track.events;
			});
		}
	}, {
		key: 'getTotalTicks',
		value: function getTotalTicks() {
			return Math.max.apply(null, this.tracks.map(function (track) {
				return track.delta;
			}));
		}
	}, {
		key: 'getSongTime',
		value: function getSongTime() {
			return this.getTotalTicks() / this.division / this.tempo;
		}
	}, {
		key: 'bytesProcessed',
		value: function bytesProcessed() {
			// Currently assume header chunk is strictly 14 bytes
			return 14 + this.tracks.length * 8 + this.tracks.reduce(function (a, b) {
				return { pointer: a.pointer + b.pointer };
			}, { pointer: 0 }).pointer;
		}
	}, {
		key: 'endOfFile',
		value: function endOfFile() {
			return this.bytesProcessed() == this.buffer.length;
		}
	}, {
		key: 'getCurrentTick',
		value: function getCurrentTick() {
			return Math.round((new Date().getTime() - this.startTime) / 1000 * (this.division * (this.tempo / 60))) + this.startTick;
		}
	}, {
		key: 'emitEvent',
		value: function emitEvent(event) {
			// Grab tempo if available.
			if (event.hasOwnProperty('name') && event.name === 'Set Tempo') this.tempo = event.data;
			if (typeof this.eventHandler === 'function') this.eventHandler(event);
		}
	}]);

	return Player;
}();

exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiUGxheWVyIiwiZXZlbnRIYW5kbGVyIiwiYnVmZmVyIiwic3RhcnRUaW1lIiwiZGl2aXNpb24iLCJmb3JtYXQiLCJzZXRJbnRlcnZhbElkIiwidHJhY2tzIiwidGVtcG8iLCJzdGFydFRpY2siLCJ0aWNrIiwibGFzdFRpY2siLCJpbkxvb3AiLCJwYXRoIiwiZnMiLCJyZXF1aXJlIiwicmVhZEZpbGVTeW5jIiwiZmlsZUxvYWRlZCIsImFycmF5QnVmZmVyIiwiVWludDhBcnJheSIsImRhdGFVcmkiLCJieXRlU3RyaW5nIiwiVXRpbHMiLCJhdG9iIiwic3BsaXQiLCJpYSIsImxlbmd0aCIsImkiLCJjaGFyQ29kZUF0IiwidmFsaWRhdGUiLCJnZXREaXZpc2lvbiIsImdldEZvcm1hdCIsImdldFRyYWNrcyIsImJ5dGVzVG9MZXR0ZXJzIiwic2xpY2UiLCJieXRlc1RvTnVtYmVyIiwiZm9yRWFjaCIsImJ5dGUiLCJpbmRleCIsInRyYWNrTGVuZ3RoIiwicHVzaCIsIlRyYWNrIiwidHJhY2tOdW1iZXIiLCJlbmFibGUiLCJkaXNhYmxlIiwidHJhY2siLCJjb25zb2xlIiwibG9nIiwiZXhwb3J0RXZlbnRzIiwiZ2V0Q3VycmVudFRpY2siLCJlbmRPZkZpbGUiLCJzdG9wIiwiZXZlbnQiLCJoYW5kbGVFdmVudCIsImVtaXRFdmVudCIsIkRhdGUiLCJnZXRUaW1lIiwic2V0SW50ZXJ2YWwiLCJwbGF5TG9vcCIsImJpbmQiLCJjbGVhckludGVydmFsIiwiZXZlbnRzIiwiZ2V0RXZlbnRzIiwibWFwIiwiTWF0aCIsIm1heCIsImFwcGx5IiwiZGVsdGEiLCJnZXRUb3RhbFRpY2tzIiwicmVkdWNlIiwiYSIsImIiLCJwb2ludGVyIiwiYnl0ZXNQcm9jZXNzZWQiLCJyb3VuZCIsImhhc093blByb3BlcnR5IiwibmFtZSIsImRhdGEiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsTTtBQUNMLGlCQUFZQyxZ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QTs7OzRCQUVTMkMsSyxFQUFPO0FBQ2hCO0FBQ0EsT0FBSUEsTUFBTXVCLGNBQU4sQ0FBcUIsTUFBckIsS0FBZ0N2QixNQUFNd0IsSUFBTixLQUFlLFdBQW5ELEVBQWdFLEtBQUtwRSxLQUFMLEdBQWE0QyxNQUFNeUIsSUFBbkI7QUFDaEUsT0FBSSxPQUFPLEtBQUs1RSxZQUFaLEtBQTZCLFVBQWpDLEVBQTZDLEtBQUtBLFlBQUwsQ0FBa0JtRCxLQUFsQjtBQUM3Qzs7Ozs7O0FBSUYwQixRQUFROUUsTUFBUixHQUFpQkEsTUFBakIiLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyIHtcblx0Y29uc3RydWN0b3IoZXZlbnRIYW5kbGVyLCBidWZmZXIpIHtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdFx0dGhpcy5idWZmZXIgPSBidWZmZXIgfHwgbnVsbDtcblx0XHR0aGlzLmRpdmlzaW9uO1xuXHRcdHRoaXMuZm9ybWF0O1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IG51bGw7XG5cdFx0dGhpcy50cmFja3MgPSBbXTtcblx0XHR0aGlzLnRlbXBvID0gMTIwO1xuXHRcdHRoaXMuc3RhcnRUaWNrID0gMDtcblx0XHR0aGlzLnRpY2sgPSAwO1xuXHRcdHRoaXMubGFzdFRpY2sgPSBudWxsO1xuXHRcdHRoaXMuaW5Mb29wID0gZmFsc2U7XG5cblx0XHR0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcjtcblx0fVxuXG5cdC8vIE9ubHkgZm9yIE5vZGVKU1xuXHRsb2FkRmlsZShwYXRoKSB7XG5cdFx0dmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcblx0XHR0aGlzLmJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhwYXRoKTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRsb2FkQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRsb2FkRGF0YVVyaShkYXRhVXJpKSB7XG5cdFx0Ly8gY29udmVydCBiYXNlNjQgdG8gcmF3IGJpbmFyeSBkYXRhIGhlbGQgaW4gYSBzdHJpbmdcblx0XHQvLyBkb2Vzbid0IGhhbmRsZSBVUkxFbmNvZGVkIERhdGFVUklzIC0gc2VlIFNPIGFuc3dlciAjNjg1MDI3NiBmb3IgY29kZSB0aGF0IGRvZXMgdGhpc1xuXHRcdHZhciBieXRlU3RyaW5nID0gVXRpbHMuYXRvYihkYXRhVXJpLnNwbGl0KCcsJylbMV0pO1xuXG5cdFx0Ly8gd3JpdGUgdGhlIGJ5dGVzIG9mIHRoZSBzdHJpbmcgdG8gYW4gQXJyYXlCdWZmZXJcblx0XHR2YXIgaWEgPSBuZXcgVWludDhBcnJheShieXRlU3RyaW5nLmxlbmd0aCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpYVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcblx0XHR9XG5cblx0XHR0aGlzLmJ1ZmZlciA9IGlhO1xuXHRcdHJldHVybiB0aGlzLmZpbGVMb2FkZWQoKTtcblx0fVxuXG5cdGdldEZpbGVzaXplKCkge1xuXHRcdHJldHVybiB0aGlzLmJ1ZmZlciA/IHRoaXMuYnVmZmVyLmxlbmd0aCA6IDA7XG5cdH1cblxuXHRmaWxlTG9hZGVkKCkge1xuXHRcdGlmICghdGhpcy52YWxpZGF0ZSgpKSB0aHJvdyAnSW52YWxpZCBNSURJIGZpbGU7IHNob3VsZCBzdGFydCB3aXRoIE1UaGQnO1xuXHRcdHJldHVybiB0aGlzLmdldERpdmlzaW9uKCkuZ2V0Rm9ybWF0KCkuZ2V0VHJhY2tzKCk7XG5cdH1cblxuXHQvLyBGaXJzdCBmb3VyIGJ5dGVzIHNob3VsZCBiZSBNVGhkXG5cdHZhbGlkYXRlKCkge1xuXHRcdHJldHVybiBVdGlscy5ieXRlc1RvTGV0dGVycyh0aGlzLmJ1ZmZlci5zbGljZSgwLCA0KSkgPT09ICdNVGhkJztcblx0fVxuXG5cdGdldEZvcm1hdCgpIHtcblx0XHQvKlxuXHRcdE1JREkgZmlsZXMgY29tZSBpbiAzIHZhcmlhdGlvbnM6XG5cdFx0Rm9ybWF0IDAgd2hpY2ggY29udGFpbiBhIHNpbmdsZSB0cmFja1xuXHRcdEZvcm1hdCAxIHdoaWNoIGNvbnRhaW4gb25lIG9yIG1vcmUgc2ltdWx0YW5lb3VzIHRyYWNrcyBcblx0XHQoaWUgYWxsIHRyYWNrcyBhcmUgdG8gYmUgcGxheWVkIHNpbXVsdGFuZW91c2x5KS5cblx0XHRGb3JtYXQgMiB3aGljaCBjb250YWluIG9uZSBvciBtb3JlIGluZGVwZW5kYW50IHRyYWNrcyBcblx0XHQoaWUgZWFjaCB0cmFjayBpcyB0byBiZSBwbGF5ZWQgaW5kZXBlbmRhbnRseSBvZiB0aGUgb3RoZXJzKS5cblx0XHRyZXR1cm4gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSg4LCAxMCkpO1xuXHRcdCovXG5cblx0XHR0aGlzLmZvcm1hdCA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIodGhpcy5idWZmZXIuc2xpY2UoOCwgMTApKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIFBhcnNlcyBvdXQgdHJhY2tzIGFuZCBwbGFjZXMgdGhlbSBpbiB0aGlzLnRyYWNrcyBhbmQgaW5pdGlhbGl6ZXMgdGhpcy5wb2ludGVyc1xuXHRnZXRUcmFja3MoKSB7XG5cdFx0dGhpcy50cmFja3MgPSBbXTtcblx0XHR0aGlzLmJ1ZmZlci5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGUsIGluZGV4KSB7XG5cdFx0XHRpZiAoVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5idWZmZXIuc2xpY2UoaW5kZXgsIGluZGV4ICsgNCkpID09ICdNVHJrJykge1xuXHRcdFx0XHR2YXIgdHJhY2tMZW5ndGggPSBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgNCwgaW5kZXggKyA4KSk7XG5cdFx0XHRcdHRoaXMudHJhY2tzLnB1c2gobmV3IFRyYWNrKHRoaXMudHJhY2tzLmxlbmd0aCwgdGhpcy5idWZmZXIuc2xpY2UoaW5kZXggKyA4LCBpbmRleCArIDggKyB0cmFja0xlbmd0aCkpKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZW5hYmxlVHJhY2sodHJhY2tOdW1iZXIpIHtcblx0XHR0aGlzLnRyYWNrc1t0cmFja051bWJlciAtIDFdLmVuYWJsZSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGlzYWJsZVRyYWNrKHRyYWNrTnVtYmVyKSB7XG5cdFx0dGhpcy50cmFja3NbdHJhY2tOdW1iZXIgLSAxXS5kaXNhYmxlKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXREaXZpc2lvbigpIHtcblx0XHR0aGlzLmRpdmlzaW9uID0gVXRpbHMuYnl0ZXNUb051bWJlcih0aGlzLmJ1ZmZlci5zbGljZSgxMiwgMTQpKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldFRvdGFsVGlja3MoKSB7XG5cdFx0dGhpcy50cmFja3NbMF0uZm9yRWFjaChmdW5jdGlvbih0cmFjaywgaW5kZXgpIHtcblx0XHRcdGNvbnNvbGUubG9nKGluZGV4KTtcblx0XHR9KTtcblx0fVxuXG5cdHBsYXlMb29wKGV4cG9ydEV2ZW50cykge1xuXHRcdGlmICghdGhpcy5pbkxvb3ApIHtcblx0XHRcdHRoaXMuaW5Mb29wID0gdHJ1ZTtcblx0XHRcdHRoaXMudGljayA9IHRoaXMuZ2V0Q3VycmVudFRpY2soKTtcblx0XHRcdC8vY29uc29sZS5sb2codGhpcy50aWNrKVxuXHRcdFx0XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLnRyYWNrcy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0Ly8gSGFuZGxlIG5leHQgZXZlbnRcblx0XHRcdFx0aWYgKCFleHBvcnRFdmVudHMgJiYgdGhpcy5lbmRPZkZpbGUoKSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFbmQgb2YgZmlsZScpO1xuXHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGV2ZW50ID0gdGhpcy50cmFja3NbaV0uaGFuZGxlRXZlbnQodGhpcy50aWNrLCBleHBvcnRFdmVudHMpO1xuXHRcdFx0XHRcdGlmIChldmVudCkge1xuXHRcdFx0XHRcdFx0aWYgKCFleHBvcnRFdmVudHMpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5lbWl0RXZlbnQoZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5pbkxvb3AgPSBmYWxzZTtcblx0XHR9XG5cblx0XHQvL3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5wbGF5TG9vcC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0Ly9yZXR1cm4gdGhpcy5leHBvcnRFdmVudHMoKTtcblx0XHRpZiAodGhpcy5zZXRJbnRlcnZhbElkKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnQWxyZWFkeSBwbGF5aW5nLi4uJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZVxuXHRcdGlmICghdGhpcy5zdGFydFRpbWUpIHRoaXMuc3RhcnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcblxuXHRcdC8vIFN0YXJ0IHBsYXkgbG9vcFxuXHRcdC8vd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnBsYXlMb29wLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuc2V0SW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMucGxheUxvb3AuYmluZCh0aGlzKSwgMTApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpY2sgPSB0aGlzLnRpY2s7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c3RvcCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuc2V0SW50ZXJ2YWxJZCk7XG5cdFx0dGhpcy5zZXRJbnRlcnZhbElkID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpY2sgPSAwO1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblx0XHRyZXR1cm4gdGhpcy5maWxlTG9hZGVkKCk7XG5cdH1cblxuXHRpc1BsYXlpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0SW50ZXJ2YWxJZCA+IDA7XG5cdH1cblxuXHRleHBvcnRFdmVudHMoKSB7XG5cdFx0d2hpbGUgKCF0aGlzLmVuZE9mRmlsZSgpKSB0aGlzLnBsYXlMb29wKHRydWUpO1xuXHRcdHZhciBldmVudHMgPSB0aGlzLmdldEV2ZW50cygpO1xuXG5cdFx0dGhpcy5zdG9wKCk7XG5cdFx0cmV0dXJuIGV2ZW50cztcblx0fVxuXG5cdGdldEV2ZW50cygpIHtcblx0XHRyZXR1cm4gdGhpcy50cmFja3MubWFwKGZ1bmN0aW9uKHRyYWNrKSB7XG5cdFx0XHRyZXR1cm4gdHJhY2suZXZlbnRzO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0VG90YWxUaWNrcygpIHtcblx0XHRyZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgdGhpcy50cmFja3MubWFwKGZ1bmN0aW9uKHRyYWNrKSB7XG5cdFx0XHRyZXR1cm4gdHJhY2suZGVsdGE7XG5cdFx0fSkpO1xuXHR9XG5cblx0Z2V0U29uZ1RpbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VG90YWxUaWNrcygpIC8gdGhpcy5kaXZpc2lvbiAvIHRoaXMudGVtcG87XG5cdH1cblxuXHRieXRlc1Byb2Nlc3NlZCgpIHtcblx0XHQvLyBDdXJyZW50bHkgYXNzdW1lIGhlYWRlciBjaHVuayBpcyBzdHJpY3RseSAxNCBieXRlc1xuXHRcdHJldHVybiAxNCArIHRoaXMudHJhY2tzLmxlbmd0aCAqIDggKyB0aGlzLnRyYWNrcy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge3JldHVybiB7cG9pbnRlcjogYS5wb2ludGVyICsgYi5wb2ludGVyfTt9LCB7cG9pbnRlcjogMH0pLnBvaW50ZXI7XG5cdH1cblxuXHRlbmRPZkZpbGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYnl0ZXNQcm9jZXNzZWQoKSA9PSB0aGlzLmJ1ZmZlci5sZW5ndGg7XG5cdH1cblxuXHRnZXRDdXJyZW50VGljaygpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDAgKiAodGhpcy5kaXZpc2lvbiAqICh0aGlzLnRlbXBvIC8gNjApKSkgKyB0aGlzLnN0YXJ0VGljaztcblx0fVxuXG5cdGVtaXRFdmVudChldmVudCkge1xuXHRcdC8vIEdyYWIgdGVtcG8gaWYgYXZhaWxhYmxlLlxuXHRcdGlmIChldmVudC5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIGV2ZW50Lm5hbWUgPT09ICdTZXQgVGVtcG8nKSB0aGlzLnRlbXBvID0gZXZlbnQuZGF0YTtcblx0XHRpZiAodHlwZW9mIHRoaXMuZXZlbnRIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB0aGlzLmV2ZW50SGFuZGxlcihldmVudCk7XG5cdH1cblxufVxuXG5leHBvcnRzLlBsYXllciA9IFBsYXllcjsiXX0=
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
		this.delta = 0;
		this.events = [];
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
   * @param currentTick
   * @param BOOL exportEvents If set events will be parsed and returned regardless of time.
   */

	}, {
		key: 'handleEvent',
		value: function handleEvent(currentTick, exportEvents) {
			exportEvents = exportEvents || false;
			if (this.pointer < this.data.length && (exportEvents || currentTick - this.lastTick >= this.getDelta())) {
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
					} else {
						eventJson.name = 'Unknown.  Pointer: ' + this.pointer.toString() + ' ' + eventStartIndex.toString() + ' ' + this.data.length;
					}
				}
			}

			this.delta += eventJson.delta;
			this.events.push(eventJson);

			return eventJson;
		}
	}, {
		key: 'endOfTrack',
		value: function endOfTrack() {
			if (this.data[this.pointer + 1] == 0xff && this.data[this.pointer + 2] == 0x2f && this.data[this.pointer + 3] == 0x00) {
				return true;
			}

			return false;
		}
	}]);

	return Track;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFjay5qcyJdLCJuYW1lcyI6WyJUcmFjayIsImluZGV4IiwiZGF0YSIsImVuYWJsZWQiLCJwb2ludGVyIiwibGFzdFRpY2siLCJsYXN0U3RhdHVzIiwiZGVsdGEiLCJldmVudHMiLCJjdXJyZW50Qnl0ZSIsImdldEN1cnJlbnRCeXRlIiwiYnl0ZUNvdW50IiwiVXRpbHMiLCJyZWFkVmFySW50Iiwic2xpY2UiLCJnZXREZWx0YUJ5dGVDb3VudCIsImN1cnJlbnRUaWNrIiwiZXhwb3J0RXZlbnRzIiwibGVuZ3RoIiwiZ2V0RGVsdGEiLCJldmVudCIsInBhcnNlRXZlbnQiLCJldmVudFN0YXJ0SW5kZXgiLCJldmVudEpzb24iLCJkZWx0YUJ5dGVDb3VudCIsInRyYWNrIiwibmFtZSIsInZsdiIsInN0cmluZ0xlbmd0aCIsInN0cmluZyIsImJ5dGVzVG9MZXR0ZXJzIiwiYnl0ZXNUb051bWJlciIsIk1hdGgiLCJyb3VuZCIsInRlbXBvIiwidG9TdHJpbmciLCJydW5uaW5nIiwibm90ZU51bWJlciIsIm5vdGVOYW1lIiwiQ29uc3RhbnRzIiwiTk9URVMiLCJ2ZWxvY2l0eSIsIm5vdGUiLCJwcmVzc3VyZSIsIm51bWJlciIsInZhbHVlIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU1BLEs7QUFDTCxnQkFBWUMsS0FBWixFQUFtQkMsSUFBbkIsRUFBeUI7QUFBQTs7QUFDeEIsT0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxPQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsT0FBS0wsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0ssS0FBTCxHQUFhLENBQWI7QUFDQSxPQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBOzs7OzJCQUVRO0FBQ1IsUUFBS0wsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFPLElB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akM7QUFFQSxNQUxNLE1BS0EsSUFBSSxLQUFLdEIsSUFBTCxDQUFVb0IsZUFBVixLQUE4QixJQUFsQyxFQUF3QztBQUM5QztBQUNBQyxnQkFBVUcsSUFBVixHQUFpQixZQUFqQjtBQUNBLFdBQUt0QixPQUFMLElBQWdCb0IsaUJBQWlCLENBQWpDO0FBRUEsTUFMTSxNQUtBO0FBQ05ELGdCQUFVRyxJQUFWLEdBQWlCLHdCQUF3QixLQUFLdEIsT0FBTCxDQUFhK0IsUUFBYixFQUF4QixHQUFrRCxHQUFsRCxHQUF5RGIsZ0JBQWdCYSxRQUFoQixFQUF6RCxHQUFzRixHQUF0RixHQUE0RixLQUFLakMsSUFBTCxDQUFVZ0IsTUFBdkg7QUFDQTtBQUNEO0FBQ0Q7O0FBRUQsUUFBS1gsS0FBTCxJQUFjZ0IsVUFBVWhCLEtBQXhCO0FBQ0EsUUFBS0MsTUFBTCxDQUFZc0MsSUFBWixDQUFpQnZCLFNBQWpCOztBQUVBLFVBQU9BLFNBQVA7QUFDQTs7OytCQUVZO0FBQ1osT0FBSSxLQUFLckIsSUFBTCxDQUFVLEtBQUtFLE9BQUwsR0FBZSxDQUF6QixLQUErQixJQUEvQixJQUF1QyxLQUFLRixJQUFMLENBQVUsS0FBS0UsT0FBTCxHQUFlLENBQXpCLEtBQStCLElBQXRFLElBQThFLEtBQUtGLElBQUwsQ0FBVSxLQUFLRSxPQUFMLEdBQWUsQ0FBekIsS0FBK0IsSUFBakgsRUFBdUg7QUFDdEgsV0FBTyxJQUFQO0FBQ0E7O0FBRUQsVUFBTyxLQUFQO0FBQ0EiLCJmaWxlIjoidHJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUcmFja1x0e1xuXHRjb25zdHJ1Y3RvcihpbmRleCwgZGF0YSkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5wb2ludGVyID0gMDtcblx0XHR0aGlzLmxhc3RUaWNrID0gMDtcblx0XHR0aGlzLmxhc3RTdGF0dXMgPSBudWxsO1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMuZGVsdGEgPSAwO1xuXHRcdHRoaXMuZXZlbnRzID0gW107XG5cdH1cblxuXHRlbmFibGUoKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGRpc2FibGUoKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRDdXJyZW50Qnl0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhW3RoaXMucG9pbnRlcl07XG5cdH1cblxuXHRnZXREZWx0YUJ5dGVDb3VudCgpIHtcblx0XHQvLyBHZXQgYnl0ZSBjb3VudCBvZiBkZWx0YSBWTFZcblx0XHQvLyBodHRwOi8vd3d3LmNjYXJoLm9yZy9jb3Vyc2VzLzI1My9oYW5kb3V0L3Zsdi9cblx0XHQvLyBJZiBieXRlIGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gODBoICgxMjggZGVjaW1hbCkgdGhlbiB0aGUgbmV4dCBieXRlIFxuXHQgICAgLy8gaXMgYWxzbyBwYXJ0IG9mIHRoZSBWTFYsXG5cdCAgIFx0Ly8gZWxzZSBieXRlIGlzIHRoZSBsYXN0IGJ5dGUgaW4gYSBWTFYuXG5cdCAgIFx0dmFyIGN1cnJlbnRCeXRlID0gdGhpcy5nZXRDdXJyZW50Qnl0ZSgpO1xuXHQgICBcdHZhciBieXRlQ291bnQgPSAxO1xuXG5cdFx0d2hpbGUgKGN1cnJlbnRCeXRlID49IDEyOCkge1xuXHRcdFx0Y3VycmVudEJ5dGUgPSB0aGlzLmRhdGFbdGhpcy5wb2ludGVyICsgYnl0ZUNvdW50XTtcblx0XHRcdGJ5dGVDb3VudCsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBieXRlQ291bnQ7XG5cdH1cblxuXHRnZXREZWx0YSgpIHtcblx0XHRyZXR1cm4gVXRpbHMucmVhZFZhckludCh0aGlzLmRhdGEuc2xpY2UodGhpcy5wb2ludGVyLCB0aGlzLnBvaW50ZXIgKyB0aGlzLmdldERlbHRhQnl0ZUNvdW50KCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGV2ZW50IHdpdGhpbiBhIGdpdmVuIHRyYWNrIHN0YXJ0aW5nIGF0IHNwZWNpZmllZCBpbmRleFxuXHQgKiBAcGFyYW0gY3VycmVudFRpY2tcblx0ICogQHBhcmFtIEJPT0wgZXhwb3J0RXZlbnRzIElmIHNldCBldmVudHMgd2lsbCBiZSBwYXJzZWQgYW5kIHJldHVybmVkIHJlZ2FyZGxlc3Mgb2YgdGltZS5cblx0ICovXG5cdGhhbmRsZUV2ZW50KGN1cnJlbnRUaWNrLCBleHBvcnRFdmVudHMpIHtcblx0XHRleHBvcnRFdmVudHMgPSBleHBvcnRFdmVudHMgfHwgZmFsc2U7XG5cdFx0aWYgKHRoaXMucG9pbnRlciA8IHRoaXMuZGF0YS5sZW5ndGggJiYgKGV4cG9ydEV2ZW50cyB8fCBjdXJyZW50VGljayAtIHRoaXMubGFzdFRpY2sgPj0gdGhpcy5nZXREZWx0YSgpKSkge1xuXHRcdFx0bGV0IGV2ZW50ID0gdGhpcy5wYXJzZUV2ZW50KCk7XG5cdFx0XHRpZiAodGhpcy5lbmFibGVkKSByZXR1cm4gZXZlbnQ7XG5cdFx0XHQvLyBSZWN1cnNpdmVseSBjYWxsIHRoaXMgZnVuY3Rpb24gZm9yIGVhY2ggZXZlbnQgYWhlYWQgdGhhdCBoYXMgMCBkZWx0YSB0aW1lP1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gUGFyc2VzIGV2ZW50IGludG8gSlNPTiBhbmQgYWR2YW5jZXMgcG9pbnRlciBmb3IgdGhlIHRyYWNrXG5cdHBhcnNlRXZlbnQoKSB7XG5cdFx0dmFyIGV2ZW50U3RhcnRJbmRleCA9IHRoaXMucG9pbnRlciArIHRoaXMuZ2V0RGVsdGFCeXRlQ291bnQoKTtcblx0XHR2YXIgZXZlbnRKc29uID0ge307XG5cdFx0dmFyIGRlbHRhQnl0ZUNvdW50ID0gdGhpcy5nZXREZWx0YUJ5dGVDb3VudCgpO1xuXHRcdGV2ZW50SnNvbi50cmFjayA9IHRoaXMuaW5kZXggKyAxO1xuXHRcdGV2ZW50SnNvbi5kZWx0YSA9IHRoaXMuZ2V0RGVsdGEoKTtcblx0XHR0aGlzLmxhc3RUaWNrID0gdGhpcy5sYXN0VGljayArIGV2ZW50SnNvbi5kZWx0YTtcblxuXHRcdC8vZXZlbnRKc29uLnJhdyA9IGV2ZW50O1xuXHRcdGlmICh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA9PSAweGZmKSB7XG5cdFx0XHQvLyBNZXRhIEV2ZW50XG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYSBtZXRhIGV2ZW50IHdlIHNob3VsZCBlbWl0IHRoZSBkYXRhIGFuZCBpbW1lZGlhdGVseSBtb3ZlIHRvIHRoZSBuZXh0IGV2ZW50XG5cdFx0XHQvLyBvdGhlcndpc2UgaWYgd2UgbGV0IGl0IHJ1biB0aHJvdWdoIHRoZSBuZXh0IGN5Y2xlIGEgc2xpZ2h0IGRlbGF5IHdpbGwgYWNjdW11bGF0ZSBpZiBtdWx0aXBsZSB0cmFja3Ncblx0XHRcdC8vIGFyZSBiZWluZyBwbGF5ZWQgc2ltdWx0YW5lb3VzbHlcblxuXHRcdFx0c3dpdGNoKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXSkge1xuXHRcdFx0XHRjYXNlIDB4MDA6IC8vIFNlcXVlbmNlIE51bWJlclxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlIE51bWJlcic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwMTogLy8gVGV4dCBFdmVudFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1RleHQgRXZlbnQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDI6IC8vIENvcHlyaWdodCBOb3RpY2Vcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDb3B5cmlnaHQgTm90aWNlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDAzOiAvLyBTZXF1ZW5jZS9UcmFjayBOYW1lXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2VxdWVuY2UvVHJhY2sgTmFtZSc7XG5cdFx0XHRcdFx0Ly8gR2V0IHZsdiBsZW5ndGhcblx0XHRcdFx0XHR2YXIgY3VycmVudEJ5dGUgPSB0aGlzLnBvaW50ZXI7XG5cdFx0XHRcdFx0dmFyIGJ5dGVDb3VudCA9IDE7XG5cdFx0XHRcdFx0d2hpbGUgKGN1cnJlbnRCeXRlID49IDEyOCkge1xuXHRcdFx0XHRcdFx0Y3VycmVudEJ5dGUgPSB0aGlzLmRhdGFbdGhpcy5wb2ludGVyICsgYnl0ZUNvdW50XTtcblx0XHRcdFx0XHRcdGJ5dGVDb3VudCsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudEpzb24udmx2ID0gYnl0ZUNvdW50O1xuXHRcdFx0XHRcdHZhciBsZW5ndGggPSBVdGlscy5yZWFkVmFySW50KHRoaXMuZGF0YS5zbGljZShldmVudFN0YXJ0SW5kZXggKyAyLCBldmVudFN0YXJ0SW5kZXggKyAyICsgYnl0ZUNvdW50KSk7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnN0cmluZ0xlbmd0aCA9IGxlbmd0aDtcblx0XHRcdFx0XHRldmVudEpzb24uc3RyaW5nID0gVXRpbHMuYnl0ZXNUb0xldHRlcnModGhpcy5kYXRhLnNsaWNlKGV2ZW50U3RhcnRJbmRleCArIGJ5dGVDb3VudCArIDIsIGV2ZW50U3RhcnRJbmRleCArIGJ5dGVDb3VudCArIGxlbmd0aCArIDIpKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDA0OiAvLyBJbnN0cnVtZW50IE5hbWVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdJbnN0cnVtZW50IE5hbWUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDU6IC8vIEx5cmljXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTHlyaWMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MDY6IC8vIE1hcmtlclxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ01hcmtlcic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgwNzogLy8gQ3VlIFBvaW50XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnQ3VlIFBvaW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDIwOiAvLyBNSURJIENoYW5uZWwgUHJlZml4XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTUlESSBDaGFubmVsIFByZWZpeCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHgyMTogLy8gTUlESSBQb3J0XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTUlESSBQb3J0Jztcblx0XHRcdFx0XHRldmVudEpzb24uZGF0YSA9IFV0aWxzLmJ5dGVzVG9OdW1iZXIoW3RoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAzXV0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4MkY6IC8vIEVuZCBvZiBUcmFja1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0VuZCBvZiBUcmFjayc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMHg1MTogLy8gU2V0IFRlbXBvXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnU2V0IFRlbXBvJztcblx0XHRcdFx0XHRldmVudEpzb24uZGF0YSA9IE1hdGgucm91bmQoNjAwMDAwMDAgLyBVdGlscy5ieXRlc1RvTnVtYmVyKHRoaXMuZGF0YS5zbGljZShldmVudFN0YXJ0SW5kZXggKyAzLCBldmVudFN0YXJ0SW5kZXggKyA2KSkpO1xuXHRcdFx0XHRcdHRoaXMudGVtcG8gPSBldmVudEpzb24uZGF0YTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDU0OiAvLyBTTVRQRSBPZmZzZXRcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdTTVRQRSBPZmZzZXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTg6IC8vIFRpbWUgU2lnbmF0dXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnVGltZSBTaWduYXR1cmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDB4NTk6IC8vIEtleSBTaWduYXR1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdLZXkgU2lnbmF0dXJlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAweDdGOiAvLyBTZXF1ZW5jZXItU3BlY2lmaWMgTWV0YS1ldmVudFxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1NlcXVlbmNlci1TcGVjaWZpYyBNZXRhLWV2ZW50Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdVbmtub3duOiAnICsgdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDFdLnRvU3RyaW5nKDE2KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxlbmd0aCA9IHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyBkZWx0YUJ5dGVDb3VudCArIDJdO1xuXHRcdFx0Ly8gU29tZSBtZXRhIGV2ZW50cyB3aWxsIGhhdmUgdmx2IHRoYXQgbmVlZHMgdG8gYmUgaGFuZGxlZFxuXG5cdFx0XHR0aGlzLnBvaW50ZXIgKz0gZGVsdGFCeXRlQ291bnQgKyAzICsgbGVuZ3RoO1xuXG5cdFx0fSBlbHNlIGlmKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdID09IDB4ZjApIHtcblx0XHRcdC8vIFN5c2V4XG5cdFx0XHRldmVudEpzb24ubmFtZSA9ICdTeXNleCc7XG5cdFx0XHR2YXIgbGVuZ3RoID0gdGhpcy5kYXRhW3RoaXMucG9pbnRlciArIGRlbHRhQnl0ZUNvdW50ICsgMV07XG5cdFx0XHR0aGlzLnBvaW50ZXIgKz0gZGVsdGFCeXRlQ291bnQgKyAyICsgbGVuZ3RoO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFZvaWNlIGV2ZW50XG5cdFx0XHRpZiAodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF0gPCAweDgwKSB7XG5cdFx0XHRcdC8vIFJ1bm5pbmcgc3RhdHVzXG5cdFx0XHRcdGV2ZW50SnNvbi5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XTtcblx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOYW1lID0gQ29uc3RhbnRzLk5PVEVTW3RoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdXTtcblx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHRoaXMubGFzdFN0YXR1cyA8PSAweDhmKSB7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnTm90ZSBvZmYnO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5sYXN0U3RhdHVzIDw9IDB4OWYpIHtcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9uJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMucG9pbnRlciArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubGFzdFN0YXR1cyA9IHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdO1xuXG5cdFx0XHRcdGlmICh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA8PSAweDhmKSB7XG5cdFx0XHRcdFx0Ly8gTm90ZSBvZmZcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdOb3RlIG9mZic7XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOdW1iZXIgPSB0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5vdGVOYW1lID0gQ29uc3RhbnRzLk5PVEVTW3RoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnZlbG9jaXR5ID0gTWF0aC5yb3VuZCh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMl0gLyAxMjcgKiAxMDApO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlciArPSBkZWx0YUJ5dGVDb3VudCArIDM7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA8PSAweDlmKSB7XG5cdFx0XHRcdFx0Ly8gTm90ZSBvblxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ05vdGUgb24nO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTnVtYmVyID0gdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlTmFtZSA9IENvbnN0YW50cy5OT1RFU1t0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4ICsgMV1dO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi52ZWxvY2l0eSA9IE1hdGgucm91bmQodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDJdIC8gMTI3ICogMTAwKTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXIgKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhhZikge1xuXHRcdFx0XHRcdC8vIFBvbHlwaG9uaWMgS2V5IFByZXNzdXJlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUG9seXBob25pYyBLZXkgUHJlc3N1cmUnO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5ub3RlID0gQ29uc3RhbnRzLk5PVEVTW3RoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAxXV07XG5cdFx0XHRcdFx0ZXZlbnRKc29uLnByZXNzdXJlID0gZXZlbnRbMl07XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDw9IDB4YmYpIHtcblx0XHRcdFx0XHQvLyBDb250cm9sbGVyIENoYW5nZVxuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ0NvbnRyb2xsZXIgQ2hhbmdlJztcblx0XHRcdFx0XHRldmVudEpzb24ubnVtYmVyID0gdGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleCArIDFdO1xuXHRcdFx0XHRcdGV2ZW50SnNvbi52YWx1ZSA9IHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXggKyAyXTtcblx0XHRcdFx0XHR0aGlzLnBvaW50ZXIgKz0gZGVsdGFCeXRlQ291bnQgKyAzO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhW2V2ZW50U3RhcnRJbmRleF0gPD0gMHhjZikge1xuXHRcdFx0XHRcdC8vIFByb2dyYW0gQ2hhbmdlXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUHJvZ3JhbSBDaGFuZ2UnO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRlciArPSBkZWx0YUJ5dGVDb3VudCArIDI7XG5cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRhdGFbZXZlbnRTdGFydEluZGV4XSA8PSAweGRmKSB7XG5cdFx0XHRcdFx0Ly8gQ2hhbm5lbCBLZXkgUHJlc3N1cmVcblx0XHRcdFx0XHRldmVudEpzb24ubmFtZSA9ICdDaGFubmVsIEtleSBQcmVzc3VyZSc7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMjtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YVtldmVudFN0YXJ0SW5kZXhdIDw9IDB4ZWYpIHtcblx0XHRcdFx0XHQvLyBQaXRjaCBCZW5kXG5cdFx0XHRcdFx0ZXZlbnRKc29uLm5hbWUgPSAnUGl0Y2ggQmVuZCc7XG5cdFx0XHRcdFx0dGhpcy5wb2ludGVyICs9IGRlbHRhQnl0ZUNvdW50ICsgMztcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGV2ZW50SnNvbi5uYW1lID0gJ1Vua25vd24uICBQb2ludGVyOiAnICsgdGhpcy5wb2ludGVyLnRvU3RyaW5nKCkgKyAnICcgICsgZXZlbnRTdGFydEluZGV4LnRvU3RyaW5nKCkgKyAnICcgKyB0aGlzLmRhdGEubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5kZWx0YSArPSBldmVudEpzb24uZGVsdGE7XG5cdFx0dGhpcy5ldmVudHMucHVzaChldmVudEpzb24pO1xuXG5cdFx0cmV0dXJuIGV2ZW50SnNvbjtcblx0fVxuXG5cdGVuZE9mVHJhY2soKSB7XG5cdFx0aWYgKHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyAxXSA9PSAweGZmICYmIHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyAyXSA9PSAweDJmICYmIHRoaXMuZGF0YVt0aGlzLnBvaW50ZXIgKyAzXSA9PSAweDAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn0iXX0=
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
