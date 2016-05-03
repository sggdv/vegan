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
} from 'react-bootstrap';

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
					<span className="glyphicon glyphicon-search"></span> 搜索
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
		let flags = (
			<Popover title="标旗帜">
				<Button bsStyle="link" bsSize="sm"><span className="glyphicon glyphicon-flag" style={{color: 'red'}} alt="red"></span></Button>
				<Button bsStyle="link" bsSize="sm"><span className="glyphicon glyphicon-flag"></span></Button>
				<Button bsStyle="link" bsSize="sm"><span className="glyphicon glyphicon-flag"></span></Button>
			</Popover>
		);
		let title = (
			<div>
				<OverlayTrigger trigger="click" rootClose placement="top" overlay={flags}>
					<Button bsStyle="link" bsSize="sm">
						<span className="glyphicon glyphicon-flag"></span> 
					</Button>
				</OverlayTrigger>
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
							<span className="glyphicon glyphicon-list-alt"></span> {template.title}	
						</Col>
						<Col sm={6}>
							<span className="glyphicon glyphicon-time"></span> {createTime}
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
