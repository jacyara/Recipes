const {axios, mockAxios} = require('axios');
const recipeService = require('../recipeService');
const app = require('../../server');
const supertest = require('supertest');
const request = supertest(app);
jest.mock('axios');


describe('fetchData', () => {

});
