/*
var jsonfile = require('jsonfile');
var file = '../data1.json';
var tasksController = require('../public/js/tasks.js');
jsonfile.writeFile(file,data1);
*/

var User = require('../public/js/mongoUser.js');
var Task = require('../public/js/mongoTasks.js');

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

	var newTask = new Task({
				name: name,
				reward: reward,
				description: description,
				userSelected: userSelected
			});

	Task.createTask(newTask, function(err,task) {
			if(err) throw err;
			console.log(task);

		});

	res.redirect('/index');
}