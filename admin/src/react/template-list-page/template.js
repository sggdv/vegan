import React, { Component } from 'react';
import { ItemTypes: { TEXT, RADIO, CHECKBOX, FILE } } from './constants';

const buttonStyle = { marginLeft: '10px' };
const spanStyle = { marginRight: "15px" };

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
		const vid = event.target.value;
		this.setState({vid});
	}

	handleSubmit() {
		const { template } = this.props;
		const { vid } = this.state;
		const instance = {template, vid};
		$.ajax({
			type: 'POST',
			url: '/instances',
			data: instance,
			dataType: 'json',
			success(data) {
				console.log(data);
			},
			error(xhr, stat, err) {
				console.log(err);
			},
		});
	}
																																																																									
	render() {
		const { template: { title, remark, items } } = this.props;

		const itemsROM = items.map((item) => {
			const { name, type, options } = item;

			return (
				<tr>
					<td>{name}</td>
					<td>
						{() => {
							switch (type) {
							case TEXT : return "文本";
							case RADIO: return "单选";
							case CHECKBOX: return "多选";
							case FILE: return "文件";
							default: return "";
							}
						}()}
					</td>
					<td>
						{() => {
							return options.map((opt) => {
								if (!opt || opt.value == '') 
									return;
								return (<Label style={spanStyle}>{opt.value}</Label>>);
							});
						}()}
					</td>
				</tr>
			);
		});

		return (
			<Col sm={6}>
				<div className="panel panel-info">
					<div className="panel-heading">
						<Button className="close"><span>&times;</span></Button>
						<h3 className="panel-title">
							{title}
							<Button bsSize="xs" style={buttonStyle} onClick={this.open}>
								<Glyphicon glyph="link" />
							</Button>
						</h3>
					</div>
					<div className="panel-body">
						{remark}	
					</div>
					<Table hover>
						<tr>
							<th>名称</th>
							<th>类别</th>
							<th>选项</th>
						</tr>
						{itemsDOM}
					</Table>
				</div>
				<Modal show={this.state.showModal} onHide={this.close} bsSize="lg">
					<Modal.Header closeBUtton>
						<Modal.Title>生成链接</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div style={{ paddingBottom: '15px' }}>
							<Nav bsStyle="tabs" justified activeKey={1}>
								<NavItem eventKey={1}>Email</NavItem>
								<NavItem eventKey={2}>微信</NavItem>
								<NavItem eventKey={3}>手机号码</NavItem>
							</Nav>
						</div>
						<div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="success" onClick={this.handleSubmit}>提交</Button>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</Col>
		);
	}

}
