'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _router = require('./router/router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());

app.use('/templates', _router.templatesRouter);
app.use('/instances', _router.instancesRouter);

app.get('/users', function (req, res) {
	res.send('ok');
});

app.listen(3002, function () {
	return console.log('done');
});