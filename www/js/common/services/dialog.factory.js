(function () {
	'use strict';
	angular
		.module('AgendaTeen')
		.factory('DialogFactory', DialogFactory);

	DialogFactory.$inject = ['$cordovaToast'];

	function DialogFactory($cordovaToast) {
		var service = {
			showDialog: showDialog
		};

		return service;

		function showDialog(message, duration, position) {
			message = message || "Ops ocorreu um erro porfavor tente mais tarde...";
			duration = duration || 10000;
			position = position || 'bottom';
			if (window.cordova) {
				$cordovaToast.show(message, duration, position);
			}
		}
	}
})();
