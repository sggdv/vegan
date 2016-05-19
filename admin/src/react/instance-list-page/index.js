import React, { Component } from 'react';
import $ from 'jquery';
import Operation from './operation';
import List from './list';

export default class InstanceListPage extends Component {

	constructor(props) {
		super(props);
		this.state = {instances: []};
		$.ajax({
			type: 'GET',
			url: '/instances',
			dataType: 'json',
			cache: false,
			success: function(instances) {
				this.state = {instances};
			}.bind(this),
			error: function(xhr, stat, err) {
				console.error('/instances', stat, err.toString);
			}.bind(this),
		});
	}

	render() {
		return (
			<div>
				<Operation />
				<List instances={this.state.instances} />
			</div>
		);
	}

}
