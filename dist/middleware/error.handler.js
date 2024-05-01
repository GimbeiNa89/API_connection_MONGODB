"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const constants_1 = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    console.log(statusCode);
    switch (statusCode) {
        case constants_1.constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants_1.constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants_1.constants.UNAUTHORIZED:
            res.json({
                title: "You don't have the permission",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants_1.constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants_1.constants.SERVER_ERROR:
            res.json({
                title: "Server error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            console.log("No error, All good!");
            break;
    }
};
exports.errorHandler = errorHandler;
