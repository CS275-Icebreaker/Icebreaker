"use strict";
var mongoose = require("mongoose");

var userschema = mongoose.Schema({
	room_id: {
		type: mongoose.Schema.Types.ObjectId
	},
	name: {
		type: String
	},
	year: {
		type: String
	},
	major: {
		type: String
	},
	topics: {
		type: [mongoose.Schema.Types.ObjectId],
		notNull: true
	},
	auth_token_hash: {
		type: String
	},
});

var User = mongoose.model('User', userschema);

module.exports = User;
