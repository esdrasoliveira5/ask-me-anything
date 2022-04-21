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
const CustomerService_1 = __importDefault(require("../../../services/CustomerService"));
const customer = new CustomerService_1.default();
const { expect } = chai_1.default;
describe('2 - Test customerServices', () => {
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
            };
            before(() => __awaiter(void 0, void 0, void 0, function* () {
                sinon
                    .stub(customer.model, 'create')
                    .resolves(payload);
            }));
            after(() => {
                sinon.restore();
            });
            it('return a object with status 201 and the customer created in the db', () => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield customer.create({
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
                    },
                });
                expect(response).to.be.deep.equal({ status: 201, response: payload });
            }));
        });
        describe('b) if fail', () => {
            before(() => __awaiter(void 0, void 0, void 0, function* () {
                sinon
                    .stub(customer.model, 'create')
                    .resolves(undefined);
            }));
            after(() => {
                sinon.restore();
            });
            it('return an object with status 500 and an error message "Internal Server Error"', () => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield customer.create({
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
                    },
                });
                expect(response).to.be.deep.equal({ status: 500, response: { error: 'Internal Server Error' } });
            }));
        });
    });
});
