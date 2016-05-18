import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
	PageHeader,
	Button,
	Glyphicon,
} from 'react-bootstrap';
import TemplateAddPage from '../template-add-page';

// 表单列表页面中的操作控件
export default class Operation extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<PageHeader>表单管理</PageHeader>
				<Button bsStyle="danger" onClick={this.handleAdd}>
					<Glyphicon glyph="plus" /> 添加表单
				</Button>
			</div>
		);
	}

	handleAdd() {
		ReactDOM.render(
			<TemplateAddPage />,
			document.getElementById('content')
		);
	}

}
