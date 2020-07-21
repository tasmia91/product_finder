//const is used if you know the attribute is not going to change
const {getProduct} = require("../index.js")


describe("Input handler", () => {
    test("Returns true when the product exists", () => {
    expect(getProduct("PL123456")).toBe(true)
    }),
    test("Returns false when the product doesn't exists", () => {
        expect(getProduct("PL123465")).toBe(false)
        })
})