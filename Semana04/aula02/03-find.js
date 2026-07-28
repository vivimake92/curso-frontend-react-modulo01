// Find devolve o primeiro elemento do array que satisfaz a condição fornecida na função de callback. Se nenhum elemento for encontrado, retorna undefined.

const numbers = [10, 3, 8, 1, 6];

const bigger = numbers.find((n) => {
    return n >= 6
});

console.log(bigger); // Saída: 10, pois é o primeiro número maior ou igual a 6 no array