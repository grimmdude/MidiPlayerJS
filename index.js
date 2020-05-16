var MidiPlayer = require('.');

// Initialize player and register event handler
var Player = new MidiPlayer.Player(function(event) {
	console.log(event);
});
debugger;

// Load a MIDI file
//Player.loadFile('./demo/midi/zelda.mid');
Player.loadFile('./demo/midi/500_Miles.mid');
//Player.play();