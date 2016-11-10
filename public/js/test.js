// Test stuff in this file


function blah(){

	data1 =  {
		"FN1":"David" ,
		"FN":"Sarmed",
		"LN1":"Jang",
		"LN":"Chaudhry",
		"count":0
	}

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


	data.tasks.push({"taskName":"do that", "taskReward":1.23, "taskDescription":"Sooner than later"});
	var jsonfile = require('jsonfile')
	var file = '../../data2.json'


	jsonfile.writeFile(file,data)
	console.log('hi');
}

function echoIt(){

	window.alert("Hello")
}

function requireTest(){

	var file = '../../data.json';
	var importIt = require(file);
	console.log('hello');

}
blah();


