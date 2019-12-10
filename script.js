function swapStyleSheet(sheet) {
    document.getElementById("switch").setAttribute("button", sheet);  
}

function initate() {
    var style1 = document.getElementById("ling");
    var style2 = document.getElementById("normal");

    style1.onclick = function () { swapStyleSheet("style.css") };
style2.onclick = function () { swapStyleSheet("style2.css"); };

window.onload = initate;
