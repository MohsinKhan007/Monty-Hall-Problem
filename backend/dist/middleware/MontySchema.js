"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MontyHallSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.MontyHallSchema = joi_1.default.object().keys({
    noOfSimulations: joi_1.default.number().integer().required(),
    changeDoor: joi_1.default.boolean().required(),
});
//# sourceMappingURL=MontySchema.js.map