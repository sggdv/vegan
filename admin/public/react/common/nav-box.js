'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _instanceListPage = require('../instance-list-page');

var _instanceListPage2 = _interopRequireDefault(_instanceListPage);

var _templateListPage = require('../template-list-page');

var _templateListPage2 = _interopRequireDefault(_templateListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
	_inherits(Nav, _Component);

	function Nav(props) {
		_classCallCheck(this, Nav);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Nav).call(this, props));

		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(Nav, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var active = _props.active;
			var _props$nav = _props.nav;
			var url = _props$nav.url;
			var name = _props$nav.name;

			var clzName = active ? 'active' : '';
			return _react2.default.createElement(
				'li',
				{ className: clzName },
				_react2.default.createElement(
					'a',
					{ href: url, onClick: this.handleChange },
					name
				)
			);
		}
	}, {
		key: 'handleChange',
		value: function handleChange() {
			var _props2 = this.props;
			var nav = _props2.nav;
			var callbackParent = _props2.callbackParent;
			var index = _props2.index;

			callbackParent(index);
			if (nav.click) {
				nav.click();
			}
		}
	}]);

	return Nav;
}(_react.Component);

var NavBox = function (_Component2) {
	_inherits(NavBox, _Component2);

	function NavBox(props) {
		_classCallCheck(this, NavBox);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(NavBox).call(this, props));

		var domId = _this2.props.domId;

		_this2.state = {
			navs: [{
				name: '资料',
				url: '#',
				click: function click() {
					console.log('资料');
					_reactDom2.default.render(_react2.default.createElement(_instanceListPage2.default, null), document.getElementById(domId));
				}
			}, {
				name: '表单',
				url: '#',
				click: function click() {
					_reactDom2.default.render(_react2.default.createElement(_templateListPage2.default, null), document.getElementById(domId));
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

		_this2.handleNavChange = _this2.handleNavChange.bind(_this2);
		return _this2;
	}

	_createClass(NavBox, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			var navs = this.state.navs.map(function (nav, index) {
				var active = index == _this3.state.activeNav;
				return _react2.default.createElement(Nav, { nav: nav, index: index, active: active, callbackParent: _this3.handleNavChange });
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
		}
	}, {
		key: 'handleNavChange',
		value: function handleNavChange(index) {
			this.setState({ activeNav: index });
		}
	}]);

	return NavBox;
}(_react.Component);

exports.default = NavBox;