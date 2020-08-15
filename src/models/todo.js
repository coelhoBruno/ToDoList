const TodoId = require('./todoId');

class ToDo {

    constructor(id, name, inclusionDate, done) {
        this.id = id;
        this.name = name;
        this.inclusionDate = inclusionDate;
        this.done = done;
    }

    static of(name, inclusionDate, done) {
        return new ToDo(TodoId.new(), name, inclusionDate, done);
    }
}

module.exports = ToDo;