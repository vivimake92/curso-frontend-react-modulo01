// Objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.

const person = {
    "name": "Ana",
    "age": 27
};

console.log(person);

console.log(person.name); // Acessando a propriedade name do objeto person

console.log(person.age); // Acessando a propriedade age do objeto person


// Adicionando uma nova propriedade ao objeto

person.city = "Belém";

console.log(person);