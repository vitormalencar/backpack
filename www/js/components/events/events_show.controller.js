(function () {
	'use strict';
	angular.module('AgendaTeen.eventShow', [])
	.controller('EventsShowController', EventsShowController);

	EventsShowController.$inject = ['$stateParams'];

	function EventsShowController($stateParams) {
		var vm = this;
		vm.confirmEvent = confirmEvent;
		loadEvents();

		function loadEvents() {
			vm.events = $stateParams.event;
		}

		function confirmEvent() {
			//  TODO implement event confirm with API
				vm.events.confirm = true;
		}
	}
}());
