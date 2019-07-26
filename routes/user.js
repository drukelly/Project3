const passport = require('passport')
const path = require('path')
const User = require('../models/User')

module.exports = function (app) {
    app.post('/login', passport.authenticate('local'),
        function (req, res) {
            console.log('routes/user.js, login, req.body: ');
            console.log(req.body)
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
        User.inputValidation(req.body)
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

    app.post('/logout', (req, res) => {
        if (req.user) {
            req.logout()
            res.send({ msg: 'logging out' })
        } else {
            res.send({ msg: 'no user to log out' })
        }
    })
}