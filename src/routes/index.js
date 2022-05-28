const studentsRouter = require('./students')
const usersRouter = require('./users')

function route(app) {
    app.get('/', (req, res) => {
        // console.log(req.query.q)
        res.render('home')
    })

    // app.use('/healthy1st', usersRouter)

    app.use('/students', studentsRouter)
}

module.exports = route