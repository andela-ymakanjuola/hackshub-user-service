var app = require('../../server'),
    bookshelf = require('bookshelf'),
    pg = require('pg'),
    User = require('../../.app/user/user.model');

var user;


describe('Database Tests for user service model', function(){
  
  beforeEach(function (done) {
    user = new User({
      first_name: "Yinka",
      sur_name: "Makanjuola",
      email: "yinka@andela.co",
      username:"andela-y",
      password: "andela123"
    });

  });

  it('Test for Database and table creation', function (done) {

  });

  describe('Test for required fields: ', function () {

    it('First Name:', function (done) {
      user.first_name = '';
      user.save(function (error){
        expect(error).toBeDefined();
      });
      done();
    });

    it('Surname:', function (done) {
      user.sur_name='';
      user.save(function (error){
        expect(error).toBeDefined();
      });

    });

    it('Email:', function (done) {
      user.email = '';
      user.save(function (error){
        expect(error).toBeDefined();
      });
      done();
    });

    it('Username:', function (done) {
      user.username = '';
      user.save(function (error){
        expect(error).toBeDefined();
      });
      done();
    });

    it('Password:', function (done) {
      user.password = '';
      user.save(function (error){
        expect(error).toBeDefined();
      });
      done();
    });

  })

  it('Test for Email format', function (done) {
    user.email = "yinks"
    user.save(function (error) {
      expect(error).toBeDefined();
    });

  });

  it('Unique username', function (done) {
    user.save();
    user = new User({
      first_name: "Charming",
      sur_name: "Mel",
      email: "mel@andela.co",
      username:"andela-y",
      password: "andela134"
    });

    user.save(function (error){
      expect(error).toBeDefined();
    });
    done();
  });

  afterEach(function (done) {
    User.remove(function (error) {
      if (error){
        return done(error);
      }
      done();
  });

});