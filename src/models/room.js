"use strict";
var mongoose = require("mongoose");

var RoomSchema = mongoose.Schema({
	name: String,
	code: String,
	group_num: Number,
	stage: String,
	owner_id: mongoose.Schema.Types.ObjectId
});

var Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
