var config = require('../../../config/config'),
    knex = require('knex')(config.db[process.env.NODE_ENV].pg),
    bookshelf = require('bookshelf')(knex);

bookshelf.knex.schema.dropTableIfExists('users').then(function () {
  console.log('table dropped');
  return 
    bookshelf.knex.schema.createTable('users', function (table) {
      table.increments('id').notNullable().primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable().unique();
      table.string('username').notNullable().unique();
      table.string('password').notNullable();
      table.timestamps();
    })
    .then(function () {
      console.log('table created!');
    })
    .otherwise(function (error) {
      throw error;
    });
});

var Users = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = Users;