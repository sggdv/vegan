'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _instanceListPage = require('../instance-list-page');

var _instanceListPage2 = _interopRequireDefault(_instanceListPage);

var _templateListPage = require('../template-list-page');

var _templateListPage2 = _interopRequireDefault(_templateListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBox = function (_Component) {
	_inherits(NavBox, _Component);

	function NavBox(props) {
		_classCallCheck(this, NavBox);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(NavBox).call(this, props));
	}

	_createClass(NavBox, [{
		key: 'render',
		value: function render() {
			var projectName = this.props.projectName;


			return _react2.default.createElement(
				_reactBootstrap.Navbar,
				{ inverse: true, fixedTop: true, fluid: true },
				_react2.default.createElement(
					_reactBootstrap.Navbar.Header,
					null,
					_react2.default.createElement(
						_reactBootstrap.Navbar.Brand,
						null,
						_react2.default.createElement(
							'a',
							{ href: '#' },
							projectName
						)
					),
					_react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
				),
				_react2.default.createElement(
					_reactBootstrap.Navbar.Collapse,
					null,
					_react2.default.createElement(
						_reactBootstrap.Nav,
						null,
						_react2.default.createElement(
							_reactBootstrap.NavDropdown,
							{ eventKey: 1, title: '资料' },
							_react2.default.createElement(
								_reactBootstrap.MenuItem,
								null,
								'待处理'
							),
							_react2.default.createElement(
								_reactBootstrap.MenuItem,
								null,
								'归档'
							)
						),
						_react2.default.createElement(
							_reactBootstrap.NavItem,
							{ eventKey: 2 },
							'表单'
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Nav,
						{ pullRight: true },
						_react2.default.createElement(
							_reactBootstrap.NavItem,
							{ eventKey: 1 },
							_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'bell' }),
							' ',
							_react2.default.createElement(
								_reactBootstrap.Badge,
								null,
								'2'
							)
						),
						_react2.default.createElement(
							_reactBootstrap.NavItem,
							{ eventKey: 2 },
							_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'user' }),
							' Kim'
						)
					)
				)
			);
		}
	}]);

	return NavBox;
}(_react.Component);

exports.default = NavBox;