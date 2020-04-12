# Recipes

Aplicação em Node.js, utilizando Express, que recebe ingredientes como parâmetro de entrada em uma chamada GET e retorna uma lista de receitas, com seus respectivos Gif's.

## Configuração e Ambiente

- No arquivo .env adicionar a API_KEY do Giphy e a porta para rodar o app. Para fazer uma key do Giphy basta acessar https://developers.giphy.com/

- Instalar os pacotes necessários:

`npm install`

## Rodando localmente

Para rodar localmente:

`npm start`

## Rodando com Docker

### Inicializar o docker

Primeiro vamos criar o build da imagem com a tag 'recipes'

`docker build -t recipes .`

Podemos checar se a imagem foi criada:

`docker images `

### Rodando a imagem

Agora vamos rodar a imagem, utilizando a porta que foi usada para rodar localmente a aplicação
Por exemplo, utilizando a porta 8000:

`docker run -p 8000:8000 -d recipes`

Para checar basta rodar o comando abaixo com o ID da imagem (buscar ID em  ` docker images`)

`docker logs <id da imagem>`

## Utilização

A API possui o seguinte endpoint, que deve respeitar a seguinte chamada:

`http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}`

Exemplo rodando na porta 8000:

`http://127.0.0.1:8000/recipes/?i=onion,tomato`