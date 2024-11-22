// return string function
function greeting(name: string): string {
    return "Hi, my name is " + name
}

// return number function
function getAge(yearDate: number): number {
    const currentYear = new Date().getFullYear()
    return currentYear - yearDate
}

// return boolean value
function isNumberValid(number: number): boolean {
    const check = Boolean(number)
    return check
}

// return any value
function randomValue(params: any): any {
    if(typeof params == "number") {
        return params + " is number!"
    } else if(typeof params == "string") {
        return params + " is string!"
    } else if(typeof params == "boolean") {
        return params + " is boolean!"
    } else {
        return params + " is undefined!"
    }
}

// not return a value
function printInformation(name: string, born: number):void {
    console.log(greeting(name));
    console.log("saya memiliki umur", getAge(born));
}

enum personalInformation {
    name = "daffa",
    bornYear = 2003,
}
printInformation(personalInformation.name, personalInformation.bornYear)

console.log(isNumberValid(1));
console.log(isNumberValid(0));

console.log(randomValue("daffa"));
console.log(randomValue(12));
console.log(randomValue(true));
console.log(randomValue(null));