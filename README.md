# Receitas com Gif

Aplicação em Node.js, utilizando Express, que recebe ingredientes como parâmetro de entrada em uma chamada GET e retorna uma lista de receitas, com seus respectivos Gif's.

### API's utilizadas

RecipesPuppy: http://www.recipepuppy.com/about/api/

Giphy: https://developers.giphy.com/docs/

## Ambiente

- No arquivo .env adicionar a API_KEY do Giphy e PORT com a porta para rodar o app.
- Por exemplo, para rodar na porta 8000, adicionar PORT = 8000
- Para criar uma key do Giphy basta acessar https://developers.giphy.com/ fazer login, clicar em "Create An App" e copiar a chave gerada.

## Configuração

Instalar os pacotes necessários:

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

Para checar basta rodar o comando abaixo com o ID da imagem (buscar ID executando  ` docker images`)

`docker logs <id da imagem>`

## Utilização

A API possui o seguinte endpoint, que deve respeitar a seguinte chamada:

`http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}`

Exemplo rodando na porta 8000:

`http://127.0.0.1:8000/recipes/?i=onion,tomato`

## Rodando testes

Para rodar a suite de testes, executar o comando na pasta raiz do projeto:

`npm test`
_________

##### * Dica: Utilizar alguma extensão de JSON Viewer para melhor visualização no navegador