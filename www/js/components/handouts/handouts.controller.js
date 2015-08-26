(function () {
	'use strict';
	angular
		.module('AgendaTeen.handout', [])
		.controller('HandoutsController', HandoutsController);

	HandoutsController.$inject = ['ApiFactory'];

	function HandoutsController(ApiFactory) {
		var vm = this;
		vm.handouts = {};

		loadHandouts();

		function loadHandouts() {
			ApiFactory.getHandouts()
				.success(function (data) {
					vm.handouts = data.content;
				})
				.error(function (error) {
					console.log(error);
				});

		}
	}
})();
