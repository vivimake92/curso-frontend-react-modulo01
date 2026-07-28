// Every verifica se todos os elementos do array satisfazem a condição fornecida na função de callback. Retorna true se todos os elementos atenderem à condição, caso contrário, retorna false.

const ages = [20, 34, 18, 25];

const allAdults = ages.every((age) => {
    return age >= 18;
});
console.log(allAdults); // Saída: true, pois todos os elementos do array são maiores ou iguais a 18
