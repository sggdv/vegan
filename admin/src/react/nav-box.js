import React from 'react';
import ReactDOM from 'react-dom';
import TemplateListBox from './template-list-box';
import InstanceListBox from './instance-list-box';

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
		let nav = this.props.nav;
		console.log(nav);
		this.props.callbackParent(this.props.index);
		if (nav.click) nav.click();
	},
});

let NavBox = React.createClass({
	getInitialState() {
		let domId = this.props.domId;
		return { 
			navs: [
				{ 
					name: '资料', 
					url: '#',
					click() {
						console.log('资料');
						ReactDOM.render(
							<InstanceListBox />,
							document.getElementById(domId)
						);
					},
				}, 
				{ 
					name: '表单', 
					url: '#', 
					click() {
						ReactDOM.render(
							<TemplateListBox />,
							document.getElementById(domId)
						);
					},
				},
				{ 
					name: '偏好设置', 
					url: '#', 
					click() {
						console.log('偏好设置');
					},
				}
			], 
			activeNav: 0, 
		};
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
