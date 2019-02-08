/**
 * Constants used in player.
 */
const Constants = {
	VERSION: '2.0.5',
	NOTES: [],
	CIRCLE_OF_FOURTHS: ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'Fb', 'Bbb', 'Ebb', 'Abb'],
	CIRCLE_OF_FIFTHS: ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'E#']
};

// Builds notes object for reference against binary values.
const allNotes = [['C'], ['C#','Db'], ['D'], ['D#','Eb'], ['E'],['F'], ['F#','Gb'], ['G'], ['G#','Ab'], ['A'], ['A#','Bb'], ['B']];
var counter = 0;

// All available octaves.
for (let i = -1; i <= 9; i++) {
	allNotes.forEach(noteGroup => {
		noteGroup.forEach(note => Constants.NOTES[counter] = note + i);
		counter ++;
	});
}

export {Constants};