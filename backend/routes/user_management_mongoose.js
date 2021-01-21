
const mongoose = require('mongoose');

const Users = require('../models/users');
const HttpError = require('../models/http-error');

mongoose.connect(
    'mongodb+srv://saad:saad@schoolhub.zmtqr.mongodb.net/users?retryWrites=true&w=majority'
    ).then(() => {
        console.log("DB connected")
    }).catch(() => {
        console.log('Error occured, DB connection failed ')
    })

const createUser = async (req, res, next) => {
    const createdUser = new Users({
        type: req.body.type,
        email: req.body.email,
        username: req.body.username,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    })

    const result = await createdUser.save();
    console.log(typeof createdUser._id)
    res.json(result)
};

const getUser = async (req, res, next) => {
    const user = await Users.find().exec(); //Converting this into a promise using .exec()
    res.json(user);
}

const userLogin = async (req, res, next) => {
    const {email, password} = req.body;

    let existingUser;
    try{
        existingUser = await Users.findOne({email: email})
    } catch(err){
        const error = new HttpError('Email error occured', 500);
        return next(error)
    }

    if(!existingUser || existingUser.password !== password){
        const error = new HttpError('Wrong credentials', 401)
        return next(error)
    }
    console.log('Login Successful')
    res.json({message:"login successful"})
} 

exports.createUser = createUser;
exports.getUser = getUser;
exports.userLogin = userLogin;