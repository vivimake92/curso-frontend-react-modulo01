const numeroUm = 50
const numeroDois = 30

let resultado = 0


// SOMA
resultado = numeroUm + numeroDois
console.log(resultado)


//SUBTRAÇÃO
resultado = numeroUm - numeroDois
console.log(resultado)


//MULTIPLICAÇÃO
resultado = numeroUm * numeroDois
console.log(resultado)


//DIVISÃO
resultado = numeroUm / numeroDois
console.log(resultado)


//POTENCIALIZAÇÃO
resultado = 2 ** 3
console.log(resultado)


//RESTO DA DIVISÃO
// 3/2
console.log(3 % 2)
//EXEMPLO:

const numero = 4

resultado = numero % 2

if (numero % 2 == 0) {
    console.log("É par")
} else {
    console.log("É impar!")
}


// E (&&) OU (||)
// &&: Se ambas forem true = Executa o código
if (true && true) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}

// ||: Se ambas forem false = Executa o código
if (true || false) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}


let contadorCliques = 0

contadorCliques = contadorCliques + 1 // 1
contadorCliques = contadorCliques + 1 // 2
contadorCliques = contadorCliques + 1 // 3
contadorCliques = contadorCliques +1 // 4
// Tudo isso pode ser substituida por:
contadorCliques ++ // 5
// Para diminuir:
contadorCliques -- // 4
// Para aumentar/diminuir/multiplicar/dividir o resultado em maior quantidade:
contadorCliques += 10 // 14