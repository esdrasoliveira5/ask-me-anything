"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressSchema = void 0;
const zod_1 = require("zod");
const AddressSchema = zod_1.z.object({
    street: zod_1.z.string({
        required_error: 'street is required',
        invalid_type_error: 'street must be a string',
    }).min(3, { message: 'street must be 3 or more characters long' }),
    number: zod_1.z.string({
        required_error: 'number is required',
        invalid_type_error: 'number must be a string',
    }).min(3, { message: 'number must be 3 or more characters long' }),
    district: zod_1.z.string({
        required_error: 'district is required',
        invalid_type_error: 'district must be a string',
    }).min(3, { message: 'district must be 3 or more characters long' }),
    zipcode: zod_1.z.string({
        required_error: 'zipcode is required',
        invalid_type_error: 'zipcode must be a number',
    }).length(8, { message: 'zipcode must be 8 characters long' }),
    city: zod_1.z.string({
        required_error: 'city is required',
        invalid_type_error: 'city must be a string',
    }).min(3, { message: 'city must be 3 or more characters long' }),
    state: zod_1.z.string({
        required_error: 'state is required',
        invalid_type_error: 'state must be a string',
    }).min(2, { message: 'state must be 3 or more characters long' }),
});
exports.AddressSchema = AddressSchema;
