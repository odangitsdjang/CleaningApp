(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// 'use strict'; 

// global


var data = {
		"taskCount": 0,
		"tasks": []
	}

var count = 0;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {

	initializePage();


})

function saveText(text, filename){
  var a = document.createElement('a');
  a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(text));
  a.setAttribute('download', filename);
  a.click()
}

function writeToFile(d1, d2){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fh = fso.OpenTextFile("data2.json", 8, false, 0);
    fh.WriteLine(d1 + ',' + d2);
    fh.Close();
}

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
	    			'<h3 class="panel-title pull-left"><span id="displayName'+count+'"></span></h3>'+
	      			'<a class="btn btn-primary pull-right" href="#">'+
	        		'<i class="fa fa-pencil"></i>'+
	        		'Edit'+
	      			'</a>'+
	    		'</div>'+
	    		'<div class="list-group">'+
	      			'<div class="list-group-item">'+
	        			'<p class="list-group-item-text">Reward</p>'+
	        			'<h4 class="list-group-item-heading"><span id="displayReward'+count+'"></span></h4>'+
	      			'</div>'+
	      			'<div class="list-group-item">'+
	        			'<p class="list-group-item-text"><span id="displayDescription'+count+'"></p>'+
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
	                    document.getElementById("taskReward").value;

	    var c = document.getElementById('displayDescription'+count).innerHTML = 
	                    document.getElementById("taskDescription").value;
	    

	    // I've tried a lot of json writing under here but it did not work , even simple ones


	    data.tasks.push({
	    	"taskName":a,
	    	"taskReward":b,
	    	"taskDescription":c
	    }); 
	    data.taskCount++;
	    count++;
	    // writeData();


		// USE THIS TO CLEAR LOCAL STORAGE
		// window.localStorage.clear();

		//THIS SAVES CRAP TO LOCAL STORAGE. 
		var json = JSON.stringify(data);
		localStorage.setItem('task'+count, json);
		var fs = require('fs');
		fs.writeFile('data2.json', json, 'utf8', callback);


		//	looping just to see whats in storage

		// for(var i = 0; i < 5; i++)
		// 	console.log(JSON.parse(localStorage.getItem('task'+i)))


	    modal.style.display = "none";
	    return data;
	}; 

		

}




},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
