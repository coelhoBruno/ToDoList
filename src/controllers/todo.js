const fs = require('fs');
const ToDo = require('../models/todo');
const TodoService = require('../services/TodoService');
const ToDoCommand = require('../commands/ToDoCommand');

const service = new TodoService();

exports.get = (req, res, next) => {
    const response = service.getAll();
    
    res.status(200).send(response);
};

exports.getById = (req, res, next) => {
    const response = service.getById(req.params.id);

    res.status(200).send(response);
};

exports.post = (req, res, next) => {
    let todoCmd = ToDoCommand.of(req.body);

    const response = service.save(todoCmd);

    res.status(201).send(response);
};

exports.put = (req, res, next) => {
    let todoCmd = ToDoCommand.of(req.body);

    const response = service.update(req.params.id, todoCmd);

    res.status(200).send(response);
};

exports.delete = (req, res, next) => {
    const response = service.delete(req.params.id);

    res.status(200).send(response);
};