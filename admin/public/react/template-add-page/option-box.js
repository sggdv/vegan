'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _option = require('./option');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionList = function (_Component) {
	_inherits(OptionList, _Component);

	function OptionList(props) {
		_classCallCheck(this, OptionList);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OptionList).call(this, props));

		_this.handleOptionChange = _this.handleOptionChange.bind(_this);
		_this.handleOptionRemove = _this.handleOptionRemove.bind(_this);
		_this.handleMove = _this.handleMove.bind(_this);
		return _this;
	}

	_createClass(OptionList, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var options = this.props.options;


			var optionList = options.map(function (opt, index) {
				var key = opt.key;
				var value = opt.value;

				var placeholder = '选项' + (index + 1);
				return _react2.default.createElement(_option2.default, {
					key: key,
					placeholder: placeholder,
					index: index,
					value: value,
					callbackParent: _this2.handleOptionChange,
					removeOption: _this2.handleOptionRemove,
					move: _this2.handleMove });
			}, this);

			return _react2.default.createElement(
				'div',
				null,
				optionList
			);
		}
	}, {
		key: 'handleOptionChange',
		value: function handleOptionChange(value, index) {
			var _props = this.props;
			var options = _props.options;
			var callbackParent = _props.callbackParent;

			options[index].value = value;
			callbackParent(options);
		}
	}, {
		key: 'handleOptionRemove',
		value: function handleOptionRemove(index) {
			var _props2 = this.props;
			var options = _props2.options;
			var callbackParent = _props2.callbackParent;

			options.splice(index, 1);
			callbackParent(options);
		}
	}, {
		key: 'handleMove',
		value: function handleMove(dragIndex, hoverIndex) {
			var _props3 = this.props;
			var options = _props3.options;
			var callbackParent = _props3.callbackParent;

			var dragOption = options[dragIndex];
			options.splice(dragIndex, 1);
			options.splice(hoverIndex, 0, dragOption);
			callbackParent(options);
		}
	}]);

	return OptionList;
}(_react.Component);

var OptionBox = function (_Component2) {
	_inherits(OptionBox, _Component2);

	function OptionBox() {
		_classCallCheck(this, OptionBox);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(OptionBox).apply(this, arguments));
	}

	_createClass(OptionBox, [{
		key: 'render',
		value: function render() {
			var _props4 = this.props;
			var options = _props4.options;
			var callbackParent = _props4.callbackParent;


			return _react2.default.createElement(
				_reactBootstrap.FormGroup,
				null,
				_react2.default.createElement(
					_reactBootstrap.Col,
					{ sm: 2, componentClass: _reactBootstrap.ControlLabel },
					'选项'
				),
				_react2.default.createElement(
					_reactBootstrap.Col,
					{ sm: 10 },
					_react2.default.createElement(OptionList, { options: options, callbackParent: callbackParent })
				)
			);
		}
	}]);

	return OptionBox;
}(_react.Component);

exports.default = OptionBox;