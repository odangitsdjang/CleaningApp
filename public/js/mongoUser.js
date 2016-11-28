var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
/*
var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/CleaningApp';
*/

// Heroku key (from the command  'heroku config | grep MONGODB_URI' )
// mongodb://heroku_2s7m53vj:lqb9p32ov0u6akts4hoekc7h5l@ds153677.mlab.com:53677/heroku_2s7m53vj

// heroku mode  - week 8 key
//var uristring = 'mongodb://heroku_2s7m53vj:lqb9p32ov0u6akts4hoekc7h5l@ds153677.mlab.com:53677/heroku_2s7m53vj';
// use the below for cse170cleaningapp.herokuapp.com   if the above does not work 
//var uristring =  'mongodb://heroku_58dmjsxw:8at3n9i449obhcfjb3d9m2jlfd@ds163397.mlab.com:63397/heroku_58dmjsxw';

// localhost mode 
var uristring= 'mongodb://localhost/CleaningApp';


    // The http server will listen to an appropriate port, or default to
    // port 5000.
    var theport = process.env.PORT || 5000;

/*
console.log("MONGOLAB_URI is ");
console.log(process.env.MONGOLAB_URI);
*/
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

var User = module.exports = mongoose.model('User', UserSchema);

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

