
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    type: req.body.type,
    userID: { type: Number, required: true },
    username: { type: String, required: true },
    text: { type: String, required: false },
    image: { data: Buffer,contentType: String},
    likes: {type: Number, required:false},
    time: {type:time, required:true},
    comments: {type:string}
})

module.exports = mongoose.model('post', postSchema)