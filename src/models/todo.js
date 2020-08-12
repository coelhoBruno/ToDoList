const TodoId = require('./todoId');
class ToDo {

    constructor(id, nome, dataInclusao, concluida) {
        this.id = id;
        this.nome = nome;
        this.dataInclusao = dataInclusao;
        this.concluida = concluida;
    }

    static of(nome, dataInclusao, concluida) {
        return new ToDo(TodoId.new(), nome, dataInclusao, concluida);
    }
}

module.exports = ToDo;