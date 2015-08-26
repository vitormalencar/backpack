(function () {
	'use strict';
	angular
		.module('AgendaTeen.login', [])
		.controller('LoginController', LoginController);

	LoginController.$inject = ['ApiFactory', 'SessionFactory', '$state', 'DialogFactory'];

	function LoginController(ApiFactory, SessionFactory, $state, DialogFactory) {
		var vm = this;
		vm.email = '';
		vm.password = '';
		vm.login = login;

		/////////////////

		function login() {
			ApiFactory.login(vm.email, vm.password)
				.success(function (data) {
					SessionFactory.setCurrentSession(data.content)
					$state.go('app.dashboard');
				})
		}

	}
})();
