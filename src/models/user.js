"use strict";
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test');

var userschema = mongoose.Schema({
	_id: {
		type: Number
	},
	room_id: {
		type: Number
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
		type: [Number],
		notNull: true
	},
	auth_token_hash: {
		type: String
	},
});

var User = mongoose.model('User', userschema);

module.exports = User;
