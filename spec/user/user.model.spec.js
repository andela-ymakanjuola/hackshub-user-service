var config = require('../../config/config'),
    knex = require('knex')(config.db[process.env.NODE_ENV].pg),
    bookshelf = require('bookshelf'),
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
      user.first_name = null;
      user.save()
      .catch(function (error){
        expect(error).toBeDefined();
      });
      done();
    });

    it('Last Name:', function (done) {
      user.last_name= null;
      user.save()
      .catch(function (error){
        expect(error).toBeDefined();
        done();
      });
    });

    it('Email:', function (done) {
      user.email = null;
      user.save()
      .catch(function (error){
        expect(error).toBeDefined();
        done();
      });
    });

    it('Username:', function (done) {
      user.username = null;
      user.save()
      .catch(function (error){
        expect(error).toBeDefined();
        done();
      });
    });

    it('Password:', function (done) {
      user.password = null;
      user.save()
      .catch(function (error) {
        expect(error).toBeDefined();
        done();
      });
    });

  });


  it('Unique username', function (done) {
    user.save();
    User.forge({
      first_name: "Charming",
      last_name: "Mel",
      email: "mel@andela.co",
      username:"andela-y",
      password: "andela134"
    })
    .save()
    .catch(function (error){
      expect(error).toBeDefined();
      done();
    });
  });

  afterEach(function (done) {
    knex('users')
      .where('id', 1)
      .del()
      .then(function (error){
        if(error){
          return done(error);
        }
      });
    done()
  });
});