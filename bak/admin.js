var express = require('express');
var router = express.Router();
var db = require('../db')

// 查询cookies 
// 登陆账号、密码，查询数据库
// 将用户id , 放入 cookie
router.post('/signin', function (req, res, next) {
  var query = {
    name : req.body.username,
    pwd : req.body.pwd
  };

  var callback = function (err, doc) {
    if (err || !doc) return res.json({ success: false});

    // note: cookie过时
    res.cookie('userid', doc._id, { maxAge: 3600 * 1000 * 24 * 30 });
    res.json({ success: true });
  };

  db.users.findOne(query, callback);
});

// 跳转到 dashboard.html
// 加载 用户信息 
router.get('/dashboard', function (req, res, next) {
  var userid = req.cookies['userid'];

  var query = {
    _id: db.ObjectId(userid)
  };

  var callback = function (err, doc) {
    if (err || !doc) return res.json({ success: true });
    res.render('admin/dashboard', { username: doc.name });
  }

  db.users.findOne(query, callback);
});

router.get('/findinstances', function (req, res, next) {
  db.instances.find()
  .sort({
    createDate: -1
  })
  .toArray(function(err, docs) {
    res.json(docs);
  });;
});

router.post('/removeinstance', function (req, res, next) {
  db.instances.remove({
    _id: db.ObjectId(req.body.id)
  }, 
  {
    single: true
  },
  function (err, r) {
    if (r.result.ok == 1 && r.result.n == 1) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

// 修改 instance
router.post('/updateinstance', function (req, res, next) {
  db.instances.findOneAndUpdate({ 
    _id: db.ObjectId(req.body.inst._id)
  }, 
  {
    $set: {
      stat: req.body.inst.stat
    }
  }, 
  function (err, r) {
    res.json({ instance: r });
  });
});

// 登出
router.get('/logout', function (req, res, next) {
  res.clearCookie('userid');
  res.redirect('signin.html');
});

router.get('/instance', function (req, res, next) {
  res.redirect('instance.html');
});

module.exports = router;