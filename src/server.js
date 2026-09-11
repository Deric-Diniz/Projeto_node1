const express = require('express')

const app = express()

app.get('/',(req, res) =>{
    res.send("Rota padrao")
})
app.get('/teste',(req, res) =>{
    res.send("Rota teste")
})

app.listen(3003, ()=>{
    console.log = ("Servidor ligado")
})