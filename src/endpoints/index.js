"use strict";

var users = require("./users");
var groups = require("./groups");
var topics = require("./topics");

/**
 * Adds all Model method endpoint handlers to the Express app
 * @param {ExpressJS App} app Express app to add handlers to
 */
function register(app) {
	users.register(app);
	groups.register(app);
	topics.register(app);
}

module.exports = {
	register: register
};
