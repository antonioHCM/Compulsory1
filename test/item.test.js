process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 
const expect = chai.expect;

chai.use(chaiHttp);
//GET ALL route test
describe('Get all items', () => {
  it('Should return an array of items', (done) => {
    chai.request(app)
      .get('/api/item/') 
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        console.log(res.body);
        
        done();
      });
  });

  
  
});

