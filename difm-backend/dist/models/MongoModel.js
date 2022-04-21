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
Object.defineProperty(exports, "__esModule", { value: true });
class MongoModel {
    constructor(model) {
        this.model = model;
        this.create = (obj) => __awaiter(this, void 0, void 0, function* () { return this.model.create(Object.assign({}, obj)); });
        this.read = () => __awaiter(this, void 0, void 0, function* () { return this.model.find(); });
        this.readOne = (id) => __awaiter(this, void 0, void 0, function* () { return this.model.findById(id); });
        this.update = (id, obj) => __awaiter(this, void 0, void 0, function* () { return this.model.findByIdAndUpdate(id, Object.assign({}, obj), { new: true }); });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () { return this.model.findByIdAndDelete(id); });
    }
}
exports.default = MongoModel;
