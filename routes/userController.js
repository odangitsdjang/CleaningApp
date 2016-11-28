// Include MongoDB stuff 
var User = require('../public/js/mongoUser.js');

// Routed function that handles registration page when "Sign Up" button is clicked in reg page
exports.postIt = function(req,res){
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// checkBody is an expresss-validator function! 
	// First checks
    req.checkBody('name', 'Name is required!').notEmpty();
	req.checkBody('email', 'Email is required!').notEmpty();
	req.checkBody('email', 'Email is not valid!').isEmail();
	req.checkBody('username', 'Username is required!').notEmpty();
	req.checkBody('password', 'Password is required!').notEmpty();
	req.checkBody('password2', 'Passwords do not match!').equals(req.body.password);

	var errors = req.validationErrors();

	if (errors) {
		res.render('register',{
			layout: 'loginLayout',
			errors:errors
		});
	} else {
		console.log('no errors');
		var newUser = new User({
			name:name,
			email:email,
			username: username,
			password: password,
			reward: 0
		});
		User.createUser(newUser, function(err,user) {
			if(err) throw err;
			console.log(user);

		});

		req.flash('success_msg', 'You are registered!');

		res.redirect('/');
	}
};


