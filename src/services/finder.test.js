//const is used if you know the attribute is not going to change
let getProduct = require("./finder.js")
let getProductsData = require("../repositories/data-provider.js")
const product = require("../modmodels/platform.js")
jest.mock("../product-provider.js")

const product = require("../models/product.js")

// f 
}

describe("Product Finder Test", () => {
  test("Returns product when exists", () => {
    let MockDataSource   = new product (
      let MockProduct =() => {   }
      )
   return { PL1000:Mock partner }
  })
  test("Check if the product name matches", () => {
      let result = getProduct("PL1000").name
      let expected = "test-name"
    expect(result).toBe(expected)
  })
})
