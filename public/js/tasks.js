// 'use strict'; 

// global
var data = {
		"taskCount": 0,
		"tasks": [
			{
				"taskName":"Do the dishes",
				"taskReward": 1.32,
				"taskDescription":"Need to do this ASAP"
			}
			
		]
	}

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

	

	saveTask.onclick = function createDiv() {

		
		var newDiv = document.createElement("div"); 
		//newDiv.id = "displayName"+count;
		newDiv.innerHTML = 
			'<div class="panel panel-default">' +
	  			'<div class="panel-heading clearfix">' + 
	    			'<h3 class="panel-title pull-left"><span id="displayName'+data.taskCount+'"></span></h3>'+
	      			'<a class="btn btn-primary pull-right" href="#">'+
	        		'<i class="fa fa-pencil"></i>'+
	        		'Edit'+
	      			'</a>'+
	    		'</div>'+
	    		'<div class="list-group">'+
	      			'<div class="list-group-item">'+
	        			'<p class="list-group-item-text">Reward</p>'+
	        			'<h4 class="list-group-item-heading"><span id="displayReward'+data.taskCount+'"></span></h4>'+
	      			'</div>'+
	      			'<div class="list-group-item">'+
	        			'<p class="list-group-item-text"><span id="displayDescription'+data.taskCount+'"></p>'+
	      			'</div>'+
	    		'</div>'+
	  			'<div class="panel-footer">'+
	    			'<small></small>'+
	  			'</div>'+
			'</div>';

		var currentDiv = document.getElementById("tasks"); 
  
  		currentDiv.appendChild(newDiv);


		var a = document.getElementById('displayName'+data.taskCount).innerHTML = 
	                    document.getElementById("taskName").value;

	    var b =document.getElementById('displayReward'+data.taskCount).innerHTML = 
	                    document.getElementById("taskReward").value;

	    var c = document.getElementById('displayDescription'+data.taskCount).innerHTML = 
	                    document.getElementById("taskDescription").value;
	    

	    // I've tried a lot of json writing under here but it did not work , even simple ones


	    data.tasks.push({
	    	"taskName":a,
	    	"taskReward":b,
	    	"taskDescription":c
	    }); 
	    data.taskCount++;
	    // writeData();
	    

	    modal.style.display = "none";
	    return data;
	}; 

		

}



