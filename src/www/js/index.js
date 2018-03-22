//input validation stuff

$(document).ready(function() {
            $("#JoinForm").validate();
            $("#JoinForm2").validate();
            $("#JoinForm3").validate({
                rules: {
                    SelectElmt: {
                        required: true
                    }
                }
            });
        });


