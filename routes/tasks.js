/*
var jsonfile = require('jsonfile');
var file = '../data1.json';
var tasksController = require('../public/js/tasks.js');
jsonfile.writeFile(file,data1);
*/

var Task = require('../public/js/mongoUser.js');

var dJ = require('../data1.json');

exports.viewTasks = function(req, res){
  res.render('tasks', {
  	dataJson: dJ
  });

};



exports.updateTasks = function(req,res) {
	var name = req.body.name;
	var reward = req.body.reward;
	var description = req.body.description;
	var userSelected = false;

	console.log("entered");

	var newTask = new Task({
				name: name,
				reward: reward,
				description: description,
				userSelected: usertSelected
			});

	res.redirect('/index');
}