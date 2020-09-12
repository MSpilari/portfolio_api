# Portfolio_API

![GitHub](https://img.shields.io/github/license/MSpilari/portfolio_api)
![npm](https://img.shields.io/npm/v/express?label=express)
![npm](https://img.shields.io/npm/v/cors?label=cors)
![npm](https://img.shields.io/npm/v/dotenv?label=dotenv)
![npm](https://img.shields.io/npm/v/mongoose?label=mongoose)
![npm](https://img.shields.io/npm/v/mongodb?label=mongodb)

Essa é a API que está sendo consumida pelo meu [**site de portfolio**](https://mspilariportfolio.vercel.app/)

## Rotas

- Uma rota que **cria(CREATE)** os projetos no banco de dados, é uma rota privada e precisa de um **JSON Web Token**.
- Uma rota que **lista(READ)** todos os projetos do banco de dados.
- Duas rotas de **deleção(DELETE)**, são rotas privadas e precisam de um **JSON Web Token**.
  - Uma delas deleta apenas um projeto específico.
  - Outra deleta todos os componentes do Banco de dados.
- Existe uma rota de login que envia um **JSON Web Token** para o usuário.

## Tecnologias usadas

- [Express](http://expressjs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [MongoDb Atlas](https://www.mongodb.com/cloud/atlas)
