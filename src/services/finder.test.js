//const is used if you know the attribute is not going to change
const product = require("../models/product.js")
let ProductFinder = require("./finder.js")

function setUp(name) {
  let MockProduct = new product(
    "PL1000",
    "test-name",
    "test-dose",
    "test-substance",
    "test-url"
  )
  return () => {
    return {PL1000: MockProduct}
  }
}
describe("Product Finder Test", () => {
  test("Returns product when product exists", () => {
    let MockDataSource = setUp()
  
  let finder = new ProductFinder(MockDataSource)  
  let result = finder.getProduct("PL1000")
  expect(result).toBeInstanceOf(product)
  })
  test("Check if the product name matches", () => {
      let MockDataSource = setUp()

      let finder = new ProductFinder(MockDataSource)
      let result = finder.getProduct("PL1000").name
      let expected = "test-name"
      expect(result).toBe(expected)
  })
})
