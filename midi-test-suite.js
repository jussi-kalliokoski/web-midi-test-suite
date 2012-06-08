var addTest = function() {
        var remaining = [];
        var done = [];
        var errors = [];

        function canRun(task) {
            if (!task.dependencies) return true;
            var i;
            for (i = 0; i < task.dependencies.length; i++) {
                if (done.indexOf(task.dependencies[i]) === -1) {
                    return false;
                }
            }
            return true;
        }

        function addTest(name, func, dependencies) {
            remaining.push({
                name: name,
                run: func,
                dependencies: dependencies
            });
        }
        addTest.onsuccess = function(test) {
            console.log('Success!');
        };
        addTest.onerror = function(test, e) {
            console.error('Error' + (test ? ' in ' + test.name : '') + '!', e);
        };
        addTest.onrun = function(test) {};
        addTest.onfailure = function(failed, norun) {
            console.error('Tests failed: ' + failed.map(function(e) {
                return e.name;
            }).join(', '));
            console.error('Tests did not satisfy dependencies: ' + norun.map(function(e) {
                return e.name;
            }).join(', '));
        };

        function run() {
            var i, test, waitForReady;

            function ready(e) {
                if (typeof e === 'undefined' || e === true) {
                    done.push(test.name);
                    console.log(test.name + ' finished succesfully.');
                    return run();
                }
                errors.push({
                    name: test.name,
                    error: e
                });
                addTest.onerror(test, e);
                run();
            }

            function aready(e) {
                setTimeout(function() {
                    ready(e);
                }, 0);
            }
            ready.async = function() {
                waitForReady = true;
            };
            if (!remaining.length) {
                if (!errors.length) {
                    return setTimeout(addTest.onsuccess, 0);
                } else {
                    return setTimeout(function() {
                        addTest.onfailure(errors, remaining);
                    }, 0);
                }
            }
            for (i = 0; i < remaining.length; i++) {
                test = remaining[i];
                if (!canRun(test)) continue;
                remaining.splice(i--, 1);
                try {
                    test.run(ready);
                } catch (e) {
                    return aready(e);
                }
                if (waitForReady) return;
                return aready();
            }
            addTest.onerror(null, Error("No more tests with satisfied dependencies!"));
            setTimeout(function() {
                addTest.onfailure(errors, remaining);
            }, 0);
        }
        addTest.run = run;
        return addTest;
    }();
if (typeof module !== 'undefined') {
    module.exports = addTest;
}
addTest('midiaccess-enumerate', function(ready) {
    ready.async();
    navigator.getMIDIAccess(function(MIDIAccess) {
        var inputs = MIDIAccess.enumerateInputs();
        try {
            if (inputs.length > 0);
            else throw Error("Assertion failed(" + "src/midiaccess-enumerate.js" + ":" + 12 + "): " + "inputs.length > 0");
        } catch (e) {
            return ready(e);
        };
        var input = inputs[0];
        try {
            if (input);
            else throw Error("Assertion failed(" + "src/midiaccess-enumerate.js" + ":" + 15 + "): " + "input");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceFingerprint" in input);
            else throw Error("Assertion failed(" + "src/midiaccess-enumerate.js" + ":" + 15 + "): " + "\"deviceFingerprint\" in input");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceName" in input);
            else throw Error("Assertion failed(" + "src/midiaccess-enumerate.js" + ":" + 15 + "): " + "\"deviceName\" in input");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceManufacturer" in input);
            else throw Error("Assertion failed(" + "src/midiaccess-enumerate.js" + ":" + 15 + "): " + "\"deviceManufacturer\" in input");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceVersion" in input);
            else throw Error("Assertion failed(" + "src/midiaccess-enumerate.js" + ":" + 15 + "): " + "\"deviceVersion\" in input");
        } catch (e) {
            return ready(e);
        };;
        var outputs = MIDIAccess.enumerateOutputs();
        try {
            if (outputs.length > 0);
            else throw Error("Assertion failed(" + "src/midiaccess-enumerate.js" + ":" + 18 + "): " + "outputs.length > 0");
        } catch (e) {
            return ready(e);
        };
        var output = outputs[0];
        try {
            if (output);
            else throw Error("Assertion failed(" + "src/midiaccess-enumerate.js" + ":" + 21 + "): " + "output");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceFingerprint" in output);
            else throw Error("Assertion failed(" + "src/midiaccess-enumerate.js" + ":" + 21 + "): " + "\"deviceFingerprint\" in output");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceName" in output);
            else throw Error("Assertion failed(" + "src/midiaccess-enumerate.js" + ":" + 21 + "): " + "\"deviceName\" in output");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceManufacturer" in output);
            else throw Error("Assertion failed(" + "src/midiaccess-enumerate.js" + ":" + 21 + "): " + "\"deviceManufacturer\" in output");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceVersion" in output);
            else throw Error("Assertion failed(" + "src/midiaccess-enumerate.js" + ":" + 21 + "): " + "\"deviceVersion\" in output");
        } catch (e) {
            return ready(e);
        };;
        ready();
    }, function(e) {
        ready(e);
    });
}, ['midiaccess-interface']);
addTest('getoutput', function(ready) {
    ready.async();
    navigator.getMIDIAccess(function(MIDIAccess) {
        var outputs = MIDIAccess.enumerateOutputs();
        var output = MIDIAccess.getOutput(outputs[0]);
        try {
            if (output);
            else throw Error("Assertion failed(" + "src/getoutput.js" + ":" + 14 + "): " + "output");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceFingerprint" in output);
            else throw Error("Assertion failed(" + "src/getoutput.js" + ":" + 14 + "): " + "\"deviceFingerprint\" in output");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceName" in output);
            else throw Error("Assertion failed(" + "src/getoutput.js" + ":" + 14 + "): " + "\"deviceName\" in output");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceManufacturer" in output);
            else throw Error("Assertion failed(" + "src/getoutput.js" + ":" + 14 + "): " + "\"deviceManufacturer\" in output");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceVersion" in output);
            else throw Error("Assertion failed(" + "src/getoutput.js" + ":" + 14 + "): " + "\"deviceVersion\" in output");
        } catch (e) {
            return ready(e);
        };;
        try {
            if ("ondevicedisconnect" in output);
            else throw Error("Assertion failed(" + "src/getoutput.js" + ":" + 15 + "): " + "\"ondevicedisconnect\" in output");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("ondeviceconnect" in output);
            else throw Error("Assertion failed(" + "src/getoutput.js" + ":" + 16 + "): " + "\"ondeviceconnect\" in output");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("addEventListener" in output);
            else throw Error("Assertion failed(" + "src/getoutput.js" + ":" + 17 + "): " + "\"addEventListener\" in output");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("sendMIDIMessage" in output);
            else throw Error("Assertion failed(" + "src/getoutput.js" + ":" + 18 + "): " + "\"sendMIDIMessage\" in output");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("sendMessage" in output);
            else throw Error("Assertion failed(" + "src/getoutput.js" + ":" + 19 + "): " + "\"sendMessage\" in output");
        } catch (e) {
            return ready(e);
        };
        ready();
    }, function(e) {
        ready(e);
    });
}, ['midiaccess-enumerate']);
addTest("exists", function(ready) {
    if (typeof navigator !== "undefined");
    else throw Error("Assertion failed(" + "src/exists.js" + ":" + 4 + "): " + "typeof navigator !== \"undefined\"");
    if ("getMIDIAccess" in navigator);
    else throw Error("Assertion failed(" + "src/exists.js" + ":" + 5 + "): " + "\"getMIDIAccess\" in navigator");
    if (typeof navigator.getMIDIAccess === "function");
    else throw Error("Assertion failed(" + "src/exists.js" + ":" + 5 + "): " + "typeof navigator.getMIDIAccess === \"function\"");
});
addTest('midiaccess-interface', function(ready) {
    ready.async();
    navigator.getMIDIAccess(function(MIDIAccess) {
        try {
            if ("enumerateInputs" in MIDIAccess);
            else throw Error("Assertion failed(" + "src/midiaccess-interface.js" + ":" + 7 + "): " + "\"enumerateInputs\" in MIDIAccess");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("enumerateOutputs" in MIDIAccess);
            else throw Error("Assertion failed(" + "src/midiaccess-interface.js" + ":" + 8 + "): " + "\"enumerateOutputs\" in MIDIAccess");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("getInput" in MIDIAccess);
            else throw Error("Assertion failed(" + "src/midiaccess-interface.js" + ":" + 9 + "): " + "\"getInput\" in MIDIAccess");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("getOutput" in MIDIAccess);
            else throw Error("Assertion failed(" + "src/midiaccess-interface.js" + ":" + 10 + "): " + "\"getOutput\" in MIDIAccess");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("createMIDIMessage" in MIDIAccess);
            else throw Error("Assertion failed(" + "src/midiaccess-interface.js" + ":" + 11 + "): " + "\"createMIDIMessage\" in MIDIAccess");
        } catch (e) {
            return ready(e);
        };
        ready();
    }, function(e) {
        ready(e);
    });
}, ['instantiation']);
addTest('getinput', function(ready) {
    ready.async();
    navigator.getMIDIAccess(function(MIDIAccess) {
        var inputs = MIDIAccess.enumerateInputs();
        var input = MIDIAccess.getInput(inputs[0]);
        try {
            if (input);
            else throw Error("Assertion failed(" + "src/getinput.js" + ":" + 14 + "): " + "input");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceFingerprint" in input);
            else throw Error("Assertion failed(" + "src/getinput.js" + ":" + 14 + "): " + "\"deviceFingerprint\" in input");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceName" in input);
            else throw Error("Assertion failed(" + "src/getinput.js" + ":" + 14 + "): " + "\"deviceName\" in input");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceManufacturer" in input);
            else throw Error("Assertion failed(" + "src/getinput.js" + ":" + 14 + "): " + "\"deviceManufacturer\" in input");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("deviceVersion" in input);
            else throw Error("Assertion failed(" + "src/getinput.js" + ":" + 14 + "): " + "\"deviceVersion\" in input");
        } catch (e) {
            return ready(e);
        };;
        try {
            if ("ondevicedisconnect" in input);
            else throw Error("Assertion failed(" + "src/getinput.js" + ":" + 15 + "): " + "\"ondevicedisconnect\" in input");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("ondeviceconnect" in input);
            else throw Error("Assertion failed(" + "src/getinput.js" + ":" + 16 + "): " + "\"ondeviceconnect\" in input");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("onmidimessage" in input);
            else throw Error("Assertion failed(" + "src/getinput.js" + ":" + 17 + "): " + "\"onmidimessage\" in input");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("addEventListener" in input);
            else throw Error("Assertion failed(" + "src/getinput.js" + ":" + 18 + "): " + "\"addEventListener\" in input");
        } catch (e) {
            return ready(e);
        };
        ready();
    }, function(e) {
        ready(e);
    });
}, ['midiaccess-enumerate']);
addTest('midiaccess-createmidimessage', function(ready) {
    ready.async();

    function relativeError(a, b) {
        return (a - b) / b;
    }
    navigator.getMIDIAccess(function(MIDIAccess) {
        var now, msg;
        now = +new Date();
        msg = MIDIAccess.createMIDIMessage(0x80);
        try {
            if (msg.status === 0x80);
            else throw Error("Assertion failed(" + "src/midiaccess-createmidimessage.js" + ":" + 16 + "): " + "msg.status === 0x80");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("data" in msg);
            else throw Error("Assertion failed(" + "src/midiaccess-createmidimessage.js" + ":" + 17 + "): " + "\"data\" in msg");
        } catch (e) {
            return ready(e);
        };
        try {
            if (msg.data === null);
            else throw Error("Assertion failed(" + "src/midiaccess-createmidimessage.js" + ":" + 18 + "): " + "msg.data === null");
        } catch (e) {
            return ready(e);
        };
        try {
            if (relativeError(msg.timestamp, now) < 0.01);
            else throw Error("Assertion failed(" + "src/midiaccess-createmidimessage.js" + ":" + 19 + "): " + "relativeError(msg.timestamp, now) < 0.01");
        } catch (e) {
            return ready(e);
        };
        try {
            if (msg.channel === 0);
            else throw Error("Assertion failed(" + "src/midiaccess-createmidimessage.js" + ":" + 20 + "): " + "msg.channel === 0");
        } catch (e) {
            return ready(e);
        };
        msg = MIDIAccess.createMIDIMessage(0x80, null, now, new Uint8Array([1, 2]));
        try {
            if (msg.timestamp === now);
            else throw Error("Assertion failed(" + "src/midiaccess-createmidimessage.js" + ":" + 24 + "): " + "msg.timestamp === now");
        } catch (e) {
            return ready(e);
        };
        try {
            if ("data" in msg);
            else throw Error("Assertion failed(" + "src/midiaccess-createmidimessage.js" + ":" + 25 + "): " + "\"data\" in msg");
        } catch (e) {
            return ready(e);
        };
        try {
            if (msg.data[0] === 1);
            else throw Error("Assertion failed(" + "src/midiaccess-createmidimessage.js" + ":" + 26 + "): " + "msg.data[0] === 1");
        } catch (e) {
            return ready(e);
        };
        try {
            if (msg.data[1] === 2);
            else throw Error("Assertion failed(" + "src/midiaccess-createmidimessage.js" + ":" + 27 + "): " + "msg.data[1] === 2");
        } catch (e) {
            return ready(e);
        };
        msg = MIDIAccess.createMIDIMessage(0x80, 1);
        try {
            if (msg.channel === 1);
            else throw Error("Assertion failed(" + "src/midiaccess-createmidimessage.js" + ":" + 31 + "): " + "msg.channel === 1");
        } catch (e) {
            return ready(e);
        };
        ready();
    }, function(e) {
        ready(e);
    });
}, ['midiaccess-interface']);
addTest("instantiation", function(ready) {
    ready.async();
    navigator.getMIDIAccess(function(MIDIAccess_1) {
        navigator.getMIDIAccess(function(MIDIAccess_2) {
            try {
                if (MIDIAccess_1 === MIDIAccess_2);
                else throw Error("Assertion failed(" + "src/instantiation.js" + ":" + 8 + "): " + "MIDIAccess_1 === MIDIAccess_2");
            } catch (e) {
                return ready(e);
            };
            ready();
        });
    }, function(e) {
        ready(e);
    });
}, ["exists"]);