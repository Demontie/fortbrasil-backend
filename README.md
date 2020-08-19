<h1 align="center">
  <img alt="fortbrasil" title="Fastfeet" src="./.github/fortbrasil-logo.png" width="300px" />
  <br>
  Ajudando pessoas a viverem melhor
</h1>

<p align="center">
  <img src=".github/nodejs.svg" alt="ReactJS" />&nbsp;&nbsp;&nbsp;&nbsp;
  <img src=".github/docker.svg" alt="ReactJS" />&nbsp;&nbsp;&nbsp;&nbsp;
  <img src=".github/postgres.svg" alt="ReactJS" />
</a>

<p align="center">
  <a href="#rocket-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Sobre
Este projeto de um teste pratico para um gerenciamento de lojas mais proximas do cliente.

Esta é a 1/3 partes de um projeto como todo. O mesmo foi construído utilizando as tecnlologias mais populares de JavaScript e do mercado.

Se você ainda não baixou as partes (1/3) ou (3/3), você vai encontrar elas abaixo, siga os passos para uma instalação correta:
- [(2/3) Web](https://github.com/Demontie/fortbrasil-frontend)
- [(3/3) App](https://github.com/Demontie/fortbrasil-mobile)

## :computer: Como usar

### :rotating_light: Importante!
O banco de dados utilizado é o postgresql. Caso utiliza localmente é necessario instalar.

### Instalação na maquina local

```bash
# Clonar repositório
$ git clone https://github.com/Demontie/fortbrasil-backend.git

# Pasta do clone
$ cd fortbrasil-backend

# Instalar dependências
$ yarn install

# Crie o arquivo .env com base no modelo .env.example é importante preencher o .env corretamente.
$ cp .env.example .env

# Importante! se a base de dados ja estiver criada nao é necessario este comando.
$ yarn sequelize db:create

# Cria a tabelas
$ yarn sequelize db:migrate

# Cria dados ficticios
$ yarn sequelize db:seed

# Execute a aplicação
$ yarn dev
```

### Instalação utilizando [docker](https://www.docker.com/).

```bash
# Clonar repositório
$ git clone https://github.com/Demontie/fortbrasil-backend.git

# Pasta do clone
$ cd fortbrasil-backend

# Crie o arquivo .env com base no modelo .env.example é importante preencher o .env corretamente.
$ cp .env.example .env

# Subir a aplicação
$ docker-compose up -d
```
