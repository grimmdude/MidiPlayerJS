/**
 * Constants used in player.
 */
var Constants = {
	VERSION: '2.0.1',
	NOTES: []
};

(function() {
	// Builds notes object for reference against binary values.
	var allNotes = [['C'], ['C#','Db'], ['D'], ['D#','Eb'], ['E'],['F'], ['F#','Gb'], ['G'], ['G#','Ab'], ['A'], ['A#','Bb'], ['B']];
	var counter = 0;

	// All available octaves.
	for (let i = -1; i <= 9; i++) {
		allNotes.forEach(noteGroup => {
			noteGroup.forEach(note => Constants.NOTES[counter] = note + i);
			counter ++;
		});
	}
})();

exports.Constants = Constants;