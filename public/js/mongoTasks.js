var User = require('./mongoUser.js');

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

var Task = module.exports = mongoose.model('Task', TaskSchema);

/*
module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}
*/