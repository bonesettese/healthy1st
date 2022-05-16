const express = require('express')
const StudentsController = require('../app/controllers/StudentsController')
const router = express.Router()

const studentsController = require('../app/controllers/StudentsController')
const Students = require('../app/models/Students')

router.get('/index', studentsController.index)

router.get('/edit/:id', studentsController.edit)
router.put('/:id', studentsController.update)

router.get('/add', StudentsController.add)
router.post('/store', studentsController.store)

router.get('/delete/:id', studentsController.delete)
    // router.delete('/:id', studentsController.delete)

router.get('/:id', studentsController.json1)
router.get('/', studentsController.json)



module.exports = router