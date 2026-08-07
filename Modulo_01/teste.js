
const thanos = 20;

console.log(thanos <= 18);

const a = 5;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); //Resto da divisão


console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); //Comparação de valor
console.log(a === b);// Comparação de valor e tipo
console.log(a !== b);

const idade1 = 20;
const idade2 = 25;

console.log(idade1 < idade2);
console.log(idade1 > idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade2);
console.log(idade1 == idade2);
console.log(idade1 === idade2);
console.log(idade1 !== idade2);

const idade3 = 17;
const idade4 = 15;

console.log(idade3 > 18 && idade4 > 18);
console.log(idade3 > 18 || idade4 > 18);
console.log(!(idade3 > 18 || idade4 > 18));
const idade = 25;
const matriculaAtivo = false;

const podeComprar = idade >= 18 || matriculaAtivo;
console.log(podeComprar);

let numero = 10;
console.log(numero++);
console.log(numero);
console.log(++numero);

console.log(numero--);
console.log(numero);
console.log(--numero);

const x = 5;
const y = 10;

console.log(x < y );

console.log(10== "10");

console.log(10 === "10");

console.log(true == 1);

console.log(true === 1);

console.log(null == undefined);

console.log(null === undefined);


const dataNascimento = new Date("2025-01-13");
const ativo = true;

const dezoitoAnosEmMilisegundos = 18 * 365.25 * 24 * 60 * 60* 1000;

const podeAcessar = (new Date()- dataNascimento) >=
dezoitoAnosEmMilisegundos && ativo;

console.log(podeAcessar);




















