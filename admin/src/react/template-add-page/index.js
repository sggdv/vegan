import $ from 'jquery';
import React, { Component } from 'react';
import ItemBox from './item-box';
import ClientBox from '../client-box';
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
import { ItemTypes } from '../common/constants';
import HTML5Backend from 'react-dnd-html5-backend';
import swal from 'sweetalert';

let __item_react_key = 0;

@DragDropContext(HTML5Backend)
export default class TemplateBox extends Component {

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
									<FormControl onChange={this.handleTitleChange} />
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
		const title = event.target.value;
		this.setState({title});
	}

	handleItemsChange(items) {
		this.setState({items});
	}

	handleTextItemAdd() {
		let { items } = this.state;
		const item = generatorItem(items);
		items.push(item);
		this.setState({items});
	}

	handleRadioItemAdd() {
		let { items } = this.state;
		const item = generatorItem(items, ItemTypes.RADIO);
		items.push(item);
		this.setState({items});
	}

	handleCheckBoxItemAdd() {
		let { items } = this.state;
		const item = generatorItem(items, ItemTypes.CHECKBOX);
		items.push(item);
		this.setState({items});
	}

	handleFileItemAdd() {
		let { items } = this.state;
		const item = generatorItem(items, ItemTypes.FILE); 
		items.push(item);
		this.setState({items});
	}

	handleCommit() {
		let template = this.state;
		
		swal({
			title: '输入备注',
			text: '输入友好的备注，帮助伙伴们快速理解表单的作用！',
			type: 'input',
			showCancelButton: true,
			closeOnConfirm: false,
			animation: 'slide-from-top',
			inputPlaceholder: '输入备注',
			showLoaderOnConfirm: true, 
		}, (inputValue) => {
			if (inputValue === false) return false;

			if (inputValue === '') {
				swal.showInputError('还没有输入备注哦！');
				return false;
			}

			template.remark = inputValue;
			delete template.__react_key;

			$.ajax({
				type: 'POST',
				contentType: 'application/json',
				url: '/templates',
				data: JSON.stringify(template),
				dataType: 'json',
				success(data) {
					swal('Nice', 'submit now', 'success');
				},
			});
		});	

	}

}

function generatorItem(items, type = ItemTypes.TEXT) {
	const name = '';
	const __react_key = __item_react_key++;
	let options = [];
	if (type == ItemTypes.RADIO || type == ItemTypes.CHECKBOX) {
		options.push({ key: 1, value: '' });
	}

	return { name, type, __react_key, options };
}
