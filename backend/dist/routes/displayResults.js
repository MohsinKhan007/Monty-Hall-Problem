"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getResults_1 = require("../controllers/getResults");
const router = express_1.default.Router();
router.post('/', getResults_1.getResults);
exports.default = router;
//# sourceMappingURL=displayResults.js.map