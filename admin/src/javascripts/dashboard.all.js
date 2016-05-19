import React from 'react';
import ReactDOM from 'react-dom';
import NavBox from '../react/common/nav-box';
import InstanceListBox from '../react/instance-list-page';
import Footer from '../react/common/footer-box';

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
