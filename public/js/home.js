'use strict';




var count = (localStorage.getItem('currTaskCount')===null)?0:(localStorage.getItem('currTaskCount'));
var currUser = (localStorage.getItem("currentUser"));
var hasTasks = false;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	var newDivHead1 = document.createElement("div");
	var newDivHead2 = document.createElement("div");
	//display users tasks
		//user can choose options to not take the task or complete it
	newDivHead1.innerHTML = 
		'<div class="jumbotron">'+ 
			'<div class="panel-heading clearfix">'+
                '<h3 class="panel-title pull-left">'+
                    '<span id="">'+
                        '<h2>'+currUser+'\'s Tasks</h2>'+
                    '</span>'+
                '</h3>'+
            '</div>'

	document.getElementById("myTasks").appendChild(newDivHead1);

	if(count != 0){
	for(var i = 0; i < count; i++){
		if(localStorage.getItem("selectedUser"+i) == currUser){
			hasTasks = true;
			var newDiv = document.createElement("div"); 
			//newDiv.id = "displayName"+count;
			newDiv.innerHTML =          
	            '<div class="tasklist" id="taskshome'+i+'">'+
	                '<div class="panel panel-default">'+
	                    '<div class="panel-heading clearfix">'+
	                        '<h3 class="panel-title pull-left"><span id="displayName'+i+'"><h2></h2></span></h3>'+                
	                        '<a class="btn btn-primary pull-right" onclick="completeTask(this)" id="comp'+i+'">'+
	                            '<i class="fa fa-pencil"></i>'+
	                            'Complete'+
	                        '</a>'+
	                        // '<a class="btn btn-primary pull-right" id="removeTask()">'+
	                        //     '<i class="fa fa-pencil"></i>'+
	                        //     'Remove'+ 
	                        // '</a>'+
	                    '</div>'+
	                    '<div class="list-group">'+
	                        '<div class="list-group-item">'+
	                            '<p class="list-group-item-text"> </p>'+
	                            '<h3>Reward:</h3> <h4><a href="/tasks/" id="displayReward'+i+'"></a></h4>'+
	                            '<h4 class="list-group-item-heading"><span id=""></span></h4>'+
	                        '</div>'+
	                        '<div class="list-group-item">'+
	                            '<h3>Description:</h3> <h4></h4>'+
	                            '<p class="list-group-item-text"><span id="displayDescription'+i+'"></span></p>'+
	                        '</div>'+
	                    '</div>'+
	                    '<div class="panel-footer">'+
	                        '<small></small>'+
	                    '</div>'+
	                '</div>'+
	            '</div>'+
	        '</div>'

	        var currentDiv = document.getElementById("myTasks"); 
	  
	  		currentDiv.appendChild(newDiv);

	  		document.getElementById('displayName'+i).innerHTML = localStorage.getItem("taskName"+i);
		                    
		    document.getElementById('displayReward'+i).innerHTML = 
		                    localStorage.getItem("taskReward"+i);

		    document.getElementById('displayDescription'+i).innerHTML = 
		                    localStorage.getItem("taskDescription"+i);

			}
		}
		if(!hasTasks){
			var newDiv = document.createElement("div"); 
			newDiv.innerHTML = '<p>Go to Tasks page to assign yourself tasks!</p>';
			var currentDiv = document.getElementById("myTasks"); 	  
	  		currentDiv.appendChild(newDiv);
		}
	}

	//display the rest of the tasks
		//displays as normal
	newDivHead2.innerHTML = '<div class="jumbotron"><hr><hr></div><h2>Current <a href="/tasks">tasks:</a>'+count+'</h2>'+'<div class="jumbotron">';

	document.getElementById("userTasks").appendChild(newDivHead2);

	if(count != 0){
	for(var i = 0; i < count; i++){
		var newDiv = document.createElement("div"); 
		//newDiv.id = "displayName"+count;
		newDiv.innerHTML =          
            '<div class="tasklist" id="taskshome'+i+'">'+
                '<div class="panel panel-default">'+
                    '<div class="panel-heading clearfix">'+
                        '<h3 class="panel-title pull-left"><span id="displayName'+i+'"><h2></h2></span></h3>'+                
                        '<a class="btn btn-primary pull-right" onclick="completeTask(this)" id="comp'+i+'">'+
                            '<i class="fa fa-pencil"></i>'+
                            'Complete'+
                        '</a>'+
                        // '<a class="btn btn-primary pull-right" id="removeTask()">'+
                        //     '<i class="fa fa-pencil"></i>'+
                        //     'Remove'+ 
                        // '</a>'+
                    '</div>'+
                    '<div class="list-group">'+
                        '<div class="list-group-item">'+
                            '<p class="list-group-item-text"> </p>'+
                            '<h3>Reward:</h3> <h4><a href="/tasks/" id="displayReward'+i+'"></a></h4>'+
                            '<h4 class="list-group-item-heading"><span id=""></span></h4>'+
                        '</div>'+
                        '<div class="list-group-item">'+
                            '<h3>Description:</h3> <h4></h4>'+
                            '<p class="list-group-item-text"><span id="displayDescription'+i+'"></span></p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="panel-footer">'+
                        '<small></small>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'

        var currentDiv = document.getElementById("userTasks"); 
  
  		currentDiv.appendChild(newDiv);

  		document.getElementById('displayName'+i).innerHTML = localStorage.getItem("taskName"+i);
	                    
	    document.getElementById('displayReward'+i).innerHTML = 
	                    localStorage.getItem("taskReward"+i);

	    document.getElementById('displayDescription'+i).innerHTML = 
	                    localStorage.getItem("taskDescription"+i);

		}
	}

	window.completeTask = function(elem){
		document.getElementById('taskshome'+elem.id[4]).style.display = 'none';
	}

}

