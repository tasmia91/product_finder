var readLine = require("readline")
var rl = readLine.createInterface(process.stdin, process.stdout)

let itemNames = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"]

//TODO: add validation

//Take user input
//<Possibly validate>
//Check list to see if it contains user input value
//Return true or false

function inputHandler(answer) 
{
        let result = itemNames.includes(answer)
        if(result) 
        {
            console.log("Product exists ", answer)
        }
        else 
        {
            console.log("Product doesn't exist ", answer)
        }
}

rl.question("Input your medical licence number", inputHandler)