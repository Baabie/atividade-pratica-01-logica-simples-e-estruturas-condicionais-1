// Ler o número total de eleitores e votos

let totalEleitores = parseInt(prompt("Informe o número total de eleitores"));
let votosBrancos = parseInt(prompt("Informe o número de votos brancos"));
let votosNulos = parseInt(prompt("Informe o número de votos nulos"));
let votosValidos = parseInt(prompt("Informe o número de votos válidos"));


// calcular %

let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;

// resultado

console.log("Percentual de votos brancos:" + percentualBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + votosNulos.toFixed(2) + "%");
console.log("Percentual de votos validos: " + votosValidos.toFixed(2) + "%")