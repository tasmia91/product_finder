const express = require("express")
const app = express()
const port = 3000


app.use(express.static("public"))

const getHandler = (request, response) => {
    console.log("I'm listening!!!")
    response.sendFile("views/index.html")
    //If want to put a link within the page
    response.send("<div>Here's a crazy link - <a href='/rerouted'>Click ME!!!</a></div>")
}

app.get("/", getHandler)

app.get("/rerouted", (request, response) => {
    response.send("You have been rerouted")
})


app.get("mirror/:word", (request, response) => {
    console.log(request.params.word)
    response.send(request.params.word)
})

app.listen(port, () => {
    console.log("Example app listening at http://localhost:${port}")
})  