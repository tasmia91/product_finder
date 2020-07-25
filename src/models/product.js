class product {
  //This is a stateful which has alot of properties/attribues
  constructor(plNumber, name, dose, substance, url) {
    this.plNumber = plNumber;
    this.name = name;
    this.dose = dose;
    this.substance = substance;
    this.url = url;
  }

  toString() {
    return `
        PL Number: ${this.plNumber}
        Name: ${this.name}
        Dose: ${this.dose}
        Substance: ${this.substance}
        URL: ${this.url}
        `;
  }
}

module.exports = product;
