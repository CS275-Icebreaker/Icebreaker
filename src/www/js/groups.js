var socket = io.connect();

socket.on("connect", function() {
	console.log("socket connected");

	// Join room
	socket.emit("join", window.room._id);
	socket.on("join-ack", function(ackRoomId) {
		console.log("joined room", ackRoomId);
	});
});

socket.on("grouped", function(data) {
	console.log("grouped: ", data);
});
