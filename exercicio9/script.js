// As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let qtdMaca = parseFloat(prompt("Quantas maças deseja comprar"));

if (qtdMaca < 12) {
  document.write(`Saiu R$:${qtdMaca * 0.3} e cada maça saiu por R$:0.30`);
} else {
  document.write(`Saiu R$:${qtdMaca * 0.25} e cada maça saiu por R$:0.25`);
}