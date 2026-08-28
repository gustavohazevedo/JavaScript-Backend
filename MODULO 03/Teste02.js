/*propriedades e comportamento

const nome = [] Array
cons nome = {} objeto
cons arrayObjeto = [{},{},{}]
cons objetoObjeto {{},{},{}}
*/


//Construindo um 1 objeto
/*
const aluno = {
    id: 1,
    nome: "David",
    idade: 30,
    curso: "EM Integrado",
    RM: 87654,
    cadastroAtivo: true,
    email: null,
    hobbie:["ler", "bola", "xadrez"],


    endereco: { 
    rua: "Rua 35, 405,",     
    bairro: "Jardim Italia",
    cidade: "Santa Rita do Passa Quatro",
    estado: "São Paulo",
    pais: "Brasil",
    cep: 13670000
    }
};
//console.log(aluno);

// Acessando propriedades dos objetos

console.log(aluno.nome);

//regra se cadastroAtivo = true, msg = seja bem vindo ao nosso sistema.
    if (aluno.cadastroAtivo === true){
        console.log(aluno.nome + "seja bem vindo ao nosso sistema" );
    }
    else{
        console.log("O seu cadastro não esta ativo, procure as RH");
    }
        

console.log(aluno.endereco.rua);

//Alterar propriedades do objeto

aluno.idade = 18;
console.log(aluno.idade); 

// adicionando propriedade
aluno.cpf = 22334565432
aluno.telefone = "(19)9935-48579"
console.log(aluno);

//deletarmuma propriedade
delete aluno.curso;
console.log(aluno);


//Destructuring

const { nome, idade, RM} = aluno;

console.log (nome);

//Renomeando com Destructuring
const {nome: nomeCompleto} = aluno;
console.log(nomeCompleto);
 
const dadosFamilia= {
    nomeMãe: "Jussara",
    nomePai: "Paulinho",
};

const usuario = {
    ...aluno,
    ...dadosFamilia,
    dataCadastro: "28/08/2026"

};
//console.log(usuario);

// Dados pessoais iniciais
const dadosPessoais = {
    nome: 'Guilherme',
    matrícula: '20260828',
    curso: 'Analise e Desenvolvimento de Sistemas'
};

const dadosContato = {
    email: 'guilherme@email.com',
    telefone: '(13)99999-9999'

};

const perfilCompleto = {
    ...dadosPessoais,
    ...dadosContato
};

console.log(perfilCompleto);

const perfilAtualizado = {
    ...dadosPessoais,
    status: "Matriculado"
};

perfilAtualizado.curso = "Engenharia de sofware 2";
console.log(perfilAtualizado);

console.log(Object.keys(aluno));


console.log(Object.values(aluno));


console.log(Object.entries(aluno));

//objeto x JSON
//objeto passando para JSON
const json = JSON.stringify(aluno);
console.log(json);

const objeto = JSON.parse(json);
console.log(objeto);
*/







