'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sidebar = {
	position: 'fixed',
	top: '51px',
	bottom: 0,
	left: 0,
	zIndex: 1000,
	display: 'block',
	padding: '20px',
	overflowX: 'hidden',
	overflowY: 'auto',
	backgroundColor: '#f5f5f5',
	borderRight: '1px solid #eee'
};
var navSidebar = {
	marginRight: '-21px',
	marginBottom: '20px',
	marginLeft: '-20px'
};
var main = {
	paddingRight: '40px',
	paddingLeft: '40px'
};

var InstanceListPage = (_dec = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default), _dec(_class = function (_Component) {
	_inherits(InstanceListPage, _Component);

	function InstanceListPage(props) {
		_classCallCheck(this, InstanceListPage);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InstanceListPage).call(this, props));

		_this.state = {
			instances: [],
			inbox: true,
			tags: false
		};

		_this.componentDidMount = _this.componentDidMount.bind(_this);
		_this.handleInboxClick = _this.handleInboxClick.bind(_this);
		_this.handleTagsClick = _this.handleTagsClick.bind(_this);
		return _this;
	}

	_createClass(InstanceListPage, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_jquery2.default.ajax({
				type: 'GET',
				url: '/instances',
				dataType: 'json',
				cache: false,
				success: function (instances) {
					this.setState({ instances: instances });
				}.bind(this),
				error: function (xhr, stat, err) {
					console.error('/instances', stat, err.toString);
				}.bind(this)
			});
		}
	}, {
		key: 'handleInboxClick',
		value: function handleInboxClick() {
			var _state = this.state;
			var inbox = _state.inbox;
			var tags = _state.tags;

			inbox = !inbox;
			if (inbox) {
				tags = false;
			}
			this.setState({ inbox: inbox, tags: tags });
		}
	}, {
		key: 'handleTagsClick',
		value: function handleTagsClick() {
			var _state2 = this.state;
			var inbox = _state2.inbox;
			var tags = _state2.tags;

			tags = !tags;
			if (tags) {
				inbox = false;
			}
			this.setState({ inbox: inbox, tags: tags });
		}
	}, {
		key: 'render',
		value: function render() {
			var _state3 = this.state;
			var inbox = _state3.inbox;
			var tags = _state3.tags;

			var inboxStyle = inbox ? 'primary' : 'default';
			var tagsStyle = tags ? 'primary' : 'default';

			var pageHeaderText = inbox ? '待处理资料' : '所有资料';
			if (!inbox) {
				pageHeaderText = tags ? '已归档资料' : pageHeaderText;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'row' },
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-2 col-md-1 text-center', style: sidebar },
					_react2.default.createElement(
						'ul',
						{ className: 'nav', style: navSidebar },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ bsSize: 'lg', bsStyle: inboxStyle, onClick: this.handleInboxClick },
								_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'inbox' })
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ bsSize: 'lg', bsStyle: tagsStyle, onClick: this.handleTagsClick },
								_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'tags' })
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ bsSize: 'lg' },
								_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'trash' })
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-sm-10 col-sm-offset-2 col-md-11 col-md-offset-1', style: main },
					_react2.default.createElement(
						_reactBootstrap.PageHeader,
						null,
						pageHeaderText
					),
					_react2.default.createElement(_list2.default, { instances: this.state.instances })
				)
			);
		}
	}]);

	return InstanceListPage;
}(_react.Component)) || _class);
exports.default = InstanceListPage;