//input validation stuff
$(document).ready(function() {
    $("#JoinForm").validate({
        rules: {
            SelectElmt: {
                required: true
            }
        }
    });
});

$(document).ready(function() {
            $("#JoinForm").validate();
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
        });


