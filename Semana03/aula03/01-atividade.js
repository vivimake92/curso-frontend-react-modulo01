// Testando o Math.random

// Numero aleatorio entre 0 e 1
//console.log(Math.random())


// BASE da Função: Jogo do acerte o número

// Numero aleatorio entre 0 e 9
const alvo = Math.floor(Math.random() * 10)

let palpite = 0

const prompt = require("prompt-sync")()

function darDica(palpite, alvo) {
    if (palpite == alvo) {
        return "Acertou!"
} else if (palpite > alvo) {
    return "O número é menor que o seu palpite!"
    } else {
        return "O número é maior que o seu palpite!"
    }
}

while (palpite != alvo) {
    palpite = prompt("Digite o seu palpite: ")
    console.log(darDica(palpite, alvo))
}