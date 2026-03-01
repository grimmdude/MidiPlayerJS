# MidiPlayerJS

MIDI file parser and player that emits JSON events for each MIDI event. Does not generate audio — consumers handle sound synthesis.

- **npm package**: `midi-player-js` (v2.0.16)
- **Entry**: `src/index.js`

## Architecture

- `src/player.js` — Main `Player` class (load, play, pause, stop, skip)
- `src/track.js` — `Track` class (parses MIDI events from raw bytes)
- `src/utils.js` — Byte manipulation utilities
- `src/constants.js` — MIDI constants, note mappings

## Key Concepts

- **division**: Ticks per quarter note (from MIDI header)
- **tempo**: BPM (default 120, updated by Set Tempo meta events)
- **tick**: Absolute position in the song; **delta**: Relative ticks between events
- **tempoMap**: Array of `{tick, tempo}` entries for accurate time calculations across tempo changes

## MIDI Event Flow

1. Load file → validate MThd header
2. Parse header (division, format) → parse tracks
3. `dryRun()` — parse all events, build tempo map, calculate totalTicks
4. Playback — emit events in real time via setInterval

## Build & Test

```sh
npm run build    # Rollup + Babel → build/
npm test         # Mocha + Sinon (runs build first)
```
