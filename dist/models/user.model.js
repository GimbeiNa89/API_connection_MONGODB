"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        require: [true, "Please add the user name"],
    },
    email: {
        type: String,
        require: [true, "Please add the user email address"],
    },
    password: {
        type: String,
        require: [true, "Please ad the user password"],
    },
}, { timestamps: true });
exports.User = mongoose_1.default.model("User", userSchema);
