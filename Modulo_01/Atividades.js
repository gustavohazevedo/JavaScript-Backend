//MaiorIdade-01

let idade = 20;
//Quero saber se é maior de idade?
if (idade >= 18) {
  console.log("Maior de idade!✅");
} else {
  console.log("Menor de idade🚨🔞");
}

//Aprovação-02

let nota = 8;

if (nota >= 7) {
    console.log("Aprovado✅");
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação 👩‍🏫");
} else {
    console.log("Reprovado❌");
}

//Login-03

let usuario = "user";
let senha = "54321";

if (usuario === "user" && senha === "54321") {
    console.log("Acesso permitido!");
} else {
    console.log("🚨Usuário ou senha incorretos🚨. ❌Acesso negado!❌");
}
//Status do pedido-04📳⌨️
let statusPedido = "pago"; 

let acessoLiberado = false;

switch (statusPedido) {
    case "pago📌💵":

    case "processando💱":

    case "enviado👍":

    case "entregue👌":

    case "concluído✅":

        acessoLiberado = true;
        console.log("Status: " + statusPedido + ". O usuário pode acessar e acompanhar o sistema.");
        break;
    case "pendente":
        acessoLiberado = false;
        console.log("Status: pendente. O usuário não pode acessar os recursos finais até o pagamento.");
        break;
    default:
        console.log("Status desconhecido.");
}

//Contador-05
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}
  
//Refazendo o exercicio 05 usando for...of e while - 06
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

//Array com nomes-07

const nomes = [
  "Ana", "Bruno", "Carlos", "Diana", "Eduardo", 
  "Fernanda", "Gabriel", "Helena", "Igor", "Juliana"
];

for (const nome of nomes) {
  console.log(nome);
}
  

//Array-08

const nome = ["Ana", 
    "Carlos", 
    "Beatriz",
    "Ivo", 
    "Mariana",
    "Fernando",
    "Keyla", 
    "Ricardo",
    "Gabriel",
    "Lara"];

for (const nome of nomes) {
  // Condição if para verificar se o nome tem mais de 5 letras
  if (nome.length > 5) {
    console.log(nome);
  }
}

  
 //Somando valores-09💲
 
const numeros = [10, 20, 30, 40, 50]

let soma = 0
for (let numero of numeros) {
  soma += numero
}

console.log(soma)

//10
//Atividade 10 — Desafio do backend 

    

    const pedidos = [
    { cliente: "Ana", valor: 200, pago: true },
    { cliente: "Carlos", valor: 100, pago: false },
    { cliente: "Maria", valor: 243, pago: true },
    { cliente: "João", valor: 2400, pago: true },
    { cliente: "Luizinho", valor: 5400, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];

//Dado o array acima, mostrensomente o pedidos pagos

for(let i = 0; i < pedidos.length; i++){
    //verificar se o pedido é "pago" é true
    if(pedidos[i].pagp===true){
        console.log(perdidos[i]);
    }
}








