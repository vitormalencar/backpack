(function () {
	'use strict';

	angular.module('AgendaTeen.message', [])
		.controller('MessageController', MessageController);

	MessageController.$inject = ['ApiFactory', '$ionicScrollDelegate'];

	function MessageController(ApiFactory, $ionicScrollDelegate) {
		var vm = this;
		vm.messages = {};

		loadMessages();

		/////////////////

		function loadMessages() {
			ApiFactory.getMessages()
				.success(function (data) {
					vm.messages = data.content.messages;
					$ionicScrollDelegate.scrollBottom();
				})
				.error(function (error) {
					console.log(error);
				});
		}
	}
}());
