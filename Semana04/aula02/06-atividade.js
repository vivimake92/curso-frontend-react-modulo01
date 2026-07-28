/* Base: use o map para aplicar 10% de desconto (preço * 0.9)
Use o filter para listar só os preços acima de 60
*/

const prices = [100, 50, 30, 80, 120, 65, 45, 25, 90, 10];

console.log("Preços originais: ", prices);

const discountedPrices = prices.map((price) => {
    return price * 0.9;
});

console.log("Preços com desconto: ", discountedPrices);

const pricesAbove60 = discountedPrices.filter((price) => {
    return price >= 60;
});

console.log("Preços acima de 60: ", pricesAbove60);