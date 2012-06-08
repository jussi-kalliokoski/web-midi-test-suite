var addTest = function () {

var remaining = [];
var done = [];
var errors = [];

function canRun (task) {
	if (!task.dependencies) return true;

	var i;

	for(i=0; i<task.dependencies.length; i++) {
		if (done.indexOf(task.dependencies[i]) === -1) {
			return false;
		}
	}

	return true;
}

function addTest (name, func, dependencies) {
	remaining.push({
		name: name,
		run: func,
		dependencies: dependencies
	});
}

addTest.onsuccess = function (test) {
	console.log('Success!');
};

addTest.onerror = function (test, e) {
	console.error('Error' + (test ? ' in ' + test.name : '') + '!', e);
};

addTest.onrun = function (test) {
	
};

addTest.onfailure = function (failed, norun) {
	console.error('Tests failed: ' +
		failed.map(function (e) {
			return e.name;
		}).join(', '));
	console.error('Tests did not satisfy dependencies: ' +
		norun.map(function (e) {
			return e.name;
		}).join(', '));
};

function run () {
	var i, test, waitForReady;
	function ready (e) {
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

	function aready (e) {
		setTimeout(function () {
			ready(e);
		}, 0);
	}

	ready.async = function () {
		waitForReady = true;
	};

	if (!remaining.length) {
		if (!errors.length) {
			return setTimeout(addTest.onsuccess, 0);
		} else {
			return setTimeout(function () {
				addTest.onfailure(errors, remaining);
			}, 0);
		}
	}


	for (i=0; i<remaining.length; i++) {
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

	setTimeout(function () {
		addTest.onfailure(errors, remaining);
	}, 0);
}

addTest.run = run;

return addTest;

}();

if (typeof module !== 'undefined') {
	module.exports = addTest;
}
