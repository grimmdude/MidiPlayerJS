# &#9836; MidiPlayerJS
[![npm version](https://badge.fury.io/js/midi-player-js.svg)](https://badge.fury.io/js/midi-player-js)
[![Build Status](https://travis-ci.org/grimmdude/MidiPlayerJS.svg?branch=master)](https://travis-ci.org/grimmdude/MidiPlayerJS)

MidiPlayerJS is a JavaScript library which reads standard MIDI files and emits JSON events in real time.  This player does not generate any audio, but by attaching a handler to the event emitter you can trigger any code you like which could play audio, control visualizations, feed into a MIDI interface, etc.

## Demos
* [Neopixel Music](https://github.com/robertvorthman/neopixel-music) by robertvorthman @robertvorthman
* [Autocomposer](http://www.rj-salvador.com/apps/autocomposer/) by RJ Salvador @rjsalvadorr
* [Simple Browser Player](http://grimmdude.com/MidiPlayerJS/) by Garrett Grimm @grimmdude

## Getting Started
Using MidiWriterJS is pretty simple.  Create a new player by instantiating `MidiPlayer.Player` with an event handler to be called for every MIDI event.  Then you can load and play a MIDI file.

```js
var MidiPlayer = require('midi-player-js');

// Initialize player and register event handler
var Player = new MidiPlayer.Player(function(event) {
	console.log(event);
});

// Load a MIDI file
Player.loadFile('./test.mid');
Player.play();
```
## Player Events
There are a handful of events on the `Player` object which you can subscribe to using the `Player.on()` method.  Some events pass data as the first argument of the callback as described below:

```js
Player.on('fileLoaded', function() {
    // Do something when file is loaded
});
Player.on('playing', function(currentTick) {
    // Do something while player is playing
    // (this is repeatedly triggered within the play loop)
});
Player.on('midiEvent', function(event) {
    // Do something when a MIDI event is fired.
    // (this is the same as passing a function to MidiPlayer.Player() when instantiating.
});
Player.on('endOfFile', function() {
    // Do something when end of the file has been reached.
});
```
## Full API Documentation
[http://grimmdude.com/MidiPlayerJS/docs/](http://grimmdude.com/MidiPlayerJS/docs/)

