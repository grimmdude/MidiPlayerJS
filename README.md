# &#9836; MidiPlayerJS
[![npm version](https://badge.fury.io/js/midi-player-js.svg)](https://badge.fury.io/js/midi-player-js)
[![Build Status](https://travis-ci.org/grimmdude/MidiPlayerJS.svg?branch=master)](https://travis-ci.org/grimmdude/MidiPlayerJS)

MidiPlayerJS is a JavaScript library which reads standard MIDI files and emits JSON events in real time.  This player does not generate any audio, but by attaching a handler to the event emitter you can trigger any code you like which could play audio, control visualizations, feed into a MIDI interface, etc.

[Source Documentation](http://grimmdude.com/MidiPlayerJS/docs/)

## Getting Started
Using MidiWriterJS is pretty simple.  Create a new player by instantiating `MidiPlayer.Player` with an event handler to be called for every MIDI event.  Then you can load and play a MIDI file.
```javascript
var MidiPlayer = require('midi-player-js');

// Initialize player and register event handler
var Player = new MidiPlayer.Player(function(event) {
	console.log(event);
});

// Load a MIDI file
Player.loadFile('./test.mid');
Player.play();
```
## API Documentation
[http://grimmdude.com/MidiPlayerJS/docs/](http://grimmdude.com/MidiPlayerJS/docs/)
