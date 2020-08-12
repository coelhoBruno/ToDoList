const fs = require('fs');
const ToDo = require('../models/todo');

exports.get = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.post = (req, res, next) => {
    let {name, inclusionDate, done} = req.body;

    let todo = ToDo.of(name, inclusionDate, done);

    fs.writeFileSync('todos.json', JSON.stringify(todo, null, 2));

    res.status(201).send(todo);
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};