/*
var jsonfile = require('jsonfile');
var file = '../data1.json';
var tasksController = require('../public/js/tasks.js');
jsonfile.writeFile(file,data1);
*/

exports.viewTasks = function(req, res){
  res.render('tasks');

};
