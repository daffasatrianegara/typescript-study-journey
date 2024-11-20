// function as type
type Add = (val1 : number, val2 : number) => number
type Greet = (val1 : string) => string
type Hello = (val1? : string) => void

const addition: Add = (num1, num2) => {
    return num1 + num2
}

const greetingPeople: Greet = (val) => {
    return "Hello " + val
}

const helloWorld: Hello = (name = "asep") => {
    console.log("hello world!", name);
}

const addNumber = addition(12, 21)
const sayHello = greetingPeople("jack")

console.log(addNumber);
console.log(sayHello);
helloWorld("Daffa")