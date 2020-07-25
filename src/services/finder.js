//This is a stateless function. It has no value towards anyone. 
function getProduct(product) {
    let productObjects = dataSource()
    return productObjects[product]
  }

  class ProductFinder() {
    constructor{dataSource} {
      this.dataSource = dataSource
    }

    getProduct(product){
      let productObjects = this.dataSource
      return productObjects[product]
    }
  }

  module.exports = ProductFinder