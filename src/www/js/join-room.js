function joinRoom() {
    var pin = document.getElementById("cname").value;

    var URL = "/api/room/code/" + pin;
    //var roomID;

    $.ajax({
        type: "GET",
        url: URL,
        data: JSON.stringify({code: pin}),
        contentType: "application/json",
        dataType: "application/json",
        success: function(txt) {
            window.room = JSON.parse(txt).room;

        },
        error: function (xhr, ajaxOptions, thrownError) {
            showError("error getting room by code" + thrownError.toSting());
        }
    });
}
