var MidiPlayer = require('./build/index');
var Player = new MidiPlayer.Player(function(event) {
	// Event handler
	console.log(event);
});

Player.loadFile('./midi2.mid');
Player.play();