import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

import { Response } from 'superagent';
import CustomerModel from '../../models/CustomerModel';
import server from '../../server';
const customer = new CustomerModel();

chai.use(chaiHttp);

const { expect } = chai;

describe('1 - Test endpoint POST /customer', () => {
  describe('1.1 - if success', () => {
    let chaiHttpResponse: Response;
    const customerPayload = {
      _id: '6260bca97c58e5a0b7847cfa',
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
      .stub(customer.model, 'findOne')
      .resolves(null);
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
        "_id": "6260bca97c58e5a0b7847cfa",
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
      .stub(customer.model, 'findOne')
      .rejects({ message: 'Internal Server Error'});
      sinon
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
      expect(chaiHttpResponse.body).to.deep.equal({ "error": "Erro: Internal Server Error"});
    });
  });
});

describe('2 - Test endpoint GET /customer', () => {
  describe('2.1 - if success', () => {
    let chaiHttpResponse: Response;
    const customerPayload = [
      {
        _id: '6260bca97c58e5a0b7847cfa',
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
    ]
    before(() => {
      sinon
      .stub(customer.model, 'find')
      .resolves(customerPayload);
    });
    after(()=>{
      sinon.restore();
    });
    it('a) return status 201 and the user created', async () => {
      chaiHttpResponse = await chai
         .request(server.app)
         .get('/customer')
         .set('X-API-Key', 'foobar')

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.deep.equal([
        {
          "_id": "6260bca97c58e5a0b7847cfa",
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
        }
      ]);
    });
  });
  describe('2.2 - if fail', () => {
    let chaiHttpResponse: Response;
    before(() => {
      sinon
      .stub(customer.model, 'find')
      .rejects({ message: 'Internal Server Error'});
    });
    after(()=>{
      sinon.restore();
    });

    it('a) return status 500 and the error message "Internal Server Error"', async () => {
      chaiHttpResponse = await chai
         .request(server.app)
         .get('/customer')
         .set('X-API-Key', 'foobar')

      expect(chaiHttpResponse).to.have.status(500);
      expect(chaiHttpResponse.body).to.deep.equal({ "error": "Erro: Internal Server Error"});
    });
  });
});

describe('3 - Test endpoint GET /customer/:id', () => {
  describe('3.1 - if success', () => {
    let chaiHttpResponse: Response;
    const customerPayload = [
      {
        _id: '6260bca97c58e5a0b7847cfa',
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
    ]
    before(() => {
      sinon
      .stub(customer.model, 'findOne')
      .resolves(customerPayload);
    });
    after(()=>{
      sinon.restore();
    });
    it('a) return status 200 and the customer', async () => {
      chaiHttpResponse = await chai
         .request(server.app)
         .get('/customer/6260bca97c58e5a0b7847cfa')
         .set('X-API-Key', 'foobar')

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.deep.equal([
        {
          "_id": "6260bca97c58e5a0b7847cfa",
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
        }
      ]);
    });
  });
  describe('3.2 - if fail', () => {
    let chaiHttpResponse: Response;
    before(() => {
      sinon
      .stub(customer.model, 'findOne')
      .rejects({ message: 'Internal Server Error'});
    });
    after(()=>{
      sinon.restore();
    });

    it('a) return status 500 and the error message "Internal Server Error"', async () => {
      chaiHttpResponse = await chai
         .request(server.app)
         .get('/customer/6260bca97c58e5a0b7847cfa')
         .set('X-API-Key', 'foobar')

      expect(chaiHttpResponse).to.have.status(500);
      expect(chaiHttpResponse.body).to.deep.equal({ "error": "Erro: Internal Server Error"});
    });
  });
});