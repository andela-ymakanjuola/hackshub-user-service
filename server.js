var config = require('./config/config'),
    knex = require('knex')(config.db[process.env.NOVE_ENV].pgconnection);
    bookshelf = require('bookshelf')(knex);


var app = require('./config/express')();



app.listen(config.port, function (){
  console.log("Server started on PORT: " + config.port);
});

module.exports = app;
