"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
describe('POST /', () => {
    it('returns status 200 for simple post request', async () => {
        const res = await (0, supertest_1.default)(index_1.default).post('/').send();
        expect(res.statusCode).toEqual(200);
    });
});
//# sourceMappingURL=index.test.js.map