"use strict"; 

var helpers = require("../helpers");
var Room = require("../../models/room");
var User = require("../../models/user");


var URL = "/api/room/code/:code"; 


function handle(req, res) {
	var promise = Room.find({"code": req.params.code})
	.then((room) => {
		// If it doesn't exist
		if (room == null) {
			throw {msg: `room with id $(roomId) does not exist`, status: 404};
		}
		else {
			return Promise.resolve({room: room}); 
		}
	})
	.catch((err) => {
		throw `error checking for room with provided id `; 
	});
	helpers.response.sendPromise(res, promise);	
}



function register(app){
	app.get(URL, handle); 
}

module.exports = {
    register: register
}; 
