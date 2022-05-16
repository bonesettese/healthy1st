const path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const handlebars = require('express-handlebars')

const route = require('./routes')
const db = require('./config/db')

//connect to db
db.connect()

const app = express()
const port = 3000

app.get(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})