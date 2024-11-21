class Karyawan {
    constructor(public nama: string, public gajiPokok: number) {}

    getSalary(): number {
        return this.gajiPokok;
    }
}

class Tetap extends Karyawan {
    constructor(nama: string, gajiPokok: number) {
        super(nama, gajiPokok);
    }

    getSalary(): number {
        const bonus: number = 0.20; 
        return this.gajiPokok + this.gajiPokok * bonus;
    }
}

class Kontrak extends Karyawan {
    constructor(nama: string, gajiPokok: number, public durasi: number) {
        super(nama, gajiPokok);
    }

    getSalary(): number {
        return this.gajiPokok * this.durasi; 
    }
}

class Freelance extends Karyawan {
    constructor(nama: string, public tarifProyek: number, public jumlahProyek: number) {
        super(nama, tarifProyek); 
    }

    getSalary(): number {
        return this.tarifProyek * this.jumlahProyek;
    }
}

function printEmployeeDetail(karyawan: Karyawan): void {
    console.log(`Nama: ${karyawan.nama}`);
    console.log(`Gaji Total: Rp${karyawan.getSalary()}`);

    if (karyawan instanceof Tetap) {
        console.log(`Tipe Karyawan: Tetap`);
        console.log(`Bonus: 20%`);
    } else if (karyawan instanceof Kontrak) {
        console.log(`Tipe Karyawan: Kontrak`);
        console.log(`Durasi: ${karyawan.durasi} bulan`);
    } else if (karyawan instanceof Freelance) {
        console.log(`Tipe Karyawan: Freelance`);
        console.log(`Jumlah Proyek: ${karyawan.jumlahProyek}`);
        console.log(`Tarif per Proyek: Rp${karyawan.tarifProyek}`);
    }
    console.log('--------------------------------');
}

const karyawanTetap = new Tetap("Daffa", 12000000);
const karyawanKontrak = new Kontrak("Satria", 3000000, 6);
const karyawanFreelance = new Freelance("Negara", 2000000, 5);

printEmployeeDetail(karyawanTetap);
printEmployeeDetail(karyawanKontrak);
printEmployeeDetail(karyawanFreelance);
