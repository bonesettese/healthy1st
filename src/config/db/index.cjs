const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/healthy1st');
        console.log('Connected');
    } catch (error) {
        console.log('Inconnected');
    }
}

module.exports = { connect };