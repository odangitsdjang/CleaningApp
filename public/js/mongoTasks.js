var User = require('./mongoUser.js');
var mongoose = require('mongoose');

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
		type: String
	}
});

var Task = module.exports = mongoose.model('Task', TaskSchema);


module.exports.createTask = function(newTask, callback){
	newTask.save(callback);
}
