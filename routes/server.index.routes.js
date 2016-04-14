var events = require('controllers/server.event.ctrl');
var home = require('controllers/server.home.ctrl');

module.exports = function(app) {
	app.route('/')
		.get(home.render);
	app.route('/app/events')
		.get(events.showAll)
		.post(events.create);
	app.param('eventId', events.eventById);
	app.route('/app/events/:eventId')
		.get(events.show)
		.put(events.update)
		.delete(events.delete);
	app.route("*")
		.get(home.render);
};