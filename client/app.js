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

var _client = require('./public/react/client.react');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = _react2.default.createFactory(_client2.default);

var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.static('public'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// HTML模版
function fullHtml(data) {
	return '<!doctype html>\n<html lang="zh-CN">\n\t<head>\n\t\t<link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">\n\t</head>\n\t<body style="padding-top: 80px;">\n\t\t<div class="container">\n\t\t\t<div id="content"></div>\n\t\t</div>\n\t\t<script>var template = ' + data + ';</script>\n\t\t<script src="/react/client-all.react.js"></script>\n\t</body>\n</html>';
}

app.get('/:id', function (req, res) {
	(0, _request2.default)({
		method: 'GET',
		url: 'http://127.0.0.1:3002/templates/571702445e055f6e1c47d2c1',
		json: true
	}, function (err, apiRes, body) {
		if (err) return res.status(500).send(err);
		//		let dom = ReactDOMServer.renderToString(client(body));
		res.send(fullHtml(JSON.stringify(body)));
	});
});

app.post('/update', function (req, res) {
	var template = req.body;
	var id = template.id;
	delete template.id;
	console.log(id);
	console.log(template);
	(0, _request2.default)({
		method: 'put',
		url: 'http://127.0.0.1:3002/templates/' + id,
		json: true,
		body: template
	}, function (err, apiRes, body) {
		console.log(err);
		res.send('ok');
	});
});

app.listen(3001, function () {
	console.log('done');
});