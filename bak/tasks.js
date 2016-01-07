var express = require('express');
var router = express.Router();
var db = require('../db');
var ObjectId = db.ObjectId;

router.get('/', function (req, res, next) {

  var callback = function (err, docs) {
    if (err) return res.json({ success: false });

    res.json({
      success: true,
      tasks: docs
    });
  };

  db.tasks.find().sort({ createDate: -1 }).toArray(callback);
});

router.get('/:id', function (req, res, next) {
  var query = { _id : ObjectId(req.body._id) };

  var callback = function (err, doc) {
    if (err || !doc) return res.json({ success: false });

    res.json({ 
      success: true, 
      task: doc
    });
  };

  db.tasks.findOne(query, callback);
});

router.post('/', function (req, res, next) {
  var task = req.body.task;
  task.createDate = new Date();

  var callback = function (err, r) {
    if (err) return res.json({ success: false });

    res.json({ 
      success: true,
      task: task 
    });
  };

  db.tasks.insertOne(task, callback);
});

router.put('/:id', function (req, res, next) {
  var task = req.body.task;

  var filter = { _id: ObjectId(req.params.id) };
  var update = {};

  var callback = function (err, doc) {
    if (err) return res.json({ success: false });

    res.json({ 
      success: true,
      task: doc 
    });
  };

  db.tasks.findOneAndUpdate(filter, { $set: update }, callback);
});

router.delete('/:id', function (req, res, next) {
  var filter = { _id: ObjectId(req.params.id) };
  var options = { single: true };

  var callback = function (err, r) {
    if (r.result.ok == 1 && r.result.n == 1) return res.json({ success: true });
    res.json({ success: false });
  };

  db.tasks.remove(filter, options, callback);
});

module.exports = router;