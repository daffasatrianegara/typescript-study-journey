class Vehicle {
    constructor(public brand: string, public year: number) {}

    displayInfo(): string {
        return `Brand: ${this.brand}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(brand: string, year: number, public numberOfDoors: number) {
        super(brand, year);
    }

    displayInfo(): string {
        return `Brand: ${this.brand}, Year: ${this.year}, Doors: ${this.numberOfDoors}`;
    }
}

class Motorcycle extends Vehicle {
    constructor(brand: string, year: number, public type: string) {
        super(brand, year);
        if (!["sport", "cruiser"].includes(type)) {
        }
        throw new Error("Invalid motorcycle type");
    }

    displayInfo(): string {
        return `Brand: ${this.brand}, Year: ${this.year}, Type: ${this.type}`;
    }
}

const vehicle = new Vehicle("Toyota", 2003);
const car = new Car("BMW", 2019, 2);
const motorcycle = new Motorcycle("Suzuki", 2021, "sport");

console.log(vehicle.displayInfo());
console.log(car.displayInfo());
console.log(motorcycle.displayInfo());
