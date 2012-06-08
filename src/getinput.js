#include "tests.h"

/*
 This test requires at least one input MIDI device/interface to be connected.
*/

addTest('getinput', function (ready) {
	ready.async();

	navigator.getMIDIAccess(function (MIDIAccess) {
		var inputs = MIDIAccess.enumerateInputs();
		var input = MIDIAccess.getInput(inputs[0]);

		assert_mididevice_async(input, ready);
		assert_async("ondevicedisconnect" in input, ready);
		assert_async("ondeviceconnect" in input, ready);
		assert_async("onmidimessage" in input, ready);
		assert_function_async(addEventListener, input, ready);

		ready();
	}, function (e) {
		ready(e);
	});
}, ['midiaccess-enumerate']);
