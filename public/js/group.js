var userCount = (localStorage.getItem('userCount')===null)?0:(localStorage.getItem('userCount'));
var memberCount = 0;

$(document).ready(function() {
	// window.localStorage.clear();
	initializePage();
})

function initializePage() {

	var newDivHead = document.createElement("div");
	// for debugging
	//newDivHead.innerHTML = '<h2>Total # members in the world: '+userCount+'</h2>'+'<div class="jumbotron">';
	newDivHead.innerHTML = '<h2>Total Group members: '+memberCount+'</h2>'+'<div class="jumbotron">';
	document.getElementById("myGroup").appendChild(newDivHead);


	buttonStuff();




}


function addMember2() {


}

function removeMember() {




}

function buttonStuff() {


	var modal = document.getElementById('myModal');


	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	var addMember = document.getElementById("addMember");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("cancelBtn")[0];
	var editSpan = document.getElementsByClassName("editCancel")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	editSpan.onclick = function() {
		editModal.style.display = "none";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	    else if (event.target == editModal) {
	    	editModal.style.display = "none";
	    }
	}


	addMember.onclick = function createDiv() {

		}


}