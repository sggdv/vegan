import React, { Component } from 'react';
import {
	FormGroup,
	Col,
	FormControl,
	Form,
	ControlLabel,
} from 'react-bootstrap';

class EmailSender extends Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Form horizontal>
				<Col componentClass={ControlLabel} sm={3}>邮箱</Col>
				<Col sm={9}>
					<FormControl placeholder="邮箱地址"  />
				</Col>
			</Form>
		);
	}

}

class WeiXinSender extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (<div></div>);
	}

}

class MobileSender extends Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (<div></div>);
	}

}

export { EmailSender, WeiXinSender, MobileSender };
