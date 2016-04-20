'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _db = require('../db');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// 暂时不考虑分页的情况
router.post('/', function (req, res) {
	var template = req.body;
	_db.templates.insertOne(template, function (err) {
		if (!err) res.status(201).json(template);else res.status(500).json({ err: err });
	});
});

router.get('/', function (req, res) {
	_db.templates.findAll(function (err, docs) {
		res.json(docs);
	});
});

router.get('/:id', function (req, res) {
	_db.templates.findOne(req.params.id, function (err, template) {
		if (!err) res.json({ template: template });else res.status(404).json({ err: err });
	});
});

router.put('/:id', function (req, res) {
	_db.templates.updateOne(req.params.id, res.body, function (err, template) {
		if (!err) res.json({ template: template });else res.status(500).json({ err: err });
	});
});

router.delete('/:id', function (req, res) {
	template.deleteOne(req.params.id, function (err, template) {
		if (!err) res.json({ template: template });else res.status(500).json({ err: err });
	});
});

exports.default = router;