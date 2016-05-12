'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactBootstrap = require('react-bootstrap');

var _reactDnd = require('react-dnd');

var _constants = require('./constants');

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
			var _props = this.props;
			var index = _props.index;
			var _props$item = _props.item;
			var type = _props$item.type;
			var options = _props$item.options;

			var optionBox = void 0;
			if (type == 'radio' || type == 'checkbox') {
				optionBox = _react2.default.createElement(_optionBox2.default, { options: options, callbackParent: this.handleOptionsChange });
			}
			var radioName = '__type_radio_name_' + index;
			var icon = null;
			if (type == 'text') {
				icon = 'font';
			} else if (type == 'radio') {
				icon = 'record';
			} else if (type == 'checkbox') {
				icon = 'check';
			}

			var _props2 = this.props;
			var connectDragSource = _props2.connectDragSource;
			var connectDragPreview = _props2.connectDragPreview;
			var isDragging = _props2.isDragging;
			var connectDropTarget = _props2.connectDropTarget;
			var connectOptionDropTarget = _props2.connectOptionDropTarget;

			var opacity = isDragging ? 0 : 1;
			return connectOptionDropTarget(connectDropTarget(connectDragPreview(_react2.default.createElement(
				'div',
				{ style: { opacity: opacity } },
				_react2.default.createElement(
					_reactBootstrap.Well,
					null,
					_react2.default.createElement(
						_reactBootstrap.FormGroup,
						null,
						connectDragSource(_react2.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label', style: { cursor: 'move' } },
							_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: icon }),
							' 名称'
						)),
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-10' },
							_react2.default.createElement(_reactBootstrap.FormControl, { onChange: this.handleNameChange })
						)
					),
					optionBox
				)
			))));
		}
	}, {
		key: 'handleNameChange',
		value: function handleNameChange(event) {
			var _props3 = this.props;
			var item = _props3.item;
			var index = _props3.index;
			var callbackParent = _props3.callbackParent;

			item.name = event.target.value;
			callbackParent(item, index);
		}
	}, {
		key: 'handleOptionsChange',
		value: function handleOptionsChange(options) {
			var _props4 = this.props;
			var item = _props4.item;
			var index = _props4.index;
			var callbackParent = _props4.callbackParent;

			item.options = options;
			callbackParent(item, index);
		}
	}]);

	return Item;
}(_react.Component);

var itemSource = {
	beginDrag: function beginDrag(props) {
		return {
			index: props.index,
			removeItem: props.removeItem
		};
	}
};

var Src = (0, _reactDnd.DragSource)(_constants.ItemTypes.Trash, itemSource, function (connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging()
	};
})(Item);

var target = {
	hover: function hover(props, monitor, component) {
		var dragIndex = monitor.getItem().index;
		var hoverIndex = props.index;
		if (dragIndex === hoverIndex) {
			return;
		}
		var hoverBoundingRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();
		var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
		var clientOffset = monitor.getClientOffset();
		var hoverClientY = clientOffset.y - hoverBoundingRect.top;
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return;
		}
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return;
		}
		props.move(dragIndex, hoverIndex);
		monitor.getItem().index = hoverIndex;
	}
};

var TargetSrc = (0, _reactDnd.DropTarget)(_constants.ItemTypes.Trash, target, function (connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget()
	};
})(Src);

var optionTarget = {
	drop: function drop(props, monitor, component) {
		var item = props.item;
		var index = props.index;
		var callbackParent = props.callbackParent;

		item.options.push('');
		callbackParent(item, index);
	}
};

var OptionTarget = (0, _reactDnd.DropTarget)(_constants.ItemTypes.ADD_OPTION, optionTarget, function (connect, monitor) {
	return {
		connectOptionDropTarget: connect.dropTarget()
	};
})(TargetSrc);

exports.default = OptionTarget;