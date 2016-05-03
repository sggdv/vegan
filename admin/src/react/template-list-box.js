import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	Button, 
	Modal, 
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Col,
} from 'react-bootstrap';

import TemplateBox from './template-box';

// Template查询页面
// 操作层：页面标题 + 添加按钮
// 展示层：数据展示

// 整个content
let TemplateListBox = React.createClass({
	getInitialState() {
		let templates = [];
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
	},
});

// 操作层
let TemplateListOpration = React.createClass({
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
	},
});

// 展示层
let TemplateList = React.createClass({
	render() {
		let templates = this.props.templates.map((template) => {
			return (<Template template={template} />);	
		});
		let puttyDom = new Array;
		templates.forEach((template, index, arr) => {
			if (index % 2 == 0) { // 偶数元素
				if (index == arr.length) 
					puttyDom.push((<div className="row">{arr[index]}</div>))
				else
					puttyDom.push((<div className="row">{arr[index]}{arr[index + 1]}</div>))
			}
		});
		return (<div>{puttyDom}</div>);
	},
});

// 单个表单展示
let Template = React.createClass({
	getInitialState() {
		return { showModal: false, vid: '' };
	},
	close() {
		this.setState({ showModal: false });
	},
	open() {
		this.setState({ showModal: true });
	},
	handleVidChange(event) {
		let vid = event.target.value;
		this.setState({vid});
	},
	handleSubmit() {
		let template = this.props.template;
		let vid = this.state.vid;
		let instance = {template, vid};
		$.ajax({
			type: 'POST',
			url: '/instances',
			data: instance,
			dataType: 'json',
			success(data) {
				console.log(data);
			},
			error(xhr, status, err) {
				console.log(err);
			},
		});
	},
	render() {
		let spanStyle = { marginRight: "15px" };
		let items = this.props.template.items.map((item) => {
			let options = item.options.map((option) => {
				if (!option || option == '') return;
				return (<span className="label label-default" style={spanStyle}>{option}</span>);
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
				<div className="panel panel-info">
					<div className="panel-heading">
						<button type="button" className="close">
							<span>&times;</span>
						</button>
						<h3 className="panel-title">{this.props.template.title}
							<Button bsStyle="default" bsSize="xs" style={{marginLeft: "10px"}} onClick={this.open}>
								<span className="glyphicon glyphicon-link"></span>
							</Button>
							<Modal show={this.state.showModal} onHide={this.close}>
								<Modal.Header closeBUtton>
									<Modal.Title>生成链接</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Form horizontal>
										<FormGroup>
											<Col componentClass={ControlLabel} sm={3}>淘宝订单号</Col>
											<Col sm={9}>
												<FormControl type="text" placeholder="淘宝订单号" onChange={this.handleVidChange} />
											</Col>
										</FormGroup>
									</Form>
								</Modal.Body>
								<Modal.Footer>
									<Button bsStyle="success" onClick={this.handleSubmit}>提交</Button>
									<Button onClick={this.close}>Close</Button>
								</Modal.Footer>
							</Modal>
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

export default TemplateListBox;
