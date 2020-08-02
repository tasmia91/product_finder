let readLine = require("readline")
let rl = readLine.createInterface(process.stdin, process.stdout)

function inputHandler(answer, finder) {
    if (answer === "Q") {
      rl.close()
      return null
    }
  
    let result = finder.getProduct(answer)
    if (result) {
      console.log(result.toString())
    } else {
      console.log("Product doesn't exist ", answer)
    }
      rl.question("Input your medical licence number or Q to quit:", inputHandler(finder))
  }

function getInput(finder) {
    rl.question("Input your medical licence number or Q to quit:", inputHandler(finder))
}

 module.exports = getInput