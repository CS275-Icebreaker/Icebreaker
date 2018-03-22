var commonErrEl = document.getElementById("common-error-box");

function showError(err) {
    commonErrEl.innerText = err.toString();
    commonErrEl.style.display = "block";
}
