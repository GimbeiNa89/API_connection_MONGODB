import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/user.type";

const userSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
