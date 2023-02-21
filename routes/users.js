import express from "express";

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

// Router is a function that takes in a request and returns a response
const router = express.Router();

// Route to get user data
router.get("/users", getUsers);

// Route to create a new user
router.post("/users", createUser);

// Route to get a single user with a given ID
router.get("/users/:id", getUser);

// Route to delete a user with a given ID
router.delete("/users/:id", deleteUser);

// Update a user with a given ID using patch method
router.patch("/users/:id", updateUser);

export default router;
