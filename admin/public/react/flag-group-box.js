'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flag = _react2.default.createClass({
	displayName: 'Flag',
	render: function render() {
		return _react2.default.createElement(
			_reactBootstrap.Button,
			{ bsStyle: 'link', bsSize: 'sm', onClick: this.handleClick },
			_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'flag', style: { color: this.props.color } })
		);
	},
	handleClick: function handleClick() {
		this.props.callbackParent(this.props.color);
	}
});

var FlagGroupBox = _react2.default.createClass({
	displayName: 'FlagGroupBox',
	getInitialState: function getInitialState() {
		var current = this.props.current || '#FD7D7F';
		return {
			current: current,
			colors: ['#FD7D7F', '#FDBD43', '#F4E447', '#B5DF3A', '#83C9FD', '#E3A7FD', '#C8C8C8']
		};
	},
	render: function render() {
		var _this = this;

		var flags = this.state.colors.map(function (color) {
			return _react2.default.createElement(Flag, { color: color, callbackParent: _this.handleClickFlag });
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
				_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'flag', style: { color: this.state.current } })
			)
		);
	},
	handleClickFlag: function handleClickFlag(color) {
		var _this2 = this;

		this.props.callbackParent(color, function () {
			_this2.setState({ current: color });
		});
	}
});

exports.default = FlagGroupBox;