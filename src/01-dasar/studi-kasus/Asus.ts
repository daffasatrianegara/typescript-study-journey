import Laptop from "./baseLaptop"

class Asus<T> extends Laptop<T> {
    constructor(public price: number, public type: T) {
        super("Asus", price, type, true, true)
    }
}

export default Asus