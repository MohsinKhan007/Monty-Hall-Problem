"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMontyHallData = void 0;
const joi_1 = __importDefault(require("joi"));
const validateMontyHallData = async (createSimulations) => {
    const MontyHallSchema = joi_1.default.object({
        noOfSimulations: joi_1.default.number().integer().required(),
        changeDoor: joi_1.default.boolean().required(),
    });
    return MontyHallSchema.validateAsync(createSimulations)
        .then((data) => {
        return { data, error: null };
    })
        .catch((err) => {
        return { data: null, error: err };
    });
};
exports.validateMontyHallData = validateMontyHallData;
//# sourceMappingURL=validation.js.map