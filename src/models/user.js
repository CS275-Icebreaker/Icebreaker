"use strict";
var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
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

/**
 * Returns the public information of a user. Internal fields, such as 
 * `auth_token_hash` are not sent to the client.
 * @returns {Object} Public version of User model
 */
UserSchema.methods.public = function() {
	// Copy user
	var usr = JSON.parse(JSON.stringify(this));

	// Delete internal fields
	delete usr.auth_token_hash;

	return usr;
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
