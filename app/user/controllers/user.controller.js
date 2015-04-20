'use strict';

var User = require('.././models/user.model');

module.exports = {

  create: function (request, response) {

    if(!(request.body.username && request.body.password && request.body.email)){
      response
      .status(400)
      .json('Username and Password required');
    }

    new User({
      username: request.body.username,
      password: request.body.password,
      email: request.body.email
    })
      .fetch()
      .then(function (user) {
        if(user){
          response
            
            .json({message:'User exists!'});
        } 
        else {
          User.forge({
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            email: request.body.email,
            username: request.body.username,
            password: request.body.password
          })
          .save()
          .then(function (user) {
            response.json(user.toJSON());
          })
          .otherwise(function (error) {
            response.json({message: error.message});
          });
        }
      })
      .catch(function (error) {
       response.json({message: error.message})
      });

  },

  read: function (request, response) {
    new User({
      username: request.params.username
    })
      .fetch()
      .then(function (user) {
        if(!user) {
          response
            .status(422)
            .json({message:'User not found'});
        }
        response.json(user.toJSON());
      })
      .catch(function (error) {
       response.json({message: error.message})
      });
  },

  readAll: function (request, response) {
    User
      .fetchAll({required: true})
      .then(function (user) {
        console.log(user);
        response.json(user);
      })
      .catch(function (error) {
      response
      .status(500)
      .json({message: error.message});
    })
  },

  update: function (request, response) {
    User.forge({username: request.params.username})
    .fetch({required: true})
    .then(function (user) {
      if(!user){
        response.json({message:'Cannot update non existing user'})
      }
      else {   
        user
          .save(
            request.body,
            {patch: true})
          .then(function (user) {
            response.json(user.toJSON());
          })
          .otherwise(function (error) {
            response
              .status(400)
              .json({message: error.message});
          });
      }
    })
    .catch(function (error) {
      response
      .status(500)
      .json({message: error.message});
    })
  },

  delete: function (request, response) {
    User.forge({username: request.params.username})
    .fetch({require: true})
    .then(function (user) {
      user.destroy()
      .then(function () {
        response.json({message: 'User successfully deleted'});
      })
      .otherwise(function (error) {
        response
          .status(500)
          .json({message: error.message});
      });
    })
    .catch(function (error) {
      response
      .status(500)
      .json({message: error.message});
    })
  }
}