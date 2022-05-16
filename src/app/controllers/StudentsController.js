const Student = require('../models/Students')
const { multipleMongooseToObject } = require('../../util/mongoose')

class StudentsController {
    //get /students
    json(req, res, next) {
        Student.find({})
            .then((student) => {
                res.json(student)
            })
            .catch(next)
    }

    //get /students/{id}
    json1(req, res, next) {
        Student.find({ id: req.params.id })
            .then((student) => {
                res.json(student)
            })
            .catch(next)
    }

    edit(req, res, next) {
        Student.find({ id: req.params.id })
            .then((students) => {
                res.render('studentEdit', {
                    students: multipleMongooseToObject(students)
                })
            })
            .catch(next)
    }

    update(req, res, next) {
        Student.updateOne({ id: req.params.id }, req.body)
            .then(() => res.redirect('/students/index'))
            .catch(next);
    }

    add(req, res, next) {
        Student.find({})
            .then((students) => {
                res.render('studentAdd', {
                    students: multipleMongooseToObject(students)
                })
            })
            .catch(next)
    }

    store(req, res, next) {
        const formData = req.body;
        const student = new Student(formData);
        student
            .save()
            .then(() => res.redirect('/students/index'))
            .catch(next);
    }

    delete(req, res, next) {
        Student.deleteOne({ id: req.params.id })
            .then(() => res.redirect('/students/index'))
            .catch(next);
    }

    index(req, res, next) {
        Student.find({})
            .then((students) => {
                res.render('students', {
                    students: multipleMongooseToObject(students)
                })
            })
            .catch(next)
    }
}

module.exports = new StudentsController()