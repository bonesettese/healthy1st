const User = require('../models/Users')
const { multipleMongooseToObject } = require('../../util/mongoose')
const bcrypt = require('bcrypt')

class UsersController {
    //get /home
    index(req, res, next) {
        User.find({ username: req.body.username })
            .then((users) => {
                res.render('home', {
                    users: multipleMongooseToObject(users)
                })
            })
            .catch(next)
    }

    //get /login
    login(req, res, next) {
        res.render('login')
    }

    //get /register
    register(req, res, next) {
        res.render('register')
    }

    //post /register
    async register2(req, res, next) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const formData = {
            username: req.body.username,
            password: hashedPassword,
            role: req.body.role
        }
        const user = new User(formData)
        user
            .save()
            .then(() => res.redirect('/healthy1st/dang-nhap'))
            .catch(() => res.redirect('/healthy1st/dang-ky'))
    }

    //logout
    logout(req, res, next) {
        req.logOut()
        res.redirect('/healthy1st/dang-nhap')
    }
}

module.exports = new UsersController()