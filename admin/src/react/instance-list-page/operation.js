import React, { Component } from 'react';
import {
	PageHeader,
	Button,
	Glyphicon,
} from 'react-bootstrap';

export default class Operation extends Component {

	render() {
		return (
			<div>
				<PageHeader>资料管理</PageHeader>
				<Button bsStyle="danger">
					<Glyphicon glyph="search" /> 搜索
				</Button>
				<hr />
			</div>
		);
	}

}
