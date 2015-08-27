'use strict';

module.exports = {

	source: {
		js: './src/app/**/*.js',
		sass: 'scss/ionic.app.scss',
		jade: './src/app/**/**/*.jade',
		img: './src/assets/images/**/*.{jpg,png,gif}'
	},

	browserSync: {
		js: 'www/js/**/*.js',
		img: 'www/img/**/*',
		html: 'www/**/*.html',
		css: 'www/css/**/*.css'
	},

	build: {
		js: 'www/js',
		html: './www/',
		css: 'www/css',
		img: 'www/img'
	}

};
