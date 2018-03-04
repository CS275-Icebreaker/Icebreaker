"use strict";
var mongoose = require("mongoose");

var roomschema = mongoose.Schema({
	room_id: {
		type: mongoose.Schema.Types.ObjectId
	},
	name: {
		type: String
	},
	code: {
		type: String
	},
	group_num: {
		type: Number
    },
    stage: {
        type: String
    },
	owner_id: {
        type: mongoose.Schema.Types.ObjectId
	}
});

var User = mongoose.model('Room', roomschema);

module.exports = Room;
