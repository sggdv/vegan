'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _flag = require('./flag');

var _flag2 = _interopRequireDefault(_flag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlagGroupBox = function (_Component) {
	_inherits(FlagGroupBox, _Component);

	function FlagGroupBox(props) {
		_classCallCheck(this, FlagGroupBox);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlagGroupBox).call(this, props));

		var current = props.current || '#FD7D7F';
		_this.state = {
			current: current,
			colors: ['#FD7D7F', '#FDBD43', '#F4E447', '#B5DF3A', '#83C9FD', '#E3A7FD', '#C8C8C8']
		};
		_this.handleClickFlag = _this.handleClickFlag.bind(_this);
		return _this;
	}

	_createClass(FlagGroupBox, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state;
			var colors = _state.colors;
			var current = _state.current;

			var flags = colors.map(function (color) {
				return _react2.default.createElement(_flag2.default, { color: color, callbackParent: _this2.handleClickFlag });
			}, this);
			var overlay = _react2.default.createElement(
				_reactBootstrap.Popover,
				{ title: '标旗帜' },
				flags
			);
			return _react2.default.createElement(
				_reactBootstrap.OverlayTrigger,
				{ trigger: 'click', rootClose: true, placement: 'top', overlay: overlay },
				_react2.default.createElement(
					_reactBootstrap.Button,
					{ bsStyle: 'link', bsSize: 'sm' },
					_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'flag', style: { color: current } })
				)
			);
		}
	}, {
		key: 'handleClickFlag',
		value: function handleClickFlag(color) {
			var _this3 = this;

			var callbackParent = this.props.callbackParent;

			callbackParent(color, function () {
				_this3.setState({ current: color });
			});
		}
	}]);

	return FlagGroupBox;
}(_react.Component);

exports.default = FlagGroupBox;