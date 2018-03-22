window.choosenTopics = [];
window.showingTopic = -1;

var topicsContainerEl = document.getElementById("topics-container");
var selectedTopicsEl = document.getElementById("selected-topics-list");

$.get("/api/topics", function(topics) {
    window.topics = topics.topics;
    nextTopic();
});

function nextTopic(choosen) {
    if (choosen === true) {
        chooseTopic(window.topics[window.showingTopic]);
    }

    window.showingTopic += 1;

    // If last topic
    var lastTopic = false;
    if(window.showingTopic === window.topics.length - 1) {
        lastTopic = true;
    }

    if(window.showingTopic < window.topics.length) {
        var topic = window.topics[window.showingTopic];

        var str = '<div data-theme="a"  align="center">';
        str += '    <h2>' + topic.name + '</h2>';
        str += '    <h4>Would you like to talk about ' + topic.name + '?</h4>';
        str += '    <p>' + topic.description + '</p>';
        str += '    <img src="' + topic.picture_path + '">';
        str += '    <br>';

        if (lastTopic === false) {
            str += '    <div onclick="nextTopic(false)" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-inline">No</div>';
            str += '    <div onclick="nextTopic(true)" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-inline">Yes</div>';
        }

        if (window.choosenTopics.length < 10) {
            str += '<br>';
            str += '<i>Please select at least ' + (10 - window.choosenTopics.length) + ' more topics</i>';
        } else {
            str += '    <a href="#assigned_topics" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-inline">Done</a>';
        }

        str += '</div>';
    }

    topicsContainerEl.innerHTML = str;
}
 
function chooseTopic(topic) {
    if(choosenTopics.length < 10) {
        if (window.choosenTopics.indexOf(topic._id) === -1) {
            window.choosenTopics.push(topic._id);
            console.log("choose topic", topic);


            selectedTopicsEl.innerHTML += ' <li>' + '<tr><td>' + ' <img src="' + topic.picture_path + '">' + '    ';
            selectedTopicsEl.innerHTML += ' Topic name: ' + topic.name + '   ';
            selectedTopicsEl.innerHTML += '<br> ' +  'Description: ' + topic.description + '<tr><td>'  + '</br>';
            selectedTopicsEl.innerHTML += '<br>';


        }
    } else {
        alert("Only 10 topics allowed!");
    }
}

function sendTopics() {
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
