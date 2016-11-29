/*
var jsonfile = require('jsonfile');
var file = '../data1.json';
var tasksController = require('../public/js/tasks.js');
jsonfile.writeFile(file,data1);
*/

// var User = require('../public/js/mongoUser.js');
var Task = require('../public/js/mongoTasks.js');
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var dJ = require('../data1.json');
var tasksCount, taskList, groupList;

exports.viewTasks = function(req, res){
	MongoClient.connect('mongodb://heroku_2s7m53vj:lqb9p32ov0u6akts4hoekc7h5l@ds153677.mlab.com:53677/heroku_2s7m53vj', function(err, db) {
    if(err) throw err;

    var collection = db.collection('tasks');
    var collection2 = db.collection('groups');
    
      // collection.count(function(err, count) {
      //   //console.log(format("count = %s", count));
      //   tasksCount = count;
      // }); 

      // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        taskList = results;             
      });

      collection2.find().toArray(function(err,results) {
      	groupList = results;
      	// console.dir(groupList);
      });

      db.close();
  	})

	res.render('tasks', {
 		dataJson: dJ,
 		tasks: taskList,
 		groups: groupList
	});

};


exports.updateTasks = function(req,res) {
	var name = req.body.name;
	var reward = req.body.reward;
	var description = req.body.description;
	var userSelected = "";

	var newTask = new Task({
				name: name,
				reward: reward,
				description: description,
				userSelected: userSelected
			});

	Task.createTask(newTask, function(err,task) {
			if(err) throw err;
			//console.log(task);

		});

	res.redirect(req.get('referer'));

	// res.redirect('/index');
}


exports.editTasks = function(req,res) {
	MongoClient.connect('mongodb://heroku_2s7m53vj:lqb9p32ov0u6akts4hoekc7h5l@ds153677.mlab.com:53677/heroku_2s7m53vj', function(err, db) {
        if(err) throw err;

        var collection = db.collection('tasks');

        var oldName = req.body.oldName || req.query.oldName;
        var oldReward = req.body.oldReward || req.query.oldReward;
        var oldDescription = req.body.oldDescription || req.query.oldDescription;

        var taskName = req.body.taskName || req.query.taskName; 
        var taskReward = req.body.taskReward || req.query.taskReward;
        var taskDescription = req.body.taskDescription || req.query.taskDescription;
        //console.dir(taskName);

        //collection.remove({"name": memberName});
        collection.update({'name': oldName},{$set:{'name':taskName}});
        collection.update({'reward': parseInt(oldReward)},{$set:{'reward': parseInt(taskReward)}});
        collection.update({'description': oldDescription},{$set:{'description':taskDescription}});

        db.close()
        // Group.removeMember(memberName, function(err,group){
        //     if(err) throw err;
        //     console.log(group);
        // })
    })

    res.redirect(req.get('referer'));
}

exports.removeTasks = function(req,res){
	MongoClient.connect('mongodb://heroku_2s7m53vj:lqb9p32ov0u6akts4hoekc7h5l@ds153677.mlab.com:53677/heroku_2s7m53vj', function(err, db) {
        if(err) throw err;

        var collection = db.collection('tasks');

        var taskName = req.body.taskID || req.query.taskID;
        //console.dir(taskName);

        collection.remove({ $or: [{"name": taskName}, {"name": ''}] });

        db.close()
        // Group.removeMember(memberName, function(err,group){
        //     if(err) throw err;
        //     console.log(group);
        // })
    })

    res.redirect(req.get('referer'));
}

exports.selectUser = function(req,res){
	MongoClient.connect('mongodb://heroku_2s7m53vj:lqb9p32ov0u6akts4hoekc7h5l@ds153677.mlab.com:53677/heroku_2s7m53vj', function(err, db) {
        if(err) throw err;

        var collection = db.collection('tasks');

        var selectedUser = req.body.selectedUser || req.query.selectedUser;
        var taskName = req.body.taskName || req.query.taskName;
       // console.dir(selectedUser);

        collection.update({'name': taskName},{$set:{'userSelected': selectedUser}});

        db.close()
    })
}
