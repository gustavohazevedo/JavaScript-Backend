const { resolve } = require("node:dns");


const usuarios = [
    {
        id: 1,
        nome: "Levi",
        whats: "19993548579",
        email: "Levi.az@gmail.com",
        cep: "13670000"
    },


 {
        id: 2,
        nome: "Ravi",
        whats: "19993548129",
        email: "Ravi.az@gmail.com",
        cep: "13670000"
    },

    

    {
        id: 3,
        nome: "Eliade",
        whats: "19993548129",
        email: "Eliade.@gmail.com",
        cep: "13670000"
    }

];

//função buscarUsuario
async function buscarUsuario(id) {

    return new Promise((resolve, rejct) => {
        const usuario = usuarios.find(usuario => usuario.id === id);

        if (usuario) {
            resolve(usuario);
        }
        else
            rejct("Usuario não encontrado");

    }, 1000)
};

//transformando em modulo
module.exports = {
    buscarUsuario
};





