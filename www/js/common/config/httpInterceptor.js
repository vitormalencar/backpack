/**
 * @ngdoc module
 * @name AgendaTeen
 * @description
 * Interceptor for all the http requests defines timeout and  loading spinners comportament
 */
(function () {
	'use strict';
	angular
		.module('AgendaTeen')
		.config(['$httpProvider', function ($httpProvider) {
			$httpProvider.interceptors.push('httpInterceptor');
		}]);
}());
