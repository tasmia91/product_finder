let counter = function() {
    let number = 0 
    return() =>{
        return ++number;
    } 
}

let countingFunction = counter()

console.log(countingFunction())
console.log(countingFunction())
console.log(countingFunction())
console.log(countingFunction())
