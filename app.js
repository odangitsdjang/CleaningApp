
/**
 * Module dependencies.
 */
var util = require('util')
var http = require('http');
var express = require('express');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var handlebars = require('express-handlebars');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy = require('passport-local').Strategy;

// Include MongoDB stuff 
var User = require('./public/js/mongoUser.js');

//var fs = require('fs');
//var jsonfile = require('jsonfile') // to read and write JSON more easily
//var requirejs = require('requirejs');

// All the pages for our project!
var login = require('./routes/login');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var group = require('./routes/group');
var leaderboard = require('./routes/leaderboard');
var other = require('./routes/other');
var registerFile = require('./routes/register');
var userController = require('./routes/userController');



// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
app.use(express.urlencoded());
//app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());


// Middleware for Flash
app.use(flash());
var flash2 = flash();


// Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// Middleware BodyParser,CookieParser
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cookieParser());




// Middleware Express-Validator
var expressValidator2 = expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
});




/* global variable dataJson (can be used in other files)
app.locals.dataJson = require('/data.json'); */
app.use(function(req,res,next) {
	res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
  res.locals.users = req.user || null;
	next();
});


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

passport.use(new LocalStrategy(
  function(username, password, done) {

  	User.getUserByUsername(username, function(err,user){
  		if(err) throw err;
  		if(!user) {
  			return done(null, false, {message:'Unknown User'});
  		}

  		User.comparePassword(password, user.password, function(err, isMatch) {
  			if(err) throw err;
  			if(isMatch) {
  				return done(null, user);
  			}
  			else {
  				return done(null, false, {message: 'Invalid Password'});
  			}


  		});
  	});
 
  }));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});






// Add routes here
app.get('/', login.view);
app.get('/index', index.viewIndex);
app.get('/tasks', tasks.viewTasks);
app.get('/group', group.viewGroup);
app.get('/leaderboard', leaderboard.viewLeaderboard);
app.get('/other', other.viewOther);
app.get('/register', registerFile.viewRegister);
// pass in other variables to use the functions from it!
app.post('/register', expressValidator2, flash2, userController.postIt);

app.post('/', 
	passport.authenticate('local', { successRedirect: '/index', failureRedirect:'/', failureFlash:true}), 
	function(req,res) {
		console.log("Entered2");
		res.redirect('/index');

	});



// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


/*
requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});
*/