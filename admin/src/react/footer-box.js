import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

export default class Footer extends Component {

	render() {
		const year = new Date().getYear() + 1900;
		return (
			<Row>
				<footer className="footer">
					<hr />
					<p>&copy; SGGDV {year}</p>
				</footer>
			</Row>
		);
	}

}
