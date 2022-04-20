import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import App from '../../app';
import { Response } from 'superagent';
import { User } from '../../interfaces/UserType';

const app = new App();
const { expect } = chai;
chai.use(chaiHttp);

describe('1 - Test endpoint POST /users', () => {
  describe('1.1 - if success', () => {
    let chaiHttpResponse: Response;
    const loginPayload = {
      user: {
        id: '1',
        name: 'Roberto',
        lastName: 'Encanador',
        email: 'roberto@email.com',
        password: '123456789',
        type: 'worker',
        address: {
          street: 'avenida',
          number: '100A',
          district: 'Bairro',
          zipcode: 98765432,
          city: 'cidade',
          state: 'estado'
        }
      },
      token: 'bearer token'
    }
    const userPayload = {
      id: '1',
      name: 'Roberto',
      lastName: 'Encanador',
      email: 'roberto@email.com',
      contact: 987654321,
      password: '$2b$10$Wqd2FoGq/7Rk3BUVR1tcMuitl.SX32bmFLz5lvXYu7VF0V7NXdrTO',//roberto_password
      addressId: 1,
    };
    let findUnique: sinon.SinonStub
    before(() => {
      findUnique = sinon.stub(prisma.users, 'findUnique').resolves(userPayload)
    });
    after(()=>{
      findUnique.restore();
    });

    it('A) return status 201 and the user created', async () => {
      chaiHttpResponse = await chai
         .request(app)
         .post('/users')
         .set('X-API-Key', 'foobar')
         .send({ email: 'roberto@email.com', password: 'roberto_password' })
                  
      expect(chaiHttpResponse).to.have.status(201);
      expect(chaiHttpResponse.body.user).to.deep.equal(loginPayload.user);
      expect(chaiHttpResponse.body).to.have.deep.keys(loginPayload);
    });
  });
});