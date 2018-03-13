"use strict";
var mongoose = require("mongoose");

var GroupSchema = mongoose.Schema({
	room_id: mongoose.Schema.Types.ObjectId,
	topic_id: type: mongoose.Schema.Types.ObjectId,
	stage: Number,
	action: type: String,
	timeline: [{
		start: { type: Date },
		end:   { type: Date }
	}],
	members: type: [mongoose.Schema.Types.ObjectId]
});

var Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
