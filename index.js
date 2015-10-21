'use strict';
var childProcess = require('child_process');
var through = require('through2');

module.exports = function (opts) {
	return through.obj(function (file, enc, cb) {
		var args = ['install'];

		if (opts && opts.replace === true) {
			args.push('-r');
		}

		args.push(file.path);

		var stream = childProcess.spawn('adb', args);

		stream.stdout.on('data', function (data) {
			console.log(data.toString());
		});

		stream.stderr.once('data', function (data) {
			console.log(data.toString());
		});

		stream.on('close', function () {
			cb();
		});
	});
};
