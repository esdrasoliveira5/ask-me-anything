"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MongoModel_1 = __importDefault(require("./MongoModel"));
const customerSchema = new mongoose_1.Schema({
    name: String,
    lastName: String,
    email: String,
    contact: String,
    password: String,
    type: String,
    hires: Array,
    address: Object,
}, { versionKey: false });
class CustomerModel extends MongoModel_1.default {
    constructor(model = (0, mongoose_1.model)('customer', customerSchema)) {
        super(model);
    }
}
exports.default = CustomerModel;
