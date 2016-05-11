'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 选项值
var Option = _react2.default.createClass({
	displayName: 'Option',
	render: function render() {
		return _react2.default.createElement(
			_reactBootstrap.Col,
			{ sm: 6 },
			_react2.default.createElement(
				_reactBootstrap.Col,
				{ sm: 10 },
				_react2.default.createElement(
					_reactBootstrap.InputGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.InputGroup.Addon,
						null,
						_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'move' })
					),
					_react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: this.props.placeholder, onChange: this.handleChange, value: this.props.value })
				)
			)
		);
	},
	handleChange: function handleChange(event) {
		this.props.callbackParent(event.target.value, this.props.index);
	}
});

var OptionList = _react2.default.createClass({
	displayName: 'OptionList',
	render: function render() {
		var _this = this;

		var optionList = this.props.options.map(function (opt, index) {
			var placeholder = '选项' + (index + 1);
			return _react2.default.createElement(Option, { placeholder: placeholder, index: index, value: opt, callbackParent: _this.handleOptionChange });
		}, this);
		return _react2.default.createElement(
			_reactBootstrap.Row,
			null,
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
	displayName: 'OptionBox',
	render: function render() {
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
				_react2.default.createElement(OptionList, { options: this.props.options, callbackParent: this.props.callbackParent })
			)
		);
	}
});

exports.default = OptionBox;