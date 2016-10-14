//JavaScript Code for Exercise 5
var flag = false; //boolean to keep track if the user hit any maze walls.

window.onload = function() {
    var e = document.getElementById("end");
    e.addEventListener("mouseover", gameOver);
    var s = document.getElementById("start");
    s.addEventListener("click", startGame);
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
	var stat = document.getElementById("status");
    if(flag) {
        stat.innerHTML = "Oops! You lost.";
    } else {
        stat.innerHTML = "Congratulations! You win! :)";
    }
}

function startGame() {
	flag = false;	
    var allboun = document.querySelectorAll("div#maze div.boundary");
    for (var x = 0; x < allboun.length; x++){
        allboun[x].setAttribute("class", "boundary");
    }
}