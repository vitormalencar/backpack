(function () {
	'use strict';
	angular
		.module('AgendaTeen.event', [])
		.controller('EventsController', EventsController);

	EventsController.$inject = ['ApiFactory','SessionFactory'];

	function EventsController(ApiFactory,SessionFactory) {
		var vm = this;
		vm.events = {};

		loadEvents();

		function loadEvents() {
			ApiFactory.getEvents()
				.success(function (data) {
					SessionFactory.setCurrentStudent(data.name);
					vm.events = data.content.events;
				})
				.error(function (error) {
					console.log(error);
				});
		}
	}
}());
