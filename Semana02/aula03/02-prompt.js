// Receber dados do usuário pelo terminal

//const prompt = require("prompt-sync")()

//let nome = prompt("Qual o seu nome? ")
//let idade = prompt("Qual a sua idade ? ")

//console.log("Olá! " + nome + ", Seja bem vinda!")
//console.log("Você tem " + idade + " anos!")

// Olá, Vivian! Ano que vem você fará 34 anos!

//console.log("Olá, " + nome + " ! Ano que vem você fará " + (Number(idade) + 1) + " anos!")


// ATIVIDADE: Pergunta a altura, converte com number

const prompt = require("prompt-sync")()

let alturaTexto = prompt("Digite a sua altura: ")
let alturaConvertida = Number(alturaTexto)

//console.log(typeof(alturaTexto))
//console.log(typeof(alturaConvertida))

if (alturaConvertida >= 140) {
    console.log("Pode entrar!")
} else if ( alturaConvertida < 140 && alturaConvertida >= 120) {
    console.log("Pode entrar com acompanhante!")
} else {
    console.log("Infelizmente não pode entrar")
}