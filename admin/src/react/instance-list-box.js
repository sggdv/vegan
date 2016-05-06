import React from 'react';
import $ from 'jquery';
import {
	Row, 
	Col,
	Panel,
	Button,
	PageHeader,
	Table,
	ButtonToolbar,
	OverlayTrigger,
	Popover,
	Glyphicon,
} from 'react-bootstrap';
import FlagGroupBox from './flag-group-box';

let InstanceListBox = React.createClass({
	getInitialState() {
		let instances = [];
		return {instances};
	},
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
	},
	render() {
		return (
			<div>
				<InstanceListOpration />
				<InstanceList instances={this.state.instances} />
			</div>
		);
	},
});

let InstanceListOpration = React.createClass({
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
	},
});

let InstanceList = React.createClass({
	render() {
		let instances = this.props.instances.map((instance) => {
			return (<Instance instance={instance} />);
		}, this);
		let puttyDom = [];
		instances.forEach((instance, index, arr) => {
			if (index % 2 == 0) {
				if (index == arr.length)
					puttyDom.push((<Row>{arr[index]}</Row>));
				else 
					puttyDom.push((<Row>{arr[index]}{arr[index + 1]}</Row>));
			}
		});
		return (<div>{puttyDom}</div>);
	},
});

let Instance = React.createClass({
	render() {
		let {vid, template, createTime} = this.props.instance;
		let title = (
			<div>
				<FlagGroupBox />
				<Button bsStyle="link" bsSize="sm">
					<Glyphicon glyph="cog" />
				</Button>
				&nbsp;# {vid}
			</div>
		);
		let items = template.items.map((item) => {
			let {name, value} = item;
			return (
				<tr>
					<td>{name}</td>
					<td>{value}</td>
				</tr>
			);
		});
		return (
			<Col sm={6}>
				<Panel header={title} bsStyle="info">
					<Row>
						<Col sm={6}>
							<Glyphicon glyph="list-alt" /> {template.title}	
						</Col>
						<Col sm={6}>
							<Glyphicon glyph="time" /> {createTime}
						</Col>
					</Row>
					<Table hover fill>
						<thead>
							<tr>
								<th>名称</th>
								<th>值</th>
							</tr>
						</thead>
						<tbody>{items}</tbody>
					</Table>
				</Panel>
			</Col>
		);
	},
});

export default InstanceListBox;
