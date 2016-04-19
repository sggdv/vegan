var templates = require('../db').templates;
var assert = require('assert');

describe('Templates', () => {
	describe('#insertOne', () => {
		it('应该会生成id值', (done) => {
			templates.insertOne({ title: 'abc' }, (err, doc) => {
				assert.ok(doc.id.length > 0);
				done();
			});	
		});
	});
});
