function joinRoom() {
    var pin = document.getElementById("cname").value;

    var URL = "/api/room/code/" + pin;
    //var roomID;

    $.ajax({
        type: "GET",
        url: URL,
        success: function(resp) {
            window.room = resp.room;
        },
        error: function (xhr, ajaxOptions, thrownError) {
            showError("Error getting room by code: " + thrownError.toString());
        }
    });
}
