"use strict";
var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
	room_id:  mongoose.Schema.Types.ObjectId,
	name: String,
	year: String,
	major: String,
	topics: [mongoose.Schema.Types.ObjectId],
	auth_token_hash: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
