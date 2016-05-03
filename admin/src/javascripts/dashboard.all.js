import React from 'react';
import ReactDOM from 'react-dom';
import NavBox from '../react/nav-box';
import InstanceListBox from '../react/instance-list-box';
import Footer from '../react/footer-box';

ReactDOM.render(
	<NavBox projectName="VEGAN" domId="content" />,
	document.getElementById('nav')
);

ReactDOM.render(
	<InstanceListBox />,
	document.getElementById('content')
);

ReactDOM.render(
	<Footer />,
	document.getElementById('footer')
);
