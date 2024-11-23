class Ayam {
    static kaki: number = 2

    static jalan(): void {
        console.log(`ayam berjalan menggunakan ${this.kaki} kaki`);
    }

    tendang(): void {
        console.log(`ayam menendang menggunakan ${Ayam.kaki - 1} kaki`); // jika static propery di gunakan oleh non static, maka cara pemanggilannya beda
    }

    getKaki(): number {
        return Ayam.kaki
    }
}

// static property tidak perlu deklarasi class
Ayam.jalan()

// Ayam.tendang() // error karena bukan static property
let ayam = new Ayam()
let ayam1 = new Ayam()
let ayam2 = new Ayam()
let ayam3 = new Ayam()

Ayam.kaki = 1 

console.log(ayam.getKaki(), ayam1.getKaki(), ayam2.getKaki(), ayam3.getKaki());