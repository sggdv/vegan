'use strict';

// Template查询页面
// 操作层：页面标题 + 添加按钮
// 展示层：数据展示

// 整个content
var TemplateListPage = React.createClass({
	displayName: 'TemplateListPage',
	getInitialState: function getInitialState() {
		var templates = [];
		return { templates: templates };
	},
	componentDidMount: function componentDidMount() {
		$.ajax({
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
		return React.createElement(
			'div',
			null,
			React.createElement(TemplateListOpration, null),
			React.createElement(TemplateList, { templates: this.state.templates })
		);
	}
});

// 操作层
var TemplateListOpration = React.createClass({
	displayName: 'TemplateListOpration',
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: 'page-header' },
				React.createElement(
					'h3',
					null,
					'表单管理'
				)
			),
			React.createElement(
				'button',
				{ className: 'btn btn-danger' },
				React.createElement('span', { className: 'glyphicon glyphicon-plus' }),
				' 添加表单'
			),
			React.createElement('hr', null)
		);
	}
});

// 展示层
var TemplateList = React.createClass({
	displayName: 'TemplateList',
	render: function render() {
		var templates = this.props.templates.map(function (template) {
			return React.createElement(Template, { template: template });
		});
		return React.createElement(
			'div',
			{ className: 'row' },
			templates
		);
	}
});

// 单个表单展示
var Template = React.createClass({
	displayName: 'Template',
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'col-sm-4' },
			React.createElement(
				'div',
				{ className: 'panel panel-default' },
				React.createElement(
					'div',
					{ className: 'panel-heading' },
					React.createElement(
						'h3',
						{ className: 'panel-title' },
						this.props.template.title
					)
				),
				React.createElement(
					'div',
					{ className: 'panel-body' },
					'表单内容'
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(TemplateListPage, null), document.getElementById('content'));