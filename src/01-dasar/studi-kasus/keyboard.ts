type keyboard = (val: boolean) => void

const a: keyboard = (isCapital) => {
    if(isCapital === true) {
        console.log("A");
    } else {
        console.log("a");
    }
}

const b: keyboard = (isCapital) => {
    if(isCapital === true) {
        console.log("B");
    } else {
        console.log("b");
    }
}

const c: keyboard = (isCapital) => {
    if(isCapital === true) {
        console.log("C");
    } else {
        console.log("c");
    }
}

export {
    a,
    b,
    c
}