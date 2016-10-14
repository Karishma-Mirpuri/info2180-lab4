//JavaScript Code for Exercise 3
var flag = false; //boolean to keep track if the user hit any maze walls.

window.onload = function() {
    var e = document.getElementById("end");
    e.addEventListener("mouseover", gameOver);
    var allboun = document.querySelectorAll("div#maze div.boundary");
	for (var x = 0; x < allboun.length; x++){
        allboun[x].addEventListener("mouseover", turnRed);
    }
};

function turnRed() {
	flag = true;
    var allboun = document.querySelectorAll("div#maze div.boundary");
    for (var x = 0; x < allboun.length; x++){
        allboun[x].setAttribute("class", "boundary youlose");
    }
}

function gameOver() {
    if(flag) {
        alert("Oops! You lost.");
    } else {
        alert("Congratulations! You win! :)");
    }
}