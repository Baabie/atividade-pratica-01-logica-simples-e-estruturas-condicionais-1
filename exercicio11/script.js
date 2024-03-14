// 11. Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

let numero = parseInt(prompt("Insira um numero inteiro positivo"));


if (numero < 0) {
    alert("Insira um numero valido");
} else if (numero % 2 != 0) {
    alert("Numero impar");
} else {
    alert("Numero par");
}