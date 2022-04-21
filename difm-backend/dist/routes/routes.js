"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CustomRouter {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    addRoute(controller, route = controller.route) {
        this.router.post(route, controller.create);
    }
}
exports.default = CustomRouter;
