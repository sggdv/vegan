import React, { Component } from 'react';
import {
	Label,
	Button,
	Glyphicon,
	Modal,
	Table,
	Col,
	Nav,
	NavItem,
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
} from 'react-bootstrap';
import { ItemTypes } from '../common/constants';
import swal from 'sweetalert';

const buttonStyle = { marginLeft: '10px' };
const spanStyle = { marginRight: '15px' };

// 单个表单展示
export default class Template extends Component {

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

	handleEmailChange(event) {
		const email = event.target.value;
		this.setState({email});
	}

	handleSubmit() {
		const { template } = this.props;
		const { email } = this.state;
		const instance = {template, email};
		$.ajax({
			type: 'POST',
			url: '/instances',
			data: instance,
			dataType: 'json',
			success(data, stat) {
				if (stat == 201) {
					// sweetalert 提示语
					console.log('ok');
				}
				console.log(data);
			},
			error(xhr, stat, err) {
				console.log(err);
			},
		});
	}
																																																																									
	render() {
		const { template: { title, remark, items } } = this.props;

		const itemsDOM = items.map((item) => {
			const { name, type, options } = item;

			let typeText;
			switch (type) {
			case ItemTypes.TEXT : 
				typeText = "文本";
				break;
			case ItemTypes.RADIO : 
				typeText = "单选";
				break;
			case ItemTypes.CHECKBOX : 
				typeText = "多选";
				break;
			case ItemTypes.FILE : 
				typeText = "文件";
				break;
			default : 
				typeText = "";
			}

			const optionsDOM = options.map((opt) => {
				if (!opt || opt.value == '') 
					return;
				return (<Label style={spanStyle}>{opt.value}</Label>);
			});

			return (
				<tr>
					<td>{name}</td>
					<td>{typeText}</td>
					<td>{optionsDOM}</td>
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
						<Form horizontal>
							<FormGroup>
								<Col componentClass={ControlLabel} sm={2}>邮箱地址</Col>
								<Col sm={10}>
									<FormControl type="email" placeholder="邮箱地址" onChange={this.handleEmailChange} />
								</Col>
							</FormGroup>
						</Form>
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
