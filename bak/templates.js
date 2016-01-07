var express = require('express');
var router = express.Router();
var db = require('../db');
var ObjectId = db.ObjectId;

router.get('/', function (req, res, next) {
  db.templates.find().sort({ createDate: -1 }).toArray(function (err, docs) {
    if (err) return res.json({ success: false });
    res.json({
      success: true,
      templates: docs
    });
  });
});

router.get('/:id', function (req, res, next) {
  var query = {
    _id : ObjectId(req.params.id)
  };

  var callback = function (err, doc) {
    if (err || !doc) return res.json({ success: false });

    res.json({ 
      success: true, 
      template: doc
    });
  };

  db.templates.findOne(query, callback);
});

router.post('/', function (req, res, next) {
  var template = req.body.template;
  template.createDate = new Date();

  db.templates.insertOne(template, function (err, r) {
    if (err) return res.json({ success: false });

    res.json({ 
      success: true,
      template: template 
    });
  });
});

router.put('/:id', function (req, res, next) {
  var template = req.body.template;

  var filter = { 
    _id: ObjectId(template._id)
  };

  var update = {
    name: template.name,
    items: template.items
  };

  var callback = function (err, doc) {
    if (err) return res.json({ success: false });

    res.json({
      success: true, 
      template: doc 
    });
  };

  db.templates.findOneAndUpdate(filter, { $set: update }, callback);
});

router.delete('/:id', function (req, res, next) {
  var filter = { _id: ObjectId(req.params.id) };
  var options = { single: true };

  var callback = function (err, r) {
    if (r.result.ok == 1 && r.result.n == 1) return res.json({ success: true });
    
    res.json({ success: false });
  };

  db.templates.remove(filter, options, callback);
});

module.exports = router;