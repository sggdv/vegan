import React from 'react';
import ReactDOM from 'react-dom';
import NavBox from '../react/nav-box';
import TemplateListBox from '../react/template-list-box';

ReactDOM.render(
	<NavBox projectName="VEGAN" />,
	document.getElementById('nav')
);

ReactDOM.render(
	<TemplateListBox />,
	document.getElementById('content')
);
