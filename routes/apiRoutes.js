// Dependencies
const Team = require('../models/sqldb')

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

module.exports = function (app) {
  // Get all players for the team
  app.get('/api/team', function (req, res) {
    Team.findAll()
      .then(results => {
        console.log(results)
        res.json(results)
      })
  })

  // Get sum of each position
  app.get('/api/position', function (req, res) {
    Team.findPosition()
      .then(results => {
        res.json(results)
      })
  })

  // Get the current players on the team
  app.get('/api/current', function (req, res) {
    Team.currentTeam()
      .then(results => {
        res.json(results)
      })
  })

  // Updates current players most recent statistics
  app.put('/api/current', function (req, res) {
    console.log(req.body)
    Team.update(req.body)
      .then(results => {
        console.log(`
        **************
        Team.update(${req.body}):
        ${results}`)
        res.json(results)
      })
  })

  // Add player from bench to the current team
  app.put('/api/team', function (req, res) {
    console.log('test', req.body)
    Team.addToTeam({ id: req.body.id }, { on_team: req.body.on_team })
      .then(results => {
        console.log(`
        *************
        Team.addToTeam(${req.body}):
        ${results}`)
        res.json(results)
      })
  })

  // Create a new player for the team
  app.post('/api/team', function (req, res) {
    var player = req.body
    Team.addPlayer(player)
      .then(results => {
        console.log(`
        ********
        Team.addPlayer()
        ${results}`)
        res.json(results)
      })
  })

  // Delete an example by id
  app.delete('/api/examples/:id', function (req, res) {
    Team.destroy(req.params)
      .then(results => {
        res.json(results)
      })
  })

  // get one player
  app.get('/api/players/:id', function (req, res) {
    console.log(req.params)
    Team.picked(req.params.id)
      .then(results => {
        console.log(`one player ${results}`)
        res.json(results)
      })
  })
}
