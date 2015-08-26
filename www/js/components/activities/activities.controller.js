(function () {
	'use strict';
	angular
		.module('AgendaTeen.activity', [])
		.controller('ActivityController', ActivityController);

	ActivityController.$inject = ['ApiFactory'];

	function ActivityController(ApiFactory) {
		var vm = this;
		vm.activities = {};

		loadActivities();

		/////////////////

		function loadActivities() {
			ApiFactory.getActivities()
				.success(function (data) {
					vm.activities = data.content;
				})
				.error(function (error) {
					console.log(error);
				});
		}
	}
})();
