var selectedTopicsEl = document.getElementById("selected-topics-list");

for(var i = 0; i < window.choosenTopics.length; i++) {
    var topic = window.choosenTopics[i];

    selectedTopicsEl.innerHTML += '<li>' + topic.name + '</li>';
}

