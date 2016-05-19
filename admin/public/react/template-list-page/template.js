'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('../common/constants');

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
		_this.handleVidChange = _this.handleVidChange.bind(_this);
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
			$.ajax({
				type: 'POST',
				url: '/instances',
				data: instance,
				dataType: 'json',
				success: function success(data) {
					console.log(data);
				},
				error: function error(xhr, stat, err) {
					console.log(err);
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props$template = this.props.template;
			var title = _props$template.title;
			var remark = _props$template.remark;
			var items = _props$template.items;


			var itemsROM = items.map(function (item) {
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

				var optionsDOM = options.map(function (opt) {
					if (!opt || opt.value == '') return;
					return _react2.default.createElement(
						Label,
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
				Col,
				{ sm: 6 },
				_react2.default.createElement(
					'div',
					{ className: 'panel panel-info' },
					_react2.default.createElement(
						'div',
						{ className: 'panel-heading' },
						_react2.default.createElement(
							Button,
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
								Button,
								{ bsSize: 'xs', style: buttonStyle, onClick: this.open },
								_react2.default.createElement(Glyphicon, { glyph: 'link' })
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'panel-body' },
						remark
					),
					_react2.default.createElement(
						Table,
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
					Modal,
					{ show: this.state.showModal, onHide: this.close, bsSize: 'lg' },
					_react2.default.createElement(
						Modal.Header,
						{ closeBUtton: true },
						_react2.default.createElement(
							Modal.Title,
							null,
							'生成链接'
						)
					),
					_react2.default.createElement(
						Modal.Body,
						null,
						_react2.default.createElement(
							'div',
							{ style: { paddingBottom: '15px' } },
							_react2.default.createElement(
								Nav,
								{ bsStyle: 'tabs', justified: true, activeKey: 1 },
								_react2.default.createElement(
									NavItem,
									{ eventKey: 1 },
									'Email'
								),
								_react2.default.createElement(
									NavItem,
									{ eventKey: 2 },
									'微信'
								),
								_react2.default.createElement(
									NavItem,
									{ eventKey: 3 },
									'手机号码'
								)
							)
						),
						_react2.default.createElement('div', null)
					),
					_react2.default.createElement(
						Modal.Footer,
						null,
						_react2.default.createElement(
							Button,
							{ bsStyle: 'success', onClick: this.handleSubmit },
							'提交'
						),
						_react2.default.createElement(
							Button,
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