/**
 * @ngdoc module
 * @name AgendaTeen
 * @description
 * # Aplication Routers
 *
 * all the Routers of Aplication
 */
// TODO corrigir o nome do controller de atividades
(function () {
	'use strict';
	angular.module('AgendaTeen')
		.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
			var defaultRoute = '/app/dashboard';
			$stateProvider
				.state('login', {
					url: '/login',
					templateUrl:'components//login.view.html',
					controller: 'LoginController as vm'
				})
				.state('app', {
					url: '/app',
					templateUrl: 'components/sidemenu//sidemenu.view.html',
					controller: 'SidemenuController as vm'
				})
				.state('app.dashboard', {
					url: '/dashboard',
					views: {
						'menuContent': {
							templateUrl: 'components/dashboard/dashboard.view.html',
							controller: 'DashboardController as vm'
						}
					}
				})
				.state('app.notificatons', {
					url: '/notificatons',
					views: {
						'menuContent': {
							templateUrl: 'components/notifications/notifications.view.html',
							controller: 'NotificationsController as vm'
						}
					}
				})
				.state('app.message', {
					url: '/message',
					views: {
						'menuContent': {
							templateUrl: 'components/chat/chat.view.html',
							controller: 'MessageController as vm'
						}
					}
				})
				.state('app.handouts', {
					url: '/handouts',
					views: {
						'menuContent': {
							templateUrl: 'components/handouts/handouts.view.html',
							controller: 'HandoutsController as vm'
						}
					}
				})
				.state('app.handouts_show', {
					url: '/handouts/show',
					params: {
						handout: null
					},
					views: {
						'menuContent': {
							templateUrl: 'components/handouts/handouts_show.view.html',
							controller: 'HandoutShowController as vm'
						}
					}
				})
				.state('app.activities', {
					url: '/activities',
					cache: false,
					views: {
						'menuContent': {
							templateUrl: 'components/activities/activities.view.html',
							controller: 'ActivityController as vm'
						}
					}
				})
				.state('app.activities_show', {
					url: '/activities/show',
					params: {
						report: null
					},
					views: {
						'menuContent': {
							templateUrl: 'components/activities/activities_show.view.html',
							controller: 'ActivityShowController as vm'
						}
					}
				})
				.state('app.events', {
					url: '/events',
					views: {
						'menuContent': {
							templateUrl: 'components/events/events.view.html',
							controller: 'EventsController as vm'
						}
					}
				})
				.state('app.events_show', {
					url: '/events/show',
					params: {
						event: null
					},
					views: {
						'menuContent': {
							templateUrl: 'components/events/events_show.view.html',
							controller: 'EventsShowController as vm'
						}
					}
				});
			// if none of the above states are matched, use this as the fallback
			$urlRouterProvider.otherwise(defaultRoute);
		}]);
}());
