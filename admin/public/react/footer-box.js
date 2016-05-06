'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = _react2.default.createClass({
	displayName: 'Footer',
	render: function render() {
		var year = new Date().getYear() + 1900;
		return _react2.default.createElement(
			_reactBootstrap.Row,
			null,
			_react2.default.createElement(
				'footer',
				{ className: 'footer' },
				_react2.default.createElement('hr', null),
				_react2.default.createElement(
					'p',
					null,
					'© SGGDV ',
					year
				)
			)
		);
	}
});

exports.default = Footer;