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
  update (id) {
    return knex(this.table)
      .where('id', id)
      .update({
        wins: knex.raw(`?? + ${id.wins}`, ['wins']),
        losses: knex.raw(`?? + ${id.losses}`, ['losses']),
        era: knex.raw(`?? + ${id.era}`, ['era']),
        batting_average: knex.raw(`?? + ${id.batting_average}`, ['batting_average']),
        so: knex.raw(`?? + ${id.so}`, ['so']),
        hr: knex.raw(`?? + ${id.hr}`, ['hr']),
        hits: knex.raw(`?? + ${id.hits}`, ['hits']),
        sb: knex.raw(`?? + ${id.sb}`, ['sb'])
      })
  }

  //   Adds a new player to the team
  addPlayer (values) {
    console.log(values)
    return knex(values.sport)
      .returning('id')
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

  active (where, values) {
    return knex(this.table)
      .where(where)
      .update(values)
  }
}

module.exports = new Team()
