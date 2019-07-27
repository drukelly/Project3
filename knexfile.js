require('dotenv').config()

// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: process.env.mysql_user,
      password: '',
      database: process.env.mysql_db,
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: process.env.mysql_user,
      password: '',
      database: process.env.mysql_test_db,
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.mysql_prod_host,
      port: 3306,
      user: process.env.mysql_prod_user,
      password: process.env.mysql_prod_pass,
      database: process.env.mysql_prod_db
    }
  }

}
