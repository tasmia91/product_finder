// let mirror = (input: string) => {
//     console.log(input)
// }

// const lengthOfArray = (array: number[]): number => {
//     return array.length
// } 

interface ThingWithName {
    name: string
    age: number
    height: number
    makeNoise: () => string
}


const returnAnimalName = (animal: Animal): string => {
   return animal.name
}

const returnInsectName = (insect: Insect): string => {
    return insect.name
 }

const returnAnimalAge = (animal: Animal): number => {
    return animal.age
}

const returnName = (thing: ThingWithName): string => {
    return thing.name
}

class Animal implements ThingWithName{
    name: string
    age: number 
    height: number
    private width: number

    constructor(name, age) {
        this.name = name
        this.age = age
    } 

    makeNoise(): string {
        return ("Woof - I am this wide:") + this.width
    }
}

class Insect implements ThingWithName{
    name: string
    age: number
    height: number

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    
    makeNoise(): string {
        return ("click")
    }
}

let elephant = new Animal("Nelly", 50)
let elephantName = returnAnimalName(elephant)
console.log(elephantName)

let elephantAge = returnAnimalAge(elephant)
console.log(elephantAge)

let lion = new Animal("Simba", 4)
let lionName = returnAnimalName(lion)
console.log(lionName)

let lionAge = returnAnimalAge(lion)
console.log(lionAge)

let beetle = new Insect("Ringo", 1)
beetle.makeNoise()
let beetleName = returnName(beetle)
console.log(beetleName)