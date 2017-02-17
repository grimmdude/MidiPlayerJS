var MidiPlayer = require('./module/index');
var exec = require('child_process').exec;

var Player = new MidiPlayer.Player(function(event) {
	// Event handler
	console.log(event);
	//if (event.name == 'Note on') exec('play -n synth .3 pl ' + event.noteName);
});

//Player.loadFile('demo/midi/chopin.mid');
Player.loadFile('/Users/garrett/Desktop/adele_-_someone_like_you.mid');
//Player.disableTrack(2);
console.log(Player.buffer.length);
//Player.play();
//Player.getTotalTicks();
