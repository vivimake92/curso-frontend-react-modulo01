// Map é usado para criar um novo array com os resultados da aplicação de uma função a cada elemento do array original.

const numbers = [1, 2, 3, 4, 5, 6]

const doubledNumbers = numbers.map((n) => {
    return n * 2
})

console.log(numbers)
console.log(doubledNumbers)