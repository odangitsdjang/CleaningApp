var dJ = require('../data.json');


exports.viewIndex = function(req, res){
  res.render('index', {
  	dataJson: dJ
  });

};