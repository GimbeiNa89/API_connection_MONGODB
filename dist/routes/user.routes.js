"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
exports.router = (0, express_1.Router)();
exports.router.post("/register", user_controller_1.registerUser);
exports.router.post("/login", user_controller_1.loginUser);
exports.router.get("/current", user_controller_1.currentUser);
// router.get("/", getUsers);
// router.post("/", createUser);
// router.delete("/:id", deleteUser);
// router.patch("/:id", updateUser);
// router.get("/:id", getUser);
