var request = require('request');

request({
  method: 'POST',
  url: 'http://127.0.0.1:3000/templates',
  json: true,
  body: {
    title: '表单名称'
  }
}, (err, res, body) => {
  if (!err && res.statusCode == 201) {
    console.log('success');
  }
});
