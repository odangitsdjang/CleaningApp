var dJ = require('../data.json');
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var taskList, tasksCount, myTasks;
var username;


exports.viewIndex = function(req, res){
	username = req.query.username;

	MongoClient.connect('mongodb://localhost/CleaningApp', function(err, db) {
    if(err) throw err;
    //console.dir(req.query.username)

    if(req.query.username){
    	var rlog = db.collection("loggedIn");
    	rlog.remove({});
    	db.createCollection('loggedIn', function(err, collection) {});
    	var log = db.collection('loggedIn');
    	log.insert({"name": req.query.username});
    	
    }
// console.dir("fuck everythong");
    var collection = db.collection('tasks');
    var logged = db.collection('loggedIn');
    
    
      collection.count(function(err, count) {
        //console.log(format("count = %s", count));
        tasksCount = count;
      }); 

      
      

      logged.find().toArray(function(err,results) {
        	username = results;
        	 //console.dir(username)
        	 collection.find({"userSelected": {$ne: username[0].name}}).toArray(function(err, results) {
		        taskList = results;  
//console.dir(taskList)
		        // for(var i = 0; i < tasksCount; i++){
		        // 	//console.dir(taskList[i].userSelected)
		        // 	//console.dir(username)
		        // 	if(taskList[i].userSelected == username[0].name){		        		
		        // 		myTasks.push(taskList[i]);
		        // 	}
		        // } 		       		       
		      });

        	 collection.find({"userSelected": username[0].name}).toArray(function(err,results) {
		        	myTasks = results;
		        	
		        });

        	  db.close();

        	   res.render('index', {
		  		dataJson: dJ,
		  		username: username,
		  		usersTasks: myTasks,
		  		otherTasks: taskList,
		  		count: tasksCount
			  });
       });

     

     
  	})

  	//req.params.username = req.query.username;

 	

};