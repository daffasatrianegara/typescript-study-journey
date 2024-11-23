abstract class Makanan {
    constructor(public name: string) {}

    menu(): void {
        console.log(`menu hari ini adalah ${this.name}`);
    }

    abstract antar(): void
}

class Pelanggan extends Makanan {
    constructor(pesanMenu: string, public nama: string) {
        super(pesanMenu)
    }

    antar(): void {
        console.log(`pelayan mengantarkan ${this.name} kepada pelanggan bernama ${this.nama}`);
    }
}

const richard = new Pelanggan("nasi goreng", "richard")
richard.menu()
richard.antar()