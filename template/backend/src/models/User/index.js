const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'basic'
    },
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    avatar: String,
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},

})

const User = mongoose.model('User', userSchema);

module.exports = User