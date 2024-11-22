class Hewan {
    constructor(public nama: string, public usia: number) {}

    info(): string {
        return `Nama: ${this.nama}, Usia: ${this.usia} tahun`;
    }
}

class Burung extends Hewan {
    constructor(nama: string, usia: number, public panjangSayap: number) {
        super(nama, usia)
    }

    terbang(): string {
        return `Burung ${this.nama} sedang terbang dengan panjang sayap ${this.panjangSayap} cm.`;
    }
}

class Mamalia extends Hewan {
    constructor(nama: string, usia: number, public warnaBulu: string) {
        super(nama, usia)
    }

    bergerak(): string {
        return `Mamalia ${this.nama} bergerak dengan warna bulu ${this.warnaBulu}.`;
    }
}

class Reptil extends Hewan {
    constructor(nama: string, usia: number, public jenisKulit: string) {
        super(nama, usia)
    }

    merayap(): string {
        return `Reptil ${this.nama} merayap dengan kulit ${this.jenisKulit}.`;
    }
}

const burung = new Burung("Pipit", 1, 1.2);
const mamalia = new Mamalia("Jojo", 1, "Hitam");
const reptil = new Reptil("Ade", 2, "Keras");

const cetakInformasiHewan = (): void => {
    // Burung
    console.log(burung.info());
    console.log(burung.terbang());

    // Mamalia
    console.log(mamalia.info());
    console.log(mamalia.bergerak());

    // Reptil
    console.log(reptil.info());
    console.log(reptil.merayap());
}

cetakInformasiHewan();
