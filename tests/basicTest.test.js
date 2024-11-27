const request = require('supertest');
const app = require('./index');

describe('Servidor Hola Mundo', () => {
  it('responde con Hola Mundo', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);
    
    expect(response.text).toContain('Hola Mundo');
  });
});