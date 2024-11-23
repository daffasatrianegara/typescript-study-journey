class Karakter {
    private arrKekuatan: string[] = ["api", "tanah", "air", "angin"]

    constructor(public nama: string, public kekuatan: string, public overall: number) {
        if(!this.arrKekuatan.includes(kekuatan)) {
            throw new Error("Kekuatan tidak ditemukan...")
        }
    }

    serang(): void {
        switch (this.kekuatan) {
            case "api":
                console.log("whop whop whop");
                break;
            case "tanah":
                console.log("Grr grr grrr");
                break
            case "air":
                console.log("Splash splash splash");
                break
            case "angin":
                console.log("Fhiuuu fwuehhh");
                break
            default:
                console.log("kekuatan tidak diketahui");
                break;
        }
    }
}

const zuko = new Karakter("Zuko", "api", 10000)
console.log(zuko);

zuko.serang()