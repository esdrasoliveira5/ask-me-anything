"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const zod_1 = require("zod");
const AddressType_1 = require("./AddressType");
const UserSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: 'name is required',
        invalid_type_error: 'name must be a string',
    }).min(3, { message: 'name must be 3 or more characters long' }),
    lastName: zod_1.z.string({
        required_error: 'lastName is required',
        invalid_type_error: 'lastName must be a string',
    }).min(3, { message: 'lastName must be 3 or more characters long' }),
    email: zod_1.z.string({
        required_error: 'email is required',
        invalid_type_error: 'email must be a string',
    }).email({ message: 'email invalid' }),
    contact: zod_1.z.string({
        required_error: 'contact is required',
        invalid_type_error: 'contact must be a string',
    }).length(11, { message: 'contact must be 11 characters long' }),
    password: zod_1.z.string({
        required_error: 'password is required',
        invalid_type_error: 'password must be a string',
    }),
    type: zod_1.z.string(zod_1.z.literal('jobber')
        .or(zod_1.z.literal('customer'))),
    address: AddressType_1.AddressSchema,
});
exports.UserSchema = UserSchema;
