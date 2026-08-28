// atividade 01
const aluno = { nome: "Lucas", idade: 20, curso: "Engenharia", cidade: "Rio de Janeiro", estado: "RJ" };

// 1 - Mostrar: Nome, Idade, Curso, Cidade, Estado
console.log(aluno.nome, aluno.idade, aluno.curso, aluno.cidade, aluno.estado);

// 2 - Alterar a cidade
aluno.cidade = "Niterói";

// 3 - Adicionar email
aluno.email = "lucas@email.com";

// 4 - Use o destructuring de alguma forma
const { nome, curso } = aluno;
console.log(nome, curso);

// 5 - Criar uma cópia utilizando spread para alunoAtualizado
const alunoAtualizado = { ...aluno };

// 6 - Transformar o objeto em JSON
const alunoJSON = JSON.stringify(alunoAtualizado);

// 7 - Voltar de JSON para objeto
const alunoObjeto = JSON.parse(alunoJSON);

//atividade 02
const usuario = { 
  id: 1, 
  nome: "Claudia Raia", 
  email: "claudia@email.com", 
  idade: 25, 
  endereco: { cidade: "São Paulo", estado: "SP", numero: 145 } 
};

// 1 - Como acessar o nome?
console.log(usuario.nome);

// 2 - Como acessar a cidade?
console.log(usuario.endereco.cidade);

// 3 - Como alterar a idade?
usuario.idade = 26;

// 4 - Como adicionar telefone?
usuario.telefone = "11 99999-9999";

// 5 - Como remover o email?
delete usuario.email;

// 6 - Como criar uma cópia do usuário?
const copiaUsuario = { ...usuario };

// 7 - Como extrair somente nome e cidade?
const { nome: nomeUsr, endereco: { cidade: cidadeUsr } } = usuario;
console.log(nomeUsr, cidadeUsr);

// 8 - Como transformar o objeto em JSON?
const usuarioJSON = JSON.stringify(usuario);

// 9 - Como transformar o JSON novamente em objeto
const usuarioObjeto = JSON.parse(usuarioJSON);

