// generic
const genericBasic = <T>(value: T) => {
    return value
}

const str = genericBasic("daffa").toLowerCase()
const num = genericBasic(123).toLocaleString()

console.log(str, num);