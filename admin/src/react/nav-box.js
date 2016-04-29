import React from 'react';

let Nav = React.createClass({
	render() {
		let clzName = this.props.active ? 'active' : '';
		return (
			<li className={clzName}>
				<a href={this.props.nav.url} onClick={this.handleChange}>{this.props.nav.name}</a>
			</li>
		);
	},
	handleChange() {
		this.props.callbackParent(this.props.index);
	},
});

let NavBox = React.createClass({
	getInitialState() {
		return { navs: [
			{ name: '资料', url: '#' }, 
			{ name: '表单', url: '#' },
			{ name: '偏好设置', url: '#' }
		], activeNav: 0 };
	},
	render() {
		let navs = this.state.navs.map((nav, index) => {
			var active = index == this.state.activeNav;
			return (<Nav nav={nav} index={index} active={active} callbackParent={this.handleNavChange} />);
		}, this);
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">{this.props.projectName}</a>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							{navs}
						</ul>
					</div>
				</div>
			</nav>
		);
	},
	handleNavChange(index) {
		this.setState({ activeNav: index });
	},
});

export default NavBox;
