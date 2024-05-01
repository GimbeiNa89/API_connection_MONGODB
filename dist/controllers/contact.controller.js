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
exports.deleteContact = exports.updateContact = exports.getContact = exports.createContact = exports.getContacts = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const contacts_model_1 = require("../models/contacts.model");
// import { errorHandler } from "../middleware/error.handler";
// @desc Get all contacts
// @route GET /contacts
// @access public
exports.getContacts = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield contacts_model_1.Contact.find();
    res.status(200).json({ message: "get all the contacts", contacts });
}));
// @desc Create new contact
// @route POST /contacts
// @access public
exports.createContact = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone } = req.body;
    const newContact = yield contacts_model_1.Contact.create({
        name,
        email,
        phone,
    });
    if (!newContact) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    else {
        res.status(201).json({ message: "created a new contact", newContact });
    }
}));
// @desc Get all contacts
// @route GET /contacts
// @access public
exports.getContact = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findAContact = yield contacts_model_1.Contact.findById(req.params.id);
    if (!findAContact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(findAContact);
}));
// @desc Update contact
// @route PATCH /contacts/:id
// @access public
exports.updateContact = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = yield contacts_model_1.Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = yield contacts_model_1.Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res
        .status(201)
        .json({ message: "contact updated correctly", updatedContact });
}));
// @desc Delete contact
// @route DELETE /contacts/:id
// @access public
exports.deleteContact = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = yield contacts_model_1.Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    yield contacts_model_1.Contact.deleteOne();
    res.status(201).json({ message: "contact deleted!", contact });
}));
// module.exports = { getContact };
