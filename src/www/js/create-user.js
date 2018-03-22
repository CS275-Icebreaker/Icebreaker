        function createUser()
        {
            var userName = document.getElementById("GetName").value;
            var userYear = document.getElementById("GetName").value;
            var userMajor = document.getElementById("GetName").value;
            var URL = "http://localhost:8000/api/users/join";
            $.ajax({
                type: "POST",
                url: URL,
                data: JSON.stringify({name: roomName}),
                contentType: "application/json",
                dataType: "html",
                success: function(msg) {
                    console.log(msg);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log("Error fetching " + URL);
                }
            });
        }