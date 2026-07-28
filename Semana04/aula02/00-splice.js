// Splice é usado para adicionar ou remover elementos de um array em uma posição específica. Ele modifica o array original e pode retornar os elementos removidos.

const shoppingList = ["arroz", "iogurte", "feijão", "café"]

//shoppingList.shift() // Remove o primeiro item da lista

console.log(shoppingList)

//shoppingList.splice(1, 1) // Remove item de alguma posição (1º parâmetro) e a quantidade de itens a partir dessa posição (2º parâmetro)

//console.log(shoppingList)

//const position = shoppingList.indexOf("feijão")
//console.log(position)

//shoppingList.splice(position, 1) // Remove o item "feijão" da lista
//console.log(shoppingList)

shoppingList.splice(0, 1, "arroz integral") // Remove o item na posição 0 e adiciona "arroz integral" no lugar
console.log(shoppingList)

shoppingList.splice(3, 1, "macarrão")
console.log(shoppingList)