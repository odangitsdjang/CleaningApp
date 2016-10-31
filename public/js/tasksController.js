// Test stuff in this file


function writeData(){
//	data2.tasks.push({"taskName":"do that", "taskReward":1.23,"taskDescription":"Sooner than later"});
	var jsonfile = require('jsonfile')
	var file = '../../data1.json'
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


