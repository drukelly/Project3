const knex = require('../config/connection.js')
const bcrypt = require('bcryptjs')
// let salt = bcrypt.genSaltSync(10)

class User {
  constructor(table = 'users') {
    this.table = table,
      this.name = '',
      this.email = '',
      this.phone = '',
      this.username = '',
      this.password = ''
  }

  //   Input validation
  inputValidation(data) {
    const { name, email, phone, username, password, password2 } = data
    this.name = name
    this.email = email
    this.phone = phone
    this.username = username
    // this.password = password
    console.log(data)
    console.log(name, email, phone, username, password, password2)
    let errors = []
    // Check required fields
    if (!name || !email || !phone || !username || !password || !password2) {
      errors.push({ msg: 'Please fill in all fields' })
    }
    // Check passwords match
    if (password !== password2) {
      errors.push({ msg: 'Your passwords do not match.' })
    }
    // Check password length
    if (password.length < 8) {
      errors.push({ msg: "Password must be at least 8 characters." })
    }
    if (errors.length > 0) {
      console.log(errors[0].msg)
    } else {
      // console.log('pass')
      // console.log(data)
      let salt = bcrypt.genSaltSync(10)
      console.log('salt', salt)
      console.log('salt length', salt.length)
      console.log('entered password signup', password)
      console.log('password type', typeof this.password)
      let hash = bcrypt.hashSync(password, salt)
      // Set password to hashed
      console.log('hash', hash)
      this.password = hash
      console.log('hashed password', this.password)

      return knex(this.table)
        .insert({
          name: data.name,
          email: data.email,
          phone_number: data.phone,
          username: data.username,
          password: this.password
        })
    }
  }

  // Count number of each position
  //   findPosition () {
  //     return knex.select('position')
  //       .count('*')
  //       .from(this.table)
  //       .groupBy('position')
  //   }

  //   // Find all in table
  //   findAll () {
  //     return knex.select()
  //       .table(this.table)
  //   }

  //   // Selects all players who are on the current team
  //   currentTeam () {
  //     return knex.select()
  //       .table(this.table)
  //       .where('on_team', true)
  //   }

  //   // Updates statistics for players who were selected for the team
  //   update (values) {
  //     return knex(this.table)
  //       .where('id', values.id)
  //       .update({
  //         goals: knex.raw(`?? + ${values.goals}`, ['goals']),
  //         assists: knex.raw(`?? + ${values.assists}`, ['assists']),
  //         mins: knex.raw(`?? + ${values.mins}`, ['mins']),
  //         yel: knex.raw(`?? + ${values.yel}`, ['yel']),
  //         red: knex.raw(`?? + ${values.red}`, ['red'])
  //       })
  //   }

  // //   Adds a new player to the team
  //   addPlayer (values) {
  //     return knex(this.table)
  //       .returning('id')
  //       .insert(values)
  //   }

  //   addToTeam (where, values) {
  //     return knex(this.table).where(where)
  //       .update(values)
  //   }

  //   removePlayer (id) {
  //     return knex(this.table)
  //       .where('id', id)
  //       .del()
  //   }

  //   reset () {
  //     return knex(this.table)
  //       .truncate()
  //   }

  //   picked (id) {
  //     return knex.select()
  //       .table(this.table)
  //       .where('id', id)
  //   }
}

module.exports = new User()
