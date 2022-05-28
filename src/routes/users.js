const express = require('express')
const router = express.Router()
const passport = require('passport')

const usersController = require('../app/controllers/UsersController')
const User = require('../app/models/Users')

const initializePassport = require('../passport-config')
initializePassport(
    passport,
    username => User.find({ username: username })
)

router.get('/', checkAuthenticated, usersController.index)

router.get('/dang-nhap', checkNotAuthenticated, usersController.login)
router.post('/dang-nhap', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/healthy1st',
    failureRedirect: '/healthy1st/dang-nhap',
    failureFlash: true,
}))

router.get('/dang-ky', checkNotAuthenticated, usersController.register)
router.post('/dang-ky', checkNotAuthenticated, usersController.register2)

router.delete('/dang-xuat', usersController.logout)

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/healthy1st/dang-nhap')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/healthy1st')
    }

    next()
}

module.exports = router