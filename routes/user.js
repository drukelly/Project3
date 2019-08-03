const passport = require('passport')
const path = require('path')
const User = require('../models/User')

module.exports = function (app) {
    // Login Handle
    app.post('/login',
        passport.authenticate('local'), (req, res) => {
            console.log('routes/user.js, login, req.body: ');
            console.log(req.user)
            res.json(req.user)
        })

    app.get('/signup', (req, res, next) => {
        console.log('===== user!!======')
        console.log(req.user)
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.json({ user: null })
        }
    })

    // Posts new users to the database
    app.post('/signup', (req, res) => {
        console.log('route', req.body)
        User.create(req.body)
            .then(results => {
                console.log(`
                ********
                Team.addPlayer()
                ${results}
                ********
                `)
                res.json(results)
            })
            .catch(err => console.log(err))
    })

    // Logout Handle
    app.get('/logout', (req, res) => {
        req.logout()
        res.redirect('/login')
    })
}