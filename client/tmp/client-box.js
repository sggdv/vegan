'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 单个资料项展示

var Item = function (_Component) {
	_inherits(Item, _Component);

	function Item(props) {
		_classCallCheck(this, Item);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));

		_this.handleTextChange = _this.handleTextChange.bind(_this);
		_this.handleRadioChange = _this.handleRadioChange.bind(_this);
		return _this;
	}

	_createClass(Item, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props;
			var index = _props.index;
			var _props$item = _props.item;
			var name = _props$item.name;
			var type = _props$item.type;
			var value = _props$item.value;
			var options = _props$item.options;

			if (type == 'text') {
				return _react2.default.createElement(
					_reactBootstrap.FormGroup,
					null,
					_react2.default.createElement(
						'label',
						null,
						name
					),
					_react2.default.createElement(_reactBootstrap.FormControl, { onChange: this.handleTextChange, value: value })
				);
			} else if (type == 'radio') {
				var _ret = function () {
					var radioName = '__review_radio_' + index;

					return {
						v: _react2.default.createElement(
							_reactBootstrap.FormGroup,
							null,
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
										_react2.default.createElement('input', { type: 'radio', name: radioName, value: opt.value, onClick: _this2.handleRadioChange, checked: opt.value == value }),
										' ',
										opt.value
									);
								}, _this2)
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
							_reactBootstrap.FormGroup,
							null,
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
								}, _this2)
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
		}
	}, {
		key: 'handleTextChange',
		value: function handleTextChange(event) {
			var _props2 = this.props;
			var item = _props2.item;
			var callbackParent = _props2.callbackParent;
			var index = _props2.index;

			item.value = event.target.value;
			callbackParent(item, index);
		}
	}, {
		key: 'handleRadioChange',
		value: function handleRadioChange(event) {
			var _props3 = this.props;
			var item = _props3.item;
			var callbackParent = _props3.callbackParent;
			var index = _props3.index;

			item.value = event.target.value;
			callbackParent(item, index);
		}
	}]);

	return Item;
}(_react.Component);

// 客户端展示组件


var Client = function (_Component2) {
	_inherits(Client, _Component2);

	function Client(props) {
		_classCallCheck(this, Client);

		var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Client).call(this, props));

		_this3.state = props.template;

		_this3.handleSubmit = _this3.handleSubmit.bind(_this3);
		_this3.handleItemChange = _this3.handleItemChange.bind(_this3);
		return _this3;
	}

	_createClass(Client, [{
		key: 'render',
		value: function render() {
			var _this4 = this;

			var items = this.state.items;
			var title = this.props.template.title;


			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactBootstrap.PageHeader,
					null,
					title
				),
				_react2.default.createElement(
					'form',
					null,
					items.map(function (item, index) {
						return _react2.default.createElement(Item, { item: item, index: index, callbackParent: _this4.handleItemChange });
					}, this),
					_react2.default.createElement('hr', null),
					_react2.default.createElement(
						_reactBootstrap.Button,
						{ bsStyle: 'success', onClick: this.handleSubmit },
						_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok' }),
						' 提交'
					)
				)
			);
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit() {
			var callbackParent = this.props.callbackParent;

			callbackParent(this.state);
		}
	}, {
		key: 'handleItemChange',
		value: function handleItemChange(item, index) {
			var items = this.state.items;

			items[index] = item;
			this.setState({ items: items });
		}
	}]);

	return Client;
}(_react.Component);

exports.default = Client;