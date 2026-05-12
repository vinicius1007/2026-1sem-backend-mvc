const express = require ("express")

const userController = require ("./controllers/userController")

const app =  express()

app.use(express.json())

function callbackDaRaiz( request, response ) {
    response.send("Tropa do mantem!")
}


app.get("/", callbackDaRaiz)

app.get("/users", userController.getAllUsers)

app.post ("/users", userController.createUser)

module.exports = app