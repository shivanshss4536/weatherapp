var container = document.getElementsByClassName("search")[0];
container.onclick = function() {
    var searchLogoElements = document.getElementsByClassName("search");
    if (searchLogoElements.length > 0) {
        searchLogoElements[0].style.display = "none";
    }
}
var container = document.getElementsByClassName("main")[0];
container.onclick = function() {
    var searchLogoElements = document.getElementsByClassName("search");
    if (searchLogoElements.length > 0) {
        searchLogoElements[0].style.display = "inline";
    }
}
