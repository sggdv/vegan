'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _constants = require('../common/constants');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _sweetalert = require('sweetalert');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buttonStyle = { marginLeft: '10px' };
var spanStyle = { marginRight: '15px' };

// 单个表单展示

var Template = function (_Component) {
	_inherits(Template, _Component);

	function Template(props) {
		_classCallCheck(this, Template);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Template).call(this, props));

		_this.state = { showModal: false, vid: '' };
		_this.close = _this.close.bind(_this);
		_this.open = _this.open.bind(_this);
		_this.handleEmailChange = _this.handleEmailChange.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
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
		key: 'handleEmailChange',
		value: function handleEmailChange(event) {
			var email = event.target.value;
			this.setState({ email: email });
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit() {
			var template = this.props.template;
			var email = this.state.email;

			var instance = { template: template, email: email };
			_jquery2.default.ajax({
				type: 'POST',
				url: '/instances',
				data: instance,
				dataType: 'json',
				success: function (data, stat, xhr) {
					if (xhr.status == 201) {
						// sweetalert 提示语
						console.log('ok');
						this.setState({ showModal: false });
						(0, _sweetalert2.default)('Nice', 'submit now', 'success');
					}
				}.bind(this),
				error: function error(xhr, stat, err) {
					console.log(err);
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var template = _props.template;
			var _props$template = _props.template;
			var title = _props$template.title;
			var remark = _props$template.remark;
			var items = _props$template.items;

			console.log(template);
			var itemsDOM = items.map(function (item) {
				var name = item.name;
				var type = item.type;
				var options = item.options;


				var typeText = void 0;
				switch (type) {
					case _constants.ItemTypes.TEXT:
						typeText = "文本";
						break;
					case _constants.ItemTypes.RADIO:
						typeText = "单选";
						break;
					case _constants.ItemTypes.CHECKBOX:
						typeText = "多选";
						break;
					case _constants.ItemTypes.FILE:
						typeText = "文件";
						break;
					default:
						typeText = "";
				}

				var optionsDOM = [];

				if (options) {
					// 在type属性为TEXT的情况下，options是没有被定义的!
					optionsDOM = options.map(function (opt) {
						if (!opt || opt.value == '') return;

						return _react2.default.createElement(
							_reactBootstrap.Label,
							{ style: spanStyle },
							opt.value
						);
					});
				}
				return _react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						name
					),
					_react2.default.createElement(
						'td',
						null,
						typeText
					),
					_react2.default.createElement(
						'td',
						null,
						optionsDOM
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
							title,
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ bsSize: 'xs', style: buttonStyle, onClick: this.open },
								_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'link' })
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'panel-body' },
						remark
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
						itemsDOM
					)
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
							_reactBootstrap.Form,
							{ horizontal: true },
							_react2.default.createElement(
								_reactBootstrap.FormGroup,
								null,
								_react2.default.createElement(
									_reactBootstrap.Col,
									{ componentClass: _reactBootstrap.ControlLabel, sm: 2 },
									'邮箱地址'
								),
								_react2.default.createElement(
									_reactBootstrap.Col,
									{ sm: 10 },
									_react2.default.createElement(_reactBootstrap.FormControl, { type: 'email', placeholder: '邮箱地址', onChange: this.handleEmailChange })
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
			);
		}
	}]);

	return Template;
}(_react.Component);

exports.default = Template;