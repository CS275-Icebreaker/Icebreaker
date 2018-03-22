"use strict";

var randtoken = require("rand-token");

var mongoose = require("mongoose");

var RoomSchema = mongoose.Schema({
	name: String,
	code: String,
	group_num: Number,
	stage: String,
	owner_id: mongoose.Schema.Types.ObjectId
});

var codeChars = "1234567890";
RoomSchema.statics.GenerateCode = function() {
	return randtoken.generate(4, codeChars);
};

var Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
