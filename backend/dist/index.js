"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./utils/server"));
dotenv_1.default.config();
const app = (0, server_1.default)();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at port ${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map