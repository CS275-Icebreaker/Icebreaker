"use strict";

var users = require("./users");
var groups = require("./groups");
var topics = require("./topics");
var rooms = require("./rooms");

/**
 * Adds all Model method endpoint handlers to the Express app
 * @param {ExpressJS App} app Express app to add handlers to
 */
function register(app, server) {
	users.register(app, server);
	groups.register(app, server);
	topics.register(app, server);
	rooms.register(app, server); 
}

module.exports = {
	register: register
};
