class Binatang {
    constructor(public name: string, public isCarnivore: boolean) {}
}

class Katak extends Binatang {
    constructor(name: string, isSwimming: boolean, public color: string) {
        super(name, isSwimming)
    }
}

const katak = new Katak("aldo", true, "white")
console.log(katak);