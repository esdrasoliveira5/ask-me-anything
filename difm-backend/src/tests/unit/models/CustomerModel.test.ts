import * as sinon from 'sinon';
import chai from 'chai';
import CustomerModel from '../../../models/CustomerModel';

const customer = new CustomerModel();
const { expect } = chai;
const payload = {
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

describe('2 - Test customerModel', () => {
  describe('2.1 - method create', () => {
    before(async () => {
      sinon
        .stub(customer.model, 'create')
        .resolves(payload);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('return the customer created in the db', async () => {
      const response = await customer.create({
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
        },
      })
      expect(response).to.be.deep.equal(payload);
    });
  });
  describe('2.2 - method read', () => {
    before(async () => {
      sinon
        .stub(customer.model, 'find')
        .resolves([payload]);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('return the customers in the db', async () => {
      const response = await customer.read()
      expect(response).to.be.deep.equal([payload]);
    });
  });
  describe('2.3 - method readOne', () => {
    before(async () => {
      sinon
        .stub(customer.model, 'findOne')
        .resolves(payload);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('return the customer in the db', async () => {
      const response = await customer.readOne({ _id: '6260bca97c58e5a0b7847cfa'});

      expect(response).to.be.deep.equal(payload);
    });
  });
  describe('2.3 - method update', () => {
    before(async () => {
      sinon
        .stub(customer.model, 'findByIdAndUpdate')
        .resolves(payload);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('return the customer updated in the db', async () => {
      const response = await customer.update('6260bca97c58e5a0b7847cfa', {
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
        },
      });

      expect(response).to.be.deep.equal(payload);
    });
  });
});
