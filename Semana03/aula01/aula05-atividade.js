//  CONTAGEM REGRESSIVA

for (let i = 5; i >= 1; i --) {
    console.log("Contagem regressiva... " + i)
}

console.log("Já!")

// 1+2+3+4+5+6+7+8+9+10 = 55 -- Usando While

let resultado = 0
let numero = 1

while (numero <= 10) {
    resultado = resultado + numero // resultado += numero
    console.log("Resultado parcial: ", resultado)
    numero ++
}

console.log("Resultado final: ", resultado)

// Atividade 3 - Cofrinho de viagem   (WHILE: repita ATÉ bater a meta)

// Cenário: Você quer juntar R$ 100 para uma viagem e guarda R$ 15 no
//          cofrinho toda semana. Em quantas semanas você bate a meta?
//          Mostre o saldo a cada semana.

let economia = 0
let deposito = 15
let semanas = 0

while (economia <= 100) {
    economia = economia + deposito
    semanas ++
    console.log("Ja guardei no cofrinho: R$ " + economia)
}

console.log("Quantidade de semanas necessárias: " + semanas)