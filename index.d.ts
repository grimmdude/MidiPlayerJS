declare module "midi-player-js" {
    namespace MidiInternal {
        interface Event {
            name:
                | "Sequence Number"
                | "Text Event"
                | "Copyright Notice"
                | "Sequence/Track Name"
                | "Instrument Name"
                | "Lyric"
                | "Marker"
                | "Cue Point"
                | "Device Name"
                | "MIDI Channel Prefix"
                | "MIDI Port"
                | "End of Track"
                | "Set Tempo"
                | "SMTPE Offset"
                | "Time Signature"
                | "Key Signature"
                | "Sequencer-Specific Meta-event"
                | "Sysex"
                | "Note off"
                | "Note on"
                | "Polyphonic Key Pressure"
                | "Controller Change"
                | "Program Change"
                | "Channel Key Pressure"
                | "Pitch Bend"
                | string;

            track: number;
            tick: number;
            byteIndex: number;

            string?: string;
            data?: number;
            tempo?: number;

            running?: boolean;
            noteNumber?: number;
            noteName?: string;
            note?: string;
            velocity?: number;
            channel?: number;
            pressure?: number;

            /**
             * Controller change number
             */
            number?: number;
            /**
             * Controller change value
             */
            value?: number;
        }

        type PlayerEventType =
            | "midiEvent"
            | "endOfFile"
            | "playing"
            | "fileLoaded";

        class Track {
            /**
             * The events parsed out of a track
             *
             * @type {Event[]}
             * @memberof Track
             */
            events: Event[];

            /**
             * Resets all stateful track information used during playback.
             *
             * @returns {this}
             * @memberof Track
             */
            reset(): this;

            /**
             * Sets this track to be enabled during playback.
             * @return {this}
             */
            enable(): this;

            /**
             * Sets this track to be disabled during playback.
             * @return {this}
             */
            disable(): this;

            /**
             * Sets the track event index to the nearest event to the given tick.
             * @param {number} tick
             * @return {this}
             */
            setEventIndexByTick(tick: number): this;

            /**
             * Gets byte located at pointer position.
             * @return {number}
             */
            getCurrentByte(): number;

            /**
             * Gets count of delta bytes and current pointer position.
             * @return {number}
             */
            getDeltaByteCount(): number;

            /**
             * Get delta value at current pointer position.
             * @return {number}
             */
            getDelta(): number;

            /**
             * Handles event within a given track starting at specified index
             * @param {number} currentTick
             * @param {boolean} dryRun - If true events will be parsed and returned regardless of time.
             */
            handleEvent(currentTick: number, dryRun?: boolean): void;

            /**
             * Get string data from event.
             * @param {number} eventStartIndex
             * @return {string}
             */
            getStringData(eventStartIndex: number): string;

            /**
             * Parses event into JSON and advances pointer for the track
             * @return {object}
             */
            parseEvent(): Event;

            /**
             * Returns true if pointer has reached the end of the track.
             * @param {boolean}
             */
            endOfTrack(): boolean;
        }

        class Player {
            constructor(callback?: Function);
            /**
             * Disables a track from playing.
             *
             * @param {number} trackNumber
             * @returns {this}
             * @memberof Player
             */
            disableTrack(trackNumber: number): this;

            /**
             * Enables a track for playing.
             *
             * @param {number} trackNumber Track to enable.
             * @returns {this}
             */
            enableTrack(trackNumber: number): this;
            /**
             * Returns true if the player pointer has reached the end of the loaded MIDI file.
             *
             * Used in two ways:
             *
             * 1. If playing result is based on loaded JSON events.
             * 2. If parsing (dryRun) it's based on the actual buffer length vs bytes processed.
             *
             * @returns {boolean}
             * @memberof Player
             */
            endOfFile(): boolean;

            /**
             * Number of events played up to this point.
             *
             * @returns {number}
             * @memberof Player
             */
            eventsPlayed(): number;
            /**
             * Parses file for necessary information and does a dry run to calculate
             * total length. Populates this.events & this.totalTicks.
             */
            fileLoaded(): this;
            /**
             * Loads quarter note division of loaded MIDI file.
             */
            private getDivision(): this;
            /**
             * Loads MIDI file format for loaded file.
             */
            private getFormat(): this;
            /**
             * Parses out tracks, places them in this.tracks and initializes this.pointers.
             */
            private getTracks(): this;

            getCurrentTick(): number;
            /**
             * Gets an array of events grouped by track.
             *
             * @returns {Event[]}
             */
            getEvents(): Event[];

            /**
             * Get the size of the file.
             *
             * @returns {number} Size in bytes.
             */
            getFilesize(): number;

            /**
             * Gets remaining percent of playback.
             */
            getSongPercentRemaining(): number;

            /**
             * Gets remaining number of seconds in playback.
             */
            getSongTimeRemaining(): number;

            /**
             * Gets song duration in seconds.
             */
            getSongTime(): number;

            /**
             * Gets total number of events in the loaded MIDI file.
             */
            getTotalEvents(): number;

            /**
             * Gets total number of ticks in the loaded MIDI file.
             */
            getTotalTicks(): number;

            /**
             * Returns whether player is playing.
             */
            isPlaying(): boolean;

            /**
             * Load an array buffer into the player.
             *
             * @param arrayBuffer Buffer to load.
             */
            loadArrayBuffer(arrayBuffer: ArrayBuffer): this;

            /**
             * Load a data URI into the player.
             *
             * @param dataUri The URI to load.
             */
            loadDataUri(dataUri: string): this;

            /**
             * Load a file into the player (Node.js only).
             *
             * @param {string} path Path to load.
             * @returns {this}
             */
            loadFile(path: string): this;

            /**
             * Subscribes events to listeners
             *
             * @param {PlayerEventType} playerEvent
             * @param {Function} fn Callback
             * @returns {this}
             */
            on(playerEvent: PlayerEventType, fn: Function): this;

            /**
             * Pauses playback if playing.
             *
             * @returns {this}
             */
            pause(): this;

            /**
             * Start playing loaded MIDI file if not already playing.
             *
             * @returns {this}
             */
            play(): this;

            /**
             * The main play loop.
             * @param dryRun Indicates whether or not this is being called simply for parsing purposes. Disregards timing if so.
             */
            playLoop(dryRun?: boolean): void;

            /**
             * Resets play pointers for all tracks.
             *
             * @returns {this}
             */
            resetTracks(): this;

            /**
             * Setter for startTime.
             * @param {number} - UTC timestamp
             */
            setStartTime(startTime: number): void;

            /**
             * Skips player pointer to specified percentage.
             * @param {number} - Percent value in integer format.
             * @return {this}
             */
            skipToPercent(percent: number): this;

            /**
             * Skips player pointer to specified tick.
             * @param {number} - Tick to skip to.
             * @return {this}
             */
            skipToTick(tick: number): this;

            /**
             * Stops playback if playing.
             * @return {Player}
             */
            stop(): this;

            /**
             * Broadcasts event to trigger subscribed callbacks.
             * @param {string} - Name of event.
             * @param {any} - Data to be passed to subscriber callback.
             * @return {Player}
             */
            triggerPlayerEvent(playerEvent: string, data: any): this;

            /**
             * The tracks of the file.
             */
            tracks: Track[] | undefined;

            /**
             * Song tempo
             *
             * @type {number}
             */
            tempo: number;

            /**
             * Ticks per quarter note.
             * @type {number}
             */
            division: number;

            /**
             * Current tick
             */
            tick: number;

            /**
             * MIDI File format.
             *
             * MIDI files come in 3 variations:
             * - Format 0 which contains a single track.
             * - Format 1 which contains one or more simultaneous tracks
             *   (i.e. all tracks are to be played simultaneously).
             * - Format 2 which contains one or more independent tracks.
             */
            format: number;
            /**
             * An array of the instrument numbers requested by Program Change.
             *
             * @type {number[]}
             * @memberof Player
             */
            instruments: number[];
        }
    }

    interface MidiPlayerInterface {
        Player: typeof MidiInternal.Player;
    }

    const MidiPlayer: MidiPlayerInterface;
    namespace MidiPlayer {
        export type Event = MidiInternal.Event;
        export type Player = MidiInternal.Player;
        export type Track = MidiInternal.Track;
    }

    export = MidiPlayer;
}
