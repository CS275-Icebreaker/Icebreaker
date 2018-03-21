"use strict";


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


module.exports = Topic;
