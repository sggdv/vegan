'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstanceListBox = _react2.default.createClass({
	displayName: 'InstanceListBox',
	getInitialState: function getInitialState() {
		var instances = [];
		return { instances: instances };
	},
	componentDidMount: function componentDidMount() {
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
	},
	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(InstanceListOpration, null),
			_react2.default.createElement(InstanceList, { instances: this.state.instances })
		);
	}
});

var InstanceListOpration = _react2.default.createClass({
	displayName: 'InstanceListOpration',
	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				_reactBootstrap.PageHeader,
				null,
				'资料管理'
			),
			_react2.default.createElement(
				_reactBootstrap.Button,
				{ bsStyle: 'danger' },
				_react2.default.createElement('span', { className: 'glyphicon glyphicon-search' }),
				' 搜索'
			),
			_react2.default.createElement('hr', null)
		);
	}
});

var InstanceList = _react2.default.createClass({
	displayName: 'InstanceList',
	render: function render() {
		var instances = this.props.instances.map(function (instance) {
			return _react2.default.createElement(Instance, { instance: instance });
		}, this);
		var puttyDom = [];
		instances.forEach(function (instance, index, arr) {
			if (index % 2 == 0) {
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
});

var Instance = _react2.default.createClass({
	displayName: 'Instance',
	render: function render() {
		var _props$instance = this.props.instance;
		var vid = _props$instance.vid;
		var template = _props$instance.template;
		var createTime = _props$instance.createTime;

		var flags = _react2.default.createElement(
			_reactBootstrap.Popover,
			{ title: '标旗帜' },
			_react2.default.createElement(
				_reactBootstrap.Button,
				{ bsStyle: 'link', bsSize: 'sm' },
				_react2.default.createElement('span', { className: 'glyphicon glyphicon-flag', style: { color: 'red' }, alt: 'red' })
			),
			_react2.default.createElement(
				_reactBootstrap.Button,
				{ bsStyle: 'link', bsSize: 'sm' },
				_react2.default.createElement('span', { className: 'glyphicon glyphicon-flag' })
			),
			_react2.default.createElement(
				_reactBootstrap.Button,
				{ bsStyle: 'link', bsSize: 'sm' },
				_react2.default.createElement('span', { className: 'glyphicon glyphicon-flag' })
			)
		);
		var title = _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				_reactBootstrap.OverlayTrigger,
				{ trigger: 'click', rootClose: true, placement: 'top', overlay: flags },
				_react2.default.createElement(
					_reactBootstrap.Button,
					{ bsStyle: 'link', bsSize: 'sm' },
					_react2.default.createElement('span', { className: 'glyphicon glyphicon-flag' })
				)
			),
			' # ',
			vid
		);
		var items = template.items.map(function (item) {
			var name = item.name;
			var value = item.value;

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
					value
				)
			);
		});
		return _react2.default.createElement(
			_reactBootstrap.Col,
			{ sm: 6 },
			_react2.default.createElement(
				_reactBootstrap.Panel,
				{ header: title, bsStyle: 'info' },
				_react2.default.createElement(
					_reactBootstrap.Row,
					null,
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 6 },
						_react2.default.createElement('span', { className: 'glyphicon glyphicon-list-alt' }),
						' ',
						template.title
					),
					_react2.default.createElement(
						_reactBootstrap.Col,
						{ sm: 6 },
						_react2.default.createElement('span', { className: 'glyphicon glyphicon-time' }),
						' ',
						createTime
					)
				),
				_react2.default.createElement(
					_reactBootstrap.Table,
					{ hover: true, fill: true },
					_react2.default.createElement(
						'thead',
						null,
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
								'值'
							)
						)
					),
					_react2.default.createElement(
						'tbody',
						null,
						items
					)
				)
			)
		);
	}
});

exports.default = InstanceListBox;