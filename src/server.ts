// Import
import express from "express";
import { router as contactsApi } from "./routes/contact.routes";
import {router as usersApi} from "./routes/user.routes";
import { errorHandler } from "./middleware/error.handler";
import { connectDb } from "./config/dbConnection";
const dotenv = require("dotenv").config();

connectDb();
const app = express();

app.use(express.json());
app.use("/contacts", contactsApi);
app.use("/users", usersApi);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
