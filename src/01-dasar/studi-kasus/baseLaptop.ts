import ILaptop from "./module/ILaptop"
import * as Keyboard from "./keyboard"

abstract class BaseLaptop<T> implements ILaptop<T> {
    private _isCapital: boolean = false

    constructor(public name: string, public price: number, public type: T, public lightKeyboard: boolean, public isGaming: boolean) {}

    set isCapital(value: boolean) {
        this._isCapital = value
    }

    get isCapital(): boolean {
        return this._isCapital
    }

    a() {
        return Keyboard.a(this._isCapital)
    }

    b() {
        return Keyboard.b(this._isCapital)
    }

    c() {
        return Keyboard.c(this._isCapital)
    }
}

export default BaseLaptop