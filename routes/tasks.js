/*
var jsonfile = require('jsonfile');
var file = '../data1.json';
var tasksController = require('../public/js/tasks.js');
jsonfile.writeFile(file,data1);
*/

var dJ = require('../data1.json');

exports.viewTasks = function(req, res){
  res.render('tasks', {
  	dataJson: dJ
  });

};


