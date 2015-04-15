var config = require('./config/config'),
    knex = require('knex')(config.db[process.env.NODE_ENV].pg);
    bookshelf = require('bookshelf')(knex);


var app = require('./config/express')();



app.listen(config.port, function (){
  console.log("Server started on PORT: " + config.port);
});

module.exports = app;