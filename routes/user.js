const passport = require('passport')
const path = require('path')
const User = require('../models/User')

module.exports = function (app) {
    // Login Handle
    app.post('/login', (req, res, next) => {
            console.log('routes/user.js, login, req.body: ');
            console.log(req.body)
            passport.authenticate('local', {
                successRedirect: '/teams',
                failureRedirect: '/login'
            })(req, res, next)
        },
        // (req, res) => {
        //   console.log('logged in', req.user);
        //   var userInfo = {
        //     username: req.user.username
        //   };
        //   res.send(userInfo);
        // }
    )

    app.get('/signup', (req, res, next) => {
        console.log('===== user!!======')
        console.log(req.user)
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.json({ user: null })
        }
    })

    app.post('/signup', (req, res) => {
        console.log('route', req.body)
        User.inputValidation(req.body)
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
        // console.log('sign-up submission', req.body)
        // const { name, email, phone, username, password, password2 } = req.body
        // console.log(name, email, phone, username, password, password2)
        // let errors = []
        // // Check required fields
        // if (!name || !email || !phone || !username || !password || !password2) {
        //     errors.push({ msg: 'Please fill in all fields' })
        // }
        // // Check passwords match
        // if (password !== password2) {
        //     errors.push({ msg: 'Your passwords do not match.' })
        // }
        // // Check password length
        // if (password.length < 8) {
        //     errors.push({ msg: "Password must be at least 8 characters."})
        // }
        // if (errors.length > 0) {
        //     console.log('something\'s wrong')
        // } else {
        //     res.send('pass')
        // }
    })

    // Logout Handle
    app.get('/logout', (req, res) => {
        req.logout()
        res.redirect('/login')
    })
    // app.post('/logout', (req, res) => {
    //     if (req.user) {
    //         req.logout()
    //         res.send({ msg: 'logging out' })
    //     } else {
    //         res.send({ msg: 'no user to log out' })
    //     }
    // })
}