'use strict';

// Necessary Plugins
var gulp = require('gulp'),
	paths = require('../paths'),
	plugins = require('gulp-load-plugins')();

module.exports = gulp.task('ngannotate', function () {
	return gulp.src(paths.source.js)
		.pipe(plugins.plumber())
		.pipe(plugins.ngAnnotate({
			add: true,
			single_quotes: true
		}))
		.pipe(gulp.dest(paths.build.js))
});
