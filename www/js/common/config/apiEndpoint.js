/**
 * @ngdoc constant
 * @name AgendaTeen.API_ENDPOINT
 * @description
 * # API_ENDPOINT
 * Defines the API endpoint where our resources will make requests against.
 */
(function () {
	'use strict';
	angular.module('AgendaTeen')
		.constant('API_ENDPOINT', {
			host: 'http://demo4947392.mockable.io/',
			path: '/api/v2/'
		});
}());
