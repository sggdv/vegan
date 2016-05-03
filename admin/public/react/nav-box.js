'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _templateListBox = require('./template-list-box');

var _templateListBox2 = _interopRequireDefault(_templateListBox);

var _instanceListBox = require('./instance-list-box');

var _instanceListBox2 = _interopRequireDefault(_instanceListBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = _react2.default.createClass({
	displayName: 'Nav',
	render: function render() {
		var clzName = this.props.active ? 'active' : '';
		return _react2.default.createElement(
			'li',
			{ className: clzName },
			_react2.default.createElement(
				'a',
				{ href: this.props.nav.url, onClick: this.handleChange },
				this.props.nav.name
			)
		);
	},
	handleChange: function handleChange() {
		var nav = this.props.nav;
		console.log(nav);
		this.props.callbackParent(this.props.index);
		if (nav.click) nav.click();
	}
});

var NavBox = _react2.default.createClass({
	displayName: 'NavBox',
	getInitialState: function getInitialState() {
		var domId = this.props.domId;
		return {
			navs: [{
				name: '资料',
				url: '#',
				click: function click() {
					console.log('资料');
					_reactDom2.default.render(_react2.default.createElement(_instanceListBox2.default, null), document.getElementById(domId));
				}
			}, {
				name: '表单',
				url: '#',
				click: function click() {
					_reactDom2.default.render(_react2.default.createElement(_templateListBox2.default, null), document.getElementById(domId));
				}
			}, {
				name: '偏好设置',
				url: '#',
				click: function click() {
					console.log('偏好设置');
				}
			}],
			activeNav: 0
		};
	},
	render: function render() {
		var _this = this;

		var navs = this.state.navs.map(function (nav, index) {
			var active = index == _this.state.activeNav;
			return _react2.default.createElement(Nav, { nav: nav, index: index, active: active, callbackParent: _this.handleNavChange });
		}, this);
		return _react2.default.createElement(
			'nav',
			{ className: 'navbar navbar-inverse navbar-fixed-top' },
			_react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'navbar-header' },
					_react2.default.createElement(
						'button',
						{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar', 'aria-expanded': 'false', 'aria-controls': 'navbar' },
						_react2.default.createElement('span', { className: 'icon-bar' }),
						_react2.default.createElement('span', { className: 'icon-bar' }),
						_react2.default.createElement('span', { className: 'icon-bar' })
					),
					_react2.default.createElement(
						'a',
						{ className: 'navbar-brand', href: '#' },
						this.props.projectName
					)
				),
				_react2.default.createElement(
					'div',
					{ id: 'navbar', className: 'collapse navbar-collapse' },
					_react2.default.createElement(
						'ul',
						{ className: 'nav navbar-nav' },
						navs
					)
				)
			)
		);
	},
	handleNavChange: function handleNavChange(index) {
		this.setState({ activeNav: index });
	}
});

exports.default = NavBox;