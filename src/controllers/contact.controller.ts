import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Contact } from "../models/contacts.model";
// import { errorHandler } from "../middleware/error.handler";

// @desc Get all contacts
// @route GET /contacts
// @access public

export const getContacts = asyncHandler(async (req: Request, res: Response) => {
  const contacts = await Contact.find();
  res.status(200).json({ message: "get all the contacts", contacts });
});

// @desc Create new contact
// @route POST /contacts
// @access public

export const createContact = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, phone } = req.body;
    const newContact = await Contact.create({
      name,
      email,
      phone,
    });
    if (!newContact) {
      res.status(400);
      throw new Error("All fields are mandatory");
    } else {
      res.status(201).json({ message: "created a new contact", newContact });
    }
  }
);

// @desc Get all contacts
// @route GET /contacts
// @access public

export const getContact = asyncHandler(async (req: Request, res: Response) => {
  const findAContact = await Contact.findById(req.params.id);
  if (!findAContact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(findAContact);
});

// @desc Update contact
// @route PATCH /contacts/:id
// @access public

export const updateContact = asyncHandler(
  async (req: Request, res: Response) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res
      .status(201)
      .json({ message: "contact updated correctly", updatedContact });
  }
);

// @desc Delete contact
// @route DELETE /contacts/:id
// @access public

export const deleteContact = asyncHandler(
  async (req: Request, res: Response) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
   await Contact.deleteOne();
    res.status(201).json({ message: "contact deleted!", contact});
  }
);

// module.exports = { getContact };
