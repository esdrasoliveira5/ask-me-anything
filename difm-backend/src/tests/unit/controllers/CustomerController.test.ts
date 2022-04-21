import { Request, Response } from 'express';
import * as sinon from 'sinon';
import chai from 'chai';
import CustomerController from '../../../controllers/CustomerController';

const { expect } = chai;
const customer = new CustomerController();
const request = {} as Request;
const response = {} as Response;

describe('1 - Test CustomerController', () => {
  describe('1.1 - method create', () => {
    describe('a) if success', () => {
      const payload = {
        status: 201,
        response: {
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
      }
    
      before(async () => {
        request.body = {
          name: 'Roberto',
          lastName: 'Oliveira',
          email: 'roberto@email.com',
          contact: '11987654321',
          password: '123456789',
          type: 'customer',
          address: {
            street: 'avenida',
            number: '100A',
            district: 'Bairro',
            zipcode: '45687-899',
            city: 'cidade',
            state: 'estado'
          }
        }
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(customer.service, 'create')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 201 and the user created', async () => {
        await customer.create(request, response);
        
        expect((response.status as sinon.SinonStub).calledWith(201))
        expect((response.json as sinon.SinonStub).calledWith({
          "name": 'Roberto',
          "lastName": 'Oliveira',
          "email": 'roberto@email.com',
          "contact": '11987654321',
          "password": '123456789',
          "type": 'customer',
          "hires": [],
          "address": {
            "street": 'avenida',
            "number": '100A',
            "district": 'Bairro',
            "zipcode": '45687-899',
            "city": 'cidade',
            "state": 'estado'
          }
        }))
      });
    });
    describe('b) if fails', () => {
      const payload = {
        status: 400,
        response: {
          error: "Error",
        }
      }
    
      before(async () => {
        request.body = {
          name: 'Roberto',
          lastName: 'Oliveira',
          email: 'roberto@email.com',
          contact: '11987654321',
          password: '123456789',
          type: 'customer',
          address: {
            street: 'avenida',
            number: '100A',
            district: 'Bairro',
            zipcode: '45687-899',
            city: 'cidade',
            state: 'estado'
          }
        }
        response.status = sinon.stub().returns(response)
        response.json = sinon.stub()
        
        sinon
          .stub(customer.service, 'create')
          .resolves(payload);
      });
    
      after(()=>{
        sinon.restore();
      })
    
      it('return the status 500 and error message "Internal Server Error"', async () => {
        await customer.create(request, response);
         
        expect((response.status as sinon.SinonStub).calledWith(500));
        expect((response.json as sinon.SinonStub).calledWith({
          "error": "Internal Server Error"
        }))
      });
    });
  });
});  