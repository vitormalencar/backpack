'use strict';

var gulp = require('gulp'),
	paths = require('../paths'),
	browserSync = require('browser-sync');

// Call Watch
module.exports = gulp.task('watch', function () {
	gulp.watch(paths.source.jade, ['jade']);
	gulp.watch(paths.source.sass, ['sass']);
	gulp.watch(paths.source.img, ['imagemin']);
	gulp.watch(paths.source.js, ['scripts'], browserSync.reload);
});
