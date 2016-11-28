
exports.view = function(req, res){
  res.render('login', {
  	layout: 'loginLayout'
  });
};

exports.logOut = function(req, res){

  req.logout();

  req.flash('success_msg', 'You have logged out successfully!');

res.redirect('/');

};
