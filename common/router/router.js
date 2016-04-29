'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.instancesRouter = exports.templatesRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db = require('../db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function Router(dao) {
	_classCallCheck(this, Router);

	var router = _express2.default.Router();

	router.post('/', function (req, res) {
		var body = req.body;
		dao.insertOne(body, function (err, doc) {
			if (err) return res.status(500).json({ err: err });
			res.status(201).json(doc);
		});
	});

	router.get('/', function (req, res) {
		dao.findAll(function (err, docs) {
			res.json(docs);
		});
	});

	router.get('/:id', function (req, res) {
		dao.findOne(req.params.id, function (err, doc) {
			if (err) return res.status(404).json({ err: err });
			res.json(doc);
		});
	});

	router.put('/:id', function (req, res) {
		dao.updateOne(req.params.id, req.body, function (err, doc) {
			if (err) return res.status(500).json({ err: err });
			res.json(doc);
		});
	});

	router.delete('/:id', function (req, res) {
		dao.deleteOne(req.params.id, function (err, doc) {
			if (err) return res.status(500).json({ err: err });
			res.json(template);
		});
	});

	return router;
};

var templatesRouter = new Router(_db.templatesDao);
var instancesRouter = new Router(_db.instancesDao);

exports.templatesRouter = templatesRouter;
exports.instancesRouter = instancesRouter;