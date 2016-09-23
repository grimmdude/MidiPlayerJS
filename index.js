var MidiPlayer = require('./build/index');
var exec = require('child_process').exec;

var Player = new MidiPlayer.Player(function(event) {
	// Event handler
	console.log(event);
	//if (event.name == 'Note on') exec('play -n synth .3 pl ' + event.noteName);
});

Player.loadFile('./simple.mid');
Player.play();