// Mini projeto: catálogo de produtos (array de objetos)

const products = [
    { "name": "Camiseta", "price": 50.50, "category": "roupas"},
    { "name": "Boné", "price": 40, "category": "acessórios"},
    { "name": "Tênis", "price": 300, "category": "calçados"},
    { "name": "Calça", "price": 120.99, "category": "roupas"}
]

//=================================

// Desafio do professor: Exibir todos os nomes da lista de produtos e o valor total.
const mapAll = products.map((map) => {
    return map.name
});

console.log(mapAll);

const totalAll = products.reduce((sum2, products1) => {
    return products1.price + sum2
}, 0);

console.log(`R$ ${totalAll}`);

// =================================

const clothes = products.filter((product) => {
    return product.category === "roupas"
})

console.log(clothes);

const names = clothes.map((item) => {
    return item.name
})

const total = clothes.reduce((sum, p) => {
    return sum + p.price
}, 0) // <--- qual o numero inicial da soma ?

console.log(names);
console.log(`R$ ${total}`);