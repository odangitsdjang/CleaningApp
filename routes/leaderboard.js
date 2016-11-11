var jfile = require('../data1.json');
exports.viewLeaderboard = function (req, res) {
    //var count = (localStorage.getItem('currTaskCount') === null) ? 0 : (localStorage.getItem('currTaskCount'));
    //for (var i = 0; i < count; i++) {
    //    if (i >= jfile.Currency.length) {
    //        var elem = {};
    //        var 
    //    }
    //    var taskReward = localStorage.getItem('taskReward' + count);
    //    jfile.Currency[i].UserCurrency = taskReward
    //}
    jfile.Currency.sort(function (obj1, obj2) {return obj2.UserCurrency - obj1.UserCurrency });
    //jfile.Currency[0].UserName = "Kandarp";
    res.render('leaderboard', {
        dataJson: jfile
    });
    //console.log(jfile.Currency);
};
