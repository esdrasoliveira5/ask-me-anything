"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = void 0;
const zod_1 = require("zod");
const WorkerType_1 = require("./WorkerType");
const CustomerSchema = zod_1.z.object({
    hires: zod_1.z.array(WorkerType_1.WorkerSchema),
});
exports.CustomerSchema = CustomerSchema;
