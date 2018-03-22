window.choosenTopics = [];
window.showingTopic = -1;

var topicsContainerEl = document.getElementById("topics-container");

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

        if (lastTopic === false) {
            str += '<div onclick="nextTopic(false)" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-inline">No</div>';
            str += '<div onclick="nextTopic(true)" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-inline">Yes</div>';
        }

        if (window.choosenTopics.length >= 10) {
            str += '<a onclick="sendTopics()" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-btn-inline">Done</a>';
        }
 
        str += '<br>';
        str += '<br>';
        str += '<img src="' + topic.picture_path + '">';

        str += '    <br>';
        if (window.choosenTopics.length < 10) {
            str += '<br>';
            str += '<i>Please select at least ' + (10 - window.choosenTopics.length) + ' more topics</i>';
            str += '<br>';
            str += '<br>';
        }


        str += '</div>';
    }

    topicsContainerEl.innerHTML = str;
}
 
function chooseTopic(topic) {
    if(window.choosenTopics.indexOf(topic._id) === -1) {
        window.choosenTopics.push(topic);
    }
}

function sendTopics() {
    var ids = [];
    for (var i = 0; i < window.choosenTopics.length; i++) {
        ids.push(window.choosenTopics[i]._id);
    }

	$.ajax({
	    type: "POST",
	    url: "/api/topics/choose",
        data: JSON.stringify({
            user_id: window.user._id,
            topics: ids
        }),
        contentType: "application/json",
	    success: function(){
            loadPage(SelectedTopicsPage);
	    },
	    error: function(err){
            showError("Failed to submit topics " + JSON.stringify(err));
	    }
	});
}
