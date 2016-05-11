'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _itemBox = require('./item-box');

var _itemBox2 = _interopRequireDefault(_itemBox);

var _clientBox = require('./client-box');

var _clientBox2 = _interopRequireDefault(_clientBox);

var _reactBootstrap = require('react-bootstrap');

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TemplateBox = function (_Component) {
	_inherits(TemplateBox, _Component);

	function TemplateBox(props) {
		_classCallCheck(this, TemplateBox);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TemplateBox).call(this, props));

		_this.handleTitleChange = _this.handleTitleChange.bind(_this);
		_this.handleItemsChange = _this.handleItemsChange.bind(_this);
		_this.handleTextItemAdd = _this.handleTextItemAdd.bind(_this);
		_this.handleRadioItemAdd = _this.handleRadioItemAdd.bind(_this);
		_this.handleCheckBoxItemAdd = _this.handleCheckBoxItemAdd.bind(_this);
		_this.handleFileItemAdd = _this.handleFileItemAdd.bind(_this);
		_this.handleCommit = _this.handleCommit.bind(_this);

		_this.state = { title: '', items: [{ name: '', type: 'text', options: ['', '', ''] }] };
		return _this;
	}

	_createClass(TemplateBox, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactBootstrap.Row,
				null,
				_react2.default.createElement(
					_reactBootstrap.Col,
					{ sm: 1 },
					_react2.default.createElement(
						_reactBootstrap.PageHeader,
						null,
						_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'wrench' })
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ bsSize: 'lg', onClick: this.handleTextItemAdd },
							_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'font' })
						)
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ bsSize: 'lg', onClick: this.handleRadioItemAdd },
							_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'record' })
						)
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ bsSize: 'lg', onClick: this.handleCheckBoxItemAdd },
							_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'check' })
						)
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ bsSize: 'lg', onClick: this.handleFileItemAdd },
							_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'file' })
						)
					),
					_react2.default.createElement(
						'div',
						{ style: { marginTop: '50px' } },
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ bsSize: 'lg' },
							_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'trash' })
						)
					)
				),
				_react2.default.createElement(
					_reactBootstrap.Col,
					{ sm: 6 },
					_react2.default.createElement(
						_reactBootstrap.PageHeader,
						null,
						'编辑区'
					),
					_react2.default.createElement(
						_reactBootstrap.Form,
						{ horizontal: true },
						_react2.default.createElement(
							_reactBootstrap.Well,
							null,
							_react2.default.createElement(
								_reactBootstrap.FormGroup,
								null,
								_react2.default.createElement(
									_reactBootstrap.Col,
									{ componentClass: _reactBootstrap.ControlLabel, sm: 2 },
									'标题'
								),
								_react2.default.createElement(
									_reactBootstrap.Col,
									{ sm: 10 },
									_react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', onChange: this.handleTitleChange })
								)
							)
						),
						_react2.default.createElement(_itemBox2.default, { items: this.state.items, callbackParent: this.handleItemsChange }),
						_react2.default.createElement(
							_reactBootstrap.FormGroup,
							null,
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ bsStyle: 'primary', onClick: this.handleCommit },
								_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok' }),
								' 保存表单'
							)
						)
					)
				),
				_react2.default.createElement(
					_reactBootstrap.Col,
					{ sm: 5 },
					_react2.default.createElement(
						_reactBootstrap.PageHeader,
						null,
						'预览区'
					),
					_react2.default.createElement(
						_reactBootstrap.Well,
						null,
						_react2.default.createElement(_clientBox2.default, { template: this.state })
					)
				)
			);
		}
	}, {
		key: 'handleTitleChange',
		value: function handleTitleChange(event) {
			var title = event.target.value;
			this.setState({ title: title });
		}
	}, {
		key: 'handleItemsChange',
		value: function handleItemsChange(items) {
			this.setState({ items: items });
		}
	}, {
		key: 'handleTextItemAdd',
		value: function handleTextItemAdd() {
			var items = this.state.items;

			items.push({ name: '', type: 'text' });
			this.setState({ items: items });
		}
	}, {
		key: 'handleRadioItemAdd',
		value: function handleRadioItemAdd() {
			var items = this.state.items;

			items.push({ name: '', type: 'radio', options: [''] });
			this.setState({ items: items });
		}
	}, {
		key: 'handleCheckBoxItemAdd',
		value: function handleCheckBoxItemAdd() {
			var items = this.state.items;

			items.push({ name: '', type: 'checkbox', options: [''] });
			this.setState({ items: items });
		}
	}, {
		key: 'handleFileItemAdd',
		value: function handleFileItemAdd() {
			var items = this.state.items;

			items.push({ name: '', type: 'file' });
			this.setState({ items: items });
		}
	}, {
		key: 'handleCommit',
		value: function handleCommit() {
			var template = this.state;
			// TODO 提交表单
			_jquery2.default.ajax({
				type: 'POST',
				contentType: 'application/json',
				url: '/templates',
				data: JSON.stringify(template),
				dataType: 'json',
				success: function success(data) {
					alert('ok');
				},
				beforeSend: function beforeSend() {}
			});
		}
	}]);

	return TemplateBox;
}(_react.Component);

exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(TemplateBox);