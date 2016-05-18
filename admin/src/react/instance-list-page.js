import React, { Component } from 'react';
import $ from 'jquery';
import Operation from './instance-list-page/operation';
import List from './instance-list-page/list';

export default class InstanceListPage extends Component {

	constructor(props) {
		super(props);
		this.state = {instances: []};

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {
		$.ajax({
			type: 'GET',
			url: '/instances',
			dataType: 'json',
			cache: false,
			success: function(instances) {
				this.setState({instances});
			}.bind(this),
			error: function(xhr, stat, err) {
				console.error('/instances', stat, err.toString);
			}.bind(this),
		});
	}

	render() {
		return (
			<div>
				<Opration />
				<List instances={this.state.instances} />
			</div>
		);
	}

}
