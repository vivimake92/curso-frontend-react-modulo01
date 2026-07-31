function makeAdder() {
    return function(n) {
        return n + 1
    }
}

const addOne = makeAdder()

console.log(addOne(41));


// CALCULANDO TAXA DE IMPOSTO


function createTaxCalculator(rate) {
    return function (value) {
        return value + (value * rate) / 100
    }
}

const withImportTax = createTaxCalculator(10);

const withImportTax2 = createTaxCalculator(25);

console.log(withImportTax(200));

console.log(withImportTax(400));


// CRIANDO UM CONTADOR 


function createCounter() {
    let counter = 0

    return function() {
        counter = counter + 1
        return counter
    }
}

const clicks = createCounter();

console.log(clicks(), clicks(), clicks());

const clicks2 = createCounter();

console.log(clicks2(), clicks2());

console.log(clicks());