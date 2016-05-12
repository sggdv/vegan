import $ from 'jquery';
import React, { Component } from 'react';
import ItemBox from './item-box';
import ClientBox from './client-box';
import OptionGenerator from './option-generator';
import Trash from './trash';
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
	PageHeader,
} from 'react-bootstrap';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

let __item_react_key = 0;

class TemplateBox extends Component {

	constructor(props) {
		super(props);

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleItemsChange = this.handleItemsChange.bind(this);
		this.handleTextItemAdd = this.handleTextItemAdd.bind(this);
		this.handleRadioItemAdd = this.handleRadioItemAdd.bind(this);
		this.handleCheckBoxItemAdd = this.handleCheckBoxItemAdd.bind(this);
		this.handleFileItemAdd = this.handleFileItemAdd.bind(this);
		this.handleCommit = this.handleCommit.bind(this);

		this.state = { title: '', items: [] };
	}

	render() {
		return (
			<Row>
				<Col sm={1}>
					<PageHeader>
						<Glyphicon glyph="wrench" />
					</PageHeader>
					<div>
						<Button bsSize="lg" onClick={this.handleTextItemAdd}>
							<Glyphicon glyph="font" />
						</Button>
					</div>
					<div>
						<Button bsSize="lg" onClick={this.handleRadioItemAdd}>
							<Glyphicon glyph="record" />
						</Button>
					</div>
					<div>
						<Button bsSize="lg" onClick={this.handleCheckBoxItemAdd}>
							<Glyphicon glyph="check" />
						</Button>
					</div>
					<div>
						<Button bsSize="lg" onClick={this.handleFileItemAdd}>
							<Glyphicon glyph="file" />
						</Button>
					</div>
					<OptionGenerator />
					<Trash />
				</Col>
				<Col sm={6}>
					<PageHeader>编辑区</PageHeader>
					<Form horizontal>
						<Well>
							<FormGroup>
								<Col componentClass={ControlLabel} sm={2}>标题</Col>
								<Col sm={10}>
									<FormControl type="text" onChange={this.handleTitleChange} />
								</Col>
							</FormGroup>
						</Well>
						<ItemBox items={this.state.items} callbackParent={this.handleItemsChange} />
						<FormGroup>
							<Button bsStyle="primary" onClick={this.handleCommit}>
								<Glyphicon glyph="ok" /> 保存表单
							</Button>
						</FormGroup>
					</Form>
				</Col>
				<Col sm={5}>
					<PageHeader>预览区</PageHeader>
					<Well>
						<ClientBox template={this.state} />
					</Well>
				</Col>
			</Row>
		);
	}

	handleTitleChange(event) {
		let title = event.target.value;
		this.setState({title});
	}

	handleItemsChange(items) {
		this.setState({items});
	}

	handleTextItemAdd() {
		let { items } = this.state;
		__item_react_key++;
		let item = {
			name: '',
			type: 'text',
			__react_key: __item_react_key,
		};
		items.push(item);
		this.setState({items});
	}

	handleRadioItemAdd() {
		let { items } = this.state;
		__item_react_key++;
		let item = {
			name: '',
			type: 'radio',
			__react_key: __item_react_key,
			options: [''],
		};
		items.push(item);
		this.setState({items});
	}

	handleCheckBoxItemAdd() {
		let { items } = this.state;
		__item_react_key++;
		let item = {
			name: '',
			type: 'checkbox',
			__react_key: __item_react_key,
			options: [''],
		};
		items.push(item);
		this.setState({items});
	}

	handleFileItemAdd() {
		let { items } = this.state;
		__item_react_key++;
		let item = {
			name: '',
			type: 'file',
			__react_key: __item_react_key,
		};
		items.push(item);
		this.setState({items});
	}

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
	}

}

export default DragDropContext(HTML5Backend)(TemplateBox);
