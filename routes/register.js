// Routed function to show the register page
exports.viewRegister = function(req, res){
  res.render('register', {
  	layout: false

  });
};

