# imagem do node 'minificada' somente para todar o projeto
FROM node:12-slim as build
WORKDIR /app
COPY package*.json ./
COPY yarn* ./
RUN yarn install
RUN yarn sequelize db:create
RUN yarn sequelize db:migrate
RUN yarn sequelize db:seed
COPY . .
CMD ["yarn", "dev"]
