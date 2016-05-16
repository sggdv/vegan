'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = require('react-bootstrap');

var _senders = require('./senders');

var _templateBox = require('./template-box');

var _templateBox2 = _interopRequireDefault(_templateBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Template查询页面
// 操作层：页面标题 + 添加按钮
// 展示层：数据展示

// 整个content

var TemplateListBox = function (_Component) {
	_inherits(TemplateListBox, _Component);

	function TemplateListBox(props) {
		_classCallCheck(this, TemplateListBox);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TemplateListBox).call(this, props));

		_this.state = { templates: [] };
		_this.componentDidMount = _this.componentDidMount.bind(_this);
		return _this;
	}

	_createClass(TemplateListBox, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
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
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(TemplateListOpration, null),
				_react2.default.createElement(TemplateList, { templates: this.state.templates })
			);
		}
	}]);

	return TemplateListBox;
}(_react.Component);

// 操作层


exports.default = TemplateListBox;

var TemplateListOpration = function (_Component2) {
	_inherits(TemplateListOpration, _Component2);

	function TemplateListOpration(props) {
		_classCallCheck(this, TemplateListOpration);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(TemplateListOpration).call(this, props));

		_this2.handleAdd = _this2.handleAdd.bind(_this2);
		return _this2;
	}

	_createClass(TemplateListOpration, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactBootstrap.PageHeader,
					null,
					'表单管理'
				),
				_react2.default.createElement(
					_reactBootstrap.Button,
					{ bsStyle: 'danger', onClick: this.handleAdd },
					_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'plus' }),
					' 添加表单'
				),
				_react2.default.createElement('hr', null)
			);
		}
	}, {
		key: 'handleAdd',
		value: function handleAdd() {
			_reactDom2.default.render(_react2.default.createElement(_templateBox2.default, null), document.getElementById('content'));
		}
	}]);

	return TemplateListOpration;
}(_react.Component);

// 展示层


var TemplateList = function (_Component3) {
	_inherits(TemplateList, _Component3);

	function TemplateList() {
		_classCallCheck(this, TemplateList);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(TemplateList).apply(this, arguments));
	}

	_createClass(TemplateList, [{
		key: 'render',
		value: function render() {
			var templates = this.props.templates.map(function (template) {
				return _react2.default.createElement(Template, { template: template });
			});
			var puttyDom = [];
			templates.forEach(function (template, index, arr) {
				if (index % 2 == 0) {
					// 偶数元素
					if (index == arr.length) puttyDom.push(_react2.default.createElement(
						_reactBootstrap.Row,
						null,
						arr[index]
					));else puttyDom.push(_react2.default.createElement(
						_reactBootstrap.Row,
						null,
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
	}]);

	return TemplateList;
}(_react.Component);

// 单个表单展示


var Template = function (_Component4) {
	_inherits(Template, _Component4);

	function Template(props) {
		_classCallCheck(this, Template);

		var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Template).call(this, props));

		_this4.state = { showModal: false, vid: '' };
		_this4.close = _this4.close.bind(_this4);
		_this4.open = _this4.open.bind(_this4);
		_this4.handleVidChange = _this4.handleVidChange.bind(_this4);
		_this4.handleSubmit = _this4.handleSubmit.bind(_this4);
		return _this4;
	}

	_createClass(Template, [{
		key: 'close',
		value: function close() {
			this.setState({ showModal: false });
		}
	}, {
		key: 'open',
		value: function open() {
			this.setState({ showModal: true });
		}
	}, {
		key: 'handleVidChange',
		value: function handleVidChange(event) {
			var vid = event.target.value;
			this.setState({ vid: vid });
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit() {
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
		}
	}, {
		key: 'render',
		value: function render() {
			var spanStyle = { marginRight: "15px" };
			var items = this.props.template.items.map(function (item) {
				var options = item.options.map(function (opt) {
					if (!opt || opt.value == '') return;
					return _react2.default.createElement(
						_reactBootstrap.Label,
						{ style: spanStyle },
						opt.value
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
				_reactBootstrap.Col,
				{ sm: 6 },
				_react2.default.createElement(
					'div',
					{ className: 'panel panel-info' },
					_react2.default.createElement(
						'div',
						{ className: 'panel-heading' },
						_react2.default.createElement(
							_reactBootstrap.Button,
							{ className: 'close' },
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
								{ bsSize: 'xs', style: { marginLeft: "10px" }, onClick: this.open },
								_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'link' })
							),
							_react2.default.createElement(
								_reactBootstrap.Modal,
								{ show: this.state.showModal, onHide: this.close, bsSize: 'lg' },
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
										'div',
										{ style: { paddingBottom: '15px' } },
										_react2.default.createElement(
											_reactBootstrap.Nav,
											{ bsStyle: 'tabs', justified: true, activeKey: 1 },
											_react2.default.createElement(
												_reactBootstrap.NavItem,
												{ eventKey: 1 },
												'Email'
											),
											_react2.default.createElement(
												_reactBootstrap.NavItem,
												{ eventKey: 2 },
												'微信'
											),
											_react2.default.createElement(
												_reactBootstrap.NavItem,
												{ eventKey: 3 },
												'手机号码'
											)
										)
									),
									_react2.default.createElement(
										'div',
										null,
										_react2.default.createElement(_senders.EmailSender, null)
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
						_reactBootstrap.Table,
						{ hover: true },
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
	}]);

	return Template;
}(_react.Component);