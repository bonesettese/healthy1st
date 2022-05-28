if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const handlebars = require('express-handlebars')
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

const initializePassport = require('./passport-config')
initializePassport(
    passport,
    username => users.find(user => user.username === username),
    id => users.find(user => user.id === id)
)

const route = require('./routes')
const db = require('./config/db')

//connect to db
db.connect()

const users = []

const app = express()
const port = 3000

app.get(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())

app.use(methodOverride('_method'))

//http logger
app.get(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

//route init
route(app)

//get /home
app.get('/healthy1st', checkAuthenticated, (req, res) => {
    res.render('home', { name: req.user.username })
})

//get /login
app.get('/healthy1st/dang-nhap', checkNotAuthenticated, (req, res) => {
    res.render('login')
})

//post /login
app.post('/healthy1st/dang-nhap', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/healthy1st',
    failureRedirect: '/healthy1st/dang-nhap',
    failureFlash: true,
}))

//get /register
app.get('/healthy1st/dang-ky', checkNotAuthenticated, (req, res) => {
    res.render('register')
})

//post /register
app.post('/healthy1st/dang-ky', checkNotAuthenticated, async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            username: req.body.username,
            password: hashedPassword,
            role: req.body.role
        })
        res.redirect('/healthy1st/dang-nhap')
    } catch {
        res.redirect('/healthy1st/dang-ky')
    }
    console.log(users)
})

//logout
app.delete('/healthy1st/dang-xuat', (req, res) => {
    req.logOut(function(e) {
        if (e) { return next(e) }
    })
    res.redirect('/healthy1st/dang-nhap')
})

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

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})