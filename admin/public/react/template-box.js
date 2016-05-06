'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _itemBox = require('./item-box');

var _itemBox2 = _interopRequireDefault(_itemBox);

var _clientBox = require('./client-box');

var _clientBox2 = _interopRequireDefault(_clientBox);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TemplateBox = _react2.default.createClass({
	displayName: 'TemplateBox',
	getInitialState: function getInitialState() {
		return { title: '', items: [{ name: '', type: 'text', options: ['', '', ''] }] };
	},
	render: function render() {
		return _react2.default.createElement(
			_reactBootstrap.Row,
			null,
			_react2.default.createElement(
				_reactBootstrap.Col,
				{ sm: 6 },
				_react2.default.createElement(
					_reactBootstrap.Well,
					null,
					_react2.default.createElement(
						_reactBootstrap.Form,
						{ horizontal: true },
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
						),
						_react2.default.createElement(_itemBox2.default, { items: this.state.items, callbackParent: this.handleItemsChange }),
						_react2.default.createElement(
							_reactBootstrap.FormGroup,
							null,
							_react2.default.createElement(
								_reactBootstrap.Col,
								{ sm: 2 },
								_react2.default.createElement(
									_reactBootstrap.Button,
									{ onClick: this.handleItemAdd },
									_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'plus' })
								)
							),
							_react2.default.createElement(
								_reactBootstrap.Col,
								{ sm: 10 },
								_react2.default.createElement(
									_reactBootstrap.Button,
									{ bsStyle: 'primary', onClick: this.handleCommit },
									_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok' }),
									' 保存表单'
								)
							)
						)
					)
				)
			),
			_react2.default.createElement(
				_reactBootstrap.Col,
				{ sm: 6 },
				_react2.default.createElement(
					_reactBootstrap.Well,
					null,
					_react2.default.createElement(_clientBox2.default, { template: this.state })
				)
			)
		);
	},
	handleTitleChange: function handleTitleChange(event) {
		var title = event.target.value;
		console.log(title);
		this.setState({ title: title });
	},
	handleItemsChange: function handleItemsChange(items) {
		this.setState({ items: items });
	},
	handleItemAdd: function handleItemAdd() {
		var items = this.state.items;
		items.push({ name: '', type: 'text', options: ['', '', ''] });
		this.setState({ items: items });
	},
	handleCommit: function handleCommit() {
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
});

exports.default = TemplateBox;