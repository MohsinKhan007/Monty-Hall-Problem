"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const errorHandler_1 = __importDefault(require("../middleware/errorHandler"));
const routes_1 = __importDefault(require("../routes"));
function createServer() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.urlencoded());
    app.use(express_1.default.json());
    app.use(errorHandler_1.default);
    app.get('/', (req, res) => {
        res.status(200).send({ message: 'Monty Hall Backend' });
    });
    app.post('/', (req, res) => {
        res.status(200).send({ message: 'Monty Hall Backend' });
    });
    app.use('/monty', routes_1.default);
    app.get('*', (req, res) => {
        res.status(404).send('End point Not Found');
    });
    app.post('*', (req, res) => {
        res.status(404).send('End point Not Found');
    });
    return app;
}
exports.default = createServer;
//# sourceMappingURL=server.js.map