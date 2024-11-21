export class User {
    constructor(public name: string, public age: number, public gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    setName(value: string): void {
        this.name = value
    }

    getName = (): string => {
        return this.name
    }
}

class Admin extends User {
    read: boolean = true
    write: boolean = true

    getRole(): { read: boolean, write: boolean } {
        return {
            read : this.read,
            write : this.write
        }
    }
}

const gender: [string, string] = ["pria", "wanita"]

let user = new User("daffa", 21, gender[0])
let admin = new Admin("toni", 25, gender[0])

