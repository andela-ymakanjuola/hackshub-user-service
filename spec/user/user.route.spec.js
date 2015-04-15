var app = require('../../server.js'),
    request = require('supertest')(app);

describe('Tests for User routes', function () {

  it('GET Method: Get all users' function (done) {
    request
      .get('/users')
      .expect(200)
      .expect('Content-Type',/json/)
      .end(function (error, response) {
        if(error){
          return done(error);
        }
        done();
      });
  });

  it('POST Method: Create new user', function (done) {
    request
      .post('/users')
      .send({
        "first_name": "Yinka",
        "last_name": "Makanjuola",
        "email": "yinka@andela.co",
        "username":"andela-y",
        "password": "andela123"
      }))
      .expect(200)
      .expect('Content-Type',/json/)
      .end(function (error, response) {
        if(error){
          return done(error);
        }
        done();
      });
  });

  it('PUT Method: update existing User', function (done) {
    request
      .put('/users/:user_id')
      .send({
        "username": "andy"
      })
      .expect(200)
      .expect('Content-Type',/json/)
      .end(function (error, response) {
        if(error){
          return done(error);
        }
        done();
      });
  });

  it('GET Method: Get single User', function (done) {
    request
      .get('/users/:user_id')
      .expect(200)
      .expect('Content-Type',/json/)
      .end(function (error, response) {
        if(error){
          return done(error);
        }
        done();
      });
  });

  it('DELETE Method: Delete single User', function (done) {
    request
      .delete('/users/:user_id')
      .expect(200)
      .expect('Content-Type',/json/)
      .end(function (error, response) {
        if(error){
          return done(error);
        }
        done();
      });
  });

});