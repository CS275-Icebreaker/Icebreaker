var groupListEl = $("#groups-list");

var str = "";
for(var i = 0; i < window.groups.length; i++) {
    var group = window.groups[i];
    console.log(group);

    // Check user is in group
    var inGroup = false;
    for(var j = 0; j < group.members.length; j++) {
        if(group.members[j] == window.user._id) {
            inGroup = true;
            break;
        }
    }

    if (!inGroup) {
        continue;
    }

    // Get topic
    var topic = undefined;
    for(var j = 0; j < window.topics.length; j++) {
        var t = window.topics[j];
        if(t._id === group.topic_id) {
            topic = t;
            break;
        }
    }

    if(topic === undefined) {
        showError("Could not find topic \"" + group.topic_id + "\"");
        continue;
    }

    str += '<li><b>' + topic.name + ':</b> <i>' + topic.description + '</i></li>';
}

groupListEl.html(str);
