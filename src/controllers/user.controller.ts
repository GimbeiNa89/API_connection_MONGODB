import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import { IUser } from "../types/user.type";

// @desc Register a user
// @route POST /users/register
// @access public

export const registerUser = asyncHandler(async (
  req: Request,
  res: Response
) => {
  // const userData: IUser = req.body;
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw Error("All fields are mandatory");
  }
  // const email = userData.email;
  const userAvailable = await User.findOne(email);
  if (userAvailable) {
    res.status(400);
    throw Error("User already registered");
  }
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`User created: ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data used not valid");
  }
 }
);

// @desc Login a user
// @route POST /users/login
// @access public

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Login user" });
});

// @desc Current user info
// @route POST /users/current
// @access private

export const currentUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Current user information" });
});
