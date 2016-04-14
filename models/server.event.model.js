var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
	title: {
        type: String,
        required: true
    },
	location: {
        type: String,
        required: true
    }
});

mongoose.model('Event', EventSchema);