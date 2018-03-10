"use strict";

var users = require("./users");

/**
 * Adds all Model method endpoint handlers to the Express app
 * @param {ExpressJS App} app Express app to add handlers to
 */
function register(app) {
	users.register(app);
}

module.exports = {
	register: register
};
