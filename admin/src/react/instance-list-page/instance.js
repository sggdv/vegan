import React, { Component } from 'react';
import {
	Button,
	Glyphicon,
	Col,
	Row,
	Panel,
	Table,
} from 'react-bootstrap';
import FlagGroupBox from './flag-group-box';

export default class Instance extends Component {

	render() {
		const { 
			instance: {
				email, 
				template: { title, items }, 
				submitTime,
			} 
		} = this.props;

		let tmpDate = new Date();
		tmpDate.setTime(submitTime);
		const submitTimeFormat = tmpDate.toLocaleString();

		const titleDOM = (
			<div>
				<Glyphicon glyph="envelope" /> {email}
			</div>
		);

		const itemsDOM = items.map((item) => {
			const { name, value } = item;

			return (
				<tr>
					<td>{name}</td>
					<td>{value}</td>
				</tr>
			);
		});

		return (
			<Col sm={6}>
				<Panel header={titleDOM} bsStyle="info">
					<Row>
						<Col sm={12}>
							<FlagGroupBox />
							<Button bsStyle="link" bsSize="sm">
								<Glyphicon glyph="cog" />
							</Button>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col sm={6}>
							<Glyphicon glyph="list-alt" /> {title}  
						</Col>
						<Col sm={6}>
							<Glyphicon glyph="time" /> {submitTimeFormat}
						</Col>
					</Row>
					<Table hover fill>
						<thead>
							<tr>
								<th>名称</th>
								<th>值</th>
							</tr>
						</thead>
						<tbody>
							{itemsDOM}
						</tbody>
					</Table>
				</Panel>
			</Col>
		);
	}

}
