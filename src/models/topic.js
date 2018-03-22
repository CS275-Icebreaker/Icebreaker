"use strict";
var mongoose = require("mongoose");

var TopicSchema = mongoose.Schema({
	name: String,
	description: String,
	picture_path: String
});

var Topic = mongoose.model('Topic', TopicSchema);

module.exports = Topic;
