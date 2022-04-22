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
    describe('a) if success', () => {
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
    describe('b) if fail', () => {
      before(async () => {
        sinon
          .stub(customer.model, 'create')
          .resolves(undefined);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return undefined', async () => {
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
  
        expect(response).to.be.equal(undefined);
      });
    });
  });
  describe('2.2 - method read', () => {
    describe('a) if success', () => {
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
    describe('b) if fail', () => {
      before(async () => {
        sinon
          .stub(customer.model, 'find')
          .resolves(undefined);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return undefined', async () => {
        const response = await customer.read()
  
        expect(response).to.be.equal(undefined);
      });
    });
  });
  describe('2.3 - method readOne', () => {
    describe('a) if success', () => {

      before(async () => {
        sinon
          .stub(customer.model, 'findOne')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the customer in the db', async () => {
        const response = await customer.readOne({
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
    describe('b) if fail', () => {
      before(async () => {
        sinon
          .stub(customer.model, 'findOne')
          .resolves(null);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return undefined', async () => {
        const response = await customer.readOne(payload)
  
        expect(response).to.be.equal(null);
      });
    });
  });
});
