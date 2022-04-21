"use strict";
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
const _1 = __importDefault(require("."));
const CustomerService_1 = __importDefault(require("../services/CustomerService"));
class CustomerController extends _1.default {
    constructor(service = new CustomerService_1.default(), route = '/customer') {
        super(service);
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const { status, response } = yield this.service.create(body);
            return res.status(status).json(response);
        });
        this._route = route;
    }
    get route() { return this._route; }
}
exports.default = CustomerController;
