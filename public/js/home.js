'use strict';




var count = (localStorage.getItem('currTaskCount')===null)?0:(localStorage.getItem('currTaskCount'));


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	var newDivHead = document.createElement("div");
	//display users tasks
		//user can choose options to not take the task or complete it
	// newDivHead.innerHTML = '<div class="jumbotron">'+ 
	// 		'<div class="panel-heading clearfix">'+
 //                '<h3 class="panel-title pull-left">'+
 //                    '<span id="">'+
 //                        '<h2>My Tasks</h2>'+
 //                    '</span>'+
 //                '</h3>'+
 //            '</div>;'

	// document.getElementById("userTasks").appendChild(newDivHead);

	// if(count != 0){
	// for(var i = 0; i < count; i++){
	// 	//add if statement for when its the users assigned task
	// 	var newDiv = document.createElement("div"); 
	// 	//newDiv.id = "displayName"+count;
	// 	newDiv.innerHTML =          
 //            '<div class="tasklist">'+
 //                '<div class="panel panel-default">'+
 //                    '<div class="panel-heading clearfix">'+
 //                        '<h3 class="panel-title pull-left"><span id="displayName'+i+'"><h2></h2></span></h3>'+                
 //                        '<a class="btn btn-primary pull-right" id="completeTask()">'+
 //                            '<i class="fa fa-pencil"></i>'+
 //                            'Complete'+
 //                        '</a>'+
 //                        '<a class="btn btn-primary pull-right" id="removeTask()">'+
 //                            '<i class="fa fa-pencil"></i>'+
 //                            'Remove'+ 
 //                        '</a>'+
 //                    '</div>'+
 //                    '<div class="list-group">'+
 //                        '<div class="list-group-item">'+
 //                            '<p class="list-group-item-text"> </p>'+
 //                            '<h3>Reward:</h3> <h4><a href="/tasks/" id="displayReward'+i+'"></a></h4>'+
 //                            '<h4 class="list-group-item-heading"><span id=""></span></h4>'+
 //                        '</div>'+
 //                        '<div class="list-group-item">'+
 //                            '<h3>Description:</h3> <h4></h4>'+
 //                            '<p class="list-group-item-text"><span id="displayDescription'+i+'"></span></p>'+
 //                        '</div>'+
 //                    '</div>'+
 //                    '<div class="panel-footer">'+
 //                        '<small></small>'+
 //                    '</div>'+
 //                '</div>'+
 //            '</div>'+
 //        '</div>'

 //        var currentDiv = document.getElementById("userTasks"); 
  
 //  		currentDiv.appendChild(newDiv);

 //  		document.getElementById('displayName'+i).innerHTML = localStorage.getItem("taskName"+i);
	                    
	//     document.getElementById('displayReward'+i).innerHTML = 
	//                     localStorage.getItem("taskReward"+i);

	//     document.getElementById('displayDescription'+i).innerHTML = 
	//                     localStorage.getItem("taskDescription"+i);

	// 	}
	// }

	//display the rest of the tasks
		//displays as normal
	newDivHead.innerHTML = '<h2>Current <a href="/tasks">tasks:</a>'+count+'</h2>'+'<div class="jumbotron">';

	document.getElementById("userTasks").appendChild(newDivHead);

	if(count != 0){
	for(var i = 0; i < count; i++){
		var newDiv = document.createElement("div"); 
		//newDiv.id = "displayName"+count;
		newDiv.innerHTML =          
            '<div class="tasklist">'+
                '<div class="panel panel-default">'+
                    '<div class="panel-heading clearfix">'+
                        '<h3 class="panel-title pull-left"><span id="displayName'+i+'"><h2></h2></span></h3>'+                
                        '<a class="btn btn-primary pull-right" id="completeTask()">'+
                            '<i class="fa fa-pencil"></i>'+
                            'Complete'+
                        '</a>'+
                        '<a class="btn btn-primary pull-right" id="removeTask()">'+
                            '<i class="fa fa-pencil"></i>'+
                            'Remove'+ 
                        '</a>'+
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

}

