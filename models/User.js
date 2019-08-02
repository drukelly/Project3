const knex = require('../config/connection.js')
const bcrypt = require('bcryptjs')
// let salt = bcrypt.genSaltSync(10)

class User {
  constructor(table = 'users') {
    this.table = table
  }

  // Create a user with a hashed password
  create(data) {
    let encryptedPW = this.encrypt(data.password)
    data.password = encryptedPW
    return knex(this.table)
      .insert(data)
  }
  
  // Hash the password
  encrypt(value) {
    return bcrypt.hashSync(value, 10)
  }
}

module.exports = new User()
