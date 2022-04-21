import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

import { Response } from 'superagent';
import { Customer } from '../../types/CustomerType';
import CustomerModel from '../../models/CustomerModel';
import server from '../../server';
const customer = new CustomerModel();

chai.use(chaiHttp);

const { expect } = chai;

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
    it('a) return status 201 and the user created', async () => {
      chaiHttpResponse = await chai
         .request(server.app)
         .post('/customer')
         .set('X-API-Key', 'foobar')
         .send({
          "name": "Roberto",
          "lastName": "Oliveira",
          "email": "roberto@email.com",
          "contact": "11987654321",
          "password": "123456789",
          "type": "customer",
          "address": {
              "street": "avenida",
              "number": "100A",
              "district": "Bairro",
              "zipcode": "45687-899",
              "city": "cidade",
              "state": "estado"
          }
      });
      expect(chaiHttpResponse).to.have.status(201);
      expect(chaiHttpResponse.body).to.deep.equal({
        "name": "Roberto",
        "lastName": "Oliveira",
        "email": "roberto@email.com",
        "contact": "11987654321",
        "password": "123456789",
        "type": "customer",
        "hires": [],
        "address": {
            "street": "avenida",
            "number": "100A",
            "district": "Bairro",
            "zipcode": "45687-899",
            "city": "cidade",
            "state": "estado"
        }
      });
    });
  });
  describe('1.2 - if fail', () => {
    let chaiHttpResponse: Response;
    before(() => {
      sinon
      .stub(customer.model, 'create')
      .resolves(undefined);
    });
    after(()=>{
      sinon.restore();
    });

    it('a) return status 500 and the error message "Internal Server Error"', async () => {
      chaiHttpResponse = await chai
         .request(server.app)
         .post('/customer')
         .set('X-API-Key', 'foobar')
         .send({
          "name": "Roberto",
          "lastName": "Oliveira",
          "email": "roberto@email.com",
          "contact": "11987654321",
          "password": "123456789",
          "type": "customer",
          "address": {
              "street": "avenida",
              "number": "100A",
              "district": "Bairro",
              "zipcode": "45687-899",
              "city": "cidade",
              "state": "estado"
          }
      });
      expect(chaiHttpResponse).to.have.status(500);
      expect(chaiHttpResponse.body).to.deep.equal({ "error": "Internal Server Error"});
    });

    it('b) return status 400 and the error message "name is required "', async () => {
      chaiHttpResponse = await chai
         .request(server.app)
         .post('/customer')
         .set('X-API-Key', 'foobar')
         .send({
          "lastName": "Oliveira",
          "email": "roberto@email.com",
          "contact": "11987654321",
          "password": "123456789",
          "type": "customer",
          "address": {
              "street": "avenida",
              "number": "100A",
              "district": "Bairro",
              "zipcode": "45687-899",
              "city": "cidade",
              "state": "estado"
          }
      });
      expect(chaiHttpResponse).to.have.status(400);
      expect(chaiHttpResponse.body).to.deep.equal({ "error": "name is required"});
    });
  });
});