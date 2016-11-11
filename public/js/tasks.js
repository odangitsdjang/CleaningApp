// 'use strict'; 

// global


// var data = {
// 		"taskCount": localStorage.getItem('currTaskCount'),
// 		"tasks": []
// 	}

var count = (localStorage.getItem('currTaskCount')===null)?0:(localStorage.getItem('currTaskCount'));
var editCount = -1;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {       
	// window.localStorage.clear();
	displayTasks();
	initializePage();
})

function displayTasks(){
	if(count != 0){
	for(var i = 0; i < count; i++){
		var newDiv = document.createElement("div"); 
		//newDiv.id = "displayName"+count;
		newDiv.innerHTML = 
			'<div class="panel panel-default">' +
	  			'<div class="panel-heading clearfix">' + 
	    			'<h3 class="panel-title pull-left"><span id="displayName'+i+'"></span></h3>'+
	      			'<button class="btn btn-primary pull-right" onclick="editPressed(this)" id="editTask'+i+'">'+
	        		'<i class="fa fa-pencil"></i>'+
	        		'Edit'+
	      			'</button>'+
	    		'</div>'+
	    		'<div class="list-group">'+
	      			'<div class="list-group-item">'+
	        			'<p class="list-group-item-text">Reward</p>'+
	        			'<h4 class="list-group-item-heading"><span id="displayReward'+i+'"></span></h4>'+
	      			'</div>'+
	      			'<div class="list-group-item">'+
	        			'<p class="list-group-item-text"><span id="displayDescription'+i+'"></p>'+
	      			'</div>'+
	      			'<div class="list-group-item">'+ 	    
	        			'<button onclick="selecUser(this)" id="selectUser'+i+'" class="dropbtn">Select User</button>'+
	        			'<div class="dropdown-content" id="displayUser'+i+'">'+
	        			'<div id="userlinks"></div>'+
	        			'<a href="javascript:;" onclick="selectedUser(this)" id="userSel'+i+'">Sarmed</a>'+
	        			'<a href="javascript:;" onclick="selectedUser(this)" id="userSel'+i+'">David</a>'+
	        			'<a href="javascript:;" onclick="selectedUser(this)" id="userSel'+i+'">Alex</a>'+
	        			'</div>'+
	        			'<div id="selectedUser'+i+'" value=""></div>'+
	      			 '</div>'+
	    		'</div>'+
	  			'<div class="panel-footer">'+
	    			'<small></small>'+
	  			'</div>'+
			'</div>';

		var currentDiv = document.getElementById("tasks"); 
   		currentDiv.appendChild(newDiv);

  // 		var newDiv2 = document.createElement("div");
  // 		newDiv2.innerHTML = '';

  // 		for(var j = 0; j < localStorage.getItem("totalMembers");j++){
  // 			var currMem = localStorage.getItem("myGroup"+j);
  // 			if(currMem !== null){
  // 				console.log(currMem);
  // 				newDiv2.innerHTML += '<a href="javascript:;" onclick="selectedUser(this)" id="userSel'+j+'">'+currMem+'</a>'
  // 			}
  // 		}
  // 		var currDiv = document.getElementById("userlinks");
  // 		currDiv.appendChild(newDiv2);
  	


		document.getElementById('displayName'+i).innerHTML = localStorage.getItem("taskName"+i);
	                    
	    document.getElementById('displayReward'+i).innerHTML = 
	                    localStorage.getItem("taskReward"+i);

	    document.getElementById('displayDescription'+i).innerHTML = 
	                    localStorage.getItem("taskDescription"+i);

	   // document.getElementById("editTask"+i).onclick = function() {editPressed()};
	   }
 
	}
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	// Get the modal
	var modal = document.getElementById('myModal');
	var editModal = document.getElementById('editModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	var saveTask = document.getElementById("saveTask");

	var saveEdit = document.getElementById("saveEdit");

	var editTask = document.getElementById("shit1");

	var selectUser = document.getElementById("shit2");

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

	saveTask.onclick = function createDiv() {

		var newDiv = document.createElement("div"); 
		//newDiv.id = "displayName"+count;
		newDiv.innerHTML = 
			'<div class="panel panel-default">' +
	  			'<div class="panel-heading clearfix">' + 
	    			'<h3 class="panel-title pull-left"><span id="displayName'+count+'"></span></h3>'+
	      			'<button class="btn btn-primary pull-right" onclick="editPressed(this)" id="editTask'+count+'">'+
	        		'<i class="fa fa-pencil"></i>'+
	        		'Edit'+
	      			'</button>'+
	    		'</div>'+
	    		'<div class="list-group">'+
	      			'<div class="list-group-item">'+
	        			'<p class="list-group-item-text">Reward</p>'+
	        			'<h4 class="list-group-item-heading"><span id="displayReward'+count+'"></span></h4>'+
	      			'</div>'+
	      			'<div class="list-group-item">'+
	        			'<p class="list-group-item-text"><span id="displayDescription'+count+'"></p>'+
	      			'</div>'+
	      			'<div class="dropdown list-group-item">'+ 
	      				
	        			'<button onclick="selecUser(this)" id="selectUser'+count+'" class="dropbtn">Select User</button>'+
	        			'<div class="dropdown-content" id="displayUser'+count+'">'+

	        			'<a href="javascript:;" onclick="selectedUser(this)" id="userSel'+count+'"></a>'+
	        			'<a href="#">fg</a>'+
	        			'<a href="#">adf</a>'+
	        			'</div>'+
	        			'<div id="selectedUser'+count+'" value=""></div>'+
	      			'</div>'+
	    		'</div>'+
	  			'<div class="panel-footer">'+
	    			'<small></small>'+
	  			'</div>'+
			'</div>';

		var currentDiv = document.getElementById("tasks"); 
  
  		currentDiv.appendChild(newDiv);


		var a = document.getElementById('displayName'+count).innerHTML = 
	                    document.getElementById("taskName").value;

	    var b =document.getElementById('displayReward'+count).innerHTML = 
	                    '$'+document.getElementById("taskReward").value;

	    var c = document.getElementById('displayDescription'+count).innerHTML = 
	                    document.getElementById("taskDescription").value;


	    // data.tasks.push({
	    // 	"taskName":a,
	    // 	"taskReward":b,
	    // 	"taskDescription":c
	    // }); 
	    //data.taskCount++;
	    // writeData();


		//THIS SAVES CRAP TO LOCAL STORAGE. 
		//var json = JSON.stringify(data);
		//localStorage.setItem('task'+data.taskCount, json);
		localStorage.setItem('taskName'+count, a);
		localStorage.setItem('taskReward'+count, b);
		localStorage.setItem('taskDescription'+count, c);
		//

 		editTask = document.getElementById("editTask"+count);
 		//document.getElementById("editTask"+count).onclick = function() {editPressed()};
 		selectUser = document.getElementById("selectUser"+count);

 		count++;
 		localStorage.setItem('currTaskCount', count);
 		
		//	looping just to see whats in storage
		 // for(var i = 0; i <= count; i++)
		 // 	console.log((localStorage.getItem('taskReward'+i)));

	    modal.style.display = "none";
	}; 

	window.editPressed = function(elem){
		editModal.style.display = "block";
		editCount = elem.id[8];

	}

	// saveEdit.onclick = function savEdit(){
	// 	localStorage.setItem('taskName'+(count-1), document.getElementById("taskNameEdit").value);
	// 	localStorage.setItem('taskReward'+(count-1), '$'+document.getElementById("taskRewardEdit").value);
	// 	localStorage.setItem('taskDescription'+(count-1), document.getElementById("taskDescriptionEdit").value);

	// 	editModal.style.display = "none";
	// }

	window.saveEdit = function(){
		console.log(editCount);
		if(document.getElementById("taskNameEdit").value != "") localStorage.setItem('taskName'+editCount, document.getElementById("taskNameEdit").value);
		if(document.getElementById("taskRewardEdit").value != "") localStorage.setItem('taskReward'+editCount, '$'+document.getElementById("taskRewardEdit").value);
		if(document.getElementById("taskDescriptionEdit").value != "") localStorage.setItem('taskDescription'+editCount, document.getElementById("taskDescriptionEdit").value);

		editModal.style.display = "none";
		history.go(0); //refresh page
	}
	

	window.selecUser = function(elem){
		document.getElementById('displayUser'+(elem.id[10])).classList.toggle("show");
	}

	window.selectedUser = function(elem){
		//elem is contains the value of user 
		//need also task so can store user to task
		console.log(elem.innerHTML);
		document.getElementById("selectedUser"+elem.id[7]).innerHTML = elem.innerHTML;
		localStorage.setItem("selectedUser"+elem.id[7], elem.innerHTML);

	}

	window.onclick = function(event) {
	  if (!event.target.matches('.dropbtn')) {

	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
	  }
	}
}



