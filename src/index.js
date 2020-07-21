let readLine = require("readline")
let getProductsData = require("./product_finder.js")

let rl = readLine.createInterface(process.stdin, process.stdout)

function getProduct(product) {
  let productObjects = getProductsData
  return productObjects[product]
}

function inputHandler(answer) {
  if (answer === "Q") {
    rl.close()
    return null
  }
  let result = getProduct(answer);
  if (result) {
    console.log(result.toString());
  } else {
    console.log("Product doesn't exist ", answer);
  }
    rl.question("Input your medical licence number or Q to quit:", inputHandler);
}

rl.question("Input your medical licence number or Q to quit:", inputHandler);

exports.getProduct = getProduct;
