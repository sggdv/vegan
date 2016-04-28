import {jquery, $} from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Client from './client.react';

ReactDOM.render(
	<Client template={template} />,
	document.getElementById('content')
);
