import { Router } from "express";
import {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} from "../controllers/contact.controller";

// const dotenv = require("dotenv").config();

export const router = Router();

router.get("/", getContacts);
router.post("/", createContact);
router.delete("/:id", deleteContact);
router.patch("/:id", updateContact);
router.get("/:id", getContact);
