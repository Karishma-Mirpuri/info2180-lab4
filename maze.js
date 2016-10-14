//JavaScript Code for Exercise 2
window.onload = function(){
	var allboun = document.querySelectorAll("div#maze div.boundary");
	for (var x = 0; x < allboun.length; x++){
		allboun[x].addEventListener("mouseover", turnRed);
	}
}
function turnRed() {
    var allboun = document.querySelectorAll("div#maze div.boundary");
    for (var x = 0; x < allboun.length; x++){
        allboun[x].setAttribute("class", "boundary youlose");
    }
}
