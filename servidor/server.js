
const express = require("express")
const patrimonios = require("../dados.json")


const listarPatrimonios = (req, res) => {
    res.send(patrimonios)
}



const novoPatrimonio = (req, res) => {
    if (req.body) {
        patrimonios.push(req.body)
        res.send("Patrimonio cadastrado")
    } else{
        res.send("Erro ao cadastrar patrimonio")
    }
};

const excluirPatrimonio = (req, res) => {
    const id = req.params.id
    let status = 0
    patrimonios.forEach((patrimonio, indice) => {
        if(patrimonio.id == id) {
            status = 1
            patrimonios.splice(indice, 1)
        }
    })
    if(status == 1){
        res.send("Patrimonio excluido com sucesso")
    }else{
        res.status(404).send("Patrimonio não encontrado")
    }

}

const atualizarPatrimonio = (req, res) => {
    const id = req.query.id
    const dados = req.body
    let status = 0
    patrimonios.forEach((patrimonio) => {
        if(patrimonio.id == id) {
            status = 1
            patrimonio.nome = dados.nome
            patrimonio.paciente = dados.paciente
            patrimonio.peso = dados.peso
            patrimonio.altura = dados.altura
        }
    })
    if(status == 1){
        res.send("Patrimonio atualizado com sucesso !")
    }else {
        res.status(404).send("Patrimonio não encontrado")
    }
}

const buscarNomePatrimonio = () => {
    const nome = req.params.nome
    let status = 0
    let retorno

    patrimonios.forEach((patrimonio) => {
        if(patrimonio.nome == nome){
            retorno = patrimonio
            status = 1
        }
    })

    if(status == 1){
        res.send(retorno)
    }else{
        res.status(404).send("Patrimonio não encontrado")
    }
}

const buscarIDPatrimonio = (req, res) => {
    const id = req.params.id
    let status = 0
    let retorno

    patrimonios.forEach((patrimonio) => {
        if(patrimonio.id == id){
            retorno = patrimonio
            status = 1
        }
    })

    if(status == 1){
        res.send(retorno)
    }else{
        res.status(404).send("Patrimonio não encontrado")
    }
}

const app = express()

app.use(express.urlencoded({ extended: true }))

const porta = 3001

app.post("/", novoPatrimonio)
app.get("/", listarPatrimonios)
app.delete("/:id", excluirPatrimonio)
app.put("/:id", atualizarPatrimonio)
app.get("/:id", buscarIDPatrimonio)

app.listen(porta, () => {
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`)
    console.log(`Servidor: http://127.0.0.1:${porta}`)
})