const bcrypt = require('bcryptjs')
const knex = require('../../config/connection')

// Define userSchema
class User {
  constructor (username, password, table = 'users') {
    this.username = { type: String, unique: false, required: false }
    this.password = { type: String, unique: false, required: false }
    this.table = table
  }
  checkPassword (inputPassword) {
    console.log(inputPassword)
    return bcrypt.compareSync(inputPassword, this.password)
  }
  hasPassword (plainTextPassword) {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

module.exports = User
