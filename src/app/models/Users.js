const { default: mongoose } = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const Schema = mongoose.Schema

const User = new Schema({
    username: { type: String, unique: true },
    password: String,
    role: String /* (manager & specialist) */
})

User.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', User)