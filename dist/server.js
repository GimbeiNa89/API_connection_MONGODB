"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
const express_1 = __importDefault(require("express"));
const contact_routes_1 = require("./routes/contact.routes");
const user_routes_1 = require("./routes/user.routes");
const error_handler_1 = require("./middleware/error.handler");
const dbConnection_1 = require("./config/dbConnection");
const dotenv = require("dotenv").config();
(0, dbConnection_1.connectDb)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/contacts", contact_routes_1.router);
app.use("/users", user_routes_1.router);
app.use(error_handler_1.errorHandler);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
