var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
// localhost mode
var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/CleaningApp';

    // The http server will listen to an appropriate port, or default to
    // port 5000.
    var theport = process.env.PORT || 5000;

 mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connecting to: ' + uristring);
      }
    });



var db = mongoose.connection;

var UserSchema = mongoose.Schema({

	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	}


});





var TaskSchema = mongoose.Schema({ 

	name: {
		type: String
	},

	reward: {
		type: Number
	},

	description: {
		type: String
	},

	userSelected: {
		type: Boolean
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

var Task = module.exports = mongoose.model('Task', TaskSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	// mongo function
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	// mongo function
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
   	if(err) throw err;
   	callback(null, isMatch);
	});
}

