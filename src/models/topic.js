"use strict";
var mongoose = require("mongoose");

<<<<<<< HEAD

class Topic {
    static findAll(q) {
        return Promise.resolve([]);
    }

    destroy() {}

}

function AddToArray(topiclist) {

    TopicArray.push(topiclist);
    console.log(TopicArray);
}
=======
var TopicSchema = mongoose.Schema({
	name: String
});

var Topic = mongoose.model('Topic', TopicSchema);
>>>>>>> c9ce971e02771e6f1a15fd1744f81d2c884bfc29


module.exports = Topic;
