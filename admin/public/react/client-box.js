'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 单个资料项展示
var Item = _react2.default.createClass({
	displayName: 'Item',
	render: function render() {
		var _this = this;

		var _props = this.props;
		var index = _props.index;
		var _props$item = _props.item;
		var name = _props$item.name;
		var type = _props$item.type;
		var value = _props$item.value;
		var options = _props$item.options;

		if (type == 'text') {
			return _react2.default.createElement(
				'div',
				{ className: 'form-group' },
				_react2.default.createElement(
					'label',
					null,
					name
				),
				_react2.default.createElement('input', { type: 'text', className: 'form-control', onChange: this.handleTextChange, value: value })
			);
		} else if (type == 'radio') {
			var _ret = function () {
				var radioName = '__review_radio_' + index;

				return {
					v: _react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							null,
							name
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'div',
							{ className: 'btn-group' },
							options.map(function (opt) {
								return _react2.default.createElement(
									'label',
									{ className: 'btn btn-default' },
									_react2.default.createElement('input', { type: 'radio', name: radioName, value: opt.value, onClick: _this.handleRadioChange, checked: opt.value == value }),
									' ',
									opt.value
								);
							}, _this)
						)
					)
				};
			}();

			if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
		} else if (type == 'checkbox') {
			var _ret2 = function () {
				var checkboxName = '__review_checkbox_' + index;

				return {
					v: _react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							null,
							name
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'div',
							{ className: 'btn-group' },
							options.map(function (opt) {
								return _react2.default.createElement(
									'label',
									{ className: 'btn btn-default' },
									_react2.default.createElement('input', { type: 'checkbox', name: checkboxName }),
									' ',
									opt.value
								);
							}, _this)
						)
					)
				};
			}();

			if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
		} else if (type == 'file') {
			return _react2.default.createElement(
				_reactBootstrap.FormGroup,
				null,
				_react2.default.createElement(
					'label',
					null,
					name
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement('input', { type: 'file' })
			);
		}
	},
	handleTextChange: function handleTextChange(event) {
		var _props2 = this.props;
		var item = _props2.item;
		var callbackParent = _props2.callbackParent;
		var index = _props2.index;

		item.value = event.target.value;
		callbackParent(item, index);
	},
	handleRadioChange: function handleRadioChange(event) {
		var _props3 = this.props;
		var item = _props3.item;
		var callbackParent = _props3.callbackParent;
		var index = _props3.index;

		item.value = event.target.value;
		callbackParent(item, index);
	}
});

// 客户端展示组件
var Client = _react2.default.createClass({
	displayName: 'Client',
	getInitialState: function getInitialState() {
		return this.props.template;
	},
	render: function render() {
		var _this2 = this;

		var items = this.state.items.map(function (item, index) {
			return _react2.default.createElement(Item, { item: item, index: index, callbackParent: _this2.handleItemChange });
		}, this);
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'div',
				{ className: 'page-header' },
				_react2.default.createElement(
					'h3',
					null,
					this.props.template.title
				)
			),
			_react2.default.createElement(
				'form',
				null,
				items,
				_react2.default.createElement('hr', null),
				_react2.default.createElement(
					'button',
					{ type: 'button', className: 'btn btn-success', onClick: this.handleSubmit },
					_react2.default.createElement('span', { className: 'glyphicon glyphicon-ok' }),
					' 提交'
				)
			)
		);
	},
	handleSubmit: function handleSubmit() {
		this.props.callbackParent(this.state);
	},
	handleItemChange: function handleItemChange(item, index) {
		var items = this.state.items;
		items[index] = item;
		this.setState({ items: items });
	}
});

// usage: <Client template={template} />
exports.default = Client;