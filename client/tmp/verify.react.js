'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerifyBox = _react2.default.createClass({
	displayName: 'VerifyBox',
	render: function render() {
		return _react2.default.createElement(
			'form',
			{ style: formSignin },
			_react2.default.createElement(
				'div',
				{ className: 'text-center' },
				_react2.default.createElement(
					'h2',
					{ style: formH2 },
					'验证身份'
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'div',
					{ className: 'input-group' },
					_react2.default.createElement(
						'span',
						{ className: 'input-group-addon' },
						_react2.default.createElement('span', { className: 'glyphicon glyphicon-user' })
					),
					_react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: '淘宝订单号' })
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'div',
					{ className: 'input-group' },
					_react2.default.createElement(
						'span',
						{ className: 'input-group-addon' },
						_react2.default.createElement('span', { className: 'glyphicon glyphicon-lock' })
					),
					_react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: '验证码' })
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'button',
					{ className: 'btn btn-lg btn-success btn-block', type: 'button' },
					_react2.default.createElement('span', { className: 'glyphicon glyphicon-ok' }),
					' 提交'
				)
			)
		);
	}
});

var formSignin = {
	maxWidth: '330px',
	padding: '15px',
	margin: '0 auto',
	borderRadius: '4px',
	backgroundColor: '#fff',
	border: '1px solid #dedede'
};

var formH2 = {
	lineHeight: '90px'
};

// Usage: <VerifyBox />
exports.default = VerifyBox;