import $ from 'jquery';
import React from 'react';
import ItemBox from './item-box';
import ClientBox from './client-box';
import {
	Col,
	Form,
	FormGroup,
	FormControl,
	Button,
	ControlLabel,
	Glyphicon,
	Well,
	Row,
} from 'react-bootstrap';

let TemplateBox = React.createClass({
	getInitialState() {
		return { title: '', items: [{ name: '', type: 'text', options: ['', '', ''] }] };
	},
	render() {
		return (
			<Row>
				<Col sm={6}>
					<Well>
						<Form horizontal>
							<FormGroup>
								<Col componentClass={ControlLabel} sm={2}>标题</Col>
								<Col sm={10}>
									<FormControl type="text" onChange={this.handleTitleChange} />
								</Col>
							</FormGroup>
							<ItemBox items={this.state.items} callbackParent={this.handleItemsChange} />
							<FormGroup>
								<Col sm={2}>
									<Button onClick={this.handleItemAdd}>
										<Glyphicon glyph="plus" />
									</Button>
								</Col>
								<Col sm={10}>
									<Button bsStyle="primary" onClick={this.handleCommit}>
										<Glyphicon glyph="ok" /> 保存表单
									</Button>
								</Col>
							</FormGroup>
						</Form>
					</Well>
				</Col>
				<Col sm={6}>
					<Well>
						<ClientBox template={this.state} />
					</Well>
				</Col>
			</Row>
		);
	},
	handleTitleChange(event) {
		let title = event.target.value;
		console.log(title);
		this.setState({title});
	},
	handleItemsChange(items) {
		this.setState({items});
	},
	handleItemAdd() {
		let items = this.state.items;
		items.push({ name: '', type: 'text', options: ['', '', ''] });
		this.setState({items});
	},
	handleCommit() {
		let template = this.state;
		// TODO 提交表单
		$.ajax({
			type: 'POST',
			contentType: 'application/json',
			url: '/templates',
			data: JSON.stringify(template),
			dataType: 'json',
			success(data) {
				alert('ok');	
			},
			beforeSend() {
			}
		});
	},
});

export default TemplateBox;
