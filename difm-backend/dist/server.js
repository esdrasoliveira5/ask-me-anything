"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const routes_1 = __importDefault(require("./routes/routes"));
const CustomerController_1 = __importDefault(require("./controllers/CustomerController"));
const server = new app_1.default();
const customerController = new CustomerController_1.default();
const customerRouter = new routes_1.default();
customerRouter.addRoute(customerController);
server.addRouter(customerRouter.router);
exports.default = server;
