
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    type: {type: String, required:true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    sex: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('Users', usersSchema);