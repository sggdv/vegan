'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _navBox = require('../react/nav-box');

var _navBox2 = _interopRequireDefault(_navBox);

var _templateListBox = require('../react/template-list-box');

var _templateListBox2 = _interopRequireDefault(_templateListBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_navBox2.default, { projectName: 'VEGAN' }), document.getElementById('nav'));

_reactDom2.default.render(_react2.default.createElement(_templateListBox2.default, null), document.getElementById('content'));