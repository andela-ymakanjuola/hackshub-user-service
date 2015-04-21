var express = require('express');
   
module.exports = function () {
  var app = express(),
      bodyParser = require('body-parser'),
      expressJwt = require('express-jwt'),
      config = require('./config'),
      router = require('.././app/user/routes/user.route');

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(expressJwt({secret: config.secret}).unless({path:['/login', '/signup']}))

  app.use('/',router);

  return app;
  
};