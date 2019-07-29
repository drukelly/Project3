// Dependencies
const { Team, HockeyTeam, BasketballTeam } = require('../models/sqldb')
// const User = require('../database/models/user')
const passport = require('passport')
const path = require('path')

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

module.exports = function (app) {
  // Get all players for the team
  app.get('/api/team/:sport', function (req, res) {
    Team.findAll(req.params.sport)
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
    console.log(`2nd => ${player}`)
    Team.addPlayer(player)
      .then(results => {
        console.log(`
        ********
        Team.addPlayer()
        ${results}`)
        res.json(results)
      })
  })

  // get one player
  app.get('/api/players/baseball/:id', function (req, res) {
    console.log(req.params)
    Team.picked(req.params.id)
      .then(results => {
        console.log(`one player ${results}`)
        res.json(results)
      })
  })

  // post one player as active or inactive
  app.put('/api/players/baseball/:id', function (req, res) {
    console.log(`what are you now ${req.body}`)
    Team.addToTeam({ id: req.body.id }, { on_team: req.body.on_team })
      .then(results => {
        console.log(`are you on the team ${results}`)
        res.json(results)
      })
  })

  // post to update stats
  app.post('/api/players/baseball/:id', function (req, res) {
    console.log(`what are you ${req.body}`)
    Team.update(req.body)
      .then(results => {
        console.log(`are you on the team ${req.body}`)
        res.json(results)
      })
  })

  // get one player hockey
  app.get('/api/players/hockey/:id', function (req, res) {
    console.log(req.params)
    HockeyTeam.picked(req.params.id)
      .then(results => {
        console.log(`one player ${results}`)
        res.json(results)
      })
  })

  // post one player as active or inactive hockey
  app.put('/api/players/hockey/:id', function (req, res) {
    console.log(`what are you now ${req.body}`)
    HockeyTeam.addToTeam({ id: req.body.id }, { on_team: req.body.on_team })
      .then(results => {
        console.log(`are you on the team ${results}`)
        res.json(results)
      })
  })

  // post to update stats hockey
  app.post('/api/players/hockey/:id', function (req, res) {
    console.log(`what are you ${req.body}`)
    HockeyTeam.update(req.body)
      .then(results => {
        console.log(`are you on the team ${req.body}`)
        res.json(results)
      })
  })

  // get one player basketball
  app.get('/api/players/basketball/:id', function (req, res) {
    console.log(req.params)
    BasketballTeam.picked(req.params.id)
      .then(results => {
        console.log(`one player ${results}`)
        res.json(results)
      })
  })

  // post one player as active or inactive basketball
  app.put('/api/players/basketball/:id', function (req, res) {
    console.log(`what are you now ${req.body}`)
    BasketballTeam.addToTeam({ id: req.body.id }, { on_team: req.body.on_team })
      .then(results => {
        console.log(`are you on the team ${results}`)
        res.json(results)
      })
  })

  // post to update stats basketball
  app.post('/api/players/basketball/:id', function (req, res) {
    console.log(`what are you ${req.body}`)
    BasketballTeam.update(req.body)
      .then(results => {
        console.log(`are you on the team ${req.body}`)
        res.json(results)
      })
  })

  // Delete an example by id hockey
  app.delete('/api/examples/:id', function (req, res) {
    Team.destroy(req.params)
      .then(results => {
        res.json(results)
      })
  })

  // app.post('/signup', (req, res) => {
  //   console.log('user signup');

  //   const { username, password } = req.body
  //   // ADD VALIDATION
  //   User.findOne({ username: username }, (err, user) => {
  //     if (err) {
  //       console.log('User.js post error: ', err)
  //     } else if (user) {
  //       res.json({
  //         error: `Sorry, already a user with the username: ${username}`
  //       })
  //     }
  //     else {
  //       const newUser = new User({
  //         username: username,
  //         password: password
  //       })
  //       newUser.save((err, savedUser) => {
  //         if (err) return res.json(err)
  //         res.json(savedUser)
  //       })
  //     }
  //   })
  // })

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'))
  })
}
