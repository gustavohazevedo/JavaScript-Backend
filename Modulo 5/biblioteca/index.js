//Criar Arquivo
const fs = require("fs/promises");

async function criarArquivo() {
    const livros = [
        {
            id: 1,
            titulo: "Dom Quixote ",
            autor: "Miguel de Cervantes"
        },
        {
            id: 2,
            titulo: "Cem Anos de Solidão",
            autor: "Gabriel García Márquez"
        }
    ];

    //Criar Arquivo
    await fs.writeFile("Livros.json", JSON.stringify(livros, null, 2));
    console.log("Arquivo Criado com Sucesso!");
}
//listar livros
async function listarLivros() {
    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //transformar para objeto
    const livros = JSON.parse(dados);

    //exibir no console (no futuro sera seu site)
    console.log(livros);
}
//Adicionar Livro

async function adicionarLivro() {
    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //tranformar (parse)
    const livros = JSON.parse(dados);

    //add livro (push)
    livros.push({
        id: 3,
        titulo: "Jogos vorazes",
        autor: "Suzanne Collins"
    });

    //retransformar no json
    await fs.writeFile("Livros.json", JSON.stringify(livros, null, 2));


    //livro adicionado com secesso
    console.log("Livro adicionado com Sucesso!");

}
//Alterar livro
async function alterarLivro(id) {

    //prescisamos saber o livro

    //ler o arquivo
    const dados = await fs.readFile("livros.json", "utf-8");

    //transformar o arquivo JSON --> Objeto
    const livros = JSON.parse(dados);

    //descobrir o livro
    const livro = livros.find((livro) => livro.id === id);

    //logica - se não existir
    if (!livro) {
        console.log("livro não encontrado");
        return;
    }

    //alterar livro
    livro.autor = "Maceió";

    //rertransformar
    await fs.writeFile("Livros.json", JSON.stringify(livros, null, 2));
    console.log("Livro alterado com sucesso!");
}








//Deletar Livro
async function deletarLivro(id) {
    //Ler aqrquivo
    const dados = await fs.readFile("livros.json", "utf-8");
    //transformar o arquivo
    const livros = JSON.parse(dados);

    //procurar o livro a ser deletado
    //logica do não -msg
    if (!livros) {
        console.log("lista de livros não encontrado");
        return;
    }
    // procurar o livro a ser deletado -- deleta os dados do livro
    const livrosAtualizados = livros.filter((livro) => livro.id !== id);


    //retransformar
    await fs.writeFile("Livros.json", JSON.stringify(livrosAtualizados, null, 2));
    console.log("Livro deletado com sucesso");
}



//Função executar
async function executar() {
    await criarArquivo();

    await listarLivros();

    await adicionarLivro();

    await alterarLivro(1);

    await deletarLivro(1);




}

//chamando o inicio (endpoint)
executar();