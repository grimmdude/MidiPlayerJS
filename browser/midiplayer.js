var MidiPlayer = (function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * Constants used in player.
   */
  var Constants = {
    VERSION: '2.0.13',
    NOTES: [],
    HEADER_CHUNK_LENGTH: 14,
    CIRCLE_OF_FOURTHS: ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'Fb', 'Bbb', 'Ebb', 'Abb'],
    CIRCLE_OF_FIFTHS: ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'E#']
  }; // Builds notes object for reference against binary values.

  var allNotes = [['C'], ['C#', 'Db'], ['D'], ['D#', 'Eb'], ['E'], ['F'], ['F#', 'Gb'], ['G'], ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B']];
  var counter = 0; // All available octaves.

  var _loop = function _loop(i) {
    allNotes.forEach(function (noteGroup) {
      noteGroup.forEach(function (note) {
        return Constants.NOTES[counter] = note + i;
      });
      counter++;
    });
  };

  for (var i = -1; i <= 9; i++) {
    _loop(i);
  }

  /**
   * Contains misc static utility methods.
   */
  var Utils = /*#__PURE__*/function () {
    function Utils() {
      _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
      key: "byteToHex",

      /**
       * Converts a single byte to a hex string.
       * @param {number} byte
       * @return {string}
       */
      value: function byteToHex(_byte) {
        // Ensure hex string always has two chars
        return ('0' + _byte.toString(16)).slice(-2);
      }
      /**
       * Converts an array of bytes to a hex string.
       * @param {array} byteArray
       * @return {string}
       */

    }, {
      key: "bytesToHex",
      value: function bytesToHex(byteArray) {
        var hex = [];
        byteArray.forEach(function (_byte2) {
          return hex.push(Utils.byteToHex(_byte2));
        });
        return hex.join('');
      }
      /**
       * Converts a hex string to a number.
       * @param {string} hexString
       * @return {number}
       */

    }, {
      key: "hexToNumber",
      value: function hexToNumber(hexString) {
        return parseInt(hexString, 16);
      }
      /**
       * Converts an array of bytes to a number.
       * @param {array} byteArray
       * @return {number}
       */

    }, {
      key: "bytesToNumber",
      value: function bytesToNumber(byteArray) {
        return Utils.hexToNumber(Utils.bytesToHex(byteArray));
      }
      /**
       * Converts an array of bytes to letters.
       * @param {array} byteArray
       * @return {string}
       */

    }, {
      key: "bytesToLetters",
      value: function bytesToLetters(byteArray) {
        var letters = [];
        byteArray.forEach(function (_byte3) {
          return letters.push(String.fromCharCode(_byte3));
        });
        return letters.join('');
      }
      /**
       * Converts a decimal to it's binary representation.
       * @param {number} dec
       * @return {string}
       */

    }, {
      key: "decToBinary",
      value: function decToBinary(dec) {
        return (dec >>> 0).toString(2);
      }
      /**
       * Determines the length in bytes of a variable length quaantity.  The first byte in given range is assumed to be beginning of var length quantity.
       * @param {array} byteArray
       * @return {number}
       */

    }, {
      key: "getVarIntLength",
      value: function getVarIntLength(byteArray) {
        // Get byte count of delta VLV
        // http://www.ccarh.org/courses/253/handout/vlv/
        // If byte is greater or equal to 80h (128 decimal) then the next byte
        // is also part of the VLV,
        // else byte is the last byte in a VLV.
        var currentByte = byteArray[0];
        var byteCount = 1;

        while (currentByte >= 128) {
          currentByte = byteArray[byteCount];
          byteCount++;
        }

        return byteCount;
      }
      /**
       * Reads a variable length value.
       * @param {array} byteArray
       * @return {number}
       */

    }, {
      key: "readVarInt",
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
      /**
       * Decodes base-64 encoded string
       * @param {string} string
       * @return {string}
       */

    }, {
      key: "atob",
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

  /**
   * Class representing a track.  Contains methods for parsing events and keeping track of pointer.
   */

  var Track = /*#__PURE__*/function () {
    function Track(index, data) {
      _classCallCheck(this, Track);

      this.enabled = true;
      this.eventIndex = 0;
      this.pointer = 0;
      this.lastTick = 0;
      this.lastStatus = null;
      this.index = index;
      this.data = data;
      this.delta = 0;
      this.runningDelta = 0;
      this.events = []; // Ensure last 3 bytes of track are End of Track event

      var lastThreeBytes = this.data.subarray(this.data.length - 3, this.data.length);

      if (!(lastThreeBytes[0] === 0xff && lastThreeBytes[1] === 0x2f && lastThreeBytes[2] === 0x00)) {
        throw 'Invalid MIDI file; Last three bytes of track ' + this.index + 'must be FF 2F 00 to mark end of track';
      }
    }
    /**
     * Resets all stateful track informaion used during playback.
     * @return {Track}
     */


    _createClass(Track, [{
      key: "reset",
      value: function reset() {
        this.enabled = true;
        this.eventIndex = 0;
        this.pointer = 0;
        this.lastTick = 0;
        this.lastStatus = null;
        this.delta = 0;
        this.runningDelta = 0;
        return this;
      }
      /**
       * Sets this track to be enabled during playback.
       * @return {Track}
       */

    }, {
      key: "enable",
      value: function enable() {
        this.enabled = true;
        return this;
      }
      /**
       * Sets this track to be disabled during playback.
       * @return {Track}
       */

    }, {
      key: "disable",
      value: function disable() {
        this.enabled = false;
        return this;
      }
      /**
       * Sets the track event index to the nearest event to the given tick.
       * @param {number} tick
       * @return {Track}
       */

    }, {
      key: "setEventIndexByTick",
      value: function setEventIndexByTick(tick) {
        tick = tick || 0;

        for (var i in this.events) {
          if (this.events[i].tick >= tick) {
            this.eventIndex = i;
            return this;
          }
        }
      }
      /**
       * Gets byte located at pointer position.
       * @return {number}
       */

    }, {
      key: "getCurrentByte",
      value: function getCurrentByte() {
        return this.data[this.pointer];
      }
      /**
       * Gets count of delta bytes and current pointer position.
       * @return {number}
       */

    }, {
      key: "getDeltaByteCount",
      value: function getDeltaByteCount() {
        return Utils.getVarIntLength(this.data.subarray(this.pointer));
      }
      /**
       * Get delta value at current pointer position.
       * @return {number}
       */

    }, {
      key: "getDelta",
      value: function getDelta() {
        return Utils.readVarInt(this.data.subarray(this.pointer, this.pointer + this.getDeltaByteCount()));
      }
      /**
       * Handles event within a given track starting at specified index
       * @param {number} currentTick
       * @param {boolean} dryRun - If true events will be parsed and returned regardless of time.
       */

    }, {
      key: "handleEvent",
      value: function handleEvent(currentTick, dryRun) {
        dryRun = dryRun || false;

        if (dryRun) {
          var elapsedTicks = currentTick - this.lastTick;
          var delta = this.getDelta();
          var eventReady = elapsedTicks >= delta;

          if (this.pointer < this.data.length && (dryRun || eventReady)) {
            var _event = this.parseEvent();

            if (this.enabled) return _event; // Recursively call this function for each event ahead that has 0 delta time?
          }
        } else {
          // Let's actually play the MIDI from the generated JSON events created by the dry run.
          if (this.events[this.eventIndex] && this.events[this.eventIndex].tick <= currentTick) {
            this.eventIndex++;
            if (this.enabled) return this.events[this.eventIndex - 1];
          }
        }

        return null;
      }
      /**
       * Get string data from event.
       * @param {number} eventStartIndex
       * @return {string}
       */

    }, {
      key: "getStringData",
      value: function getStringData(eventStartIndex) {
        var varIntLength = Utils.getVarIntLength(this.data.subarray(eventStartIndex + 2));
        var varIntValue = Utils.readVarInt(this.data.subarray(eventStartIndex + 2, eventStartIndex + 2 + varIntLength));
        var letters = Utils.bytesToLetters(this.data.subarray(eventStartIndex + 2 + varIntLength, eventStartIndex + 2 + varIntLength + varIntValue));
        return letters;
      }
      /**
       * Parses event into JSON and advances pointer for the track
       * @return {object}
       */

    }, {
      key: "parseEvent",
      value: function parseEvent() {
        var eventStartIndex = this.pointer + this.getDeltaByteCount();
        var eventJson = {};
        var deltaByteCount = this.getDeltaByteCount();
        eventJson.track = this.index + 1;
        eventJson.delta = this.getDelta();
        this.lastTick = this.lastTick + eventJson.delta;
        this.runningDelta += eventJson.delta;
        eventJson.tick = this.runningDelta;
        eventJson.byteIndex = this.pointer; //eventJson.raw = event;

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
              eventJson.string = this.getStringData(eventStartIndex);
              break;

            case 0x02:
              // Copyright Notice
              eventJson.name = 'Copyright Notice';
              break;

            case 0x03:
              // Sequence/Track Name
              eventJson.name = 'Sequence/Track Name';
              eventJson.string = this.getStringData(eventStartIndex);
              break;

            case 0x04:
              // Instrument Name
              eventJson.name = 'Instrument Name';
              eventJson.string = this.getStringData(eventStartIndex);
              break;

            case 0x05:
              // Lyric
              eventJson.name = 'Lyric';
              eventJson.string = this.getStringData(eventStartIndex);
              break;

            case 0x06:
              // Marker
              eventJson.name = 'Marker';
              break;

            case 0x07:
              // Cue Point
              eventJson.name = 'Cue Point';
              eventJson.string = this.getStringData(eventStartIndex);
              break;

            case 0x09:
              // Device Name
              eventJson.name = 'Device Name';
              eventJson.string = this.getStringData(eventStartIndex);
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
              eventJson.data = Math.round(60000000 / Utils.bytesToNumber(this.data.subarray(eventStartIndex + 3, eventStartIndex + 6)));
              this.tempo = eventJson.data;
              break;

            case 0x54:
              // SMTPE Offset
              eventJson.name = 'SMTPE Offset';
              break;

            case 0x58:
              // Time Signature
              // FF 58 04 nn dd cc bb
              eventJson.name = 'Time Signature';
              eventJson.data = this.data.subarray(eventStartIndex + 3, eventStartIndex + 7);
              eventJson.timeSignature = "" + eventJson.data[0] + "/" + Math.pow(2, eventJson.data[1]);
              break;

            case 0x59:
              // Key Signature
              // FF 59 02 sf mi
              eventJson.name = 'Key Signature';
              eventJson.data = this.data.subarray(eventStartIndex + 3, eventStartIndex + 5);

              if (eventJson.data[0] >= 0) {
                eventJson.keySignature = Constants.CIRCLE_OF_FIFTHS[eventJson.data[0]];
              } else if (eventJson.data[0] < 0) {
                eventJson.keySignature = Constants.CIRCLE_OF_FOURTHS[Math.abs(eventJson.data[0])];
              }

              if (eventJson.data[1] == 0) {
                eventJson.keySignature += " Major";
              } else if (eventJson.data[1] == 1) {
                eventJson.keySignature += " Minor";
              }

              break;

            case 0x7F:
              // Sequencer-Specific Meta-event
              eventJson.name = 'Sequencer-Specific Meta-event';
              break;

            default:
              eventJson.name = 'Unknown: ' + this.data[eventStartIndex + 1].toString(16);
              break;
          }

          var varIntLength = Utils.getVarIntLength(this.data.subarray(eventStartIndex + 2));
          var length = Utils.readVarInt(this.data.subarray(eventStartIndex + 2, eventStartIndex + 2 + varIntLength)); //console.log(eventJson);

          this.pointer += deltaByteCount + 3 + length; //console.log(eventJson);
        } else if (this.data[eventStartIndex] === 0xf0) {
          // Sysex
          eventJson.name = 'Sysex';
          var varQuantityByteLength = Utils.getVarIntLength(this.data.subarray(eventStartIndex + 1));
          var varQuantityByteValue = Utils.readVarInt(this.data.subarray(eventStartIndex + 1, eventStartIndex + 1 + varQuantityByteLength));
          eventJson.data = this.data.subarray(eventStartIndex + 1 + varQuantityByteLength, eventStartIndex + 1 + varQuantityByteLength + varQuantityByteValue);
          this.pointer += deltaByteCount + 1 + varQuantityByteLength + varQuantityByteValue;
        } else if (this.data[eventStartIndex] === 0xf7) {
          // Sysex (escape)
          // http://www.somascape.org/midi/tech/mfile.html#sysex
          eventJson.name = 'Sysex (escape)';

          var _varQuantityByteLength = Utils.getVarIntLength(this.data.subarray(eventStartIndex + 1));

          var _varQuantityByteValue = Utils.readVarInt(this.data.subarray(eventStartIndex + 1, eventStartIndex + 1 + _varQuantityByteLength));

          eventJson.data = this.data.subarray(eventStartIndex + 1 + _varQuantityByteLength, eventStartIndex + 1 + _varQuantityByteLength + _varQuantityByteValue);
          this.pointer += deltaByteCount + 1 + _varQuantityByteLength + _varQuantityByteValue;
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
              eventJson.channel = this.lastStatus - 0x80 + 1;
              this.pointer += deltaByteCount + 2;
            } else if (this.lastStatus <= 0x9f) {
              eventJson.name = 'Note on';
              eventJson.channel = this.lastStatus - 0x90 + 1;
              this.pointer += deltaByteCount + 2;
            } else if (this.lastStatus <= 0xaf) {
              // Polyphonic Key Pressure
              eventJson.name = 'Polyphonic Key Pressure';
              eventJson.channel = this.lastStatus - 0xa0 + 1;
              eventJson.note = Constants.NOTES[this.data[eventStartIndex + 1]];
              eventJson.pressure = event[1];
              this.pointer += deltaByteCount + 2;
            } else if (this.lastStatus <= 0xbf) {
              // Controller Change
              eventJson.name = 'Controller Change';
              eventJson.channel = this.lastStatus - 0xb0 + 1;
              eventJson.number = this.data[eventStartIndex + 1];
              eventJson.value = this.data[eventStartIndex + 2];
              this.pointer += deltaByteCount + 2;
            } else if (this.lastStatus <= 0xcf) {
              // Program Change
              eventJson.name = 'Program Change';
              eventJson.channel = this.lastStatus - 0xc0 + 1;
              eventJson.value = this.data[eventStartIndex + 1];
              this.pointer += deltaByteCount + 1;
            } else if (this.lastStatus <= 0xdf) {
              // Channel Key Pressure
              eventJson.name = 'Channel Key Pressure';
              eventJson.channel = this.lastStatus - 0xd0 + 1;
              this.pointer += deltaByteCount + 1;
            } else if (this.lastStatus <= 0xef) {
              // Pitch Bend
              eventJson.name = 'Pitch Bend';
              eventJson.channel = this.lastStatus - 0xe0 + 1;
              this.pointer += deltaByteCount + 2;
            } else {
              throw "Unknown event (running): ".concat(this.lastStatus);
            }
          } else {
            this.lastStatus = this.data[eventStartIndex];

            if (this.data[eventStartIndex] <= 0x8f) {
              // Note off
              eventJson.name = 'Note off';
              eventJson.channel = this.lastStatus - 0x80 + 1;
              eventJson.noteNumber = this.data[eventStartIndex + 1];
              eventJson.noteName = Constants.NOTES[this.data[eventStartIndex + 1]];
              eventJson.velocity = Math.round(this.data[eventStartIndex + 2] / 127 * 100);
              this.pointer += deltaByteCount + 3;
            } else if (this.data[eventStartIndex] <= 0x9f) {
              // Note on
              eventJson.name = 'Note on';
              eventJson.channel = this.lastStatus - 0x90 + 1;
              eventJson.noteNumber = this.data[eventStartIndex + 1];
              eventJson.noteName = Constants.NOTES[this.data[eventStartIndex + 1]];
              eventJson.velocity = Math.round(this.data[eventStartIndex + 2] / 127 * 100);
              this.pointer += deltaByteCount + 3;
            } else if (this.data[eventStartIndex] <= 0xaf) {
              // Polyphonic Key Pressure
              eventJson.name = 'Polyphonic Key Pressure';
              eventJson.channel = this.lastStatus - 0xa0 + 1;
              eventJson.note = Constants.NOTES[this.data[eventStartIndex + 1]];
              eventJson.pressure = event[2];
              this.pointer += deltaByteCount + 3;
            } else if (this.data[eventStartIndex] <= 0xbf) {
              // Controller Change
              eventJson.name = 'Controller Change';
              eventJson.channel = this.lastStatus - 0xb0 + 1;
              eventJson.number = this.data[eventStartIndex + 1];
              eventJson.value = this.data[eventStartIndex + 2];
              this.pointer += deltaByteCount + 3;
            } else if (this.data[eventStartIndex] <= 0xcf) {
              // Program Change
              eventJson.name = 'Program Change';
              eventJson.channel = this.lastStatus - 0xc0 + 1;
              eventJson.value = this.data[eventStartIndex + 1];
              this.pointer += deltaByteCount + 2;
            } else if (this.data[eventStartIndex] <= 0xdf) {
              // Channel Key Pressure
              eventJson.name = 'Channel Key Pressure';
              eventJson.channel = this.lastStatus - 0xd0 + 1;
              this.pointer += deltaByteCount + 2;
            } else if (this.data[eventStartIndex] <= 0xef) {
              // Pitch Bend
              eventJson.name = 'Pitch Bend';
              eventJson.channel = this.lastStatus - 0xe0 + 1;
              this.pointer += deltaByteCount + 3;
            } else {
              throw "Unknown event: ".concat(this.data[eventStartIndex]); //eventJson.name = `Unknown.  Pointer: ${this.pointer.toString()}, ${eventStartIndex.toString()}, ${this.data[eventStartIndex]}, ${this.data.length}`;
            }
          }
        }

        this.delta += eventJson.delta;
        this.events.push(eventJson);
        return eventJson;
      }
      /**
       * Returns true if pointer has reached the end of the track.
       * @param {boolean}
       */

    }, {
      key: "endOfTrack",
      value: function endOfTrack() {
        if (this.data[this.pointer + 1] == 0xff && this.data[this.pointer + 2] == 0x2f && this.data[this.pointer + 3] == 0x00) {
          return true;
        }

        return false;
      }
    }]);

    return Track;
  }();

  if (!Uint8Array.prototype.forEach) {
    Object.defineProperty(Uint8Array.prototype, 'forEach', {
      value: Array.prototype.forEach
    });
  }
  /**
   * Main player class.  Contains methods to load files, start, stop.
   * @param {function} - Callback to fire for each MIDI event.  Can also be added with on('midiEvent', fn)
   * @param {array} - Array buffer of MIDI file (optional).
   */


  var Player = /*#__PURE__*/function () {
    function Player(eventHandler, buffer) {
      _classCallCheck(this, Player);

      this.sampleRate = 5; // milliseconds

      this.startTime = 0;
      this.buffer = buffer || null;
      this.midiChunksByteLength = null;
      this.division;
      this.format;
      this.setIntervalId = false;
      this.tracks = [];
      this.instruments = [];
      this.defaultTempo = 120;
      this.tempo = null;
      this.startTick = 0;
      this.tick = 0;
      this.lastTick = null;
      this.inLoop = false;
      this.totalTicks = 0;
      this.events = [];
      this.totalEvents = 0;
      this.eventListeners = {};
      if (typeof eventHandler === 'function') this.on('midiEvent', eventHandler);
    }
    /**
     * Load a file into the player (Node.js only).
     * @param {string} path - Path of file.
     * @return {Player}
     */


    _createClass(Player, [{
      key: "loadFile",
      value: function loadFile(path) {
        var fs = require('fs');

        this.buffer = fs.readFileSync(path);
        return this.fileLoaded();
      }
      /**
       * Load an array buffer into the player.
       * @param {array} arrayBuffer - Array buffer of file to be loaded.
       * @return {Player}
       */

    }, {
      key: "loadArrayBuffer",
      value: function loadArrayBuffer(arrayBuffer) {
        this.buffer = new Uint8Array(arrayBuffer);
        return this.fileLoaded();
      }
      /**
       * Load a data URI into the player.
       * @param {string} dataUri - Data URI to be loaded.
       * @return {Player}
       */

    }, {
      key: "loadDataUri",
      value: function loadDataUri(dataUri) {
        // convert base64 to raw binary data held in a string.
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = Utils.atob(dataUri.split(',')[1]); // write the bytes of the string to an ArrayBuffer

        var ia = new Uint8Array(byteString.length);

        for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }

        this.buffer = ia;
        return this.fileLoaded();
      }
      /**
       * Get filesize of loaded file in number of bytes.
       * @return {number} - The filesize.
       */

    }, {
      key: "getFilesize",
      value: function getFilesize() {
        return this.buffer ? this.buffer.length : 0;
      }
      /**
       * Sets default tempo, parses file for necessary information, and does a dry run to calculate total length.
       * Populates this.events & this.totalTicks.
       * @return {Player}
       */

    }, {
      key: "fileLoaded",
      value: function fileLoaded() {
        if (!this.validate()) throw 'Invalid MIDI file; should start with MThd';
        return this.setTempo(this.defaultTempo).getDivision().getFormat().getTracks().dryRun();
      }
      /**
       * Validates file using simple means - first four bytes should == MThd.
       * @return {boolean}
       */

    }, {
      key: "validate",
      value: function validate() {
        //console.log((this.buffer.subarray(0, 15)));
        return Utils.bytesToLetters(this.buffer.subarray(0, 4)) === 'MThd';
      }
      /**
       * Gets MIDI file format for loaded file.
       * @return {Player}
       */

    }, {
      key: "getFormat",
      value: function getFormat() {
        /*
        MIDI files come in 3 variations:
        Format 0 which contain a single track
        Format 1 which contain one or more simultaneous tracks
        (ie all tracks are to be played simultaneously).
        Format 2 which contain one or more independant tracks
        (ie each track is to be played independantly of the others).
        return Utils.bytesToNumber(this.buffer.subarray(8, 10));
        */
        this.format = Utils.bytesToNumber(this.buffer.subarray(8, 10));
        return this;
      }
      /**
       * Parses out tracks, places them in this.tracks and initializes this.pointers
       * @return {Player}
       */

    }, {
      key: "getTracks",
      value: function getTracks() {
        this.tracks = [];
        var trackOffset = 0;

        while (trackOffset < this.buffer.length) {
          if (Utils.bytesToLetters(this.buffer.subarray(trackOffset, trackOffset + 4)) == 'MTrk') {
            var trackLength = Utils.bytesToNumber(this.buffer.subarray(trackOffset + 4, trackOffset + 8));
            this.tracks.push(new Track(this.tracks.length, this.buffer.subarray(trackOffset + 8, trackOffset + 8 + trackLength)));
          }

          trackOffset += Utils.bytesToNumber(this.buffer.subarray(trackOffset + 4, trackOffset + 8)) + 8;
        } // Get sum of all MIDI chunks here while we're at it


        var trackChunksByteLength = 0;
        this.tracks.forEach(function (track) {
          trackChunksByteLength += 8 + track.data.length;
        });
        this.midiChunksByteLength = Constants.HEADER_CHUNK_LENGTH + trackChunksByteLength;
        return this;
      }
      /**
       * Enables a track for playing.
       * @param {number} trackNumber - Track number
       * @return {Player}
       */

    }, {
      key: "enableTrack",
      value: function enableTrack(trackNumber) {
        this.tracks[trackNumber - 1].enable();
        return this;
      }
      /**
       * Disables a track for playing.
       * @param {number} - Track number
       * @return {Player}
       */

    }, {
      key: "disableTrack",
      value: function disableTrack(trackNumber) {
        this.tracks[trackNumber - 1].disable();
        return this;
      }
      /**
       * Gets quarter note division of loaded MIDI file.
       * @return {Player}
       */

    }, {
      key: "getDivision",
      value: function getDivision() {
        this.division = Utils.bytesToNumber(this.buffer.subarray(12, Constants.HEADER_CHUNK_LENGTH));
        return this;
      }
      /**
       * The main play loop.
       * @param {boolean} - Indicates whether or not this is being called simply for parsing purposes.  Disregards timing if so.
       * @return {undefined}
       */

    }, {
      key: "playLoop",
      value: function playLoop(dryRun) {
        if (!this.inLoop) {
          this.inLoop = true;
          this.tick = this.getCurrentTick();
          this.tracks.forEach(function (track, index) {
            // Handle next event
            if (!dryRun && this.endOfFile()) {
              //console.log('end of file')
              this.triggerPlayerEvent('endOfFile');
              this.stop();
            } else {
              var event = track.handleEvent(this.tick, dryRun);

              if (dryRun && event) {
                if (event.hasOwnProperty('name') && event.name === 'Set Tempo') {
                  // Grab tempo if available.
                  this.defaultTempo = event.data;
                  this.setTempo(event.data);
                }

                if (event.hasOwnProperty('name') && event.name === 'Program Change') {
                  if (!this.instruments.includes(event.value)) {
                    this.instruments.push(event.value);
                  }
                }
              } else if (event) {
                if (event.hasOwnProperty('name') && event.name === 'Set Tempo') {
                  // Grab tempo if available.
                  this.setTempo(event.data);

                  if (this.isPlaying()) {
                    this.pause().play();
                  }
                }

                this.emitEvent(event);
              }
            }
          }, this);
          if (!dryRun) this.triggerPlayerEvent('playing', {
            tick: this.tick
          });
          this.inLoop = false;
        }
      }
      /**
       * Setter for tempo.
       * @param {number} - Tempo in bpm (defaults to 120)
       */

    }, {
      key: "setTempo",
      value: function setTempo(tempo) {
        this.tempo = tempo;
        return this;
      }
      /**
       * Setter for startTime.
       * @param {number} - UTC timestamp
       * @return {Player}
       */

    }, {
      key: "setStartTime",
      value: function setStartTime(startTime) {
        this.startTime = startTime;
        return this;
      }
      /**
       * Start playing loaded MIDI file if not already playing.
       * @return {Player}
       */

    }, {
      key: "play",
      value: function play() {
        if (this.isPlaying()) throw 'Already playing...'; // Initialize

        if (!this.startTime) this.startTime = new Date().getTime(); // Start play loop
        //window.requestAnimationFrame(this.playLoop.bind(this));

        this.setIntervalId = setInterval(this.playLoop.bind(this), this.sampleRate); //this.setIntervalId = this.loop();

        return this;
      }
    }, {
      key: "loop",
      value: function loop() {
        setTimeout(function () {
          // Do Something Here
          this.playLoop(); // Then recall the parent function to
          // create a recursive loop.

          this.loop();
        }.bind(this), this.sampleRate);
      }
      /**
       * Pauses playback if playing.
       * @return {Player}
       */

    }, {
      key: "pause",
      value: function pause() {
        clearInterval(this.setIntervalId);
        this.setIntervalId = false;
        this.startTick = this.tick;
        this.startTime = 0;
        return this;
      }
      /**
       * Stops playback if playing.
       * @return {Player}
       */

    }, {
      key: "stop",
      value: function stop() {
        clearInterval(this.setIntervalId);
        this.setIntervalId = false;
        this.startTick = 0;
        this.startTime = 0;
        this.resetTracks();
        return this;
      }
      /**
       * Skips player pointer to specified tick.
       * @param {number} - Tick to skip to.
       * @return {Player}
       */

    }, {
      key: "skipToTick",
      value: function skipToTick(tick) {
        this.stop();
        this.startTick = tick; // Need to set track event indexes to the nearest possible event to the specified tick.

        this.tracks.forEach(function (track) {
          track.setEventIndexByTick(tick);
        });
        return this;
      }
      /**
       * Skips player pointer to specified percentage.
       * @param {number} - Percent value in integer format.
       * @return {Player}
       */

    }, {
      key: "skipToPercent",
      value: function skipToPercent(percent) {
        if (percent < 0 || percent > 100) throw "Percent must be number between 1 and 100.";
        this.skipToTick(Math.round(percent / 100 * this.totalTicks));
        return this;
      }
      /**
       * Skips player pointer to specified seconds.
       * @param {number} - Seconds to skip to.
       * @return {Player}
       */

    }, {
      key: "skipToSeconds",
      value: function skipToSeconds(seconds) {
        var songTime = this.getSongTime();
        if (seconds < 0 || seconds > songTime) throw seconds + " seconds not within song time of " + songTime;
        this.skipToPercent(seconds / songTime * 100);
        return this;
      }
      /**
       * Checks if player is playing
       * @return {boolean}
       */

    }, {
      key: "isPlaying",
      value: function isPlaying() {
        return this.setIntervalId > 0 || _typeof(this.setIntervalId) === 'object';
      }
      /**
       * Plays the loaded MIDI file without regard for timing and saves events in this.events.  Essentially used as a parser.
       * @return {Player}
       */

    }, {
      key: "dryRun",
      value: function dryRun() {
        // Reset tracks first
        this.resetTracks();

        while (!this.endOfFile()) {
          this.playLoop(true); //console.log(this.bytesProcessed(), this.midiChunksByteLength);
        }

        this.events = this.getEvents();
        this.totalEvents = this.getTotalEvents();
        this.totalTicks = this.getTotalTicks();
        this.startTick = 0;
        this.startTime = 0; // Leave tracks in pristine condish

        this.resetTracks(); //console.log('Song time: ' + this.getSongTime() + ' seconds / ' + this.totalTicks + ' ticks.');

        this.triggerPlayerEvent('fileLoaded', this);
        return this;
      }
      /**
       * Resets play pointers for all tracks.
       * @return {Player}
       */

    }, {
      key: "resetTracks",
      value: function resetTracks() {
        this.tracks.forEach(function (track) {
          return track.reset();
        });
        return this;
      }
      /**
       * Gets an array of events grouped by track.
       * @return {array}
       */

    }, {
      key: "getEvents",
      value: function getEvents() {
        return this.tracks.map(function (track) {
          return track.events;
        });
      }
      /**
       * Gets total number of ticks in the loaded MIDI file.
       * @return {number}
       */

    }, {
      key: "getTotalTicks",
      value: function getTotalTicks() {
        return Math.max.apply(null, this.tracks.map(function (track) {
          return track.delta;
        }));
      }
      /**
       * Gets total number of events in the loaded MIDI file.
       * @return {number}
       */

    }, {
      key: "getTotalEvents",
      value: function getTotalEvents() {
        return this.tracks.reduce(function (a, b) {
          return {
            events: {
              length: a.events.length + b.events.length
            }
          };
        }, {
          events: {
            length: 0
          }
        }).events.length;
      }
      /**
       * Gets song duration in seconds.
       * @return {number}
       */

    }, {
      key: "getSongTime",
      value: function getSongTime() {
        return this.totalTicks / this.division / this.tempo * 60;
      }
      /**
       * Gets remaining number of seconds in playback.
       * @return {number}
       */

    }, {
      key: "getSongTimeRemaining",
      value: function getSongTimeRemaining() {
        return Math.round((this.totalTicks - this.getCurrentTick()) / this.division / this.tempo * 60);
      }
      /**
       * Gets remaining percent of playback.
       * @return {number}
       */

    }, {
      key: "getSongPercentRemaining",
      value: function getSongPercentRemaining() {
        return Math.round(this.getSongTimeRemaining() / this.getSongTime() * 100);
      }
      /**
       * Number of bytes processed in the loaded MIDI file.
       * @return {number}
       */

    }, {
      key: "bytesProcessed",
      value: function bytesProcessed() {
        return Constants.HEADER_CHUNK_LENGTH + this.tracks.length * 8 + this.tracks.reduce(function (a, b) {
          return {
            pointer: a.pointer + b.pointer
          };
        }, {
          pointer: 0
        }).pointer;
      }
      /**
       * Number of events played up to this point.
       * @return {number}
       */

    }, {
      key: "eventsPlayed",
      value: function eventsPlayed() {
        return this.tracks.reduce(function (a, b) {
          return {
            eventIndex: a.eventIndex + b.eventIndex
          };
        }, {
          eventIndex: 0
        }).eventIndex;
      }
      /**
       * Determines if the player pointer has reached the end of the loaded MIDI file.
       * Used in two ways:
       * 1. If playing result is based on loaded JSON events.
       * 2. If parsing (dryRun) it's based on the actual buffer length vs bytes processed.
       * @return {boolean}
       */

    }, {
      key: "endOfFile",
      value: function endOfFile() {
        if (this.isPlaying()) {
          return this.totalTicks - this.tick <= 0;
        }

        return this.bytesProcessed() >= this.midiChunksByteLength; //this.buffer.length;
      }
      /**
       * Gets the current tick number in playback.
       * @return {number}
       */

    }, {
      key: "getCurrentTick",
      value: function getCurrentTick() {
        if (!this.startTime && this.tick) {
          return this.startTick;
        } else if (!this.startTime) {
          return 0;
        }

        return Math.round((new Date().getTime() - this.startTime) / 1000 * (this.division * (this.tempo / 60))) + this.startTick;
      }
      /**
       * Sends MIDI event out to listener.
       * @param {object}
       * @return {Player}
       */

    }, {
      key: "emitEvent",
      value: function emitEvent(event) {
        this.triggerPlayerEvent('midiEvent', event);
        return this;
      }
      /**
       * Subscribes events to listeners
       * @param {string} - Name of event to subscribe to.
       * @param {function} - Callback to fire when event is broadcast.
       * @return {Player}
       */

    }, {
      key: "on",
      value: function on(playerEvent, fn) {
        if (!this.eventListeners.hasOwnProperty(playerEvent)) this.eventListeners[playerEvent] = [];
        this.eventListeners[playerEvent].push(fn);
        return this;
      }
      /**
       * Broadcasts event to trigger subscribed callbacks.
       * @param {string} - Name of event.
       * @param {object} - Data to be passed to subscriber callback.
       * @return {Player}
       */

    }, {
      key: "triggerPlayerEvent",
      value: function triggerPlayerEvent(playerEvent, data) {
        if (this.eventListeners.hasOwnProperty(playerEvent)) this.eventListeners[playerEvent].forEach(function (fn) {
          return fn(data || {});
        });
        return this;
      }
    }]);

    return Player;
  }();

  var index = {
    Player: Player,
    Utils: Utils,
    Constants: Constants
  };

  return index;

}());
