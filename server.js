const { request, response } = require('express')
const express = require('express')

const app = express()

app.get('/', (request, response) =>{
    return response.json({"message" : "I'm alive! ;)"})
})

app.get('/teste', (request, response) =>{
    return response.json({"message" : "Teste"})
})

app.listen(8080)