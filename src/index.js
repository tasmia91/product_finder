let readLine = require("readline")
let getProduct = require("./services/finder.js")
let rl = readLine.createInterface(process.stdin, process.stdout)
function inputHandler(answer) {
  if (answer === "Q") {
    rl.close()
    return null;
  }
  let result = getProduct(answer);
  if (result) {
    console.log(result.toString())
  } else {
    console.log("Product doesn't exist ", answer)
  }
    rl.question("Input your medical licence number or Q to quit:", inputHandler)
}

function startUp() {
  rl.question("Input your medical licence number or Q to quit:", inputHandler)


}

startUp()
exports.getProduct = getProduct
