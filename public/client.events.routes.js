angular.module('events').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/client.home.view.html',
                controller: 'HomeController',
                resolve: {
                    EventsResource: 'EventsResource',
                    events: function(EventsResource) {
                        return EventsResource.query();
                    }
                }
            })
            .state('create-event', {
                url: '/events/create',
                templateUrl: 'views/client.create-event.view.html',
                controller: 'CreateEvent'
            });
        $urlRouterProvider.otherwise('/');
    }
]);