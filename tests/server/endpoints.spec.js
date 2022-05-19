const supertest = require('supertest');
const app = require('../../src/server/index')
const request = supertest(app)

describe('Testing /sentiment-url endpoint', () => {

  it('Should respond with status 400 on missing parameter (url)', (done) => {
    request.post('/sentiment-url').expect(400);
    done();
  });

  it('Should respond with status 200 when sending a URL', (done) => {
    request.post('/sentiment-url')
      .send({url: 'https://www.npmjs.com/package/supertest'})
      .expect(200);
    done();
  });
});

describe('Testing /sentiment-text endpoint', () => {

  it('Should respond with status 400 on missing parameter (text)', (done) => {
    request.post('/sentiment-text').expect(400);
    done();
  });

  it('Should respond with status 200 when sending text', (done) => {
    request.post('/sentiment-text')
      .send({text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam officia eum beatae doloremque voluptas, quod numquam nobis quam adipisci, voluptate rerum eaque vitae natus, ipsum dolores. Asperiores incidunt aut laboriosam, sunt voluptatem commodi, repellat ipsam, nulla saepe impedit debitis.'})
      .expect(200);
    done();
  });
});