class Manusia {
    otak: number = 1
    mata: number = 2
    tangan = 2 
    kaki = 2

    jalan(): void {
        console.log("aku jalan...");
    }
}

class Pria extends Manusia {
    jenis_kelamin: string = "pria"
}

const asep = new Pria()

asep.jalan()