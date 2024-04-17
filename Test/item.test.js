process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Import your Express app instance
const expect = chai.expect;

chai.use(chaiHttp);

describe('Get all items', () => {
  it('should return an array of items', (done) => {
    chai.request(app)
      .get('/api/item/') 
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        console.log(res.body);
        // Add more assertions as needed based on the response structure
        done();
      });
  });

  
});
