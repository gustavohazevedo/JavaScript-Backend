
function QuandoClicarNoBotão(){
    console.log("Obrigado por comprar em nossa loja!");
}
//invocação da função


QuandoClicarNoBotão();


function exibirMensagem(){
    console.log("Bebam água");
}
exibirMensagem();


//mais simples de tudo(parametros)


function somar(){
    const resultado= 8+3;
    console.log(resultado);
}
somar();


function somar(número1, número2){
    return(número1+número2);


}


const resultado = somar(8,3);


if(resultado >= 11){ 


console.log("o Senai é massa");
}
else{
    console.log("Ainda é massa");
}
 
/*
 console.log() é como mostrar o resultado em uma tela.


 return é como entregar o resultado para outra parte do programa utilizar.
*/


function calcularDesconto (valor, desconto){
    return valor - desconto;
}
const valorFinal= calcularDesconto(100, 20);
console.log(valorFinal);


//imposto sobre produto


const valorImposto = valorFinal * 0.04;
console.log("Valor Tributário:" + valorImposto)


//regra cashBack


if(valorFinal > 50){
    const cashBack = valorFinal * 0.10
    console.log("valor do cashBack" + cashBack);
}
/* 
Regra parcelamento 
R$ 100 parcela tem juros 2% do total
para ser sem juros acima de R$ 399
o limite é de 6 parcelas.
*/


function parcelamento(valorFinal){ 
if(valorFinal> 399){
    const valorParcelado = valorFinal / 6;
    console.log("Valor das parcelas 6x com juros: R$" + valorParcelado);
} else if (valorFinal >= 100){
    const valorParcelado = (valorFinal * 1.02)/ 6;
    console.log("valor das parcelas 6x com juros: R$" + valorParcelado);


}else{ 
    console.log("o valor nao atinge o minimo de R$ 100 para parcelamento").
}
}

/*Declarar as constantes */
const valor = 400; 
const desconto = 20;
//Constante com calculo do valorFinal 
const valorFinal01 = calcularDesconto(valor, desconto);

//Chamas das/ funções 
calculoImposto(valorFinal);
cashBack(valorFinal);
parcelamento(valorFinal);

// #region Funções
function calcularDesconto(valor, desconto){
    return valor - desconto;   
}
//Imposto sobre produto
function calculoImposto(valorFinal){
    const valorImposto = valorFinal * 0.04;
    console.log("Valor tributário: " + valorImposto);
}
//Regra CashBack
function cashBack(valorFinal){
    if(valorFinal > 50){
        const cashBack = valorFinal*0.10;
        console.log("Valor do CashBack: " + cashBack);
    }
}

function parcelamento(valorFinal){
    if (valorFinal > 399) {
        // Compras acima de 399: sem juros
        const valorParcelado = valorFinal / 6;
        console.log("Valor das parcelas 6x sem juros: R$ " + valorParcelado); 
        
    } else if (valorFinal >= 100) {
        // Compras entre 100 e 399: com 2% de juros no total
        const valorParcelado = (valorFinal * 1.02) / 6;
        console.log("Valor das parcelas 6x com juros: R$ " + valorParcelado); 
        
    } else {
        // Compras abaixo de 100: não parcela
        console.log("O valor não atinge o mínimo de R$ 100 para parcelamento.");
    }
}
//#endregion
