"use strict";

const express = require("express");
const productRoutes = express.Router();
const { ProductController } = require("../controller/productController");

// productRoutes.get("/", Product.pageProduct);
productRoutes.get("/", ProductController.getAllProducts);
productRoutes.get("/:id", ProductController.getProductById);
productRoutes.post("/add", ProductController.AddNewProducts);
productRoutes.put("/update/:id", ProductController.updateProductsById);
productRoutes.delete("/delete/:id", ProductController.deleteProductsById);

module.exports = { productRoutes };
