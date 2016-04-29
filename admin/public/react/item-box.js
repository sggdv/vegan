'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _optionBox = require('./option-box');

var _optionBox2 = _interopRequireDefault(_optionBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = _react2.default.createClass({
	displayName: 'Item',
	render: function render() {
		var optionBox = void 0;
		if (this.props.item.type == 'radio' || this.props.item.type == 'checkbox') {
			optionBox = _react2.default.createElement(_optionBox2.default, { options: this.props.item.options, callbackParent: this.handleOptionsChange });
		}
		var radioName = '__type_radio_name_' + this.props.index;
		return _react2.default.createElement(
			'div',
			{ className: 'item' },
			_react2.default.createElement('hr', null),
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					{ className: 'col-sm-2 control-label' },
					'名称'
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-10' },
					_react2.default.createElement('input', { type: 'text', className: 'form-control', onChange: this.handleNameChange })
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					{ className: 'col-sm-2 control-label' },
					'类型'
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-10' },
					_react2.default.createElement(
						'div',
						{ className: 'btn-group' },
						_react2.default.createElement(
							'label',
							{ className: 'btn btn-default' },
							_react2.default.createElement('input', { type: 'radio', name: radioName, value: 'text', checked: this.props.item.type == 'text', onChange: this.handleTypeChange }),
							' 文本'
						),
						_react2.default.createElement(
							'label',
							{ className: 'btn btn-default' },
							_react2.default.createElement('input', { type: 'radio', name: radioName, value: 'radio', onChange: this.handleTypeChange }),
							' 单选'
						),
						_react2.default.createElement(
							'label',
							{ className: 'btn btn-default' },
							_react2.default.createElement('input', { type: 'radio', name: radioName, value: 'checkbox', onChange: this.handleTypeChange }),
							' 多选'
						),
						_react2.default.createElement(
							'label',
							{ className: 'btn btn-default' },
							_react2.default.createElement('input', { type: 'radio', name: radioName, value: 'file', onChange: this.handleTypeChange }),
							' 文件上传'
						)
					)
				)
			),
			optionBox
		);
	},
	handleNameChange: function handleNameChange(event) {
		var item = this.props.item;
		item.name = event.target.value;
		this.props.callbackParent(item, this.props.index);
	},
	handleTypeChange: function handleTypeChange(event) {
		var item = this.props.item;
		item.type = event.target.value;
		this.props.callbackParent(item, this.props.index);
	},
	handleOptionsChange: function handleOptionsChange(options) {
		var item = this.props.item;
		item.options = options;
		this.props.callbackParent(item, this.props.index);
	}
});

var ItemBox = _react2.default.createClass({
	displayName: 'ItemBox',
	render: function render() {
		var _this = this;

		var items = this.props.items.map(function (item, index) {
			return _react2.default.createElement(Item, { index: index, item: item, callbackParent: _this.handleChange });
		}, this);
		return _react2.default.createElement(
			'div',
			null,
			items
		);
	},
	handleChange: function handleChange(item, index) {
		var items = this.props.items;
		items[index] = item;
		this.props.callbackParent(items);
	}
});

exports.default = ItemBox;