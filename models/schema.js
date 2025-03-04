const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    dateOfBirth: {
        type: Date
    }
});

module.exports = mongoose.model('schema', signUpSchema);