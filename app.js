/************************************************************************************************ 
 * Objetivo: Desenvolver um projeto usanodo as habilidades desenvolvidas no BACK-END e FRONT-END
 * Autor: Melqui
 * Data: 27/03/2023
 * Versão: 1.0
*************************************************************************************************/

const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const alunos = require('./modulo/alunos.js')

const cursos = require('./modulo/cursos.js')

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
    let listaDeCursos = cursos.getCursos()

    if (listaDeCursos) {

        response.json(listaDeCursos)
        response.status(200)
    } else {
        response.status(500)
    }
})

app.get('/v1/lion-school/alunos', cors(), async function (request, response, next){
    let listaDeAlunos = alunos.getAlunos()

    if (listaDeAlunos) {

        response.json(listaDeAlunos)
        response.status(200)
    } else {
        response.status(500)
    }
})

app.get('/v1/lion-school/alunos/:matricula', cors(), async function (request, response, next){
    let matriculaAluno = request.params.matricula
    let statusCode
    let dadosMatricula = {}

    if (matriculaAluno == "" || matriculaAluno == undefined) {
        statusCode = 400
        dadosMatricula.message = 'Não é possivel processar a requisição pois a matricula do aluno não foi informada'
    }
    else {
        let matricula = alunos.getMatricula(matriculaAluno)

        if (matricula){
            statusCode = 200
            dadosMatricula = matricula
        }
        else{
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosMatricula)
})

app.get('/v1/lion-school/alunos/curso/:curso', cors(), async function (request, response, next){
    let cursoDoAluno = request.params.curso
    let statusCode
    let dadosCurso = {}

    if (cursoDoAluno == "" || cursoDoAluno == undefined) {
        statusCode = 400
        dadosCurso = 'Não é possivel processar a requisição pois o curso do aluno não foi informada'
    }
    else{
        let curso = alunos.getAlunosCurso(cursoDoAluno)

        if(curso){
            statusCode = 200
            dadosCurso = curso
        }
        else{
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosCurso)
})

app.get('/v1/lion-school/alunos/status/:status', cors(), async function (request, response, next){
    let statusDoAluno = request.params.status
    let statusCode
    let dadosStatus = {}

    if (statusDoAluno == "" || statusDoAluno == undefined) {
        statusCode = 200
        dadosStatus = "Não é possivel processar a requisição pois o status do aluno não foi informada"
    }
    else{
        let status = alunos.getStatus(statusDoAluno)

        if(status){
            statusCode = 200
            dadosStatus = status
        }
        else{
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosStatus)
})

app.listen(8080, function (){
    console.log('Servidor aguardando requisições na porta 8080.');
})