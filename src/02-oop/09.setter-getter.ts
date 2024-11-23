class Product {
    private _price: number = 0
    private _discount: number = 0

    get price(): number {
        return this._price
    }

    get discount(): number {
        return this._discount
    }

    set price(value: number) {
        this._price =  value - (value * this.discount)
    }

    set discount(value: number) {
        this._discount = value
    }
}

const product = new Product()
product.discount = 0.15
product.price = 12000000

console.log(product.price);