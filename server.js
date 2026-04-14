const express = require ("express")

const app =  express()

function callbackDaRaiz( request, response ) {
    response.send("Tropa do mantem!")
}

app.get("/", callbackDaRaiz)

app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000")
})

