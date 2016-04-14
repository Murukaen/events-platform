exports.apply = function() {
    require('mongoose').connect('mongodb://localhost/EventsPlatform');
    require('models/server.event.model');
}