const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint with message query', (t) => {
  request(app)
  .get('/groot?message=babamamapapa')
  .expect(200)
  .expect('Content-type', /json/)
  .end((err, res) => {
    if (err) throw err;
    t.same(res.body, {received: 'babamamapapa', translated: 'I am Groot!'}, 'testing with query');
    t.end();
  });
});