'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MobileSender = exports.WeiXinSender = exports.EmailSender = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailSender = function (_Component) {
	_inherits(EmailSender, _Component);

	function EmailSender(props) {
		_classCallCheck(this, EmailSender);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailSender).call(this, props));
	}

	_createClass(EmailSender, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactBootstrap.Form,
				{ horizontal: true },
				_react2.default.createElement(
					_reactBootstrap.Col,
					{ componentClass: _reactBootstrap.ControlLabel, sm: 3 },
					'邮箱'
				),
				_react2.default.createElement(
					_reactBootstrap.Col,
					{ sm: 9 },
					_react2.default.createElement(_reactBootstrap.FormControl, { placeholder: '邮箱地址' })
				)
			);
		}
	}]);

	return EmailSender;
}(_react.Component);

var WeiXinSender = function (_Component2) {
	_inherits(WeiXinSender, _Component2);

	function WeiXinSender(props) {
		_classCallCheck(this, WeiXinSender);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(WeiXinSender).call(this, props));
	}

	_createClass(WeiXinSender, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', null);
		}
	}]);

	return WeiXinSender;
}(_react.Component);

var MobileSender = function (_Component3) {
	_inherits(MobileSender, _Component3);

	function MobileSender(props) {
		_classCallCheck(this, MobileSender);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MobileSender).call(this, props));
	}

	_createClass(MobileSender, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', null);
		}
	}]);

	return MobileSender;
}(_react.Component);

exports.EmailSender = EmailSender;
exports.WeiXinSender = WeiXinSender;
exports.MobileSender = MobileSender;