import * as sinon from 'sinon';
import chai from 'chai';
import CustomerModel from '../../../models/CustomerModel';

const customer = new CustomerModel();
const { expect } = chai;

describe('2 - Test customerModel', () => {
  describe('2.1 - method create', () => {
    describe('a) if success', () => {
      const payload = {
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
      before(async () => {
        sinon
          .stub(customer.model, 'create')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the user created in the db', async () => {
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
});
