var MidiPlayer = require('./build/index');
var Player = new MidiPlayer.Player;
Player.loadFile('./test.mid');
Player.play();