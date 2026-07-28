// Filter é usado para criar um novo array com todos os elementos que passam em um teste implementado pela função fornecida.

const numbers = [10, 3, 8, 6];

const bigger = numbers.filter((n) => {
    return n >= 6
});

console.log(numbers);
console.log(bigger);

const names = ["Ana", "Bruno", "Carlos"];
const moreThan5 = names.filter((name) => {
    return name.length >= 5
});

console.log(names);
console.log(moreThan5);