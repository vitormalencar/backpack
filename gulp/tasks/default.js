'use strict';

var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['imagemin','sass','ngannotate', 'jade', 'watch', 'browser-sync', ]);
