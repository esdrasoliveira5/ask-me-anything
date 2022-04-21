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
const CustomerController_1 = __importDefault(require("../../../controllers/CustomerController"));
const { expect } = chai_1.default;
const customer = new CustomerController_1.default();
const request = {};
const response = {};
describe('3 - Test CustomerController', () => {
    describe('3.1 - method create', () => {
        describe('if success', () => {
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
            };
            before(() => __awaiter(void 0, void 0, void 0, function* () {
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
                };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(customer.service, 'create')
                    .resolves(payload);
            }));
            after(() => {
                sinon.restore();
            });
            it('return the status 201 and the user created', () => __awaiter(void 0, void 0, void 0, function* () {
                yield customer.create(request, response);
                expect(response.status.calledWith(201));
                expect(response.json.calledWith({
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
                }));
            }));
        });
        describe('if fails', () => {
            const payload = {
                status: 400,
                response: {
                    error: "Error",
                }
            };
            before(() => __awaiter(void 0, void 0, void 0, function* () {
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
                };
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub();
                sinon
                    .stub(customer.service, 'create')
                    .resolves(payload);
            }));
            after(() => {
                sinon.restore();
            });
            it('return the status 500 and error message "Internal Server Error"', () => __awaiter(void 0, void 0, void 0, function* () {
                yield customer.create(request, response);
                expect(response.status.calledWith(500));
                expect(response.json.calledWith({
                    "error": "Internal Server Error"
                }));
            }));
        });
    });
});
