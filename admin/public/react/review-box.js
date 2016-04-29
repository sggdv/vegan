'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Template查询页面
// 操作层：页面标题 + 添加按钮
// 展示层：数据展示

// 整个content
var ReviewBox = _react2.default.createClass({
	displayName: 'ReviewBox',
	getInitialState: function getInitialState() {
		var templates = [];
		return { templates: templates };
	},
	componentDidMount: function componentDidMount() {
		_jquery2.default.ajax({
			type: 'GET',
			url: '/templates',
			dataType: 'json',
			cache: false,
			success: function (templates) {
				this.setState({ templates: templates });
			}.bind(this),
			error: function (xhr, status, err) {
				console.error('abc', status, err.toString());
			}.bind(this)
		});
	},
	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(TemplateListOpration, null),
			_react2.default.createElement(TemplateList, { templates: this.state.templates })
		);
	}
});

// 操作层
var TemplateListOpration = _react2.default.createClass({
	displayName: 'TemplateListOpration',
	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'div',
				{ className: 'page-header' },
				_react2.default.createElement(
					'h3',
					null,
					'表单管理'
				)
			),
			_react2.default.createElement(
				'button',
				{ className: 'btn btn-danger', onClick: this.handleAdd },
				_react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' }),
				' 添加表单'
			),
			_react2.default.createElement('hr', null)
		);
	},
	handleAdd: function handleAdd() {
		_reactDom2.default.render(_react2.default.createElement(TemplateBox, null), document.getElementById('content'));
	}
});

// 展示层
var TemplateList = _react2.default.createClass({
	displayName: 'TemplateList',
	render: function render() {
		var templates = this.props.templates.map(function (template) {
			return _react2.default.createElement(Template, { template: template });
		});
		return _react2.default.createElement(
			'div',
			{ className: 'row' },
			templates
		);
	}
});

// 单个表单展示
var Template = _react2.default.createClass({
	displayName: 'Template',
	render: function render() {
		var spanStyle = { marginRight: "15px" };
		var items = this.props.template.items.map(function (item) {
			var options = item.options.map(function (option) {
				if (!option || option == '') return;
				return _react2.default.createElement(
					'span',
					{ className: 'label label-default', style: spanStyle },
					option
				);
			});

			return _react2.default.createElement(
				'tr',
				null,
				_react2.default.createElement(
					'td',
					null,
					item.name
				),
				_react2.default.createElement(
					'td',
					null,
					function () {
						switch (item.type) {
							case "text":
								return "文本";
							case "radio":
								return "单选";
							case "checkbox":
								return "多选";
							default:
								return "";
						}
					}()
				),
				_react2.default.createElement(
					'td',
					null,
					options
				)
			);
		});
		return _react2.default.createElement(
			'div',
			{ className: 'col-sm-6' },
			_react2.default.createElement(
				'div',
				{ className: 'panel panel-default' },
				_react2.default.createElement(
					'div',
					{ className: 'panel-heading' },
					_react2.default.createElement(
						'button',
						{ type: 'button', className: 'close' },
						_react2.default.createElement(
							'span',
							null,
							'×'
						)
					),
					_react2.default.createElement(
						'h3',
						{ className: 'panel-title' },
						this.props.template.title,
						_react2.default.createElement(
							'button',
							{ type: 'button', className: 'btn btn-default btn-xs', style: { marginLeft: "10px" } },
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-pencil' })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'panel-body' },
					this.props.template.remark
				),
				_react2.default.createElement(
					'table',
					{ className: 'table table-hover' },
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'th',
							null,
							'名称'
						),
						_react2.default.createElement(
							'th',
							null,
							'类别'
						),
						_react2.default.createElement(
							'th',
							null,
							'选项'
						)
					),
					items
				)
			)
		);
	}
});

exports.default = ReviewBox;