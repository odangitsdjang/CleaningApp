
var mongoose = require('mongoose');

var GroupSchema = mongoose.Schema({ 

	name: {
		type: String
	},

	email: {
		type: String
	}
});

var Group = module.exports = mongoose.model('Group', GroupSchema);


module.exports.createGroup = function(newGroup, callback){
	newGroup.save(callback);
}

module.exports.removeMember = function(memberName, callback){

	GroupSchema.remove({name: memberName}, function(err, res) {
       if (err)
       	res.json({"err": err}); 
   	   else
   	   	res.json({success: true});
   	});
}
