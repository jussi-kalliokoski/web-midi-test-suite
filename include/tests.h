#ifndef tests_h
#define tests_h

#define assert(expr) if (expr); else throw Error("Assertion failed(" + __FILE__ + ":" + __LINE__ + "): " + #expr)
#define assert_async(expr, func) try { assert(expr); } catch (e) { return func(e); }
#define assert_function(name, obj) assert(#name in obj); assert(typeof obj.name === "function")
#define assert_function_async(name, obj, func) try { assert(#name in obj); } catch (e) { return func(e); }

#define assert_mididevice_async(device, callback)\
	assert_async(device, callback);\
	assert_async("deviceFingerprint" in device, callback);\
	assert_async("deviceName" in device, callback);\
	assert_async("deviceManufacturer" in device, callback);\
	assert_async("deviceVersion" in device, callback);

#endif
