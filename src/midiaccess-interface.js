#include "tests.h"

addTest('midiaccess-interface', function (ready) {
	ready.async();

	navigator.getMIDIAccess(function (MIDIAccess) {
		assert_function_async(enumerateInputs, MIDIAccess, ready);
		assert_function_async(enumerateOutputs, MIDIAccess, ready);
		assert_function_async(getInput, MIDIAccess, ready);
		assert_function_async(getOutput, MIDIAccess, ready);
		assert_function_async(createMIDIMessage, MIDIAccess, ready);
		ready();
	}, function (e) {
		ready(e);
	});
}, ['instantiation']);
