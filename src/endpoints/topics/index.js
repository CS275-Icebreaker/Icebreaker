"use strict";

var choose = require("./choose");
var getAll = require("./getAll");

/**
 * Registers app topics endpoint handlers
 * @param {Express App} app Express app to register handlers with
 */
function register(app, server) {
	choose.register(app, server);
	getAll.register(app, server);
}

module.exports = {
	register: register
};
