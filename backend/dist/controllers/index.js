"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResults = void 0;
const MontyHall_1 = __importDefault(require("../Class/MontyHall"));
const validation_1 = require("../middleware/validation");
const getResults = async (req, res) => {
    try {
        const validate = await (0, validation_1.validateMontyHallData)(req.body);
        if (validate.data == null) {
            return res.status(500).send('Input values are not correct');
        }
        let { noOfSimulations, changeDoor } = req.body;
        let monthy = new MontyHall_1.default(noOfSimulations, changeDoor);
        monthy.startSimulations();
        let results = monthy.getSimulationResult();
        res.status(200).send(results);
    }
    catch (e) {
        res.status(500).send(e);
        throw new Error(e);
    }
};
exports.getResults = getResults;
//# sourceMappingURL=index.js.map