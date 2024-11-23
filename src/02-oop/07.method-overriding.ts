export class Binatang {
    constructor(public name: string, public isCarnivore: boolean) {}

    makan(): void {
        console.log("Binatang makan");
    }
}

export class Katak extends Binatang {
    constructor(name: string, isSwimming: boolean, public color: string) {
        super(name, isSwimming)
    }

    makan(): void {
        console.log(`${this.name} makan`);
    }
}

const katak = new Katak("aldo", true, "white")
console.log(katak);
katak.makan()