"use strict";

const express = require("express");
const productRoutes = express.Router();
const { ProductController } = require("../controller/productController");

// productRoutes.get("/", Product.pageProduct);
productRoutes.get("/", ProductController.getAllProducts);

module.exports = productRoutes;
