

/*
    OPERAÇÕES BÁSICAS SOBRE DADOS
    1) CREATE (criação ou inserção)
        Cria um novo objeto dentro do banco de dados
    2) RETRIEVE (recuperar ou listar)
        Obter de volta um ou mais objetos preexistentes no banco de dados
    3) UPDATE
        Atualizar os dados de um objeto preexistente no banco de dados
    4) DELETE
        Exclusão de um objeto do banco de dados
    (C)reate + (R)etrieve + (U)pdate + (D)elete = sigla CRUD
    ============================================================
    Verbos do protocolo HTTP
    Verbo                   Operação
    POST                    CREATE
    GET                     RETRIEVE
    PUT                     UPDATE
    DELETE                  DELETE
*/

// Controller é um conjunto de funções associadas às operações sobre dados

const Turma = require('../models/Turma')

const controller = {}   // Objeto vazio

// Operação CREATE, função novo()
controller.novo = async (req, res) => {
    // Usa os dados que chegam dentro do body da requisição
    // e os envia o BD para a criação de um novo objeto
    try {
        await Turma.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(erro) {
        console.log(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

//OPERAÇÃO RETRIEVE (all), listar()
controller.listar = async (req, res) => {
   try {
    let dados = await Turma.find() //sem parâmetro traz tudo que estiver cadastrado, não executa curso enquanto não retornar resposta
   res.send(dados)
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

//OPERAÇAÕ RETRIEVE (ONE), FUNÇÃO OBTERUM()
controller.obterUm = async (req, res) => {
    try {
    //capturando o parâmetro id da URL
    const id = req.params.id
    let obj = await Turma.findById(id)

    //se o obj existe e foi encontrado:
    if(obj) res.send(obj) ///HTTP 200
    else res.status(404).end() //HTTP 404: not found

    } catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }

}
    ///OPERAÇÃO UPDATE, FUNÇÃO ATUALIZAR()

controller.atualizar = async (req, res) => {
    try{
    //Isolar o _id do objeto que está sendo alterado
    const id = req.body._id

    //busca e substtuição do conteúdo objt
    let ret = await Turma.findByIdAndUpdate(id, req.body)

    //Se encontrou e atualizou, retornarHTTP 204: no content
    if(ret) res.status(204).end()

    //Não encontrou o obj para ser alterado
    else res.status(404).end()
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

///OPERAÇÃO DELETE FUNÇÃO EXCLUIR()

controller.excluir = async (req, res) => {
    try {
    //isolar _id
    const id = req.body._id

    //buscar _id e excluir
    let ret = await Turma.findByIdAndDelete(id)

    //Encontro e excluiu, HTTP 204: No content

    if(ret) res.status(204).end()
    else res.status(404).end()
}
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller