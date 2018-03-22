// Page routing
var HomePage = "#home";
var CreateRoomPage = "#create-room";
var RoomInfoPage = "#room-info";
var UserInfoPage = "#user-info";
var SelectTopicsPage = "#select-topics";
var SelectedTopicsPage = "#selected-topics";
var GroupsPage = "#groups";
var ThankYouPage = "#thank-you";
var NotFound = "#not-found";

var routes = [
    HomePage,
    CreateRoomPage, 
    RoomInfoPage, 
    UserInfoPage, 
    SelectTopicsPage, 
    SelectedTopicsPage, 
    GroupsPage,
    ThankYouPage, 
    NotFound
];

var contentEl = $("#content");

/**
 * Loads specified location into #content div
 * @param {String} loc Name of page with hash in from (ex., #home)
 */
function loadPage(loc) {
    var originalLoc = loc;

    // Check route is found
    if (routes.indexOf(loc) === -1) {
        loc = NotFound;
    }

    // Check not already loaded
    if(contentEl.attr("data-loaded") === loc) {
        return;
    }

    contentEl.attr("data-loaded", loc);


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

console.log("dom load", loc);
loadPage(loc);

// Errors
var commonErrEl = document.getElementById("common-error-box");
var errTimeout = undefined;

function showError(err) {
    console.error(err);

    commonErrEl.innerText = err.toString();
    commonErrEl.style.display = "block";

    errTimeout = setTimeout(function() {
        clearError();
    }, 7000);
}

function clearError() {
    commonErrEl.innerText = "";
    commonErrEl.style.display = "none";
 }

commonErrEl.onclick = function() {
    if (errTimeout !== undefined) {
        clearInterval(errTimeout);
    }

    clearError();
}

// Socket IO
var socket = io.connect();

socket.on("connect", function() {
	console.log("socket connected");
});

socket.on("grouped", function(data) {
    console.log("grouped", data);
});
// On groups
socket.on("grouped", function(data) {
	console.log("grouped: ", data);
});
// On groups
socket.on("grouped", function(data) {
	console.log("grouped: ", data);
});
// On groups
socket.on("grouped", function(data) {
    window.groups = data;
});
