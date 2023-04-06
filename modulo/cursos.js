var cursos = [
    {
        "nome": "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla": "DS",
        "icone": ['fa-sharp', 'fa-solid', 'fa-code'],
        "carga": "1200",
    },
    {
        "nome": "002 - Técnico em Redes de Computadores",
        "sigla": "RDS",
        "icone": ["fa-solid", "fa-network-wired"],
        "carga": "1200"
    }
];

const getCursos = function () {
    const listaJSON = {}
    const listaArray = []

    cursos.forEach(function (dados) {
        
        listaArray.push({
           icone: dados.icone, nome: dados.nome, sigla: dados.sigla
        })
        listaJSON.cursos = listaArray
    })
    return listaJSON
}

//console.log(getCursos());

module.exports = {
    getCursos
}
