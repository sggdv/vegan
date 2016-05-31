'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _mailer = require('../mailer');

var _mailer2 = _interopRequireDefault(_mailer);

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
		if (!err && apiRes.statusCode == 201) {
			if (body.email) {
				// TODO 发送邮件
				console.log(body.email);

				var to = body.email;
				var subject = '很高兴认识你';
				var html = '<h3>我叫Kim, 很高兴认识你！这是我的常用邮箱，有事可以随时向我发送邮件。</h3>';

				(0, _mailer2.default)({ to: to, subject: subject, html: html });
			}
			res.status(201).json(body);
		} else {
			res.status(500).json({ err: err, statusCode: apiRes.statusCode });
		}
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