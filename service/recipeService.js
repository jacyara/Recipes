const axios = require('axios');
const {apiKey} = require('../config');

async function recipes(ingredients) {
  let data;
  try {
    data = await axios.get('http://www.recipepuppy.com/api/?i=' + ingredients + '');
  } catch (error) {
    console.error(error);
  }
  const json = JSON.stringify(data.data);
  return json;
};

async function giphy(recipe) {
  let data;
  try {
    data = await axios.get('http://api.giphy.com/v1/gifs/search?q=' + recipe + '&api_key=' + apiKey + '&limit=1');
  } catch (error) {
    console.error(error);
  }
  const json = JSON.stringify(data.data.data);
  return json;
};

module.exports = {
  recipes,
  giphy,
};
