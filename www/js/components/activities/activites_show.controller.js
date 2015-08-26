(function () {
	'use strict';
	angular
		.module('AgendaTeen.activity_show', [])
		.controller('ActivityShowController', ActivityShowController);

	ActivityShowController.$inject = ['$stateParams', 'ApiFactory'];

	function ActivityShowController($stateParams, ApiFactory) {
		var vm = this;
		vm.activity = {};
		vm.confirmReport = confirmReport;

		///////////////

		loadActivity();

		function loadActivity() {
			vm.activity = $stateParams.report;
		}

		function confirmReport(id) {
			vm.activity.confirm = true;
			ApiFactory.confirmActivity(id)
		}

	}
})();
