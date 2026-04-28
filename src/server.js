const express = require ("express")

const app =  express()

function callbackDaRaiz( request, response ) {
    response.send("Tropa do mantem!")
}

function callbackListaUsusarios(request, response) {
const listaUsuarios = [ 
     {
        id: 1,
        name: "Vinicius"
    
     }
 ]

    response.json(listaUsuarios)
    
}

app.get("/", callbackDaRaiz)

app.get("/users", callbackListaUsusarios)

app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000")
})

  