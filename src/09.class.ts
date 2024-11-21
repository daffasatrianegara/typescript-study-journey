export class User {
    // public name: string
    public age: number

    constructor(public name: string, age: number = 0) {
        this.name = name
        this.age = age
    }
}

let user = new User("daffa")
console.log(user.name, user.age);