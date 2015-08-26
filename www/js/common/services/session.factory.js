(function () {
	'use strict';
	angular
		.module('AgendaTeen')
		.factory('SessionFactory', SessionFactory);

	SessionFactory.$inject = [];

	function SessionFactory() {
		var student = null;
		var session = {};

		var service = {
			getCurrentSession: getCurrentSession,
			getCurrentStudent: getCurrentStudent,
			getCurrentSchool: getCurrentSchool,
			setCurrentSession: setCurrentSession,
			setCurrentStudent: setCurrentStudent,
			setCurrentSchool: setCurrentSchool
		};

		return service;

		////////////////

		function getCurrentSession() {
			return session
		}

		function setCurrentSession(currentSession) {
			session = currentSession;
		}

		function deleteCurrentSession() {}

		function getCurrentStudent() {
			return student;
		}

		function setCurrentStudent(user) {
			student = user;
		}

		function getCurrentSchool() {}

		function setCurrentSchool() {}
	}
})();
