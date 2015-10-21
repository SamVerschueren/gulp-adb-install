import path from 'path';
import childProcess from 'child_process';
import mockSpawn from 'mock-spawn';
import test from 'ava';
import gutil from 'gulp-util';
import fn from './';

test.before('Before', t => {
	childProcess.spawn = mockSpawn();

	t.end();
});

test.serial('install', t => {
	const stream = fn();

	stream.on('end', function () {
		t.is(childProcess.spawn.calls[0].command, 'adb');
		t.same(childProcess.spawn.calls[0].args, ['install', path.join(__dirname, 'fixtures/fixture.apk')]);

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
		t.is(childProcess.spawn.calls[1].command, 'adb');
		t.same(childProcess.spawn.calls[1].args, ['install', '-r', path.join(__dirname, 'fixtures/fixture.apk')]);

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
