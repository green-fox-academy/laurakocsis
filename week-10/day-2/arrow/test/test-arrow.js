const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('testing with distance and time query', (t) => {
  request(app)
    .get('/yondu?distance=100&time=10')
    .expect(200)
    .expect('Content-type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, { distance: '100', time: '10', speed: '10' }, 'testing with distance and time query');
      t.end();
    });
});