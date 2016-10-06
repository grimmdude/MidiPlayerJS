&#9836; MidiPlayerJS
===============
[![npm version](https://badge.fury.io/js/midi-player-js.svg)](https://badge.fury.io/js/midi-player-js)
[![Build Status](https://travis-ci.org/grimmdude/MidiPlayerJS.svg?branch=master)](https://travis-ci.org/grimmdude/MidiPlayerJS)

MidiPlayerJS is a JavaScript library which reads standard MIDI files and emits JSON events in real time.  This player does not generate any audio, but by attaching a handler to the event emitter you can trigger any code you like which could play audio, control visualizations, etc.

Getting Started
------------
```javascript
var MidiPlayer = require('./build/index');
var Player = new MidiPlayer.Player(function(event) {
	// This function will get called for each event emitted by the player.
	console.log(event);
});

Player.loadFile('./test.mid');

// Disable a track like this
//Player.disableTrack(2);

// Enable a track like this (all tracks enabled by default)
//Player.enableTrack(2);

Player.play();
```