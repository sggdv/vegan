'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactDnd = require('react-dnd');

var _optionBox = require('./option-box');

var _optionBox2 = _interopRequireDefault(_optionBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
	_inherits(Item, _Component);

	function Item(props) {
		_classCallCheck(this, Item);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));

		_this.handleNameChange = _this.handleNameChange.bind(_this);
		_this.handleOptionsChange = _this.handleOptionsChange.bind(_this);
		return _this;
	}

	_createClass(Item, [{
		key: 'render',
		value: function render() {
			var _props$item = this.props.item;
			var type = _props$item.type;
			var options = _props$item.options;

			var optionBox = void 0;
			if (type == 'radio' || type == 'checkbox') {
				optionBox = _react2.default.createElement(_optionBox2.default, { options: options, callbackParent: this.handleOptionsChange });
			}
			var radioName = '__type_radio_name_' + this.props.index;
			var icon = null;
			if (type == 'text') {
				icon = 'font';
			} else if (type == 'radio') {
				icon = 'record';
			} else if (type == 'checkbox') {
				icon = 'check';
			}

			var _props = this.props;
			var connectDragSource = _props.connectDragSource;
			var isDragging = _props.isDragging;

			var opacity = isDragging ? 0 : 1;
			return connectDragSource(_react2.default.createElement(
				'div',
				{ style: { opacity: opacity, cursor: 'move' } },
				_react2.default.createElement(
					_reactBootstrap.Well,
					null,
					_react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: icon }),
							' 名称'
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-10' },
							_react2.default.createElement('input', { type: 'text', className: 'form-control', onChange: this.handleNameChange })
						)
					),
					optionBox
				)
			));
		}
	}, {
		key: 'handleNameChange',
		value: function handleNameChange(event) {
			var item = this.props.item;

			item.name = event.target.value;
			this.props.callbackParent(item, this.props.index);
		}
	}, {
		key: 'handleOptionsChange',
		value: function handleOptionsChange(options) {
			var item = this.props.item;

			item.options = options;
			this.props.callbackParent(item, this.props.index);
		}
	}]);

	return Item;
}(_react.Component);

var itemSource = {
	beginDrag: function beginDrag(props) {
		return {};
	}
};

exports.default = (0, _reactDnd.DragSource)('a', itemSource, function (connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
})(Item);