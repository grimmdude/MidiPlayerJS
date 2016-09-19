var Parser = require('./build/index');
Parser = new Parser.Main;
Parser.loadFile('./simple.mid');
Parser.play();
//console.log(Parser.readVarInt(128));
