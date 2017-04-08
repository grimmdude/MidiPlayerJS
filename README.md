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
The following outlines the available member functions of `MidiPlayer.Player`.
#### loadArrayBuffer(arrayBuffer)
Loads MIDI file by array buffer.

#### loadDataUri(dataUri)
Loads MIDI file by data uri.

#### loadFile(filePath)
Loads MIDI file by file path (node only).

#### enableTrack(trackNumber)
Enables specified track.

#### disableTrack(trackNumber)
Disables specified track.

#### play()
Begins playback of loaded MIDI file.

#### pause()
Pauses playback.

#### stop()
Stops playback.

#### isPlaying()
Returns `true`/`false` indicating whether or not the player is playing.

#### getFilesize()
Returns filesize of loadd MIDI file in bytes.

#### getSongTime()
Returns total playback time of loaded MIDI file in seconds.

#### getSongTimeRemaining()
Returns remaining seconds remaining in playback.

#### getSongPercentRemaining()
Returns remaining percent of MIDI file left to playback.

#### on(playerEvent, callback)
Used to attach handlers to available events.  The available events are:
1. `fileLoaded`
2. `playing`
3. `midiEvent`
4. `endOfFile`


