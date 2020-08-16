//const is used if you know the attribute is not going to change
import ProductFinder from "./finder"
import Product from "../models/product"

function setUp(name) {
  let mockProduct = new Product(
    "PL1000",
     name,
    "test-dose",
    "test-substance",
    "test-url"
  )
  return () => {
    return {PL1000: mockProduct}
  }
}
describe("Product Finder Test", () => {
  test("Returns product when product exists", () => {
    let mockDataSource = setUp("test-name")
  
  let finder = new ProductFinder(mockDataSource)  
  let result = finder.getProduct("PL1000")
  expect(result).toBeInstanceOf(Product)
  })
  test("Check if the product name matches", () => {
      let expected = "test-name"
      let mockDataSource = setUp(expected)

      let finder = new ProductFinder(mockDataSource)
      let result = finder.getProduct("PL1000").name

      expect(result).toBe(expected)
  })
})
