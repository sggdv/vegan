'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _navBox = require('../react/common/nav-box');

var _navBox2 = _interopRequireDefault(_navBox);

var _instanceListPage = require('../react/instance-list-page');

var _instanceListPage2 = _interopRequireDefault(_instanceListPage);

var _footerBox = require('../react/common/footer-box');

var _footerBox2 = _interopRequireDefault(_footerBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_navBox2.default, { projectName: 'VEGAN' }), document.getElementById('nav'));

_reactDom2.default.render(_react2.default.createElement(_instanceListPage2.default, null), document.getElementById('content'));

_reactDom2.default.render(_react2.default.createElement(_footerBox2.default, null), document.getElementById('footer'));