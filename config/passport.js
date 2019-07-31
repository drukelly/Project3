const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const knex = require('./connection')

// Load User Model

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
            // Match user
            return knex('users')
                .where({ username: username })
                .then(user => {
                    if (user.length === 0) {
                        return done(null, false, { message: 'That username is not registered' })
                    }
                    // Match password
                    console.log('user', user)
                    console.log('password', user[0].password)
                    // console.log(username, typeof password, typeof user.password)
                    bcrypt.compare(password, user[0].password, (err, isMatch) => {
                        console.log(password)
                        console.log(isMatch)
                        if (err) throw err
                        if (isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, { message: 'Password incorrect' })
                        }
                    })
                })
                .catch(err => console.log(err))
        })
    )

    passport.serializeUser((user, done) => {
        done(null, user[0].id);
    });

    passport.deserializeUser((id, done) => {
        return knex('users')
            .where({ id: id })
            .then(user => {
                return done(user)
            })
            .catch(err => console.log(err))
    });
}