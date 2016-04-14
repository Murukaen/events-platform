// angular.module('events').controller('EventsController', ['$scope', '$routeParams', '$location', 'EventResource', 
//     function($scope, $routeParams, $location, event) {
//         $scope.create = function() {
//             // var event = new EventResource({
//             //     title: this.title,
//             //     location: this.location
//             // });
//             // event.title = this.title;
//             // event.location = this.location;
//             // event.$save(function (res) {
//             //     $location.path('events/' + res._id);
//             // }, function(errRes) {
//             //     $scope.error = errRes.data.message;
//             // });
//         };
//     }]);

angular.module('events').controller('CreateEvent', ['$scope', 'EventsResource', function($scope, EventsResource) {
    $scope.create = function() {
        var event = new EventsResource({
            title: this.title,
            location: this.location
        });
        event.$save(function() {
            console.log('Data saved');
        });
    }
}])