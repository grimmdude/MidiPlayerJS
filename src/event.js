class Event {
	static parse(event) {
		var eventJson = {};
		eventJson.raw = event;

		if (event[0] == 0xff) {
			// Meta Event
			switch(event[1]) {
				case 0x00: // Sequence Number
					eventJson.name = 'Sequence Number';
					break;
				case 0x01: // Text Event
					eventJson.name = 'Text Event';
					break;
				case 0x02: // Copyright Notice
					eventJson.name = 'Copyright Notice';
					break;
				case 0x03: // Sequence/Track Name
					eventJson.name = 'Sequence/Track Name';
					break;
				case 0x04: // Instrument Name
					eventJson.name = 'Instrument Name';
					break;
				case 0x05: // Lyric
					eventJson.name = 'Lyric';
					break;
				case 0x06: // Marker
					eventJson.name = 'Marker';
					break;
				case 0x07: // Cue Point
					eventJson.name = 'Cue Point';
					break;
				case 0x20: // MIDI Channel Prefix
					eventJson.name = 'MIDI Channel Prefix';
					break;
				case 0x2F: // End of Track
					eventJson.name = 'End of Track';
					break;
				case 0x51: // Set Tempo
					eventJson.name = 'Set Tempo';
					break;
				case 0x54: // SMTPE Offset
					eventJson.name = 'SMTPE Offset';
					break;
				case 0x58: // Time Signature
					eventJson.name = 'Time Signature';
					break;
				case 0x59: // Key Signature
					eventJson.name = 'Key Signature';
					break;
				case 0x7F: // Sequencer-Specific Meta-event
					eventJson.name = 'Sequencer-Specific Meta-event';
					break;
			}
		} else {
			// Voice event
			if (event[0] < 0x80) {
				// Running status
				eventJson.running = true;
				eventJson.note = Constants.NOTES[event[0]];
				eventJson.velocity = event[1];

			} else {
				if (event[0] <= 0x8f) {
					// Note off
					eventJson.name = 'Note off';
					eventJson.note = Constants.NOTES[event[1]];

				} else if (event[0] <= 0x9f) {
					// Note on
					eventJson.name = 'Note on';
					eventJson.note = Constants.NOTES[event[1]];

				} else if (event[0] <= 0xaf) {
					// Polyphonic Key Pressure
					eventJson.name = 'Polyphonic Key Pressure';
					eventJson.note = Constants.NOTES[event[1]];
					eventJson.pressure = event[2];

				} else if (event[0] <= 0xbf) {
					// Controller Change
					eventJson.name = 'Controller Change';

				} else if (event[0] <= 0xcf) {
					// Program Change
					eventJson.name = 'Program Change';

				} else if (event[0] <= 0xdf) {
					// Channel Key Pressure
					eventJson.name = 'Channel Key Pressure';

				} else if (event[0] <= 0xef) {
					// Pitch Bend
					eventJson.name = 'Pitch Bend';
				}
			}
		}

		return eventJson;
	}
}

exports.Event = Event;