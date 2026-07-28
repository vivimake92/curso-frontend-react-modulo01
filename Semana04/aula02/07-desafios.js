const orders = [25, 40, 18];

console.log("Valor com frete: ",orders);

const orderFrete = orders.map((order) => {
    return order +7;
})

console.log("Valor total com frete: ", orderFrete);


console.log("=========== DESAFIO 2 ===========");

const guests = ["Ana", "Bruno", "Carla"];

const conviteChurrasco = guests.map((guest) => {
    return `Convite para: ${guest}`;
})

console.log("Convites para o churrasco: ", conviteChurrasco);


console.log("=========== DESAFIO 3 ===========");


const expirationyears = [2024, 2027, 2023, 2030];

const valids = expirationyears.filter ((valid) => {
    return valid >= 2026;
});

console.log("Remédios válidos: ", valids);