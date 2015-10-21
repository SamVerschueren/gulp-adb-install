# gulp-adb-install [![Build Status](https://travis-ci.org/SamVerschueren/gulp-adb-install.svg?branch=master)](https://travis-ci.org/SamVerschueren/gulp-adb-install)

> Gulp module that runs `adb install`.


## Install

```
$ npm install --save gulp-adb-install
```


## Usage

```js
const adbInstall = require('gulp-adb-install');

gulp.task('install', () => {
	return gulp.src('package.apk')
		.pipe(adbInstall());
});
```


## API

### adbInstall([options])

#### options

##### foo

Type: `object`

- **replace**: Boolean indicating if the current application that is being installed, should be replaced or not.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
