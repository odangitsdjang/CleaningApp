
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var groupList, userList, userCount, groupCount,  rewardArray = [];

exports.viewLeaderboard = function (req, res) {
   
    MongoClient.connect('mongodb://localhost/CleaningApp', function(err, db) {
        if(err) throw err;

        var groups = db.collection('groups');
        // var users = db.collection('users');

        // users.count(function(err, count) {        
        //     userCount = count;
        // }); 

        groups.count(function(err, count) {        
            groupCount = count;
        }); 

        groups.find({},{"name":1, "reward":2, _id:0}).sort({"reward":-1}).toArray(function(err, results) {
            groupList = results;             
        });

        // users.find().toArray(function(err, results) {
        //     userList = results;             
        // });

        
        db.close()
        
    })

    // for(var i = 0; i < groupCount; i++ ){
    //     // rewardArray[i] = 
    //     // for(var j = 0; j < userCount; j++){
    //     //     if(groupList[i].name  == userList[j].username){                  
    //     //         rewardArray.leaders.push({
    //     //             name: groupList[i].name,
    //     //             reward: userList[j].reward
    //     //         });
    //     //         // var x = groupList[i].name;
    //     //         // rewardArray[x] = userList[j].reward
    //     //     }
    //     // }
    // }
    console.dir(rewardArray)
    // var sorted = [];
    // var sortedReward = [];
    // for(var key in rewardArray) {
    //     sorted[sorted.length] = key;
    //     sortedReward[sortedReward.length] = rewardArray[key];
    // }
    // sorted.reverse();

    // console.dir(sorted)
    // console.dir(sortedReward)

    res.render('leaderboard', {
        // name: sorted,
        // reward: sortedReward,
         leaders: groupList,
         count: groupCount

    });
    
};
