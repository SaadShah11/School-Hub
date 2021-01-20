
const express = require('express');
const userManagement = require('./user_management_mongo.js')

const router = express.Router();


router.get('/login', userManagement.getUser)

router.post('/login', userManagement.loginUser, (req, res, next) => {
    res.send("<h1>Loading...</h1>")
})
/*
router.get('/signup', (req, res, next) => {

}) 
*/

router.post('/signup', userManagement.createUser, (req, res, next) => {
    res.send("<h1>Loading...</h1>")
})

module.exports = router;