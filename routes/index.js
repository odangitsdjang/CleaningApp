var dJ = require('../data.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	title: 'CleaningApp',
  	dataJson: dJ
  });


};
