class Vehicle {
    constructor(brand) {
        this.brand = brand
    }

    move() {
        console.log(`${this.brand} está na estrada!`)
    }
}

class Car extends Vehicle {
    move() {
        console.log(`${this.brand} está sendo dirigido`)
    }
}

const car = new Car("Ford")

car.move()

class Bike extends Vehicle {
    move() {
        console.log(`${this.brand} está pedalando na ciclovia`)
    }
}

const bike = new Bike("Caloi");

bike.move();