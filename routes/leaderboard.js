var jfile = require('../data1.json');
exports.viewLeaderboard = function (req, res) {
    res.render('leaderboard', {
        dataJson: jfile
    });
};