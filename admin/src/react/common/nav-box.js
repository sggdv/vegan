import React, { Component } from 'react';
import {
	Navbar,
	Nav,
	NavItem,
	NavDropdown,
	MenuItem,
	Glyphicon,
	Badge,
} from 'react-bootstrap';
import InstanceListBox from '../instance-list-page';
import TemplateListBox from '../template-list-page';

export default class NavBox extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { projectName } = this.props;

		return (
			<Navbar inverse fixedTop fluid>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">{projectName}</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavDropdown eventKey={1} title="资料">
							<MenuItem>待处理</MenuItem>
							<MenuItem>归档</MenuItem>
						</NavDropdown>
						<NavItem eventKey={2}>表单</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1}>
							<Glyphicon glyph="bell" /> <Badge>2</Badge>
						</NavItem>
						<NavItem eventKey={2}>
							<Glyphicon glyph="user" /> Kim
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

}
