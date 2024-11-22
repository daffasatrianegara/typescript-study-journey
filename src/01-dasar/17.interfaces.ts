interface Laptop {
    name: string
    on(): void
    off(): void
}

class Asus implements Laptop {
    constructor(public name: string, public isGaming: boolean = true) {}

    on() {
        console.log("Laptop menyala...");
    }

    off() {
        console.log("Laptop mati...");
    }
}

class Macbook implements Laptop {
    constructor(public name: string, public isKeyboardLight: boolean = true) {}

    on() {
        console.log("Laptop menyala...");
    }

    off() {
        console.log("Laptop mati...");
    }
}

const asus = new Asus("Asius", true)
const macbook = new Macbook("Jarvis", false)

asus.on()
macbook.on()

console.log(asus.name);
console.log(macbook.name);