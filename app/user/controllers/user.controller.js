User = require('.././models/user.model');

module.exports = {

  create: function (request, response) {

    if(!(request.body.username && request.body.password && request.body.email)){
      response.json('Username and Password required');
    }

    new User({
      username: request.body.username,
      password: request.body.password,
      email: request.body.email
    })
      .fetch()
      .then(function (User) {
        response.json('User exists');
      });

    User.forge({
      first_name: request.body.first_name,
      last_name: request.body.last_name,
      email: request.body.email,
      username: request.body.username,
      password: request.body.password
    })
    .save(function (error) {
      if(error){
        console.log(error);
        response.save(error)
      }
      response.json(User);
    });

  },

  read: function (request, response) {
    

  },

  readAll: function (request, response) {

  },

  update: function (request, response) {

  },

  delete: function (request, response) {

  }
}