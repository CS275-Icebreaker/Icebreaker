function createRoom() {
    var roomName = document.getElementById("room-name").value;

    var URL = "/api/rooms";

    $.ajax({
        type: "POST",
        url: URL,
        data: JSON.stringify({name: roomName}),
        contentType: "application/json",
        dataType: "html",
        success: function(txt) {
            window.room = JSON.parse(txt);

            showRoom();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            showError("Error creating room" + thrownError.toString());
        }
    });
}

$("#JoinForm2").validate({
    rules: {
        room_key: {
            required: true
        }
    }
});

$("#JoinForm3").validate({
    rules: {
        SelectElmt: {
            required: true
        }
    }
});

