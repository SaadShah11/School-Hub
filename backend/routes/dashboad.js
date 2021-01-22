
const express = require('express');
const dashboard = require('../mongoDB/dashboard_mongoose.js')

const router = express.Router();

router.get('/home', dashboard.getposts)

router.post('/post', dashboard.createPost)

router.get('/signup', (req, res, next) => {

}) 

router.post('/signup')//, userManagement.createUser)

module.exports = router;