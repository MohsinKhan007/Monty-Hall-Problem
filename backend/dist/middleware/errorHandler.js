"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError {
    constructor(message, status = 500) {
        this.message = message;
        this.status = status;
    }
}
exports.CustomError = CustomError;
function handleError(err, req, res, next) {
    let customError = err;
    if (!(err instanceof CustomError)) {
        customError = new CustomError('Error in server');
    }
    res.status(customError.status).send(customError);
}
exports.default = handleError;
//# sourceMappingURL=errorHandler.js.map