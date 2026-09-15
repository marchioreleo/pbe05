


## Sobre o Projeto 
Este projeto foi feito com o intuito de simular o back-end de um programa de controle de patrimonios.

## Tecnologias ultilizadas 
* JavaScript;
* Node.js;
* Express;
* JSON;

## Como instalar o Express
Para poder testar o projeto, primeiro precisamos instalar o Express para que ele possa rodar continuamente:
* cmd ou bash;
* npm i express;

## Como iniciar
Depois de instalar use:
* cmd ou bash;
* npm run (node/nomedoarquivo.js);
* Clique no link;

## Dados do inventário
Cada item possui:
* id;
* item;
* local;
* dataRegistro;
* valor;
* patrimonio;

### Cadastrar um patrimonio

POST /inventario

Exemplo:

```json
{
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-10",
    "valor": 3500,
    "patrimonio": "PAT-00125"
}
```


### Listar todos os patrimonios

GET (Mostra todos os patrimonios cadastrados) "http://linklink:link"
---
<img href="../pbe05/fotos/get.png">

### Listar um patrimonio pelo ID

GET (Mostra o patrimonio com o ID informado) Exemplo: "http://linklink:link/id"
---
<img href="../pbe05/fotos/getwork.png">

## Patrimonio não encontrado

GET (Mostra os patrimonios cadastrados, porém neste caso não há o patrimonio buscado)
---
<img href="../pbe05/fotos/getfail.png">

### Cadastrar um patrimonio

POST "http://linklink:link/id"
---
<img href="../pbe05/fotos/post.png">

### Excluir um patrimonio

DELETE "http://linklink:link/id"
---
<img href="../pbe05/fotos/delete.png">

