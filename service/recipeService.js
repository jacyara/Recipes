const axios = require('axios');
const {apiKey} = require('../config');

async function recipes(ingredients) {
  let response;
  try {
    response = await axios.get('http://www.recipepuppy.com/api/?i=' + ingredients + '');
  } catch (error) {
    throw error;
  }
  return response.data;
};

async function giphy(recipe) {
  let gif;
  try {
    gif = await axios.get('http://api.giphy.com/v1/gifs/search?q=' + recipe + '&api_key=' + apiKey + '&limit=1');
  } catch (error) {
    throw error;
  }
  const giphyUrl = gif.data.data[0];
  return giphyUrl;
};


module.exports = {
  recipes,
  giphy,
};
