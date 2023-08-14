import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 200 OK', function () {
    return chai.request(app)
      .get('/orders')
      .then(function (res) {
        expect(res).to.have.status(200);
      });
  }
  );

});
