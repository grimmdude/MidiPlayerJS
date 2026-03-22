var assert = require('assert');
var sinon = require('sinon');

var MidiPlayer = require('..');
var zelda = 'data:audio/midi;base64,TVRoZAAAAAYAAQACAIBNVHJrAAADoQDAAQCQRn+CAIBGfwCQRn9AgEZ/AJBBf0CAQX8AkEF/QIBBfwCQRn9AgEZ/AJBEfyCARH8AkEJ/IIBCfwCQRH+DAIBEf0CQRn+CAIBGfwCQRn9AgEZ/AJBBf0CAQX8AkEF/QIBBfwCQRn9AgEZ/AJBFfyCARX8AkEN/IIBDfwCQRX+BQIBFf4IAkEUBhACARQGEAJBGf4EAgEZ/AJBBf4FAgEF/AJBGf0CARn8AkEZ/IIBGfwCQSH8ggEh/AJBKfyCASn8AkEt/IIBLfwCQTX+CAIBNf0CQTX9AgE1/AJBNf0CATX8AkE5/IIBOfwCQUH8ggFB/AJBSf4IAgFJ/QJBSf0CAUn8AkFJ/QIBSfwCQUH8ggFB/AJBOfyCATn8AkFB/YIBQfwCQTn8ggE5/AJBNf4IAgE1/AJBNf4EAgE1/AJBLf2CAS38AkE1/IIBNfwCQTn+CAIBOfwCQTX9AgE1/AJBLf0CAS38AkEl/YIBJfwCQS38ggEt/AJBNf4IAgE1/AJBLf0CAS38AkEl/QIBJfwCQSH9ggEh/AJBKfyCASn8AkEx/ggCATH8AkE9/gQCAT38AkE1/QIBNfwCQQX8ggEF/AJBBfyCAQX8AkEF/QIBBfwCQQX8ggEF/AJBBfyCAQX8AkEF/QIBBfwCQQX8ggEF/AJBBfyCAQX8AkEF/QIBBfwCQQX9AgEF/AJBGf4EAgEZ/AJBBf4FAgEF/AJBGf0CARn8AkEZ/IIBGfwCQSH8ggEh/AJBKfyCASn8AkEt/IIBLfwCQTX+CAIBNf0CQTX9AgE1/AJBNf0CATX8AkE5/IIBOfwCQUH8ggFB/AJBSf4MAgFJ/AJBVf4EAgFV/AJBUf4EAgFR/AJBRf4IAgFF/AJBNf4EAgE1/AJBOf4MAgE5/AJBSf4EAgFJ/AJBRf4EAgFF/AJBNf4IAgE1/AJBNf4EAgE1/AJBOf4MAgE5/AJBSf4EAgFJ/AJBRf4EAgFF/AJBNf4IAgE1/AJBKf4EAgEp/AJBLf4MAgEt/AJBOf4EAgE5/AJBNf4EAgE1/AJBJf4IAgEl/AJBGf4EAgEZ/AJBIf2CASH8AkEp/IIBKfwCQTH+CAIBMfwCQT3+BAIBPfwCQTX9AgE1/AJBBfyCAQX8AkEF/IIBBfwCQQX9AgEF/AJBBfyCAQX8AkEF/IIBBfwCQQX9AgEF/AJBBfyCAQX8AkEF/IIBBfwCQQX9AgEF/AJBBf0CAQX8A/y8ATVRyawAACUMAwAEAkCpAgQCAKkAAkDVAgQCANUAAkDpAggCAOkAAkClAgQCAKUAAkDNAgQCAM0AAkDhAggCAOEAAkCdAgQCAJ0AAkDFAgQCAMUAAkDpAggCAOkAAkCpAgQCAKkAAkDVAgQCANUAAkDpAggCAOkAAkC5AQIAuQACQLkAggC5AAJApQCCAKUAAkC5AQIAuQACQLkAggC5AAJApQCCAKUAAkC5AQIAuQACQLkAggC5AAJApQCCAKUAAkC5AIIAuQACQKUAggClAAJAuQCCALkAAkClAIIApQACQLkBAgC5AAJAuQCCALkAAkClAIIApQACQLkBAgC5AAJAuQCCALkAAkClAIIApQACQLkBAgC5AAJAuQCCALkAAkClAIIApQACQLkAggC5AAJApQCCAKUAAkC5AIIAuQACQKUAggClAAJAuQECALkAAkC5AIIAuQACQKUAggClAAJAuQECALkAAkC5AIIAuQACQKUAggClAAJAuQECALkAAkC5AIIAuQACQKUAggClAAJAuQCCALkAAkClAIIApQACQLkAggC5AAJApQCCAKUAAkCxAQIAsQACQLEAggCxAAJAnQCCAJ0AAkCxAQIAsQACQLEAggCxAAJAnQCCAJ0AAkCxAQIAsQACQLEAggCxAAJAnQCCAJ0AAkCxAIIAsQACQJ0AggCdAAJAsQCCALEAAkCdAIIAnQACQKkBAgCpAAJAqQCCAKkAAkCVAIIAlQACQKkBAgCpAAJAqQCCAKkAAkCVAIIAlQACQKkBAgCpAAJAqQCCAKkAAkCVAIIAlQACQKkAggCpAAJAlQCCAJUAAkCpAIIAqQACQJUAggCVAAJAxQECAMUAAkDFAIIAxQACQLEAggCxAAJAxQECAMUAAkDFAIIAxQACQLEAggCxAAJAxQECAMUAAkDFAIIAxQACQLEAggCxAAJAxQCCAMUAAkCxAIIAsQACQMUAggDFAAJAsQCCALEAAkC9AQIAvQACQL0AggC9AAJAqQCCAKkAAkC9AQIAvQACQL0AggC9AAJAqQCCAKkAAkC9AQIAvQACQL0AggC9AAJAqQCCAKkAAkC9AIIAvQACQKkAggCpAAJAvQCCAL0AAkCpAIIAqQACQLkBAgC5AAJAuQCCALkAAkClAIIApQACQLkBAgC5AAJAuQCCALkAAkClAIIApQACQLkBAgC5AAJAuQCCALkAAkClAIIApQACQLkAggC5AAJApQCCAKUAAkC5AIIAuQACQKUAggClAAJAwQECAMEAAkDBAIIAwQACQK0AggCtAAJAwQECAMEAAkDBAIIAwQACQK0AggCtAAJAwQECAMEAAkDBAIIAwQACQK0AggCtAAJAwQCCAMEAAkCtAIIArQACQMEAggDBAAJArQCCAK0AAkClAQIApQACQOUAggDlAAJA5QCCAOUAAkDhAQIA4QACQOEAggDhAAJA4QCCAOEAAkDdAQIA3QACQN0AggDdAAJA3QCCAN0AAkDZAQIA2QACQKUBAgClAAJAuQECALkAAkC5AIIAuQACQKUAggClAAJAuQECALkAAkC5AIIAuQACQKUAggClAAJAuQECALkAAkC5AIIAuQACQKUAggClAAJAuQCCALkAAkClAIIApQACQLkAggC5AAJApQCCAKUAAkCxAQIAsQACQLEAggCxAAJAnQCCAJ0AAkCxAQIAsQACQLEAggCxAAJAnQCCAJ0AAkCxAQIAsQACQLEAggCxAAJAnQCCAJ0AAkCxAIIAsQACQJ0AggCdAAJAsQCCALEAAkCdAIIAnQACQKkBAgCpAAJAqQCCAKkAAkCpAIIAqQACQKkBAgCpAAJAqQCCAKkAAkCpAIIAqQACQKkBAgCpAAJAqQCCAKkAAkCpAIIAqQACQKkAggCpAAJAqQCCAKkAAkCpAIIAqQACQKkAggCpAAJApQECAKUAAkClAIIApQACQKUAggClAAJApQECAKUAAkClAIIApQACQKUAggClAAJApQECAKUAAkClAIIApQACQKUAggClAAJApQCCAKUAAkClAIIApQACQKUAggClAAJApQCCAKUAAkChAQIAoQACQKEAggChAAJAoQCCAKEAAkChAQIAoQACQKEAggChAAJAoQCCAKEAAkChAQIAoQACQKEAggChAAJAoQCCAKEAAkChAIIAoQACQKEAggChAAJAoQCCAKEAAkChAIIAoQACQKUBAgClAAJApQCCAKUAAkClAIIApQACQKUBAgClAAJApQCCAKUAAkClAIIApQACQKUBAgClAAJApQCCAKUAAkClAIIApQACQKUAggClAAJApQCCAKUAAkClAIIApQACQKUAggClAAJAoQECAKEAAkChAIIAoQACQKEAggChAAJAoQECAKEAAkChAIIAoQACQKEAggChAAJAoQECAKEAAkChAIIAoQACQKEAggChAAJAoQCCAKEAAkChAIIAoQACQKEAggChAAJAoQCCAKEAAkClAQIApQACQKUAggClAAJApQCCAKUAAkClAQIApQACQKUAggClAAJApQCCAKUAAkClAQIApQACQKUAggClAAJApQCCAKUAAkClAIIApQACQKUAggClAAJApQCCAKUAAkClAIIApQACQL0BAgC9AAJAvQCCAL0AAkC9AIIAvQACQL0BAgC9AAJAvQCCAL0AAkC9AIIAvQACQL0BAgC9AAJAvQCCAL0AAkC9AIIAvQACQL0AggC9AAJAvQCCAL0AAkC9AIIAvQACQL0AggC9AAJAuQECALkAAkC5AIIAuQACQLkAggC5AAJAuQECALkAAkC5AIIAuQACQLkAggC5AAJAuQECALkAAkC5AIIAuQACQLkAggC5AAJAuQCCALkAAkC5AIIAuQACQLkAggC5AAJAuQCCALkAAkDBAQIAwQACQMEAggDBAAJAwQCCAMEAAkDBAQIAwQACQMEAggDBAAJAwQCCAMEAAkDBAQIAwQACQMEAggDBAAJAwQCCAMEAAkDBAIIAwQACQMEAggDBAAJAwQCCAMEAAkDBAIIAwQACQKUBAgClAAJA5QCCAOUAAkDlAIIA5QACQOEBAgDhAAJA4QCCAOEAAkDhAIIA4QACQN0BAgDdAAJA3QCCAN0AAkDdAIIA3QACQNkBAgDZAAJApQECAKUAA/y8A';

// Helper to build a minimal single-track MIDI file (format 0, division 96)
function buildMidi(trackBytes) {
	var header = [
		0x4D, 0x54, 0x68, 0x64, // MThd
		0x00, 0x00, 0x00, 0x06, // Header length
		0x00, 0x00,             // Format 0
		0x00, 0x01,             // 1 track
		0x00, 0x60,             // Division = 96
		0x4D, 0x54, 0x72, 0x6B, // MTrk
	];
	// Track length as 4 bytes
	var len = trackBytes.length;
	header.push((len >> 24) & 0xFF, (len >> 16) & 0xFF, (len >> 8) & 0xFF, len & 0xFF);
	return new Uint8Array(header.concat(trackBytes));
}

// End of Track event (delta=0)
var EOT = [0x00, 0xFF, 0x2F, 0x00];

describe('MidiPlayerJS', function() {
	describe('#Utils', function () {
		describe('#byteToHex()', function () {
			it('should return hex value from byte.', function () {
				assert.equal('7f', MidiPlayer.Utils.byteToHex(127));
			});
		});

		describe('#bytesToHex()', function () {
			it('should return hex value from array of bytes.', function () {
				assert.equal('7f3a', MidiPlayer.Utils.bytesToHex([127, 58]));
			});
		});

		describe('#hexToNumber()', function () {
			it('should return base 10 value from hex string.', function () {
				assert.equal(254, MidiPlayer.Utils.hexToNumber('fe'));
			});
		});

		describe('#bytesToNumber()', function () {
			it('should return base 10 value from array of bytes.', function () {
				assert.equal(923139, MidiPlayer.Utils.bytesToNumber([14, 22, 3]));
			});
		});

		describe('#bytesToLetters()', function () {
			it('should return string from array of bytes.', function () {
				assert.equal('Mthd', MidiPlayer.Utils.bytesToLetters([77, 116, 104, 100]));
			});
		});

		describe('#decToBinary()', function () {
			it('should return binary value from decimal.', function () {
				assert.equal('10110', MidiPlayer.Utils.decToBinary(22));
			});
		});

		describe('#readVarInt()', function () {
			it('should return binary value from decimal.', function () {
				assert.equal(42, MidiPlayer.Utils.readVarInt([128, 42]));
			});
		});
	});


	describe('#Player', function () {
		describe('#loadFile()', function () {
			it('should load file correctly.', function () {
				var Player = new MidiPlayer.Player();
				Player.loadFile('demo/midi/zelda.mid');
				assert.equal(3330, Player.buffer.length);
				assert.equal(2, Player.tracks.length);
			});

			it('should load 500_Miles.mid file correctly.', function () {
				var Player = new MidiPlayer.Player();
				Player.loadFile('demo/midi/500_Miles.mid');
				//assert.equal(3330, Player.buffer.length);
				//assert.equal(2, Player.tracks.length);
			});

			it('should load O-Zone_-_Dragostea_Din_Tei.mid file correctly.', function () {
				var Player = new MidiPlayer.Player();
				Player.loadFile('demo/midi/O-Zone_-_Dragostea_Din_Tei.mid');
				//assert.equal(3330, Player.buffer.length);
				//assert.equal(2, Player.tracks.length);
			});
		});

		describe('#loadDataUri()', function () {
			it('should load data correctly from data uri.', function () {
				var Player = new MidiPlayer.Player();
				Player.loadDataUri(zelda);
				assert.equal(3330, Player.buffer.length);
				assert.equal(2, Player.tracks.length);
			});
		});

		describe('#getCurrentTime', function () {
			let Player;
			beforeEach(function() {
				this.clock = sinon.useFakeTimers();
				this.clock.tick(5000); //set start time
				Player = new MidiPlayer.Player();
				Player.loadDataUri(zelda);
			});
			afterEach(function() {
				this.clock = sinon.restore();
			});
			it('should return 0 after init', function () {
				assert.equal(Player.getCurrentTick(), 0);
			});
			it('should return last known tick after pause', function () {
				const skipTicks = 123456;
				Player.skipToTick(skipTicks);
				Player.play();
				this.clock.tick(6); //run 1 tick
				Player.pause();
				assert.equal(Player.getCurrentTick(), skipTicks + 1);
			});
			it('should return 0 after stop', function () {
				const skipTicks = 123456;
				Player.skipToTick(skipTicks);
				Player.play();
				this.clock.tick(6); //run 1 tick
				Player.stop();
				assert.equal(Player.getCurrentTick(), 0);
			})
		});

		describe('#getCurrentTick', function () {
			it('should return correct tick when skipping without playing.', function () {
				const skipTicks = 500;
				const Player = new MidiPlayer.Player();
				Player.loadDataUri(zelda);
				Player.skipToTick(skipTicks);
				assert.equal(Player.getCurrentTick(), skipTicks);
			});

			it('should return accurate tick across a tempo change boundary', function () {
				this.clock = sinon.useFakeTimers();
				this.clock.tick(5000); // set start time

				// Build a format-1 MIDI with 100 BPM at tick 0, 200 BPM at tick 480 (division=480)
				var midi = new Uint8Array([
					0x4D, 0x54, 0x68, 0x64,
					0x00, 0x00, 0x00, 0x06,
					0x00, 0x01,             // Format 1
					0x00, 0x02,             // 2 tracks
					0x01, 0xE0,             // Division = 480
					// Track 1 (tempo track)
					0x4D, 0x54, 0x72, 0x6B,
					0x00, 0x00, 0x00, 0x13, // 19 bytes
					0x00, 0xFF, 0x51, 0x03, 0x09, 0x27, 0xC0, // Set Tempo 100 BPM at tick 0
					0x83, 0x60, 0xFF, 0x51, 0x03, 0x04, 0x93, 0xE0, // Set Tempo 200 BPM at tick 480
					0x00, 0xFF, 0x2F, 0x00,
					// Track 2 (note track with enough ticks)
					0x4D, 0x54, 0x72, 0x6B,
					0x00, 0x00, 0x00, 0x09, // 9 bytes
					0x00, 0x90, 0x3C, 0x7F, // Note On C4
					0x87, 0x40, 0xFF, 0x2F, 0x00, // delta=960, End of Track
				]);

				var Player = new MidiPlayer.Player();
				Player.loadArrayBuffer(midi.buffer);

				// At 100 BPM with division=480: 480 ticks = 0.6s
				// After tick 480, tempo is 200 BPM: 480 ticks = 0.3s
				// Total song = 960 ticks over 0.9s

				Player.play();

				// Advance 600ms (should be right at tick 480)
				this.clock.tick(600);
				var tickAt600ms = Player.getCurrentTick();
				assert.ok(Math.abs(tickAt600ms - 480) <= 1, 'At 600ms should be ~480 ticks, got ' + tickAt600ms);

				// Advance another 150ms (total 750ms) - in 200 BPM zone, 150ms = 240 ticks
				this.clock.tick(150);
				var tickAt750ms = Player.getCurrentTick();
				assert.ok(Math.abs(tickAt750ms - 720) <= 1, 'At 750ms should be ~720 ticks, got ' + tickAt750ms);

				Player.stop();
				sinon.restore();
			});
		});

		describe('#playLoop tempo handling', function () {
			it('should not call pause().play() on Set Tempo events during playback', function () {
				this.clock = sinon.useFakeTimers();
				this.clock.tick(5000);

				// Build MIDI with a Set Tempo event at tick 0
				var midi = new Uint8Array([
					0x4D, 0x54, 0x68, 0x64,
					0x00, 0x00, 0x00, 0x06,
					0x00, 0x01,
					0x00, 0x02,
					0x01, 0xE0,             // Division = 480
					// Track 1 (tempo track)
					0x4D, 0x54, 0x72, 0x6B,
					0x00, 0x00, 0x00, 0x0B, // 11 bytes
					0x00, 0xFF, 0x51, 0x03, 0x09, 0x27, 0xC0, // Set Tempo 100 BPM at tick 0
					0x00, 0xFF, 0x2F, 0x00,
					// Track 2
					0x4D, 0x54, 0x72, 0x6B,
					0x00, 0x00, 0x00, 0x09, // 9 bytes
					0x00, 0x90, 0x3C, 0x7F,
					0x83, 0x60, 0xFF, 0x2F, 0x00,
				]);

				var Player = new MidiPlayer.Player();
				Player.loadArrayBuffer(midi.buffer);
				Player.play();

				var pauseSpy = sinon.spy(Player, 'pause');

				// Tick forward to process events
				this.clock.tick(100);

				// pause should not have been called by the playLoop for tempo changes
				assert.equal(pauseSpy.callCount, 0, 'pause() should not be called on Set Tempo events');

				pauseSpy.restore();
				Player.stop();
				sinon.restore();
			});
		});

		describe('#tempoMap', function () {
			it('should build a tempo map with at least one entry', function () {
				var Player = new MidiPlayer.Player();
				Player.loadDataUri(zelda);
				assert.ok(Player.tempoMap.length >= 1);
				assert.equal(Player.tempoMap[0].tick, 0);
			});

			it('should have a sorted tempo map', function () {
				var Player = new MidiPlayer.Player();
				Player.loadDataUri(zelda);
				for (var i = 1; i < Player.tempoMap.length; i++) {
					assert.ok(Player.tempoMap[i].tick >= Player.tempoMap[i - 1].tick);
				}
			});

			it('getSongTime should equal ticksToSeconds(0, totalTicks)', function () {
				var Player = new MidiPlayer.Player();
				Player.loadDataUri(zelda);
				assert.equal(Player.getSongTime(), Player.ticksToSeconds(0, Player.totalTicks));
			});

			it('ticksToSeconds and secondsToTicks should be inverse operations', function () {
				var Player = new MidiPlayer.Player();
				Player.loadDataUri(zelda);
				var songTime = Player.getSongTime();
				var halfTime = songTime / 2;
				var tick = Player.secondsToTicks(halfTime);
				var seconds = Player.ticksToSeconds(0, tick);
				// Allow 1 second tolerance due to rounding
				assert.ok(Math.abs(seconds - halfTime) < 1);
			});

			it('skipToSeconds should navigate to correct tick', function () {
				var Player = new MidiPlayer.Player();
				Player.loadDataUri(zelda);
				var targetSeconds = Player.getSongTime() / 2;
				Player.skipToSeconds(targetSeconds);
				var expectedTick = Player.secondsToTicks(targetSeconds);
				assert.equal(Player.startTick, expectedTick);
			});
		});

		describe('#getSongTimeRemaining', function () {
			let Player;
			beforeEach(function () {
				this.clock = sinon.useFakeTimers();
				this.clock.tick(5000); //set start time
				Player = new MidiPlayer.Player();
				Player.loadDataUri(zelda);
			});
			afterEach(function () {
				this.clock = sinon.restore();
			});
			it('should return totalTime after stop', function () {
				const skipTicks = 123456;
				Player.skipToTick(skipTicks);
				Player.play();
				this.clock.tick(6); //run 1 tick
				Player.stop();
				assert.equal(Player.getSongTimeRemaining(), Player.getSongTime());
			})
		});
	});

	describe('#Event Parsing', function () {
		describe('Pitch Bend', function () {
			it('should parse pitch bend value in non-running-status', function () {
				// Pitch Bend ch1: status=0xE0, LSB=0x00, MSB=0x40 => value = (0x40 << 7) | 0x00 = 8192
				var midi = buildMidi([0x00, 0xE0, 0x00, 0x40].concat(EOT));
				var Player = new MidiPlayer.Player();
				Player.loadArrayBuffer(midi.buffer);
				var events = Player.events[0];
				var pb = events.find(function(e) { return e.name === 'Pitch Bend'; });
				assert.ok(pb, 'Pitch Bend event should exist');
				assert.equal(pb.value, 8192);
				assert.equal(pb.channel, 1);
			});

			it('should parse pitch bend value in running status', function () {
				// First: normal Pitch Bend, then running status with different value
				var midi = buildMidi([
					0x00, 0xE0, 0x00, 0x40, // Pitch Bend ch1, value=8192
					0x00, 0x7F, 0x7F,        // Running status: LSB=0x7F, MSB=0x7F => (0x7F << 7) | 0x7F = 16383
				].concat(EOT));
				var Player = new MidiPlayer.Player();
				Player.loadArrayBuffer(midi.buffer);
				var events = Player.events[0];
				var pbEvents = events.filter(function(e) { return e.name === 'Pitch Bend'; });
				assert.equal(pbEvents.length, 2);
				assert.equal(pbEvents[0].value, 8192);
				assert.equal(pbEvents[1].value, 16383);
				assert.equal(pbEvents[1].running, true);
			});
		});

		describe('Key Signature', function () {
			it('should parse flat key signatures correctly', function () {
				// Key Signature: FF 59 02 FE 00 => sf=-2 (Bb), mi=0 (Major)
				var midi = buildMidi([0x00, 0xFF, 0x59, 0x02, 0xFE, 0x00].concat(EOT));
				var Player = new MidiPlayer.Player();
				Player.loadArrayBuffer(midi.buffer);
				var events = Player.events[0];
				var ks = events.find(function(e) { return e.name === 'Key Signature'; });
				assert.ok(ks, 'Key Signature event should exist');
				assert.equal(ks.keySignature, 'Bb Major');
			});

			it('should parse sharp key signatures correctly', function () {
				// Key Signature: FF 59 02 02 00 => sf=2 (D), mi=0 (Major)
				var midi = buildMidi([0x00, 0xFF, 0x59, 0x02, 0x02, 0x00].concat(EOT));
				var Player = new MidiPlayer.Player();
				Player.loadArrayBuffer(midi.buffer);
				var events = Player.events[0];
				var ks = events.find(function(e) { return e.name === 'Key Signature'; });
				assert.ok(ks, 'Key Signature event should exist');
				assert.equal(ks.keySignature, 'D Major');
			});

			it('should parse minor key signatures correctly', function () {
				// Key Signature: FF 59 02 FC 01 => sf=-4 (Ab), mi=1 (Minor)
				var midi = buildMidi([0x00, 0xFF, 0x59, 0x02, 0xFC, 0x01].concat(EOT));
				var Player = new MidiPlayer.Player();
				Player.loadArrayBuffer(midi.buffer);
				var events = Player.events[0];
				var ks = events.find(function(e) { return e.name === 'Key Signature'; });
				assert.ok(ks, 'Key Signature event should exist');
				assert.equal(ks.keySignature, 'Ab Minor');
			});
		});

		describe('Controller Change (running status)', function () {
			it('should parse correct controller number and value under running status', function () {
				var midi = buildMidi([
					// Controller Change ch1: status=0xB0, controller=7 (volume), value=127
					0x00, 0xB0, 0x07, 0x7F,
					// Running status: controller=10 (pan), value=64
					0x00, 0x0A, 0x40,
				].concat(EOT));
				var Player = new MidiPlayer.Player();
				Player.loadArrayBuffer(midi.buffer);
				var events = Player.events[0];
				var ccEvents = events.filter(function(e) { return e.name === 'Controller Change'; });
				assert.equal(ccEvents.length, 2);
				// First event (normal status)
				assert.equal(ccEvents[0].number, 7);
				assert.equal(ccEvents[0].value, 127);
				assert.equal(ccEvents[0].channel, 1);
				// Second event (running status)
				assert.equal(ccEvents[1].number, 10);
				assert.equal(ccEvents[1].value, 64);
				assert.equal(ccEvents[1].channel, 1);
				assert.equal(ccEvents[1].running, true);
			});
		});

		describe('Marker meta event', function () {
			it('should include string data on Marker events', function () {
				// Marker: FF 06 06 "Chorus"
				var midi = buildMidi([
					0x00, 0xFF, 0x06, 0x06,
					0x43, 0x68, 0x6F, 0x72, 0x75, 0x73, // "Chorus"
				].concat(EOT));
				var Player = new MidiPlayer.Player();
				Player.loadArrayBuffer(midi.buffer);
				var events = Player.events[0];
				var marker = events.find(function(e) { return e.name === 'Marker'; });
				assert.ok(marker, 'Marker event should exist');
				assert.equal(marker.string, 'Chorus');
			});
		});

		describe('Meta event with multi-byte VarInt length', function () {
			it('should correctly parse text events longer than 127 bytes', function () {
				// Text Event with 200 bytes of 'A': FF 01 81 48 [200x 0x41]
				var textData = [];
				for (var i = 0; i < 200; i++) textData.push(0x41);
				var trackBytes = [0x00, 0xFF, 0x01, 0x81, 0x48].concat(textData).concat(EOT);
				var midi = buildMidi(trackBytes);
				var Player = new MidiPlayer.Player();
				Player.loadArrayBuffer(midi.buffer);
				var events = Player.events[0];
				var textEvent = events.find(function(e) { return e.name === 'Text Event'; });
				assert.ok(textEvent, 'Text Event should exist');
				assert.equal(textEvent.string.length, 200);
				// Should also find End of Track (proves pointer advanced correctly)
				var eot = events.find(function(e) { return e.name === 'End of Track'; });
				assert.ok(eot, 'End of Track should be parsed after long text event');
			});
		});

		describe('setEventIndexByTick', function () {
			it('should set eventIndex as a number, not a string', function () {
				var Player = new MidiPlayer.Player();
				Player.loadDataUri(zelda);
				Player.tracks[0].setEventIndexByTick(500);
				assert.strictEqual(typeof Player.tracks[0].eventIndex, 'number');
			});
		});
	});

	describe('#skipToTick state events', function () {
		it('should emit Program Change when skipping past one', function () {
			// Program Change ch1 at tick 0: status=0xC0, program=5
			var midi = buildMidi([
				0x00, 0xC0, 0x05,       // Program Change ch1, program 5 at tick 0
				0x60, 0x90, 0x3C, 0x7F, // Note On at tick 96
			].concat(EOT));
			var events = [];
			var Player = new MidiPlayer.Player(function(e) { events.push(e); });
			Player.loadArrayBuffer(midi.buffer);
			Player.skipToTick(96);
			var pc = events.find(function(e) { return e.name === 'Program Change'; });
			assert.ok(pc, 'Program Change should be emitted');
			assert.equal(pc.value, 5);
			assert.equal(pc.channel, 1);
		});

		it('should emit last Controller Change value per channel+number', function () {
			// Two CC events on ch1, controller 7: first value=100, then value=80
			var midi = buildMidi([
				0x00, 0xB0, 0x07, 0x64, // CC ch1, ctrl 7, val 100 at tick 0
				0x30, 0xB0, 0x07, 0x50, // CC ch1, ctrl 7, val 80 at tick 48
				0x30, 0x90, 0x3C, 0x7F, // Note On at tick 96
			].concat(EOT));
			var events = [];
			var Player = new MidiPlayer.Player(function(e) { events.push(e); });
			Player.loadArrayBuffer(midi.buffer);
			Player.skipToTick(96);
			var ccEvents = events.filter(function(e) { return e.name === 'Controller Change' && e.number === 7; });
			assert.equal(ccEvents.length, 1, 'Should only emit last CC value');
			assert.equal(ccEvents[0].value, 80);
		});

		it('should emit Pitch Bend when skipping past one', function () {
			// Pitch Bend ch1: status=0xE0, LSB=0x00, MSB=0x60 => value = (0x60 << 7) | 0x00 = 12288
			var midi = buildMidi([
				0x00, 0xE0, 0x00, 0x60, // Pitch Bend ch1 at tick 0
				0x60, 0x90, 0x3C, 0x7F, // Note On at tick 96
			].concat(EOT));
			var events = [];
			var Player = new MidiPlayer.Player(function(e) { events.push(e); });
			Player.loadArrayBuffer(midi.buffer);
			Player.skipToTick(96);
			var pb = events.find(function(e) { return e.name === 'Pitch Bend'; });
			assert.ok(pb, 'Pitch Bend should be emitted');
			assert.equal(pb.value, 12288);
		});

		it('should NOT emit Note On/Off events during skip', function () {
			var midi = buildMidi([
				0x00, 0x90, 0x3C, 0x7F, // Note On at tick 0
				0x30, 0x80, 0x3C, 0x00, // Note Off at tick 48
				0x30, 0xC0, 0x05,       // Program Change at tick 96
			].concat(EOT));
			var events = [];
			var Player = new MidiPlayer.Player(function(e) { events.push(e); });
			Player.loadArrayBuffer(midi.buffer);
			Player.skipToTick(100);
			var noteEvents = events.filter(function(e) { return e.name === 'Note on' || e.name === 'Note off'; });
			assert.equal(noteEvents.length, 0, 'Note On/Off should not be emitted during skip');
			var pc = events.find(function(e) { return e.name === 'Program Change'; });
			assert.ok(pc, 'Program Change should still be emitted');
		});

		it('should emit state events when using skipToPercent()', function () {
			// Program Change at tick 0, total ticks ~ 96 (from Note On delta)
			var midi = buildMidi([
				0x00, 0xC0, 0x0A,       // Program Change ch1, program 10 at tick 0
				0x60, 0x90, 0x3C, 0x7F, // Note On at tick 96
			].concat(EOT));
			var events = [];
			var Player = new MidiPlayer.Player(function(e) { events.push(e); });
			Player.loadArrayBuffer(midi.buffer);
			Player.skipToPercent(100);
			var pc = events.find(function(e) { return e.name === 'Program Change'; });
			assert.ok(pc, 'Program Change should be emitted via skipToPercent');
			assert.equal(pc.value, 10);
		});
	});

	describe('#Tempo Map', function () {
		it('should seed tempo map with default 120 BPM, not last-seen tempo', function () {
			// Format 1 MIDI with Set Tempo at tick 0 (100 BPM) and tick 480 (200 BPM)
			var midi = new Uint8Array([
				// MThd
				0x4D, 0x54, 0x68, 0x64,
				0x00, 0x00, 0x00, 0x06,
				0x00, 0x01,             // Format 1
				0x00, 0x02,             // 2 tracks
				0x01, 0xE0,             // Division = 480
				// Track 1 (tempo track)
				0x4D, 0x54, 0x72, 0x6B,
				0x00, 0x00, 0x00, 0x13, // 19 bytes
				0x00, 0xFF, 0x51, 0x03, 0x09, 0x27, 0xC0, // Set Tempo 100 BPM at tick 0
				0x83, 0x60, 0xFF, 0x51, 0x03, 0x04, 0x93, 0xE0, // Set Tempo 200 BPM at tick 480
				0x00, 0xFF, 0x2F, 0x00,
				// Track 2 (empty)
				0x4D, 0x54, 0x72, 0x6B,
				0x00, 0x00, 0x00, 0x04,
				0x00, 0xFF, 0x2F, 0x00,
			]);
			var Player = new MidiPlayer.Player();
			Player.loadArrayBuffer(midi.buffer);

			// Tempo map should have default 120 at tick 0, overridden by 100 BPM at tick 0, then 200 at tick 480
			assert.equal(Player.tempoMap.length, 2);
			assert.equal(Player.tempoMap[0].tick, 0);
			assert.equal(Player.tempoMap[0].tempo, 100);
			assert.equal(Player.tempoMap[1].tick, 480);
			assert.equal(Player.tempoMap[1].tempo, 200);
		});

		it('should use default 120 BPM at tick 0 when no Set Tempo at tick 0 exists', function () {
			// Format 1 MIDI with Set Tempo only at tick 480 (200 BPM)
			var midi = new Uint8Array([
				// MThd
				0x4D, 0x54, 0x68, 0x64,
				0x00, 0x00, 0x00, 0x06,
				0x00, 0x01,             // Format 1
				0x00, 0x02,             // 2 tracks
				0x01, 0xE0,             // Division = 480
				// Track 1 (tempo track)
				0x4D, 0x54, 0x72, 0x6B,
				0x00, 0x00, 0x00, 0x0C, // 12 bytes
				0x83, 0x60, 0xFF, 0x51, 0x03, 0x04, 0x93, 0xE0, // Set Tempo 200 BPM at tick 480
				0x00, 0xFF, 0x2F, 0x00,
				// Track 2 (empty)
				0x4D, 0x54, 0x72, 0x6B,
				0x00, 0x00, 0x00, 0x04,
				0x00, 0xFF, 0x2F, 0x00,
			]);
			var Player = new MidiPlayer.Player();
			Player.loadArrayBuffer(midi.buffer);

			// Should have default 120 at tick 0, then 200 at tick 480
			assert.equal(Player.tempoMap.length, 2);
			assert.equal(Player.tempoMap[0].tick, 0);
			assert.equal(Player.tempoMap[0].tempo, 120);
			assert.equal(Player.tempoMap[1].tick, 480);
			assert.equal(Player.tempoMap[1].tempo, 200);
		});
	});

	describe('#getLyrics()', function () {
		it('should return all lyric events across all tracks', function () {
			// Two Lyric events: "Hel-" at tick 0, "lo" at tick 96
			// Lyric: FF 05 <len> <bytes>
			var midi = buildMidi([
				0x00, 0xFF, 0x05, 0x04, 0x48, 0x65, 0x6C, 0x2D, // "Hel-" at tick 0
				0x60, 0xFF, 0x05, 0x02, 0x6C, 0x6F,             // "lo" at tick 96
			].concat(EOT));
			var Player = new MidiPlayer.Player();
			Player.loadArrayBuffer(midi.buffer);
			var lyrics = Player.getLyrics();
			assert.equal(lyrics.length, 2);
			assert.equal(lyrics[0].name, 'Lyric');
			assert.equal(lyrics[0].track, 1);
			assert.equal(lyrics[0].string, 'Hel-');
			assert.equal(lyrics[0].tick, 0);
			assert.equal(lyrics[1].string, 'lo');
			assert.equal(lyrics[1].tick, 96);
		});

		it('should return empty array when no lyric events exist', function () {
			var midi = buildMidi([0x00, 0x90, 0x3C, 0x7F].concat(EOT));
			var Player = new MidiPlayer.Player();
			Player.loadArrayBuffer(midi.buffer);
			assert.deepEqual(Player.getLyrics(), []);
		});

		it('should filter lyrics by track number', function () {
			// Format 1 MIDI with two tracks, each with a Lyric event
			var midi = new Uint8Array([
				0x4D, 0x54, 0x68, 0x64,
				0x00, 0x00, 0x00, 0x06,
				0x00, 0x01,             // Format 1
				0x00, 0x02,             // 2 tracks
				0x00, 0x60,             // Division = 96
				// Track 1: Lyric "A" (5 bytes) + EOT (4 bytes) = 9 bytes
				0x4D, 0x54, 0x72, 0x6B,
				0x00, 0x00, 0x00, 0x09,
				0x00, 0xFF, 0x05, 0x01, 0x41, // "A" at tick 0
				0x00, 0xFF, 0x2F, 0x00,
				// Track 2: Lyric "B" (5 bytes) + EOT (4 bytes) = 9 bytes
				0x4D, 0x54, 0x72, 0x6B,
				0x00, 0x00, 0x00, 0x09,
				0x00, 0xFF, 0x05, 0x01, 0x42, // "B" at tick 0
				0x00, 0xFF, 0x2F, 0x00,
			]);
			var Player = new MidiPlayer.Player();
			Player.loadArrayBuffer(midi.buffer);
			var track1Lyrics = Player.getLyrics(1);
			assert.equal(track1Lyrics.length, 1);
			assert.equal(track1Lyrics[0].string, 'A');
			var track2Lyrics = Player.getLyrics(2);
			assert.equal(track2Lyrics.length, 1);
			assert.equal(track2Lyrics[0].string, 'B');
		});
	});
});