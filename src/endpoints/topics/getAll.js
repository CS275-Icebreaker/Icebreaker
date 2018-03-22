"use strict";

var Topic = require("../../models/topic.js");
var helpers = require("../helpers");

var URL = "/api/topics/";

function handle(req, res) {
	var promise = Topic.find({ })
	.then((topics) => {
		return Promise.resolve({topics: topics});
	})
	.catch((err) => {
		throw `error finding room with id: ${err}`;
	});
	
	helpers.response.sendPromise(res, promise);
}


function register(app) {
	app.get(URL, handle);
}

module.exports = {
	register: register
};
