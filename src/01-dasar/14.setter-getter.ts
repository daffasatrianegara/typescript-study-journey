class Rectangle {
    private _width: number = 0;
    private _height: number = 0;

    set width(value: number) {
        if (value <= 0) {
            console.log("Width and height must be positive numbers.");
            return;
        }
        this._width = value;
    }

    set height(value: number) {
        if (value <= 0) {
            console.log("Width and height must be positive numbers.");
            return;
        }
        this._height = value;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get area(): number {
        return this._width * this._height;
    }

    displayInfo(): string {
        return `Width: ${this._width}, Height: ${this._height}, Area: ${this.area}`;
    }
}

const rectangle = new Rectangle();

rectangle.width = 20;
rectangle.height = 10;

console.log(rectangle.area);
console.log(rectangle.displayInfo()); 
