//Construir meu array de produtos
const produtos = [
    {
        id:1,
        nome:"Batata Frita",
        preco: 12
    },
    
    {
        id:2,
        nome:"Refrigerante",
        preco: 22
    },
    
    {
        id:3,
        nome:"Bic Mc",
        preco: 23
    },
    
    {
        id:4,
        nome:"Top Sunday",
        preco: 17
    }
]

//função buscarProdutos
async function  buscarProduto(id) {
     return new Promise((resolve, rejct) => {
        const produto = produtos.find((produto) => produto.id === id);

        if (produto) {
            resolve(produto);
        }
        else
            rejct("Produto não encontrado");

    }, 1000);
}

//mpdule para exportar
module.exports = {
    buscarProduto
};

    
    
