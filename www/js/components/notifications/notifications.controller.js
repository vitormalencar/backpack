(function () {
	'use strict';
	angular
		.module('AgendaTeen.notificatons', [])
		.controller('NotificationsController', NotificationsController);

	NotificationsController.$inject = ['ApiFactory'];

	function NotificationsController(ApiFactory) {
		var vm = this;
		vm.notifications = {};
		loadNotifications();

		function loadNotifications() {
			ApiFactory.getNotifications()
				.success(function (data) {
					vm.notifications = data.content;
				})
				.error(function (error) {
					console.log(error);
				});
		}
	}
}());
