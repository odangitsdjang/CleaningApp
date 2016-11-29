
var Group = require('../public/js/mongoGroup.js');
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var groupList, groupCount;

exports.viewGroup = function(req, res){
  MongoClient.connect('mongodb://heroku_2s7m53vj:lqb9p32ov0u6akts4hoekc7h5l@ds153677.mlab.com:53677/heroku_2s7m53vj', function(err, db) {
    if(err) throw err;

    var collection = db.collection('groups');
    
      collection.count(function(err, count) {
        //console.log(format("count = %s", count));
        groupCount = count;
      }); 

      // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        //console.dir(results[0].name);
        //console.dir(results.length);
        groupList = results;
        // Let's close the db
        db.close();
      });
  })

  res.render('group', {
    groups: groupList,
    count: groupCount
  });
};


exports.updateGroup = function(req,res) {

	var name = req.body.name;
	var email = req.body.email;
    var countUsers = 0;
    var usersList;
    var found = false;

    MongoClient.connect('mongodb://heroku_2s7m53vj:lqb9p32ov0u6akts4hoekc7h5l@ds153677.mlab.com:53677/heroku_2s7m53vj', function(err, db) {
    if(err) throw err;

    var collection = db.collection('users');
    
      collection.count(function(err, count) {
        //console.log(format("count = %s", count));
        countUsers = count;
        //console.dir(countUsers);

        // Locate all the entries using find
        collection.find().toArray(function(err, results) {
            //console.dir(results);
            //console.dir(results.length);
            usersList = results;


            for(var i = 0; i < countUsers; i++){
                if(name == usersList[i].username && email == usersList[i].email){                    
                    var newGroup = new Group({
                        name: name,
                        email: email,
                        reward: 0
                });

                Group.createGroup(newGroup, function(err,group) {
                    if(err) throw err;
                    console.log(group);

                });

                found = true;
                break;

                }
            }
            // Let's close the db
            db.close();
        });
      }); 
    })
    

    if(!found){
        req.flash('error_msg', 'Invalid name or email entered!');
        res.redirect('back');
        // res.send(500,'groupAlert');
    }

    res.redirect(req.get('referer'));
	// res.redirect('/index');
}

exports.deleteGroup = function(req, res, next) {

    MongoClient.connect('mongodb://heroku_2s7m53vj:lqb9p32ov0u6akts4hoekc7h5l@ds153677.mlab.com:53677/heroku_2s7m53vj', function(err, db) {
        if(err) throw err;

        var collection = db.collection('groups');

        var memberName = req.body.memberName || req.query.memberName;
        console.dir(memberName);

        collection.remove({"name": memberName});

        db.close()
        // Group.removeMember(memberName, function(err,group){
        //     if(err) throw err;
        //     console.log(group);
        // })
    })

    res.redirect(req.get('referer'));
   
}


// exports.deleteGroup = function(req, res){

//     MongoClient.connect('mongodb://localhost/CleaningApp', function(err, db) {
//     if(err) throw err;

//     var collection = db.collection('groups');
    
//       collection.count(function(err, count) {
//         //console.log(format("count = %s", count));
//         countUsers = count;
//       }); 

//       // Locate all the entries using find
//       collection.find().toArray(function(err, results) {
//         //console.dir(results[0].name);
//         //console.dir(results.length);
//         usersList = results;
//         // Let's close the db
//         db.close();
//       });
//     })


// }