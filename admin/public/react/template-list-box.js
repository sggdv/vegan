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

var _reactBootstrap = require('react-bootstrap');

var _templateBox = require('./template-box');

var _templateBox2 = _interopRequireDefault(_templateBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Template查询页面
// 操作层：页面标题 + 添加按钮
// 展示层：数据展示

// 整个content
var TemplateListBox = _react2.default.createClass({
	displayName: 'TemplateListBox',
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
		_reactDom2.default.render(_react2.default.createElement(_templateBox2.default, null), document.getElementById('content'));
	}
});

// 展示层
var TemplateList = _react2.default.createClass({
	displayName: 'TemplateList',
	render: function render() {
		var templates = this.props.templates.map(function (template) {
			return _react2.default.createElement(Template, { template: template });
		});
		var puttyDom = new Array();
		templates.forEach(function (template, index, arr) {
			if (index % 2 == 0) {
				// 偶数元素
				if (index == arr.length) puttyDom.push(_react2.default.createElement(
					'div',
					{ className: 'row' },
					arr[index]
				));else puttyDom.push(_react2.default.createElement(
					'div',
					{ className: 'row' },
					arr[index],
					arr[index + 1]
				));
			}
		});
		return _react2.default.createElement(
			'div',
			null,
			puttyDom
		);
	}
});

// 单个表单展示
var Template = _react2.default.createClass({
	displayName: 'Template',
	getInitialState: function getInitialState() {
		return { showModal: false, vid: '' };
	},
	close: function close() {
		this.setState({ showModal: false });
	},
	open: function open() {
		this.setState({ showModal: true });
	},
	handleVidChange: function handleVidChange(event) {
		var vid = event.target.value;
		this.setState({ vid: vid });
	},
	handleSubmit: function handleSubmit() {
		var template = this.props.template;
		var vid = this.state.vid;
		var instance = { template: template, vid: vid };
		_jquery2.default.ajax({
			type: 'POST',
			url: '/instances',
			data: instance,
			dataType: 'json',
			success: function success(data) {
				console.log(data);
			},
			error: function error(xhr, status, err) {
				console.log(err);
			}
		});
	},
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
				{ className: 'panel panel-info' },
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
							_reactBootstrap.Button,
							{ bsStyle: 'default', bsSize: 'xs', style: { marginLeft: "10px" }, onClick: this.open },
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-link' })
						),
						_react2.default.createElement(
							_reactBootstrap.Modal,
							{ show: this.state.showModal, onHide: this.close },
							_react2.default.createElement(
								_reactBootstrap.Modal.Header,
								{ closeBUtton: true },
								_react2.default.createElement(
									_reactBootstrap.Modal.Title,
									null,
									'生成链接'
								)
							),
							_react2.default.createElement(
								_reactBootstrap.Modal.Body,
								null,
								_react2.default.createElement(
									_reactBootstrap.Form,
									{ horizontal: true },
									_react2.default.createElement(
										_reactBootstrap.FormGroup,
										null,
										_react2.default.createElement(
											_reactBootstrap.Col,
											{ componentClass: _reactBootstrap.ControlLabel, sm: 3 },
											'淘宝订单号'
										),
										_react2.default.createElement(
											_reactBootstrap.Col,
											{ sm: 9 },
											_react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: '淘宝订单号', onChange: this.handleVidChange })
										)
									)
								)
							),
							_react2.default.createElement(
								_reactBootstrap.Modal.Footer,
								null,
								_react2.default.createElement(
									_reactBootstrap.Button,
									{ bsStyle: 'success', onClick: this.handleSubmit },
									'提交'
								),
								_react2.default.createElement(
									_reactBootstrap.Button,
									{ onClick: this.close },
									'Close'
								)
							)
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

exports.default = TemplateListBox;