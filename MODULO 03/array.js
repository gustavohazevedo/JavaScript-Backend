 /*const frutas = ["maça", "banana", "laranja", "uva", "abacaxi", "pera"];

//Acessando elementos array
console.log(frutas[4]);

 //contando elementos array
 console.log(frutas.length);

 //acessando o ultimo elemento do array
 console.log(frutas[frutas.length - 1]);


 //auterando elementos do array

 frutas[3] = "morango";

 console.log(frutas);

 //colocando no inicio do array
 frutas.push("melão");
 console.log(frutas);

//colocando no inicio
  frutas.unshift("limão");
 console.log(frutas);

 //deleta do final do array
 frutas.pop();
 console.log(frutas);


 //deleta do inicio do array
frutas.shift();
console.log(frutas)

const itemRemovido = frutas.pop();
console.log(itemRemovido);

/*
//varrendo o array
//for of

for (const fruta of frutas) {
    console.log(fruta);
    return fruta; //relembrando
}
    frutas.forEach ((fruta) => {
        console.log(fruta);
    
});
*/
/*
 frutas.forEach((fruta) => {
        const nomeFrutaPrimeiraLetraMaiuscula =
        fruta.charAt(0).toUpperCase() + fruta.slice(1);
        console.log(nomeFrutaPrimeiraLetraMaiuscula);
 });
 */

/*
 const numeros = [1,2,3,4,5,6];
 
 //map- cria um novo array com elementos modificados

 const numerosDobrados = numeros.map((numero) =>{
    return numero / 2;
 });
 console.log(numerosDobrados);

 //filter - cria um novo array com os elementos que atendem a uma condição
 const maioresQue3 = numeros.filter((numero) => {
    return numero > 3;
 });
 console.log(maioresQue3);

 const numerof = numeros.find((n)=> n > 4);
 console.log(numerof);

//region Não é tanto usado no dia a dia, mas é bom saber que existe
//some - verifica se pelo menos um elemento atende a uma condição
// retorna true ou false (boolean)

 const existeMaiorQue5 = numeros.some(n => n > 5);
 console.log(existeMaiorQue5);
 

 //every - verifica se pelo menos um elemento atende a uma condição
 // retorna true ou false (boolean)

 const todosMaioresQue0 = numeros.every(n => n > 0);
 console.log(todosMaioresQue0);
//endregion

//reduce - reduz o array a um unico valor,
// aplicando uma função a cada elemento

const soma = numeros.reduce((total, numero) => {
    return total + numero;
}, 0);
console.log(soma);
*/

const produtos = [
    {nome: "Produto 1", disponivel: true},
    {nome: "Produto2", disponivel: false},
    {nome: "Produto3", disponivel: true},
    {nome: "Produto 4", disponivel: true}
];

console.log("------- Com for...of-------");
const produtosDisponiveis = [];
for(const produto of produtos) {
    if(produto.disponivel) {
        produtosDisponiveis.push(produto.nome);
     }
    }
    console.log(produtosDisponiveis);

    console.log(produtosDisponiveis);

    //-----------------------------------

console.log("---- Com map e filter----");

cont prodDisponiveisMap = produtos.filter((produto)

    


















 

