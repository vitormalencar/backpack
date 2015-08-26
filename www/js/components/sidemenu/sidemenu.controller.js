(function () {
	'use strict';
	angular
		.module('AgendaTeen.sidemenu', [])
		.controller('SidemenuController', SidemenuController);

	SidemenuController.$inject = ['$state', 'SessionFactory'];

	function SidemenuController($state, SessionFactory) {
		var vm = this;
		var session = {};
		vm.openActivities = openActivities;
		vm.openHandouts = openHandouts;
		vm.openEvents = openEvents;
		vm.studentName = '';


		//////////////////////////l

		load();

		function load() {
			session = SessionFactory.getCurrentSession();
			vm.studentName = session.name;
			vm.classroomName = session.classroom_name;
		}

		function openActivities() {
			$state.go('app.activities');
		}

		function openHandouts() {
			$state.go('app.handouts');
		}

		function openEvents() {
			$state.go('app.events');
		}

	}
}());
