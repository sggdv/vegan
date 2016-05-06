import React from 'react';
import {Row} from 'react-bootstrap';

let Footer = React.createClass({
	render() {
		let year = new Date().getYear() + 1900;
		return (
			<Row>
				<footer className="footer">
					<hr />
					<p>&copy; SGGDV {year}</p>
				</footer>
			</Row>
		);
	},
});

export default Footer;
