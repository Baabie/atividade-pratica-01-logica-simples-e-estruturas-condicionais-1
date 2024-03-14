let num1 = parseFloat(prompt('Digite o primeiro valor:'));
let num2 = parseFloat(prompt('Digite o segundo valor:'));

if (num1 === num2) {
    alert('Números iguais');
} else if (num1 > num2) {
    alert('Primeiro é maior');
} else {
    alert('Segundo é maior');
}

let resultado = compararNumeros(num1, num2);
document.write(resultado);