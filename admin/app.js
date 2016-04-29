'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _templates = require('./router/templates');

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
app.use((0, _cookieParser2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.post('/signin', function (req, res) {
  var username = req.body.username;
  var pwd = req.body.pwd;
  // 查询User, 设置cookie。
  (0, _request2.default)({
    method: 'GET',
    url: 'http://127.0.0.1:3002/users',
    json: true,
    body: { username: username, pwd: pwd }
  }, function (err, apiRes, body) {
    if (!err && apiRes.statusCode == 200) {
      res.cookie('uid', 'abc123');
      res.json();
    } else {
      res.status(404).json();
    }
  });
});

app.use('/templates', _templates2.default);

app.listen(3000, function () {
  console.log('done');
});