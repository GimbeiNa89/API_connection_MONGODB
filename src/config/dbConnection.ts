import mongoose, { Connection } from "mongoose";
require("dotenv").config();

export const connectDb = async () => {
  try {
    if (process.env.CONNECTION_STRING) {
      const mongodbConnection = process.env.CONNECTION_STRING;
      const connect = await mongoose.connect(mongodbConnection);
      console.log(
        "Database connected: ",
        connect.connection.host,
        connect.connection.name
      );
    } else {
      console.error(
        "La variabile CONNECTION_STRING non è definita nel file .env"
      );
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
