"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 选项值
var Option = _react2.default.createClass({
	displayName: "Option",
	render: function render() {
		return _react2.default.createElement(
			"div",
			{ className: "col-sm-4" },
			_react2.default.createElement(
				"div",
				{ className: "col-sm-10" },
				_react2.default.createElement("input", { type: "text", className: "form-control", placeholder: this.props.placeholder, onChange: this.handleChange, value: this.props.value })
			)
		);
	},
	handleChange: function handleChange(event) {
		this.props.callbackParent(event.target.value, this.props.index);
	}
});

var OptionList = _react2.default.createClass({
	displayName: "OptionList",
	render: function render() {
		var _this = this;

		var optionList = this.props.options.map(function (opt, index) {
			var placeholder = '选项' + (index + 1);
			return _react2.default.createElement(Option, { placeholder: placeholder, index: index, value: opt, callbackParent: _this.handleOptionChange });
		}, this);
		return _react2.default.createElement(
			"div",
			{ className: "row" },
			optionList
		);
	},
	handleOptionChange: function handleOptionChange(option, index) {
		var options = this.props.options;
		options[index] = option;
		this.props.callbackParent(options);
	}
});

var OptionBox = _react2.default.createClass({
	displayName: "OptionBox",
	render: function render() {
		return _react2.default.createElement(
			"div",
			{ className: "form-group" },
			_react2.default.createElement(
				"label",
				{ className: "col-sm-2 control-label" },
				"选项"
			),
			_react2.default.createElement(
				"div",
				{ className: "col-sm-10" },
				_react2.default.createElement(OptionList, { options: this.props.options, callbackParent: this.props.callbackParent })
			)
		);
	}
});

exports.default = OptionBox;