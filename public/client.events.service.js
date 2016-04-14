angular.module('events').factory('EventsResource', ['$resource', function($resource) {
    return $resource('/app/events/:eventId');
}]);