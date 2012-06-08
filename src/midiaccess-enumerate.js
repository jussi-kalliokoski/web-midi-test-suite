#include "tests.h"

/*
 This test requires at least one input and output MIDI device/interface to be connected.
*/

addTest('midiaccess-enumerate', function (ready) {
	ready.async();

	navigator.getMIDIAccess(function (MIDIAccess) {
		var inputs = MIDIAccess.enumerateInputs();
		assert_async(inputs.length > 0, ready);

		var input = inputs[0];
		assert_mididevice_async(input, ready);

		var outputs = MIDIAccess.enumerateOutputs();
		assert_async(outputs.length > 0, ready);

		var output = outputs[0];
		assert_mididevice_async(output, ready);

		ready();
	}, function (e) {
		ready(e);
	});
}, ['midiaccess-interface']);
