var express = require('express');
var router = express.Router();
var db = require('../db');

// 客户登陆界面
router.get('/', function (req, res, next) {
  res.redirect('signin.html');
});

router.post('/login', function (req, res, next) {
  var tradeNo = req.body.tradeNo;
  var nickname = req.body.nickname;

  console.log('==' + tradeNo);
  console.log('==' + nickname);

  var query = { 
  	tradeNo: tradeNo, 
  	nickname: nickname
  };
  var callback = function (err, doc) {
    if (err || !doc) return res.json({ success: false });

    res.json({ 
      success: true, 
      taskId: doc._id
    });

  };

  db.tasks.findOne(query, callback);
});

module.exports = router;
