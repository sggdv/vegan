'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _signinPage = require('../react/signin-page');

var _signinPage2 = _interopRequireDefault(_signinPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_signinPage2.default, { title: '登陆' }), document.getElementById('content'));