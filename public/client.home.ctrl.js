angular.module('events').controller('HomeController', ['$scope', 'events',
    function($scope, events) {
        $scope.events = events;
    }
])