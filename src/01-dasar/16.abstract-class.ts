export abstract class Vehicle {
    abstract brand:  string
    abstract wheels: number

    start(): string {
        return "stututututututut..."
    }
}

class Car extends Vehicle {
    brand: string = "BMW";
    wheels: number = 4;
}

const car = new Car()
console.log(car.brand + "\n" + car.wheels);
console.log(car.start());
