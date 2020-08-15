const fs = require('fs');
const ToDo = require('../models/todo');
const TodoService = require('../services/TodoService');
const ToDoCommand = require('../commands/ToDoCommand');

const service = new TodoService();

exports.get = (req, res, next) => {
    const response = service.getAll();
    
    res.status(201).send(response);
};

exports.getById = (req, res, next) => {
    const response = service.getById(req.params.id);

    res.status(201).send(response);
};

exports.post = (req, res, next) => {
    let {name, inclusionDate, done} = req.body;

    let todoCmd = ToDoCommand.of(name, inclusionDate, done);

    const response = service.save(todoCmd);

    res.status(201).send(response);
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    const response = service.delete(req.params.id);

    res.status(200).send(response);
};