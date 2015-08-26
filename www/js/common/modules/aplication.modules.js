/**
 * @ngdoc module
 * @name AgendaTeen.aplication
 * @description
 * Modules form aplication
 * All the modules fom internal source
 */
(function () {
	'use strict';
	angular
		.module('AgendaTeen.aplication', [
			'AgendaTeen.login',
			'AgendaTeen.event',
			'AgendaTeen.activity',
			'AgendaTeen.handout',
			'AgendaTeen.message',
			'AgendaTeen.sidemenu',
			'AgendaTeen.dashboard',
			'AgendaTeen.eventShow',
			'AgendaTeen.ApiFactory',
			'AgendaTeen.notificatons',
			'AgendaTeen.activity_show',
			'AgendaTeen.handouts_show',
			'AgendaTeen.httpInterceptor',
		]);
})();
