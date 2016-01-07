var supertest = require('supertest');
var app = require('../app');

describe('index', function () {
  it('index page', function (done) {
    supertest(app)
      .get('/')
      .expect(200, done);
  });

  it('admin login page', function (done) {
    supertest(app)
      .get('/admin/signin.html')
      .expect(200, done);
  });

  it('client login page', function (done) {
    supertest(app)
      .get('/client/signin.html')
      .expect(200, done);
  });

});

describe('templates', function () {
  it('data size is great then 0', function (done) {
    supertest(app)
      .get('/templates')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
