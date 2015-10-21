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

##### replace

Type: `boolean`  
Default: `false`

`true` if you want to replace the already installed application.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
