var dJ = require('../data.json');
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var taskList, tasksCount, myTasks;
var username, userReward, name;


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
};


exports.completeTask = function(req,res){
	MongoClient.connect('mongodb://localhost/CleaningApp', function(err, db) {
        if(err) throw err;

        var collection = db.collection('tasks');
        var groups = db.collection('groups');           

        var reward = req.body.reward || req.query.reward;
        var taskName = req.body.taskName || req.query.taskName;
        name = req.body.name || req.query.name;
        //console.dir(name)

        groups.find({"name": name}).toArray(function(err,results) {
		        userReward = results[0].reward;
		        console.dir("old reward: "+ userReward)		      		        
		        userReward += parseInt(reward);
		        console.dir("new reward: " + userReward)	
		       // users.update({'name': name},{$set:{'reward': userReward}});
		        // db.agencies.find( { "advertisers.created_at" : {$gte : start , $lt : end} } , { _id : 1 , program_ids : 1 , "advertisers.name": 1 }  } ).limit(1).toArray();	      		        
		        //db.articles.update({ 'categories.id': ObjectId("51cd5272222wb6zs464fa4d9"), 'source.importer': 'pa'}, { $set : { 'source.expires-at': ISODate("2014-01-01T08:39:45Z") } }, {multi: true})        		        	
		});

		// users.update({'name': name},{$set:{'reward': userReward}});		

        collection.remove({"name": taskName});

        db.close()
        // Group.removeMember(memberName, function(err,group){
        //     if(err) throw err;
        //     console.log(group);
        // })
    })
//console.dir("1 " + userReward);
    MongoClient.connect('mongodb://localhost/CleaningApp', function(err, db) {
        if(err) throw err;
//console.dir("whaddaheck" + userReward)

		var groups = db.collection('groups');
		// console.dir("new fuckin reward again: "  + userReward);

		groups.update({'name':name},{$set:{'reward': userReward}});

        db.close()
        // Group.removeMember(memberName, function(err,group){
        //     if(err) throw err;
        //     console.log(group);
        // })
    })
    res.redirect(req.get('referer'));
}




