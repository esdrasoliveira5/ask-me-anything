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
const CustomerModel_1 = __importDefault(require("../models/CustomerModel"));
class CustomerService extends _1.default {
    constructor(model = new CustomerModel_1.default()) {
        super(model);
        this.create = (obj) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.create(Object.assign(Object.assign({}, obj), { hires: [] }));
            if (response === undefined) {
                return {
                    status: 500,
                    response: { error: 'Internal Server Error' },
                };
            }
            return { status: 201, response };
        });
    }
}
exports.default = CustomerService;
