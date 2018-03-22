$(document).ready(function() {
    $("#JoinForm").validate({
        rules: {
            SelectElmt: {
                required: true
            }
        }
    });
});

$("#JoinForm").validate();

function joinRoom() {
    var pin = document.getElementById("cname").value;

    var URL = "/api/room/code/" + pin;

    $.ajax({
        type: "GET",
        url: URL,
        success: function(resp) {
            window.room = resp.room;

            loadPage(UserInfoPage);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            showError("Error getting room by code: " + thrownError.toString());
        }
    });
}
