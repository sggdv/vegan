'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// template 的 RESTful API 实现


var router = _express2.default.Router();
var API_BASE_URL = 'http://127.0.0.1:3002/templates';

router.post('/', function (req, res) {
	var template = req.body;
	(0, _request2.default)({
		method: 'POST',
		url: API_BASE_URL,
		json: true,
		body: template
	}, function (err, apiRes, body) {
		if (!err && apiRes.statusCode == 201) {
			res.status(201).json({});
		} else {
			res.json({});
		}
	});
});

router.get('/', function (req, res) {
	(0, _request2.default)({
		method: 'GET',
		url: API_BASE_URL,
		json: true
	}, function (err, apiRes, body) {
		res.json(body);
	});
});

exports.default = router;