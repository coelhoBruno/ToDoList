const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/todoRoute');

app.use('/', index);
app.use('/todo', personRoute);

module.exports = app;