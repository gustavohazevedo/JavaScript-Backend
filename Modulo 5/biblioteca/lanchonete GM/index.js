//exports e imports 
const fs = require("fs/promises");
const { buscarUsuario } = require("./usuarios");
const { buscarProduto } = require("./produtos");
const { buscarPedidos } = require("./pedidos");

//função
async function fecharConta(usuarioId) {
    try {
        console.log("Buscando usuario")
        const usuario = await buscarUsuario(usuarioId);
        console.log(usuario);

  

        console.log("Buscando Pedidos....")
        const pedidos = await buscarPedidos(usuarioId);

        //Pedido 
        //Total geral
        let totalGeral = 0;

        //Array para os itens
        const itensConta = [];

        //varrer os pedidos para ver se tem o tedido do cliente
        //varrer os itens e add(push) os itens no itens conta

        //estrutura da comanda
        for (const pedido of pedidos){
            const produto = await  buscarProduto(pedido.id);
            const subTotal = produto.preco * pedido.quantidade;

            itensConta.push({
                item: produto.nome,
                quantidade: pedido.quantidade,
                precoUnitario: produto.preco,
                subtotal: subTotal
            });

            totalGeral += subTotal;
        }

        //Construir nosso arquivo

    const comanda = {
        estabeleciomento: "Mc",
        cliente:{   
            id: usuario.id,
            nome: usuario.nome,
        },
            itens: itensConta,
            totalPagar: totalGeral
        


    }

    await fs.writeFile("comandaCliente.json",
    JSON.stringify(comanda, null,2), "utf-8");



    }
    catch (erro) {
        console.error("Erro os fechar a conta", erro);

    }

}

fecharConta(1);

