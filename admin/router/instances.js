'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var API_BASE_URL = 'http://127.0.0.1:3002/instances';

router.post('/', function (req, res) {
	var instance = req.body;
	instance.userid = req.cookies.userid;
	(0, _request2.default)({
		method: 'POST',
		url: API_BASE_URL,
		json: true,
		body: instance
	}, function (err, apiRes, body) {
		if (!err && apiRes.statusCode == 201) res.status(201).json(body);else res.status(500).json({ err: err, statusCode: apiRes.statusCode });
	});
});

router.get('/', function (req, res) {
	(0, _request2.default)({
		method: 'GET',
		url: API_BASE_URL,
		json: true
	}, function (err, apiRes, body) {
		if (err) return res.status(500).json({ err: err });
		res.json(body);
	});
});

exports.default = router;