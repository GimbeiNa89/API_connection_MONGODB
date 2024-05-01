"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = exports.loginUser = exports.registerUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_model_1 = require("../models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
// @desc Register a user
// @route POST /users/register
// @access public
exports.registerUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const userData: IUser = req.body;
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw Error("All fields are mandatory");
    }
    // const email = userData.email;
    const userAvailable = yield user_model_1.User.findOne(email);
    if (userAvailable) {
        res.status(400);
        throw Error("User already registered");
    }
    // Hash password
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = yield user_model_1.User.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log(`User created: ${user}`);
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    }
    else {
        res.status(400);
        throw new Error("User data used not valid");
    }
}));
// @desc Login a user
// @route POST /users/login
// @access public
exports.loginUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "Login user" });
}));
// @desc Current user info
// @route POST /users/current
// @access private
exports.currentUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "Current user information" });
}));
