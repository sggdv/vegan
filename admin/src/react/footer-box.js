import React from 'react';

let Footer = React.createClass({
	render() {
		let year = new Date().getYear() + 1900;
		return (
			<footer className="footer">
				<hr />
				<p>&copy; SGGDV {year}</p>
			</footer>
		);
	},
});

export default Footer;
