//atividade 01
function saudacao(nome) {
  return "Olá, " + nome + "!";
}

console.log(saudacao("Maria"))



//atividade 02
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

console.log(somar(10, 5));  //15
console.log(subtrair(10, 5)); // 5
console.log(multiplicar(10, 5)); // 50
console.log(dividir(10, 5)); // 2

//atividade 03
const verificarIdade = idade => idade >= 18 ? "Maior de idade" : "Menor de idade";

// Exemplos de uso:
console.log(verificarIdade(18)); // Menor de idade
console.log(verificarIdade(17)); // Maior de idade

//atividade 04
const calcularDobro = numero => numero * 2;

// Exemplo de uso:
console.log(calcularDobro(20)); // 
