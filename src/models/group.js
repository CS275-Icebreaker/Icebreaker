"use strict";
var mongoose = require("mongoose");

var groupschema = new mongoose.Schema({
	room_id: {
		type: mongoose.Schema.Types.ObjectId
	},
	topic_id: {
		type: mongoose.Schema.Types.ObjectId
	},
	stage: {
		type: Number
	},
	action: {
		type: String
	},
	timeline: {
		type: [{
			start: { type: Date },
			end:   { type: Date }
		}]
	},
	members: {
		type: [mongoose.Schema.Types.ObjectId]
	}
});

var Group = mongoose.model('Group', groupschema);

module.exports = Group;
