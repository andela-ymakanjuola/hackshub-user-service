var app = require('../../server'),
   
    User = require('../.././app/user/models/user.model');

var user;


describe('Database Tests for user service model', function(){
  
  beforeEach(function (done) {
    user = new User({
      first_name: "Yinka",
      last_name: "Makanjuola",
      email: "yinka@andela.co",
      username:"andela-y",
      password: "andela123"
    });
    done();
  });

  describe('Test for required fields: ', function () {

    it('First Name:', function (done) {
      user.first_name = '';
      user.save(function (error){
        expect(error).toBeDefined();
      });
      done();
    });

    it('Last Name:', function (done) {
      user.last_name='';
      user.save(function (error){
        expect(error).toBeDefined();
      });
      done();
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
      user.save(function (error) {
        expect(error).toBeDefined();
      });
      done();
    });

  });

  it('Test for Email format', function (done) {
    user.email = "yinks";
    user.save(function (error) {
      expect(error).toBeDefined();
    });

  });

  it('Unique username', function (done) {
    user.save();
    user = new User({
      first_ame: "Charming",
      last_name: "Mel",
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
    User.destroy(function (error) {
      if (error){
        return done(error);
      }
      done();
    });
  });

});