const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
    _id: String,
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    role: {type: String, enum: ['ADMIN','USER']}
}, {collection: 'users'})

module.exports = usersSchema