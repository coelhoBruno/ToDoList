const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('todos.json')
const db = low(adapter)

class TodoRepository {

    getAll() {
        return db.get('todos')
            .value();
    }

    getById(id) {
        return db.get('todos')
            .find({id: {id: id}})
            .value();
    }
    
    save(todo) {
        db.get('todos')
           .push({id: todo.id, name: todo.name, inclusionDate: todo.inclusionDate, done: todo.done})
           .write();
        
        return todo;
    }

    delete(id) {
        db.get('todos')
            .remove({id: {id: id}})
            .write();
    }
    
}

module.exports = TodoRepository;