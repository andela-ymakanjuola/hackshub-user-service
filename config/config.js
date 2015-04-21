module.exports = {
  db: {
    development: {
      pg: {
        client: 'pg',
        connection: {
          host     : 'localhost',
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
        client: 'pg',
        connection: {
          host     : 'ec2-107-22-161-155.compute-1.amazonaws.com',
          user     : 'flknhxxcyuyocl',
          password : 'HElkja9I0cF5DlpsfQ-1Oueh4i',
          database : 'douhefahet104'
        }
      }
    }
  },

  port: process.env.PORT || 3000,
  secret: '123njkjsdf23'

};