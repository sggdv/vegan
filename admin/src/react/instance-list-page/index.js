import React, { Component } from 'react';
import $ from 'jquery';
import Operation from './operation';
import List from './list';

const sidebar = {
	position: 'fixed',
	top: '51px',
	bottom: 0,
	left: 0,
	zIndex: 1000,
	display: 'block',
	padding: '20px',
	overflowX: 'hidden',
	overflowY: 'auto',
	backgroundColor: '#f5f5f5',
	borderRight: '1px solid #eee',
};
const navSidebar = {
	marginRight: '-21px',
	marginBottom: '20px',
	marginLeft: '-20px',
};
const main = {
	paddingRight: '40px',
	paddingLeft: '40px',
};

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
		console.log(this.state.instances);
		return (
			<div className="row">
				<div className="col-sm-2 col-md-1" style={sidebar}>
					<ul className="nav" style={navSidebar}>
						<li>
							<a href="#">Overview</a>
						</li>
					</ul>
				</div>
				<div className="col-sm-10 col-sm-offset-2 col-md-11 col-md-offset-1" style={main}>
					<Operation />
					<List instances={this.state.instances} />
				</div>
			</div>
		);
	}

}

