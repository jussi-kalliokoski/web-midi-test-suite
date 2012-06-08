#include "tests.h"

addTest("instantiation", function (ready) {
	ready.async();

	navigator.getMIDIAccess(function (MIDIAccess_1) {
		navigator.getMIDIAccess(function (MIDIAccess_2) {
				assert_async(MIDIAccess_1 === MIDIAccess_2, ready);
				ready();
		});
	}, function (e) {
		ready(e);
	});
}, ["exists"]);
