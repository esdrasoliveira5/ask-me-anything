import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import App from '../../app';
import { Response } from 'superagent';
import { Customer } from '../../interfaces/CustomerType';
import CustomerModel from '../../models/CustomerModel';

const customer = new CustomerModel();
const app = new App();
const { expect } = chai;
chai.use(chaiHttp);

describe('1 - Test endpoint POST /customer', () => {
  describe('1.1 - if success', () => {
    let chaiHttpResponse: Response;
    const customerPayload: Customer = {
      name: 'Roberto',
      lastName: 'Oliveira',
      email: 'roberto@email.com',
      contact: '11987654321',
      password: '123456789',
      type: 'customer',
      hires: [],
      address: {
        street: 'avenida',
        number: '100A',
        district: 'Bairro',
        zipcode: '45687-899',
        city: 'cidade',
        state: 'estado'
      }
    }

    before(() => {
      sinon
      .stub(customer.model, 'create')
      .resolves(customerPayload);
    });
    after(()=>{
      sinon.restore();
    });

    it('A) return status 201 and the user created', async () => {
      chaiHttpResponse = await chai
         .request(app)
         .post('/customer')
         .set('X-API-Key', 'foobar')
         .send(customerPayload)
                  
      expect(chaiHttpResponse).to.have.status(201);
      expect(chaiHttpResponse.body).to.deep.equal(customerPayload);
    });
  });
});