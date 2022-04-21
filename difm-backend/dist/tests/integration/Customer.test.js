"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = __importStar(require("sinon"));
const chai_1 = __importDefault(require("chai"));
const chaiHttp = require("chai-http");
const app_1 = __importDefault(require("../../app"));
const CustomerModel_1 = __importDefault(require("../../models/CustomerModel"));
const customer = new CustomerModel_1.default();
const { app } = new app_1.default();
const { expect } = chai_1.default;
chai_1.default.use(chaiHttp);
describe('1 - Test endpoint POST /customer', () => {
    describe('1.1 - if success', () => {
        let chaiHttpResponse;
        const customerPayload = {
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
        };
        before(() => {
            sinon
                .stub(customer.model, 'create')
                .resolves(customerPayload);
        });
        after(() => {
            sinon.restore();
        });
        it('A) return status 201 and the user created', () => __awaiter(void 0, void 0, void 0, function* () {
            chaiHttpResponse = yield chai_1.default
                .request(app)
                .post('/customer')
                .set('X-API-Key', 'foobar')
                .send(customerPayload);
            expect(chaiHttpResponse).to.have.status(201);
            expect(chaiHttpResponse.body).to.deep.equal(customerPayload);
        }));
    });
});
