function chooseTopic() {
	$.ajax({
	    type: "POST",
	    url: "/api/topics/choose",
	    data: {topics},
	    success: function(){
		console.log("submitted");
	    },
	    error: function(){
		console.log("failed!!");
	    }
	});
}
