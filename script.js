
function mouseOver(clicked_id) {
    var galt = document.getElementById(clicked_id).getAttribute("alt")
    document.getElementById("wclick").innerHTML = galt;
}

function mouseLeave() {
    document.getElementById("wclick").innerHTML = " ";
}

