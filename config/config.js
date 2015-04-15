module.exports = {
  db: {
    development: {
      pg: {
        client: 'pg',
        connection: {
          host     : '127.0.0.1',
          user     : 'Yinka',
          password : '',
          database : 'users-db'
        }
      }
    },
    test: {

      pg: {
        client: 'pg',
        connection: {
          host     : '127.0.0.1',
          user     : 'Yinka',
          password : '',
          database : 'users-test-db'
        }
      }
    },
    production: {

      pg: {
        client: 'mysql',
        connection: {
          host     : '127.0.0.1',
          user     : 'Yinka',
          password : '',
          database : 'users-db'
        }
      }
    }
  },

  port: process.env.PORT || 3000

};