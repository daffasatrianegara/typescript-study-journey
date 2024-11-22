class Admin {
    static role: string = "admin"

    static getNameRole(): string {
        return `hei ${this.role}`
    }
}

console.log(Admin.role);
console.log(Admin.getNameRole());