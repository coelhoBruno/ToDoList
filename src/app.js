const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({ extended: true })); 


//Rotas
const personRoute = require('./routes/todoRoute');

app.use('/', personRoute);

module.exports = app;