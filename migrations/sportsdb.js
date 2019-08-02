exports.up = function (knex, Promise) {
  knex.schema.hasTable('baseball').then(exists => {
    if (!exists) {
      return knex.schema.createTable('baseball', (table) => {
        table.increments('id')
        table.string('image')
        table.string('name').notNullable()
        table.integer('jersey_number').notNullable()
        table.string('position').notNullable()
        table.integer('games_played').defaultTo(0)
        table.integer('ab').defaultTo(0)
        table.integer('wins').defaultTo(0)
        table.integer('losses').defaultTo(0)
        table.decimal('batting_average', 4, 3).defaultTo(0.000)
        table.integer('hr').defaultTo(0)
        table.integer('r').defaultTo(0)
        table.integer('hits').defaultTo(0)
        table.integer('rbi').defaultTo(0)
        table.integer('sb').defaultTo(0)
        table.decimal('era', 4, 2).defaultTo(0.00)
        table.decimal('ip', 5, 2).defaultTo(0.0)
        table.integer('hits_allowed').defaultTo(0)
        table.integer('hr_allowed').defaultTo(0)
        table.integer('er_allowed').defaultTo(0)
        table.integer('bb').defaultTo(0)
        table.integer('so').defaultTo(0)
        table.boolean('on_team').defaultTo(false)
      })
    }
  })
  knex.schema.hasTable('basketball').then(exists => {
    if (!exists) {
      return knex.schema.createTable('basketball', (table) => {
        table.increments('id')
        table.string('image')
        table.string('name').notNullable()
        table.integer('jersey_number').notNullable()
        table.string('position').notNullable()
        table.integer('games_played').defaultTo(0)
        table.integer('pts').defaultTo(0)
        table.decimal('ast', 4, 2).defaultTo(0.00)
        table.integer('rebounds').defaultTo(0)
        table.integer('field_goals').defaultTo(0)
        table.integer('free_throws').defaultTo(0)
        table.integer('3pt').defaultTo(0)
        table.integer('steals').defaultTo(0)
        table.integer('blocks').defaultTo(0)
        table.boolean('on_team').defaultTo(false)
      })
    }
  })
  knex.schema.hasTable('hockey').then(exists => {
    if (!exists) {
      return knex.schema.createTable('hockey', (table) => {
        table.increments('id')
        table.string('image')
        table.string('name').notNullable()
        table.integer('jersey_number').notNullable()
        table.string('position').notNullable()
        table.integer('games_played').defaultTo(0)
        table.integer('wins').defaultTo(0)
        table.integer('losses').defaultTo(0)
        table.integer('goals_scored').defaultTo(0)
        table.integer('assists').defaultTo(0)
        table.integer('pim').defaultTo(0)
        table.boolean('on_team').defaultTo(false)
      })
    }
  })
  knex.schema.hasTable('users').then(exists => {
    if (!exists) {
      return knex.schema.createTable('users', (table) => {
        table.increments('id')
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('phone_number').notNullable()
        table.string('username').unique().notNullable()
        table.string('password').notNullable()
        table.boolean('admin').defaultTo(false)
        table.timestamp('created_at').defaultTo(knex.raw('now()'))
      })
    }
  })
}

exports.down = function (knex, Promise) {
  return ([
    knex.schema.dropTable('baseball'),
    knex.schema.dropTable('basketball'),
    knex.schema.dropTable('hockey'),
    knex.schema.dropTable('users')
  ])
}
