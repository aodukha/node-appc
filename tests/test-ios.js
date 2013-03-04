if (process.platform != 'darwin') {
	console.error('This test is designed for Mac OS X');
	process.exit(1);
}

var appc = require('../lib/appc'), // needed for dump()
	ios = require('../lib/ios');

ios.detect(function (info) {
	dump(info);
});