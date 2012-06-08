#include "tests.h"

/*
 This test requires at least one output MIDI device/interface to be connected.
*/

addTest('getoutput', function (ready) {
	ready.async();

	navigator.getMIDIAccess(function (MIDIAccess) {
		var outputs = MIDIAccess.enumerateOutputs();
		var output = MIDIAccess.getOutput(outputs[0]);

		assert_mididevice_async(output, ready);
		assert_async("ondevicedisconnect" in output, ready);
		assert_async("ondeviceconnect" in output, ready);
		assert_function_async(addEventListener, output, ready);
		assert_function_async(sendMIDIMessage, output, ready);
		assert_function_async(sendMessage, output, ready);

		ready();
	}, function (e) {
		ready(e);
	});
}, ['midiaccess-enumerate']);
