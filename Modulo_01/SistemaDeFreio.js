let temperatura = 380;
let freioPressionado = true;

// 1. Alerta de Perigo
let alertaPerigo = temperatura >= 400;

// 2. Uso Intenso
let usoIntenso = temperatura > 300 && freioPressionado === true;

// 3. Freio Seguro
let freioSeguro = temperatura < 400 && temperatura >= 50;

// 4. Alerta no Painel
let alertaPainel = temperatura > 400 || temperatura < 0;

// 5. Estado Inativo
let estadoInativo = !freioPressionado;

// Exibir resultados
console.log("Alerta de Perigo:", alertaPerigo);
console.log("Uso Intenso:", usoIntenso);
console.log("Freio Seguro:", freioSeguro);
console.log("Alerta no Painel:", alertaPainel);
console.log("Estado Inativo:", estadoInativo);