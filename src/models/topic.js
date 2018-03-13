"use strict";
var mongoose = require("mongoose");

var TopicSchema = mongoose.Schema({
	name: String
});

var Topic = mongoose.model('Topic', TopicSchema);

module.exports = Topic;
