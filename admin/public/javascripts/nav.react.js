var Nav = React.createClass({
	displayName: 'Nav',

	render: function () {
		var clzName = this.props.active ? 'active' : '';
		return React.createElement(
			'li',
			{ className: clzName },
			React.createElement(
				'a',
				{ href: this.props.nav.url, onClick: this.handleChange },
				this.props.nav.name
			)
		);
	},
	handleChange: function () {
		this.props.callbackParent(this.props.index);
	}
});

var NavBox = React.createClass({
	displayName: 'NavBox',

	getInitialState: function () {
		return { navs: [{ name: '资料', url: '#' }, { name: '表单', url: '#' }], activeNav: 0 };
	},
	render: function () {
		var navs = this.state.navs.map(function (nav, index) {
			var active = index == this.state.activeNav;
			return React.createElement(Nav, { nav: nav, index: index, active: active, callbackParent: this.handleNavChange });
		}, this);
		return React.createElement(
			'nav',
			{ className: 'navbar navbar-inverse navbar-fixed-top' },
			React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(
					'div',
					{ className: 'navbar-header' },
					React.createElement(
						'button',
						{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar', 'aria-expanded': 'false', 'aria-controls': 'navbar' },
						React.createElement('span', { className: 'icon-bar' }),
						React.createElement('span', { className: 'icon-bar' }),
						React.createElement('span', { className: 'icon-bar' })
					),
					React.createElement(
						'a',
						{ className: 'navbar-brand', href: '#' },
						'Project name'
					)
				),
				React.createElement(
					'div',
					{ id: 'navbar', className: 'collapse navbar-collapse' },
					React.createElement(
						'ul',
						{ className: 'nav navbar-nav' },
						navs
					)
				)
			)
		);
	},
	handleNavChange: function (index) {
		this.setState({ activeNav: index });
	}
});

ReactDOM.render(React.createElement(NavBox, null), document.getElementById('nav'));