const express = require('express')

const app = express()

app.get('/teste',(req, res) =>{
    res.send("Primeira Api")
})

app.listen(3003, ()=>{
    console.log = ("Servidor ligado")
})