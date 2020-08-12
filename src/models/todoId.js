const uuidv4 = require('uuid');
class TodoId {
    constructor(id) {
        this.id = id;
    }

    static new() {
        return new TodoId(uuidv4.v4());
    }
}

module.exports = TodoId