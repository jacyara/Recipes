const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(8000, function() {
  console.log('Example app listening on port 8000!');
});

app.get('/recipes', async function(req, res) {
  let data;
  try {
    data = await axios.get(`http://www.recipepuppy.com/api/?i=onions,garlic,mussels`);
    console.log(data.data);
  } catch (error) {
    console.error(error);
  }
  const json = JSON.stringify(data.data);
  res.send(json);
});
