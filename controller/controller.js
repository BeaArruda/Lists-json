const express = require("express")
const app = express.Router()
app.use(express.json())
const Service = require("../service/service")
const service = new Service()

// ROTAS
app.get("/usuario", (req, resp) => {
    let listaUsuario = service.getUsuarios()
    resp.json(listaUsuario)
})

// app.get("/usuario/:id", (res, req) => {
    
// })

// // INCLUIR USUÁRIO
// app.post("/usuario", (res, req) => {
    
// })

// // CONSULTAR USUÁRIO
// app.put("/usuario/:id", (res, req) => {
    
// })

// // EXCLUIR USUÁRIO
// app.delete("/usuario/:id", (res, req) => {
    
// })


module.exports = app