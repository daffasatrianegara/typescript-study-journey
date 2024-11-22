class List<T> {
    private data: T[]

    constructor(...elements: T[]) {
        this.data = elements
    }

    add(value: T): void {
        this.data.push(value)
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements)
    }

    getAll(): T[] {
        return this.data
    }
}

const listNumber = new List<number>(1, 2, 3, 4, 5)
const listString = new List<string>("daffa", "satria", "negara")
const listRandom = new List<string | number | boolean>("Daffa", 21, true)

listNumber.add(1)
listNumber.addMultiple(6, 7, 8, 9, 10)

listString.add("bawotong")
listString.addMultiple("ade", "tompel")

listRandom.add(false)
listRandom.addMultiple("bawotong", 123, false, false)

const test1 = listNumber.getAll()
const test2 = listString.getAll()
const test3 = listRandom.getAll()

console.log(test1);
console.log(test2);
console.log(test3);