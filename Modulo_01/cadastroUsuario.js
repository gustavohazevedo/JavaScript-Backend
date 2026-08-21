//cadastro usuário

function cadastroUsuario(id, nome, senha, cpf, email){
    return{
        id,
        nome,
        senha,
        cpf,
        email
    };

}

const usuario = cadastroUsuario(1, "Henrique", 
                                  "Aluno2026",
                                   52314216857,
                                 "yzgmail,com")
console.log(usuario);

//Com objeto eu agora consigo

console.log( "Oi" +  usuario.nome + " seu cadastro foi realizado com sucesso!")