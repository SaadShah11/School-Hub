const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongo');


const app = express();

app.use(bodyParser.json());

app.post('/signup', mongoPractice.createProduct);

app.get('/signin', mongoPractice.getProducts);

app.listen(3000);