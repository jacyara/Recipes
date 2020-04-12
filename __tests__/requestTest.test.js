const supertest = require('supertest');
const app = require('../server');
const request = supertest(app);

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({data: {
      results: [{
        recipe: 'Guacamole',
        ingredients: 'avocado, onions',
      }],
      data: [{gif: 'Mexican food'}],
    }})),
  };
});

test('Good request!', async (done) => {
  const response = await request.get('/recipes/?i=onions,tomato');
  expect(response.status).toBe(200);
  done();
});

test('Bad request! More than 3 ingredients', async (done) => {
  const response = await request.get('/recipes/?i=onions,tomato,garlic,potato');
  expect(response.status).toBe(400);
  expect(response.text).toBe('Bad Request! Your search can have maximum of 3 itens');
  done();
});

