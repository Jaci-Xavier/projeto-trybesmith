import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('tesa se a função retorna status 201 ao cadastrar um produto', async function () {
    const product = ProductModel.build({ name: 'Corrente de Andromedra', price: '10', orderId: 32 });
    sinon.stub(ProductModel, 'create').resolves(product);
    const res = await chai.request(app)
      .post('/products')
      .send({ name: 'Corrente de Andromedra', price: '10', orderId: 32 })
       expect(res).to.have.status(201);
       expect(res.body).to.be.an('object');
  });

  // it('testa a função getAll', async function () {
  //   const res = await chai.request(app)
  //     .get('/products')
  //     expect(res).to.have.status(200);
  //     expect(res.body).to.be.an('array');
  // }
  // );

});
