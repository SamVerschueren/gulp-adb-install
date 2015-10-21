import path from 'path';
import childProcess from 'child_process';
import test from 'ava';
import sinon from 'sinon';
import gutil from 'gulp-util';
import fn from './';

test.before('Before', t => {
	sinon.spy(childProcess, 'spawn');
	t.end();
});

test.serial('install', t => {
	const stream = fn();

	stream.on('end', function () {
		t.same(childProcess.spawn.args[0], ['adb', ['install', path.join(__dirname, 'fixtures/fixture.apk')]]);

		t.end();
	});

	stream.on('data', function () {

	});

	stream.write(new gutil.File({
		cwd: __dirname,
		base: path.join(__dirname, 'fixtures'),
		path: path.join(__dirname, 'fixtures/fixture.apk'),
		contents: new Buffer('hello world')
	}));

	stream.end();
});

test.serial('install replace', t => {
	const stream = fn({replace: true});

	stream.on('end', function () {
		t.same(childProcess.spawn.args[1], ['adb', ['install', '-r', path.join(__dirname, 'fixtures/fixture.apk')]]);

		t.end();
	});

	stream.on('data', function () {

	});

	stream.write(new gutil.File({
		cwd: __dirname,
		base: path.join(__dirname, 'fixtures'),
		path: path.join(__dirname, 'fixtures/fixture.apk'),
		contents: new Buffer('hello world')
	}));

	stream.end();
});
