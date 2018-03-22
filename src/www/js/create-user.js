function createUser() {
    var userName = document.getElementById("GetName").value;
    var userYear = document.getElementById("GetYear").value;
    var userMajor = document.getElementById("GetMajor").value;

    var URL = "/api/users/join";

    $.ajax({
        type: "POST",
        url: URL,
        data: JSON.stringify({
            room_id: window.room._id, 
            name: userName, 
            year: userYear, 
            major: userMajor
        }),
        contentType: "application/json",
        success: function(msg) {
            window.user = msg.user;
            loadPage(SelectTopicsPage);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.error(thrownError);
            showError("Error creating user: " + thrownError.toString());
        }
    });
}
