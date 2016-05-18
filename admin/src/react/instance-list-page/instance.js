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

class Instance extends Component {

	render() {
		const { 
			instance: {
				vid, 
				template: { title, items }, 
				createTime
			} 
		} = this.props;

		const titleDOM = (
			<div>
				<FlagGroupBox />
				<Button bsStyle="link" bsSize="sm">
					<Glyphicon glyph="cog" />
				</Button>
				&nbsp;# {vid}
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
				<Panel header={title} bsStyle="info">
					<Row>
						<Col sm={6}>
							<Glyphicon glyph="list-alt" /> {title}  
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
						<tbody>
							{itemsDOM}
						</tbody>
					</Table>
				</Panel>
			</Col>
		);
	}

}
