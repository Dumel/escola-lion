var cursos = [
    {
        "nome": "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla": "DS",
        "icone": "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
        "carga": "1200",
    },
    {
        "nome": "002 - Técnico em Redes de Computadores",
        "sigla": "RDS",
        "icone": "https://img.icons8.com/ultraviolet/344/thin-client.png",
        "carga": "1200"
    }
];

const getCursos = function (sigla) {
    const listaJSON = {}

    cursos.forEach(function (dados) {
        if (sigla == dados.sigla) {
            listaJSON.sigla = dados.sigla
            listaJSON.nome = dados.nome
            listaJSON.icone = dados.icone
            listaJSON.carga = dados.carga
        }
    })
    return listaJSON
}

//console.log(getCursos('RDS'));
