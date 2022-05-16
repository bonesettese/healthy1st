const studentsRouter = require('./students')

function route(app) {
    app.get('/', (req, res) => {
        // console.log(req.query.q)
        res.render('home')
    })

    // app.get('/students', (req, res) => {
    //     res.render('students')
    // })
    app.use('/students', studentsRouter)
}

module.exports = route;