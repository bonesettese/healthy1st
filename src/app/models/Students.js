const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const Student = new Schema({
    id: { type: String, unique: true },
    name: String,
    class: String,
    hometown: String
})

module.exports = mongoose.model('Student', Student)