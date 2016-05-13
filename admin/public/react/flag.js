'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	color: _react.PropTypes.string.isRequired, // 颜色值
	callbackParent: _react.PropTypes.func.isRequired };

// 点击旗帜后的回调函数

var Flag = function (_Component) {
	_inherits(Flag, _Component);

	function Flag(props) {
		_classCallCheck(this, Flag);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Flag).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(Flag, [{
		key: 'render',
		value: function render() {
			var color = this.props.color;

			return _react2.default.createElement(
				_reactBootstrap.Button,
				{ bsStyle: 'link', bsSize: 'sm', onClick: this.handleClick },
				_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'flag', style: { color: color } })
			);
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			var _props = this.props;
			var callbackParent = _props.callbackParent;
			var color = _props.color;

			callbackParent(color);
		}
	}]);

	return Flag;
}(_react.Component);

Flag.propTypes = propTypes;

exports.default = Flag;