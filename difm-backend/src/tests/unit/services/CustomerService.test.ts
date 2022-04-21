import * as sinon from 'sinon';
import chai from 'chai';

import CustomerService from '../../../services/CustomerService';
import { Customer } from '../../../types/CustomerType';
import { ZodError } from 'zod';

const customer = new CustomerService();
const { expect } = chai;

describe('3 - Test customerServices', () => {
  describe('3.1 - method create', () => {
    describe('a) if success', () => {
      const payload = {
        name: 'Roberto',
        lastName: 'Oliveira',
        email: 'roberto@email.com',
        contact: '11987654321',
        password: '$2b$10$JOmGDGptDGC1.eLa3OMj0uAk4FxZT2SjLH0lbP3Uh9W7iDHGN3Lp6',
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
    
      it('return a object with status 201 and the customer created in the db', async () => {
        const response = await customer.create({
          name: 'Roberto',
          lastName: 'Oliveira',
          email: 'roberto@email.com',
          contact: '11987654321',
          password: 'roberto_password',
          type: 'customer',
          address: {
            street: 'avenida',
            number: '100A',
            district: 'Bairro',
            zipcode: '45687-899',
            city: 'cidade',
            state: 'estado'
          },
        })
        expect(response).to.be.deep.equal({ status: 201, response: payload });
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
    
      it('return an object with status 500 and an error message "Internal Server Error"', async () => {
        const response = await customer.create({
          name: 'Roberto',
          lastName: 'Oliveira',
          email: 'roberto@email.com',
          contact: '11987654321',
          password: 'roberto_password',
          type: 'customer',
          address: {
            street: 'avenida',
            number: '100A',
            district: 'Bairro',
            zipcode: '45687-899',
            city: 'cidade',
            state: 'estado'
          },
        })
        expect(response).to.be.deep.equal({ status: 500, response: { error: 'Internal Server Error'} });
      });

      it('return an object with status 400 and an error message "name is required"', async () => {
        const response = await customer.create({
          lastName: 'Oliveira',
          email: 'roberto@email.com',
          contact: '11987654321',
          password: 'roberto_password',
          type: 'customer',
          address: {
            street: 'avenida',
            number: '100A',
            district: 'Bairro',
            zipcode: '45687-899',
            city: 'cidade',
            state: 'estado'
          },
        } as Customer)
        
        expect(response.status).to.be.equal(400);
      });
    });
  });
});