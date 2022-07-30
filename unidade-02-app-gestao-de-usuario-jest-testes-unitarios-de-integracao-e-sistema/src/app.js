const express = require("express")
const {MongoClient} = require("mongodb");
const UserRepository = require("./user-repository");
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

let userRepository;
let collection;
let client;
let connected = false;

const database = "PosGraduacaoQualidadeDeSoftwareTestesAppUsuarios"
const uri = "mongodb://localhost:27017"
const users_db = 'PosGraduacaoQualidadeDeSoftwareTestesAppUsuarios'



app.use(async (request, response, next) =>{

    if (!connected){
        client = new MongoClient(`${uri}/${database}`)
        await client.connect()
        // Cria a collection
        collection = client.db(users_db).collection('users')
        // Passa a collection para a Classe
        userRepository = new UserRepository(collection)
        connected = true
    }
    next()
})


app.get('/users', async (request, response) => {
    const users = await userRepository.findAll()
    response.status(200).json(users)
})

app.post('/users', async (request, response) => {
    const user = await userRepository.insert(request.body)
    response.status(201).json(user)
})

app.get('/users/:id', async (request, response) => {
    try {
        const user = await userRepository.findOneById(request.params.id)
        response.json(user)
    }catch (e) {
        response.status(404).send({
            erro: `Usuário com o id ${request.params.id} não foi encontrado`,
            code: 404
        })
    }

})

module.exports = app