'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _clientBox = require('./public/react/client-box');

var _clientBox2 = _interopRequireDefault(_clientBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = _react2.default.createFactory(_clientBox2.default);

var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.static('public'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// HTML模版
function fullHtml(data) {
	return '<!doctype html>\n<html lang="zh-CN">\n\t<head>\n\t\t<link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">\n\t</head>\n\t<body style="padding-top: 80px;">\n\t\t<div class="container">\n\t\t\t<div id="content"></div>\n\t\t</div>\n\t\t<script>var instance = ' + data + ';</script>\n\t\t<script src="/react/client-all.react.js"></script>\n\t</body>\n</html>';
}

app.get('/:id', function (req, res) {
	var id = req.params.id;

	console.log('id=' + id);

	(0, _request2.default)({
		method: 'GET',
		url: 'http://127.0.0.1:3002/instances/' + id,
		json: true
	}, function (err, apiRes, body) {
		if (err) return res.status(500).send(err);
		//		let dom = ReactDOMServer.renderToString(client(body));
		res.send(fullHtml(JSON.stringify(body)));
	});
});

app.post('/update', function (req, res) {
	var instance = req.body;

	var id = instance.id;
	delete instance.id;

	(0, _request2.default)({
		method: 'put',
		url: 'http://127.0.0.1:3002/instances/' + id,
		json: true,
		body: instance
	}, function (err, apiRes, body) {
		if (err) console.log(err);

		res.json({});
	});
});

app.listen(3001, function () {
	return console.log('done');
});