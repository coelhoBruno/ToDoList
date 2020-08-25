const TodoId = require('./todoId');

class ToDo {

    constructor(id, name, inclusionDate, done) {
        this.id = id;
        this.name = name;
        this.inclusionDate = inclusionDate;
        this.done = done;
    }

    static of(name) {
        return new ToDo(TodoId.new(), name, new Date().toLocaleDateString(), false);
    }
}

module.exports = ToDo;