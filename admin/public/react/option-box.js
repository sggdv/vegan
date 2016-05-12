'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _option = require('./option');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionList = _react2.default.createClass({
	displayName: 'OptionList',
	render: function render() {
		var _this = this;

		var optionList = this.props.options.map(function (opt, index) {
			var placeholder = '选项' + (index + 1);
			return _react2.default.createElement(_option2.default, {
				key: index,
				placeholder: placeholder,
				index: index,
				value: opt,
				callbackParent: _this.handleOptionChange,
				removeOption: _this.handleOptionRemove,
				move: _this.handleMove });
		}, this);
		return _react2.default.createElement(
			'div',
			null,
			optionList
		);
	},
	handleOptionChange: function handleOptionChange(option, index) {
		var _props = this.props;
		var options = _props.options;
		var callbackParent = _props.callbackParent;

		options[index] = option;
		callbackParent(options);
	},
	handleOptionRemove: function handleOptionRemove(index) {
		var _props2 = this.props;
		var options = _props2.options;
		var callbackParent = _props2.callbackParent;

		options.splice(index, 1);
		callbackParent(options);
	},
	handleMove: function handleMove(dragIndex, hoverIndex) {
		var _props3 = this.props;
		var options = _props3.options;
		var callbackParent = _props3.callbackParent;

		var dragOption = options[dragIndex];
		options.splice(dragIndex, 1);
		options.splice(hoverIndex, 0, dragOption);
		callbackParent(options);
	}
});

var OptionBox = _react2.default.createClass({
	displayName: 'OptionBox',
	render: function render() {
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
});

exports.default = OptionBox;