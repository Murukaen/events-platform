var Event = require('mongoose').model('Event');

exports.create = function(req, res, next) {
	var event = new Event(req.body);
	event.save(function(err) {
		if (err) {
			next(err);
		}
		else {
			res.json(event);
		}
    });
};

exports.showAll = function(req, res, next) {
    Event.find({}, function(err, events) {
        if (err) {
            next(err);
        }
        else {
            res.json(events);
        }
    });
};

exports.show = function(req, res, next) {
    res.json(req.event);
};

exports.eventById = function(req, res, next, id) {
    Event.findOne({
        _id: id
    }, function(err, event) {
        if(err) {
            next(err);
        }
        else {
            req.event = event;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    Event.findByIdAndUpdate(req.event.id, req.body, {new: true}, function(err, event) {
        if (err) {
            next(err);
        }
        else {
            res.json(event);
        }
    });
};

exports.delete = function(req, res, next) {
    req.event.remove(function (err) {
        if (err) {
            next(err);
        }
        else {
            res.json(req.event);
        }
    });
};