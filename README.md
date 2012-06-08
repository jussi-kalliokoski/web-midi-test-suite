# Web MIDI API test suite

This is a JavaScript-based test suite for testing implementations of the [Web MIDI API](https://dvcs.w3.org/hg/audio/raw-file/tip/midi/specification.html).

Just run ```midi-test-suite.js``` against your implementation and see the results.

The test assumes you have at least one of both input and output MIDI devices/interfaces, and that you will allow access to your MIDI devices.

The tests are written using [macnjs](https://github.com/jussi-kalliokoski/macnjs), i.e. a C preprocessor run against JS code.

## License

The tests are licensed under MIT license.
