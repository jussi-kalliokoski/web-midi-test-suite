#include "tests.h"

addTest("exists", function (ready) {
	assert(typeof navigator !== "undefined");
	assert_function(getMIDIAccess, navigator);
});
