angular.module('events', ['ngResource', 'ui.router'])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);