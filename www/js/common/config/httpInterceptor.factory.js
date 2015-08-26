(function () {
	'use strict';
	angular
		.module('AgendaTeen.httpInterceptor', [])
		.factory('httpInterceptor', httpInterceptor);
	httpInterceptor.$inject = ['$rootScope', '$q', 'DialogFactory'];

	function httpInterceptor($rootScope, $q, DialogFactory) {

		var service = {
			request: request,
			response: response,
			responseError: responseError,
			requestError: requestError
		};

		return service;

		function response(response) {
			console.log(response);
			$rootScope.$broadcast('loading:hide');
			return response;
		}

		function responseError(rejection) {
			console.log(rejection);
			$rootScope.$broadcast('loading:hide');
			DialogFactory.showDialog(rejection, 1000, 'top')
			return $q.reject(rejection);
		}

		function request(config) {
			config.timeout = 10000;
			$rootScope.$broadcast('loading:show');
			return config;
		}

		function requestError(rejection) {
			console.log(rejection);
			$rootScope.$broadcast('loading:hide');
			DialogFactory.showDialog(rejection, 1000, 'top')
			return $q.reject(rejection);
		}

	}
})();
