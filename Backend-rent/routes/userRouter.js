"use strict";

const express = require("express");
const userRoutes = express.Router();
const { Users } = require("../controller/userController");

userRoutes.get("/", Users.getAllUsers);
userRoutes.get("/:id", Users.getUserById);
userRoutes.post("/add", Users.createNewUser);
userRoutes.put("/update/:id", Users.updateUserById);
userRoutes.delete("/delete/:id", Users.deleteUserById);

module.exports = userRoutes;
