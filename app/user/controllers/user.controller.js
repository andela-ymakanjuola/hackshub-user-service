'use strict';

var User = require('.././models/user.model'),
    jwt = require('jsonwebtoken'),
    config = require('../../../config/config'),
    crypt = require('../../../config/cryptography');

module.exports = {

  create: function (request, response) {
    
    //verify if required fields are supplied before creating user
    
    if(!(request.body.username && request.body.password)){
      response
        .status(400)
        .json('Username and Password required');
    }
    else {

      new User({
        username: request.body.username
      })
        .fetch()
        .then(function (user) {
          if(user){
            response
              .json({message:'User already exists!'});
          } 
          else {
            var new_salt = crypt.generateSalt(); // create new uuid for user

            User.forge({
              first_name: request.body.first_name,
              last_name: request.body.last_name,
              email: request.body.email,
              username: request.body.username,
              salt: new_salt,
              password: crypt.hashPassword(request.body.password, new_salt) //hash provided password before storing in datatbase
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
          response
            .json({message: error.message});
        });

    }
  },

  read: function (request, response) {
    new User({
      username: request.params.username
    })

      .fetch({columns:["id","username", "first_name", "last_name", "email","created_at","updated_at"]})
      .then(function (user) {
        if(!user) {
          response
            .status(422)
            .json({message:'User not found'});
        }
        else {
          response
            .json(user.toJSON());
        }
      })
      .catch(function (error) {
        response
          .json({message: error.message})
      });
  },

  readAll: function (request, response) {
    User
      .fetchAll({columns:["id","username", "first_name", "last_name", "email","created_at","updated_at"],required: true})
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
            response
              .json(user.toJSON());
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
        .json({moduleessage: error.message});
    })
  },

  login: function (request, response) {

    User
      .forge({
        username: request.body.username,
      })
      .fetch({require: true})
      .then (function (user) {
        
        if(user) {
          //verify password provided on login before generating token for user
          if (crypt.verifyPassword(user.toJSON(), request.body.password)){
            var token = jwt.sign({
              username: request.body.username,
              iss: 'hackshub.com'
            }, 
            config.secret);

            response.json({
              message: "Authentication Successful!",
              authToken: token});
          }
          else {
            response.json({error: "Password Unverified"});
          }
        }
        else {
          response.json({message:'user not found'});
        }
      })
      .catch(function (error) {
        response.json({message: error.message});
      });

  },

  delete: function (request, response) {
    User
      .forge({username: request.params.username})
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
  },

  auth: function (request, response, error) {
    console.log('here');
    if (error.name === 'UnauthorizedError') {
      response.json(401, 'invalid token...');
    }
    response.json('UserAuthorized');
  }
    
}