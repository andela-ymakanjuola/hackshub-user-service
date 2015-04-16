var express = require('express');
   
module.exports = function () {
  var app = express(),
      bodyParser = require('body-parser'),
      router = require('.././app/user/routes/user.route');

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use('/users',router);

  return app;
  
};