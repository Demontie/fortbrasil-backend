## Importante!
O banco de dados utilizado é o postgresql. Caso utiliza localmente é necessario instalar.

## Instalação na maquina local

```bash
# Clonar repositório
$ git clone https://github.com/Demontie/fortbrasil-backend.git

# Pasta do clone
$ cd fortbrasil-backend

# Instalar dependências
$ yarn install

# Crie o arquivo .env com base no modelo .env.example é importante preencher o .env corretamente.
$ cp .env.example .env

# Cria a base de dados
$ yarn sequelize db:create

# Cria a tabelas
yarn sequelize db:migrate

# Cria dados ficticios
yarn sequelize db:seed

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
