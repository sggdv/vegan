import $ from 'jquery';
import React, { Component } from 'react';

import Operation from './operation';
import List from './list';

// template列表页面
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
				<Operation />
				<hr />
				<List templates={this.state.templates} />
			</div>
		);
	}

}
