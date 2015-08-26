(function () {
	'use strict';
	angular
		.module('AgendaTeen.handouts_show', [])
		.controller('HandoutShowController', HandoutShowController);

	HandoutShowController.$inject = ['$stateParams'];

	function HandoutShowController($stateParams) {
		var vm = this;
		vm.handout = {};
		vm.confirmReport = confirmReport;

		/////////////////

		loadHandouts();

		function confirmReport() {
			vm.handout.confirm = true;
		}

		function loadHandouts() {
			vm.handout = $stateParams.handout;
		}

	}
})();
