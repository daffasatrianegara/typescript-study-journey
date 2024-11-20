// default parameter
type FullName = (val1: string, val2?: string) => string // ? means the paramater can to be filled when try to call the function

const fullName: FullName = (first, last = "widodo") => {
    return `${first} ${last}`
}

console.log(fullName("jokowi"));
console.log(fullName("jokowi", "ganteng"));

// optional parameter
const getUmur = (val1: number, val2?: number): string => { // val2? is optional parameter
    if(val2 === undefined) {
        return `anda memiliki umur ${val1}`
    }

    const calculateAge = Math.abs(val1 - val2)
    return `anda dan teman anda memiliki selisih umur sebesar ${calculateAge}`
}

console.log(getUmur(21));
console.log(getUmur(21, 56));