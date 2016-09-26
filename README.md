&#9836; MidiPlayerJS
===============
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