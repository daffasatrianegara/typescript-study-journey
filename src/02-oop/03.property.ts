export class Mobil {
    merk: string = ""
    warna: string = ""
    jmlRoda: number = 0
    jmlKursi: number = 0
    
    jalan(): void {
        console.log("Vrooom Vrooom Vrooooom...");
    }
}

const arrFerrari: [string, string, number, number] = ["Ferrari", "merah", 4, 2]
const ferrari = new Mobil()

ferrari.merk = arrFerrari[0]
ferrari.warna = arrFerrari[1]
ferrari.jmlRoda = arrFerrari[2]
ferrari.jmlKursi = arrFerrari[3]

console.log(ferrari);
ferrari.jalan()