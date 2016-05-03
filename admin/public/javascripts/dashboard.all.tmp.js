'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _navBox = require('../react/nav-box');

var _navBox2 = _interopRequireDefault(_navBox);

var _instanceListBox = require('../react/instance-list-box');

var _instanceListBox2 = _interopRequireDefault(_instanceListBox);

var _footerBox = require('../react/footer-box');

var _footerBox2 = _interopRequireDefault(_footerBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_navBox2.default, { projectName: 'VEGAN', domId: 'content' }), document.getElementById('nav'));

_reactDom2.default.render(_react2.default.createElement(_instanceListBox2.default, null), document.getElementById('content'));

_reactDom2.default.render(_react2.default.createElement(_footerBox2.default, null), document.getElementById('footer'));