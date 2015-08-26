/**
 * @ngdoc service
 * @name AgendaTeen.ApiFactory
 * @description
 * # ApiService
 * Retrieves correct api to make requests against.
 */
(function () {
	'use strict';
	angular
		.module('AgendaTeen.ApiFactory', [])
		.factory('ApiFactory', ApiFactory);

	ApiFactory.$inject = ['$http', '$ionicPlatform', 'SessionFactory', 'API_ENDPOINT'];

	function ApiFactory($http, $ionicPlatform, SessionFactory, API_ENDPOINT) {

		var helper = {
			device_id: "unknown",
		};

		var service = {
			getEvents: getEvents,
			getHandouts: getHandouts,
			getMessages: getMessages,
			getActivities: getActivities,
			getNotifications: getNotifications,
			confirmActivity: confirmActivity,
			login: login
		};

		return service;

		// catch device id on load
		retrieveDeviceId();

		////////////////

		function retrieveDeviceId() {
			if (window.cordova)
				helper.device_id = $cordovaDevice.getUUID();
		};

		function getMessages() {
			return $http.get(API_ENDPOINT.host + 'messages');
		};

		function getEvents() {
			return $http.get(API_ENDPOINT.host + 'events');
		};

		function getHandouts() {
			return $http.get(API_ENDPOINT.host + 'handouts');
		};

		function getActivities() {
			return $http.get(API_ENDPOINT.host + 'activities')
		};

		function getNotifications() {
			return $http.get(API_ENDPOINT.host + 'notifications');
		};

		function confirmActivity(id) {
			return $http.post('http://api.agendakidsdigital.dev/api/teen/v1/summaryday_classrooms/confirm', {});
		};

		function login(email, senha) {
			return $http.post('http://api.agendakidsdigital.dev/api/teen/v1/sign_in', {
				"email": email,
				"password": senha,
				"device_id": "123321"
			});
		};
	}
}());
