// Page routing
var HomePage = "#home";
var CreateRoomPage = "#create-room";
var RoomInfoPage = "#room-info";
var UserInfoPage = "#user-info";
var SelectTopicsPage = "#select-topics";
var SelectedTopicsPage = "#selected-topics-page";
var ThankYouPage = "#thank-you";
var NotFound = "#not-found";

var routes = [
    HomePage,
    CreateRoomPage, 
    RoomInfoPage, 
    UserInfoPage, 
    SelectTopicsPage, 
    SelectedTopicsPage, 
    ThankYouPage, 
    NotFound
];

var contentEl = $("#content");

/**
 * Loads specified location into #content div
 * @param {String} loc Name of page with hash in from (ex., #home)
 */
function loadPage(loc) {
    // Check route is found
    if (routes.indexOf(loc) === -1) {
        loc = NotFound;
    }

    var withoutHash = loc.substring(1);
    contentEl.load("/pages/" + withoutHash + ".html");
}

// Load pages when url fragment changes
$(window).on("navigate", function(event, data) {
    var loc = data.state.hash;

    loadPage(loc);
});

// Load page when DOM loads
var loc = HomePage;

if (window.location.hash) {
    var parts = window.location.hash.split("#")
    loc = "#" + parts[1];
}

loadPage(loc);

// Errors
var commonErrEl = document.getElementById("common-error-box");

function showError(err) {
    commonErrEl.innerText = err.toString();
    commonErrEl.style.display = "block";
}
