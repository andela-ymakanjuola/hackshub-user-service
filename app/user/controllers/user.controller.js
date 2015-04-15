User = require('.././models/user.model');

modulde.exports = {

  create: function (request, response) {
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
      response.json(User)
    });

  },

  read: function (request, response) {
    User.fetch()

  },

  readAll: function (request, response) {

  },

  update: function (request, response) {

  },

  delete: function (request, response) {

  }
}