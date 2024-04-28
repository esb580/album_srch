const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const should = chai.should();

chai.use(chaiHttp);

describe('Records API', () => {
  it('should GET all the records', (done) => {
    chai.request(server)
      .get('/api/records')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should GET a record by name', (done) => {
    let name = 'Album1';
    chai.request(server)
      .get('/api/records/' + name)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should GET records by date', (done) => {
    let date = '1960';
    chai.request(server)
      .get('/api/records/date/' + date)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should GET records by band', (done) => {
    let band = 'Band1';
    chai.request(server)
      .get('/api/records/band/' + band)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});

