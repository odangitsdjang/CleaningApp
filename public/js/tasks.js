'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	var saveTask = document.getElementById("saveTask");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("blarg")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	var count = 0;

	saveTask.onclick = function() {

		var newDiv = document.createElement("div"); 
		//newDiv.id = "displayName"+count;
		newDiv.innerHTML = 
			'<div class="panel panel-default">' +
	  			'<div class="panel-heading clearfix">' + 
	    			'<h3 class="panel-title pull-left"><span id="displayName"'+count+'"></span></h3>'+
	      			'<a class="btn btn-primary pull-right" href="#">'+
	        		'<i class="fa fa-pencil"></i>'+
	        		'Edit'+
	      			'</a>'+
	    		'</div>'+
	    	'<div class="list-group">'+
	      		'<div class="list-group-item">'+
	        	'<p class="list-group-item-text">Reward</p>'+
	        	'<h4 class="list-group-item-heading"><span id="displayReward"'+count+'"></span></h4>'+
	      	'</div>'+
	      	'<div class="list-group-item">'+
	        '<p class="list-group-item-text"><span id="displayDescription"'+count+'"></p>'+
	      '</div>'+
	    '</div>'+
	  '<div class="panel-footer">'+
	    '<small></small>'+
	  '</div>'+
	'</div>';

		var currentDiv = document.getElementById("tasks"); 
  
  		currentDiv.appendChild(newDiv);


		document.getElementById('displayName'+count).innerHTML = 
	                    document.getElementById("taskName").value;

	    document.getElementById('displayReward'+count).innerHTML = 
	                    document.getElementById("taskReward").value;

	    document.getElementById('displayDescription'+count).innerHTML = 
	                    document.getElementById("taskDescription").value;

	    count++;

	    modal.style.display = "none";

	}
}