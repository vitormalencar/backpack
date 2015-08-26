'use strict';

// Necessary Plugins
var gulp = require('gulp'),
	paths = require('../paths'),
	plugins = require('gulp-load-plugins')(),
	gulpif = require('gulp-if'),
	browserSync = require('browser-sync'),
	env = require('minimist')(process.argv.slice(2));

module.exports = gulp.task('sass', function () {
	gulp.src(paths.source.sass)
		.pipe(plugins.plumber())
		.pipe(plugins.sass({errLogToConsole: true}))
		.pipe(gulpif(env.p, plugins.minifyCss()))
		.pipe(gulp.dest(paths.build.css))
})
