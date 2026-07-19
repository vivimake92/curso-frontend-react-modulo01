// Desafio 1 - Preço com desconto
// Escreva a função "precoComDesconto(preco, desconto)" que DEVOLVE:
// o preço já com desconto aplicado (desconto em %).
// Pratica: função, parâmetros, return

function precoComDesconto(preco, desconto) {
    const valorComDesconto = preco - (preco * desconto) / 100

    return valorComDesconto
}

console.log(precoComDesconto(100, 10)) // 90



// ARROW FUNCTION

const precoComDescontoArrow = (preco, desconto) => 
    preco - (preco * desconto) / 100

console.log(precoComDescontoArrow(100, 20))



// DESAFIO 2 - Maior de dois
// Escreva "maiorDeDois(a, b)" que DEVOLVE o maior dos dois números.
// Pratica: funcão + if/else + return dentro da decisão



const maiorDeDois = (num1, num2) => 
    num1 > num2 ? num1 : num2 

console.log(maiorDeDois(5, 3))
