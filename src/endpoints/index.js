"use strict";

var users = require("./users");
var topics = require("./topics");
var rooms = requore("./rooms");

/**
 * Adds all Model method endpoint handlers to the Express app
 * @param {ExpressJS App} app Express app to add handlers to
 */
function register(app) {
	users.register(app);
	topics.register(app);
	rooms.register(app); 
}

module.exports = {
	register: register
};
