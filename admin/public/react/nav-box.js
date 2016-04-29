'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
		this.props.callbackParent(this.props.index);
	}
});

var NavBox = _react2.default.createClass({
	displayName: 'NavBox',
	getInitialState: function getInitialState() {
		return { navs: [{ name: '资料', url: '#' }, { name: '表单', url: '#' }, { name: '偏好设置', url: '#' }], activeNav: 0 };
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