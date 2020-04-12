const recipeService = require('../service/recipeService');

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({data: {
      recipe: 'Guacamole',
      ingredients: 'avocado, onions',
    }})),
  };
});

test('Recipe Puppy test', async (done) => {
  const data = {recipe: 'Guacamole', ingredients: 'avocado, onions'};
  const rec = await recipeService.recipes('onions,tomato,avocado');

  expect(rec).toMatchObject(data);
  done();
});


