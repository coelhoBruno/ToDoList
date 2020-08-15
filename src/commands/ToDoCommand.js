class ToDoCommand {

    constructor(name, inclusionDate, done) {
        this.name = name;
        this.inclusionDate = inclusionDate;
        this.done = done;
    }

    static of(name, inclusionDate, done) {
        return new ToDoCommand(name, inclusionDate, done);
    }

}

module.exports = ToDoCommand;