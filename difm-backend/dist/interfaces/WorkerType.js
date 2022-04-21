"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerSchema = void 0;
const zod_1 = require("zod");
const UserType_1 = require("./UserType");
const WorkerSchema = zod_1.z.object({
    service: zod_1.z.string({
        required_error: 'service is required',
        invalid_type_error: 'service must be a string',
    }).min(3, { message: 'lastName must be 3 or more characters long' }),
    categorys: zod_1.z.array(zod_1.z.string()),
    price: zod_1.z.number({
        required_error: 'price is required',
        invalid_type_error: 'price must be a number',
    }).min(1, { message: 'price cannot be less than 1' })
        .or(zod_1.z.literal('a combinar')),
    customers: zod_1.z.array(UserType_1.UserSchema),
});
exports.WorkerSchema = WorkerSchema;
