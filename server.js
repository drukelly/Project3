require('dotenv').config()
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()
const passport = require('passport')
// Passort config
require('./config/passport')(passport)

// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Define API routes here
require(path.join(__dirname, './routes/user.js'))(app)
require(path.join(__dirname, './routes/apiRoutes.js'))(app)
// Send every other request to the React app
// Define any API routes before this runs

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
