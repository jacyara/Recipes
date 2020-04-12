const recipeService = require('../service/recipeService');

const giphyURL = async (recipeTitle, res) => {
  let gif;
  try {
    gif = await recipeService.giphy(recipeTitle);
  } catch (error) {
    res.status(error.response.status);
    res.send('There is a problem with communication with Giphy :(');
  }
  return gif.url;
};

exports.giphyURL = giphyURL;
