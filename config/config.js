module.exports = {
  db: {
    development: {
      pg: {
        client: 'pg',
        connection: {
          host     : 'localhost',
          user     : 'Yinka',
          password : '',
          database : 'users-test-db'
        }
      }
    },
    test: {

      pg: {
        client: 'pg',
        connection: {
          host     : 'localhost',
          user     : 'Yinka',
          password : '',
          database : 'users-test-db',
          debug: true
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

  port: process.env.PORT || 3000,
  secret: '123njkjsdf23'

};