var knex = require('knex'),
    bookshelf = require('bookshelf');


bookshelf.knex.schema.createTable('users', function (table) {
  table.increments('id').notNullable().primary();
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.string('email').notNullable().unique();
  table.string('username').notNullable().unique();
  table.string('password').notNullable();
  table.timestamps();
});

var Users = bookshelf.Model.extend({
  tablename: 'users'
});

module.exports = Users;