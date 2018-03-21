// Load pages
var pages = ["assigned-topics", "create-room", "enter-info", "index",  "room-info",
"select-topics", "start", "thank-you"];

for(var i = 0; i < pages.length; i++) {
	var url = "/" + pages[i] + ".html";
	console.log("loading " + url);

	$.mobile.loadPage(url);
}
