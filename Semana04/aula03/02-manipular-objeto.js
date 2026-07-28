const car = {
    "brand": "Fiat",
    "year": 2020,
};

car.color = "Preto"; // Adicionando uma nova propriedade ao objeto

console.log(car);

car.year = 2025; // Alterando o valor da propriedade year do objeto

console.log(car);


// Para remover uma propriedade do objeto, podemos usar o operador delete:

delete car.brand; // Removendo a propriedade brand do objeto

console.log(car);

Object.keys(car); // Retorna um array com as chaves do objeto

console.log(Object.keys(car));

Object.values(car); // Retorna um array com os valores do objeto

console.log(Object.values(car));