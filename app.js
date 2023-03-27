/************************************************************************************************ 
 * Objetivo: Desenvolver um projeto usanodo as habilidades desenvolvidas no BACK-END e FRONT-END
 * Autor: Melqui
 * Data: 27/03/2023
 * Versão: 1.0
*************************************************************************************************/

const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const cursos = require('./modulo/')
const { request } = require('http')
const { response } = require('express')

const app = express()

app.use((request, response, next) => {

    response.header('Acess-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    
    app.use(cors())

    next()
})

app.get('/v1/lion-school/cursos', cors(), async function (request, response, next){
    
})

app.get('/v1/lion-school/alunos', cors(), async function (request, response, next){

})

app.get('/v1/lion-school/alunos/{matricula}', cors(), async function (request, response, next){

})

app.get('/v1/lion-school/alunos?curso={ds}:', cors(), async function (request, response, next){

})

app.get('/v1/lion-school/alunos?status={finalizado}', cors(), async function (request, response, next){

})
