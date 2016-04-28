var templates = require('../db').templates;
var assert = require('assert');

describe('Templates', () => {

	var id;
	var tmp = { title: 'abcd' };

	before((done) => {
		templates.insertOne(tmp, (err, doc) => {
			id = doc.id;
			done();
		});
	});

	describe('#insertOne', () => {
		it('应该会生成id值', () => {
			assert.ok(id.length > 0);
		});	
	});

	describe('#findOne', () => {
		it('title属性应该有值', (done) => {
			templates.findOne(id, (err, doc) => {
				assert.ifError(err);
				assert.ok(doc.title.length > 0);
			});
		});
	});

	after(done => { templates.deleteOne(id, done); });

});
