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



var slideIndex = 1;
var topics = [];

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function AddToArray(listitems){

    if(topics.length > 9){

        alert('Only 10 topics allowed!');

    }
    else {

        topics.push(listitems);

        console.log(topics);

    }

}
$.ajax({
    type: "POST",
    url: "/api/topics/choose",
    data: {topics},
    success: function(){
        console.log("submitted");
    },
    error: function(){
        console.log("failed!!");
    }
});