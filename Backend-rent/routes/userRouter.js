"use strict";

const express = require("express");
const userRoutes = express.Router();
const { Users } = require("../controller/userController");

userRoutes.get("/users", Users.pageUsers);

module.exports = userRoutes;
