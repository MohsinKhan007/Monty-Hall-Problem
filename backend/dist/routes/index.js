"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', controllers_1.getResults);
exports.default = router;
//# sourceMappingURL=index.js.map