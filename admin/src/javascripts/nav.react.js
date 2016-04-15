var Nav = React.createClass({
	render: function() {
		var clzName = this.props.active ? 'active' : '';
		return (
			<li className={clzName}>
				<a href={this.props.nav.url} onClick={this.handleChange}>{this.props.nav.name}</a>
			</li>
		);
	},
	handleChange: function() {
		this.props.callbackParent(this.props.index);
	}
});

var NavBox = React.createClass({
	getInitialState: function() {
		return { navs: [{ name: '资料', url: '#' }, { name: '表单', url: '#' }], activeNav: 0 };
	},
	render: function() {
		var navs = this.state.navs.map(function(nav, index) {
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
						<a className="navbar-brand" href="#">Project name</a>
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
	handleNavChange: function(index) {
		this.setState({ activeNav: index });
	}
});

ReactDOM.render(
	<NavBox />,
	document.getElementById('nav')
);
