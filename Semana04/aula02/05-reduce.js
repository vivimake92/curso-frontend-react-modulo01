// Reduce é usado para reduzir um array a um único valor, aplicando uma função de callback a cada elemento do array, acumulando o resultado em um valor final.

const values = [10, 20, 30];

const sum = values.reduce((total, current) => total + current, 0);

console.log(sum); // Saída: 60, que é a soma de todos os elementos do array

// Quantas notas são maiores ou iguais a 6?

const grades = [8, 5, 9, 4, 7];

const passing = grades.reduce((count, grade) => {

    if (grade >= 6) {
        return count + 1;
    }

    return count;
}, 0);

console.log(passing); // Saída: 3, que é o número de notas maiores ou iguais a 6
