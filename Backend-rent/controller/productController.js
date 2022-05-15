"use strict";

const { Products } = require("../model/Product");

class ProductController {
  static getAllProducts(req, res) {
    Products.showAllProduct((data, err) => {
      if (err) {
        console.log('Not Connected', err);
      } else {
        res.json({
          title: "Products...",
          message: "All Products",
          status: 200,
          data
        });
      }
    });
  }
}

module.exports = { ProductController };
