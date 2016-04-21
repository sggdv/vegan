// Template查询页面
// 操作层：页面标题 + 添加按钮
// 展示层：数据展示

// 整个content
var TemplateListPage = React.createClass({
	getInitialState() {
		var templates = [];
		return {templates};
	},
	componentDidMount() {
		$.ajax({
			type: 'GET',
			url: '/templates',
			dataType: 'json',
			cache: false,
			success: function(templates) {
				this.setState({templates});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('abc', status, err.toString());
			}.bind(this)
		});
	},
	render() {
		return (
			<div>
				<TemplateListOpration />
				<TemplateList templates={this.state.templates} />
			</div>
		);
	}
});

// 操作层
var TemplateListOpration = React.createClass({
	render() {
		return (
			<div>
				<div className="page-header">
					<h3>表单管理</h3>
				</div>
				<button className="btn btn-danger">
					<span className="glyphicon glyphicon-plus"></span> 添加表单
				</button>
				<hr />
			</div>
		);	
	}
});

// 展示层
var TemplateList = React.createClass({
	render() {
		var templates = this.props.templates.map((template) => {
			return (<Template template={template} />);	
		});
		return (
			<div className="row">{templates}</div>
		);
	}
});

// 单个表单展示
var Template = React.createClass({
	render() {
		return (
			<div className="col-sm-4">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">{this.props.template.title}</h3>
					</div>
					<div className="panel-body">表单内容</div>
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<TemplateListPage />,
	document.getElementById('content')
);


