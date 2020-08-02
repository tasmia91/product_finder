let readLine = require("readline")
let ProductFinder = require("./services/finder.js")
let getData = require("./repositories/data-provider.js")
let getInput = require("./app.js")
  
function startUp() {
  let finder = new ProductFinder(getData)
  getInput(finder)
}

startUp()