import { Router } from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/user.controller";

export const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", currentUser);

// router.get("/", getUsers);
// router.post("/", createUser);
// router.delete("/:id", deleteUser);
// router.patch("/:id", updateUser);
// router.get("/:id", getUser);
