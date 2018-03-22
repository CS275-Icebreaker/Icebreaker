function createUser()
{
    var room = "5ab2f51e2a620a16c439b96a";
    var userName = document.getElementById("GetName").value;
    var userYear = document.getElementById("GetYear").value;
    var userMajor = document.getElementById("GetMajor").value;

    var URL = "http://localhost:8000/api/users/join";

    $.ajax({
        type: "POST",
        url: URL,
        data: JSON.stringify({room_id: room, name: userName, year: userYear, major: userMajor}),
        contentType: "application/json",
        dataType: "html",
        success: function(msg) {
            console.log(msg);
            window.user = msg;
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("Error fetching " + URL);
        }
    });
}