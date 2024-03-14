function calcularAnorNascimento(nome, idade) {
    let anoAtual = new Date().getFullYear();

    let anoNascimento = anoAtual - idade;

    console.log(`Nome: ${nome}, Idade: ${idade} anos, nasceu em ${anoNascimento}`)
}

let nomeUsuario = prompt('Digite seu nome:');
let idadeUsuario = parseInt(prompt('Digite sua idade:'));

calcularAnorNascimento(nomeUsuario, idadeUsuario);