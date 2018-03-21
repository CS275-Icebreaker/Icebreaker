// TODO: Use room ID for room code entered by user
var roomId = "5ab2d39ac3ae3330c6320c99";

var socket = io.connect();

socket.on("connect", function() {
	console.log("socket connected");

	// Join room
	socket.emit("join", roomId);
	socket.on("join-ack", function(ackRoomId) {
		console.log("joined room", ackRoomId);
	});
});

socket.on("grouped", function(data) {
	// TODO: Call get groups endpoint
	console.log("grouped: ", data);
});
