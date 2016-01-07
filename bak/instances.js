var express = require('express');
var router = express.Router();
var db = require('../db');
var ObjectId = db.ObjectId;

router.get('/', function (req, res, next) {

  var callback = function (err, docs) {
    if (err) return res.json({ success: false });

    res.json({
      success: true,
      instances: docs 
    });
  };

  db.instances.find().sort({ createDate: -1 }).toArray(callback);
});

router.get('/:id', function (req, res, next) {
  var query = { _id : ObjectId(req.body._id) };

  var callback = function (err, doc) {
    if (err || !doc) return res.json({ success: false });

    res.json({ 
      success: true, 
      instance: doc
    });
  };

  db.instances.findOne(query, callback);
});

router.post('/', function (req, res, next) {
  var instance = req.body.instance;
  instance.createDate = new Date();

  var callback = function (err, r) {
    if (err) return res.json({ success: false});
    res.json({ success: true });
  };

  db.instances.insertOne(instance, callback);
});

router.put('/:id', function (req, res, next) {
  var instance = req.body.instance;

  var filter = { _id: ObjectId(instance._id) };
  var update = {};

  var callback = function (err, doc) {
    if (err) return res.json({ success: false });
    
    res.json({ 
      success: true,
      instance: doc 
    });
  };

  db.instances.findOneAndUpdate(filter, { $set: update }, callback);
});

router.delete('/:id', function (req, res, next) {
  var filter = { _id: ObjectId(req.body.id) };
  var options = { single: true };

  var callback = function (err, r) {
    if (r.result.ok == 1 && r.result.n == 1) return res.json({ success: true });
    
    res.json({ success: false });
  };

  db.instances.remove(filter, options, callback);
});

module.exports = router;