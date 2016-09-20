var Parser = require('./build/index');
Parser = new Parser.Player;
Parser.loadFile('./simple.mid');
Parser.play();
//console.log(Parser.readVarInt(128));
