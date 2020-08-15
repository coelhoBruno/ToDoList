const ToDo = require('../models/todo')
const TodoRepository = require('../repositories/TodoRepository')

const repository = new TodoRepository();

class TodoService {
    
    getAll() {
        return repository.getAll();
    }

    getById(id) {
        return repository.getById(id);
    }

    save(TodoCmd) {
        const todo = ToDo.of(TodoCmd.name, TodoCmd.inclusionDate, TodoCmd.done);

        return repository.save(todo);
    }

    delete(id) {
        return repository.delete(id);
    }
}

module.exports = TodoService;
