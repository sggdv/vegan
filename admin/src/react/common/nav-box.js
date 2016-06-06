import React, { Component } from 'react';
import {
	Navbar,
	Nav,
	NavItem,
	NavDropdown,
	MenuItem,
	Glyphicon,
	Badge,
	FormGroup,
	FormControl,
	Button,
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
						<a href="/">{projectName}</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1}>资料</NavItem>
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
					<Navbar.Form pullRight>
						<FormGroup>
							<FormControl />
						</FormGroup>
						{' '}
						<Button>
							<Glyphicon glyph="search" /> 搜索
						</Button>
					</Navbar.Form>
				</Navbar.Collapse>
			</Navbar>
		);
	}

}
