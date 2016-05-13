import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
	PageHeader,
	Glyphicon,
	Button, 
	Modal, 
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Row,
	Col,
	Table,
	Panel,
	Label,
} from 'react-bootstrap';

import TemplateBox from './template-box';

// Template查询页面
// 操作层：页面标题 + 添加按钮
// 展示层：数据展示

// 整个content
export default class TemplateListBox extends Component {

	constructor(props) {
		super(props);
		this.state = { templates: [] };
		this.componentDidMount = this.componentDidMount.bind(this);
	}

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
	}

	render() {
		return (
			<div>
				<TemplateListOpration />
				<TemplateList templates={this.state.templates} />
			</div>
		);
	}

}

// 操作层
class TemplateListOpration extends Component {

	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
	}

	render() {
		return (
			<div>
				<PageHeader>表单管理</PageHeader>
				<Button bsStyle="danger" onClick={this.handleAdd}>
					<Glyphicon glyph="plus" /> 添加表单
				</Button>
				<hr />
			</div>
		);	
	}

	handleAdd() {
		ReactDOM.render(
			<TemplateBox />,
			document.getElementById('content')
		);
	}

}

// 展示层
class TemplateList extends Component {

	render() {
		const templates = this.props.templates.map((template) => {
			return (<Template template={template} />);	
		});
		let puttyDom = new Array;
		templates.forEach((template, index, arr) => {
			if (index % 2 == 0) { // 偶数元素
				if (index == arr.length) 
					puttyDom.push((<Row>{arr[index]}</Row>))
				else
					puttyDom.push((<Row>{arr[index]}{arr[index + 1]}</Row>))
			}
		});
		return (<div>{puttyDom}</div>);
	}

}

// 单个表单展示
class Template extends Component {

	constructor(props) {
		super(props);
		this.state = { showModal: false, vid: '' };
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		this.handleVidChange = this.handleVidChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	handleVidChange(event) {
		let vid = event.target.value;
		this.setState({vid});
	}

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
	}

	render() {
		const spanStyle = { marginRight: "15px" };
		let items = this.props.template.items.map((item) => {
			let options = item.options.map((option) => {
				if (!option || option == '') return;
				return (<Label style={spanStyle}>{option}</Label>);
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
			<Col sm={6}>
				<div className="panel panel-info">
					<div className="panel-heading">
						<Button className="close">
							<span>&times;</span>
						</Button>
						<h3 className="panel-title">{this.props.template.title}
							<Button bsSize="xs" style={{marginLeft: "10px"}} onClick={this.open}>
								<Glyphicon glyph="link" />
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
												<FormControl placeholder="淘宝订单号" onChange={this.handleVidChange} />
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
					<Table hover>
						<tr>
							<th>名称</th>
							<th>类别</th>
							<th>选项</th>
						</tr>
						{items}
					</Table>
				</div>
			</Col>
		);
	}

}
