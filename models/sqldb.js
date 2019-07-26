const knex = require('../config/connection.js')

class Team {
  constructor (table = 'baseball') {
    this.table = table
  }

  // Count number of each position
  findPosition () {
    return knex.select('position')
      .count('*')
      .from(this.table)
      .groupBy('position')
  }

  // Find all in table
  findAll (table) {
    return knex.select()
      .table(table)
  }

  // Selects all players who are on the current team
  currentTeam () {
    return knex.select()
      .table(this.table)
      .where('on_team', true)
  }

  // Updates statistics for players who were selected for the team
  update (values) {
    return knex(this.table)
      .where('id', values.id)
      .update({
        goals: knex.raw(`?? + ${values.goals}`, ['goals']),
        assists: knex.raw(`?? + ${values.assists}`, ['assists']),
        mins: knex.raw(`?? + ${values.mins}`, ['mins']),
        yel: knex.raw(`?? + ${values.yel}`, ['yel']),
        red: knex.raw(`?? + ${values.red}`, ['red'])
      })
  }

  // Adds a new player to the team
  addPlayer (values) {
    console.log(values)
    return knex(values.sport)
      .insert({
        name: values.name,
        image: values.image,
        jersey_number: values.jersey_number,
        position: values.position
      })
  }

  addToTeam (where, values) {
    return knex(this.table).where(where)
      .update(values)
  }

  removePlayer (id) {
    return knex(this.table)
      .where('id', id)
      .del()
  }

  reset () {
    return knex(this.table)
      .truncate()
  }

  picked (id) {
    return knex.select()
      .table(this.table)
      .where('id', id)
  }
}

module.exports = new Team()
