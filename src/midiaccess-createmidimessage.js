#include "tests.h"

addTest('midiaccess-createmidimessage', function (ready) {
	ready.async();

	function relativeError (a, b) {
		return (a - b) / b;
	}

	navigator.getMIDIAccess(function (MIDIAccess) {
		var now, msg;

		now = +new Date();
		msg = MIDIAccess.createMIDIMessage(0x80);

		assert_async(msg.status === 0x80, ready);
		assert_async("data" in msg, ready);
		assert_async(msg.data === null, ready);
		assert_async(relativeError(msg.timestamp, now) < 0.01, ready);
		assert_async(msg.channel === 0, ready);

		msg = MIDIAccess.createMIDIMessage(0x80, null, now, new Uint8Array([1, 2]));

		assert_async(msg.timestamp === now, ready);
		assert_async("data" in msg, ready);
		assert_async(msg.data[0] === 1, ready);
		assert_async(msg.data[1] === 2, ready);

		msg = MIDIAccess.createMIDIMessage(0x80, 1);

		assert_async(msg.channel === 1, ready);

		ready();
	}, function (e) {
		ready(e);
	});
}, ['midiaccess-interface']);
