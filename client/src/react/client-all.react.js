import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import ClientBox from './client-box';

function updateInstance(template) {
	let data = instance;
	data.template = template;
	console.log('data');
	console.log(data);
	$.ajax({
		type: 'POST',
		url: '/update',
		data: data,
		dataType: 'json',
		success(data) {
			console.log(data);
		},
		error(xhr, stat, err) {
			console.log(err);
		},
	});
}

ReactDOM.render(
	<ClientBox template={instance.template} callbackParent={updateInstance} />,
	document.getElementById('content')
);
