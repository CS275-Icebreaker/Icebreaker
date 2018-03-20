"use strict";

var createForRoom = require("./byRoom.js");

/**
 * Adds all Model method endpoint handlers to the Express app
 * @param {ExpressJS App} app Express app to add handlers to
 */
function register(app) {
	createForRoom.register(app);
}

module.exports = {
	register: register
};
