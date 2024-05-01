import mongoose from "mongoose";
import { IContact } from "../types/contacts.type";

const contactSchema = new mongoose.Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },

    email: {
      type: String,
      required: [true, "Please add the contact email"],
    },

    phone: {
      type: Number,
      required: [true, "Please add the contact phone number"],
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);
