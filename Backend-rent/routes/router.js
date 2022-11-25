"use strict";

const express = require("express");
const router = express.Router();
const { Home } = require("../controller/Controller");
const { productRoutes } = require("./productRouter");
const userRoutes = require("./userRouter");

router.use("/", Home.Homepage);
router.get("/products", productRoutes);
router.get("/users", userRoutes);

module.exports = {router};
