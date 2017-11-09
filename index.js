var MidiPlayer = require('./module/index');
//var exec = require('child_process').exec;

var Player = new MidiPlayer.Player(function(event) {
	// Event handler
	console.log(event);
	//if (event.name == 'Note on') exec('play -n synth .3 pl ' + event.noteName);
});

//Player.loadFile('demo/midi/chopin.mid');
Player.loadFile('/Users/garrett/Desktop/download (1).midi');
//Player.disableTrack(2);
//console.log(Player.buffer.length);

//Player.getTotalTicks();

Player.on('playing', (event) => {
	//console.log(Player.setIntervalId);
    if(Player.getSongPercentRemaining() <= 0){
        console.log('song ended');
        Player.stop();
    } else{
        console.log(Player.totalTicks, Player.isPlaying());
    }
});

Player.on('endOfFile', (event) => {
	console.log(Player.isPlaying())
    console.log('endOfFile', event);
    console.log('midiParser.isPlaying()', Player.isPlaying());
});

Player.play();