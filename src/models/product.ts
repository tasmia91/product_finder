export default class Product {
  plNumber: string
  name: string
  dose: string
  substance: string

  url: string
  
  //This is a stateful which has alot of properties/attribues
  constructor(
    plNumber: string,
    name: string,
    dose: string,
    substance: string,
    url: string
  ) {
    this.plNumber = plNumber
    this.name = name
    this.dose = dose
    this.substance = substance
    this.url = url
  }

  toString(): string {
    return `
        PL Number: ${this.plNumber}
        Name: ${this.name}
        Dose: ${this.dose}
        Substance: ${this.substance}
        URL: ${this.url}
        `;
  }
}

module.exports = Product;
