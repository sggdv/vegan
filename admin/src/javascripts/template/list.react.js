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
				<button className="btn btn-danger" onClick={this.handleAdd}>
					<span className="glyphicon glyphicon-plus"></span> 添加表单
				</button>
				<hr />
			</div>
		);	
	},
	handleAdd() {
		ReactDOM.render(
			<TemplateBox />,
			document.getElementById('content')
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
		var spanStyle = { marginRight: "15px" };
		var items = this.props.template.items.map((item) => {
			var options = item.options.map((option) => {
				if (!option || option == '') 
					return;
				return (
					<span className="label label-default" style={spanStyle}>{option}</span>
				);
			});

			return (
				<tr>
					<td>{item.name}</td>
					<td>
						{(() => {
							switch (item.type) {
								case "text": return "文本";
								case "radio": return "单选";
								case "checkbox": return "多选";
								default: return "";
							}
						})()}
					</td>
					<td>{options}</td>
				</tr>
			);
		});
		return (
			<div className="col-sm-6">
				<div className="panel panel-default">
					<div className="panel-heading">
						<button type="button" className="close">
							<span>&times;</span>
						</button>
						<h3 className="panel-title">{this.props.template.title}
						<button type="button" className="btn btn-default btn-xs" style={{marginLeft: "10px"}}>
							<span className="glyphicon glyphicon-pencil"></span>
						</button>
						</h3>
					</div>
					<div className="panel-body">
						{this.props.template.remark}	
					</div>
					<table className="table table-hover">
						<tr>
							<th>名称</th>
							<th>类别</th>
							<th>选项</th>
						</tr>
						{items}
					</table>
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<TemplateListPage />,
	document.getElementById('content')
);


