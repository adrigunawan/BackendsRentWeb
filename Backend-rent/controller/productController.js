"use strict";
const sql = require("../config/database");
const { Products } = require("../model/Product");

class ProductController {
  static getAllProducts(req, res) {
    Products.showAllProduct((err, data) => {
      if (err) {
        console.log("Not Connected", err);
      } else {
        res.json({
          title: "Products...",
          message: "All Products",
          status: 200,
          data,
        });
      }
    });
  }

  static getProductById(req, res) {
    const id = req.params.id;
    Products.showProductById(id, (err, data) => {
      if (err) {
        console.log("Data not found...", err);
      } else {
        res.json({
          title: "Products",
          status: 200,
          message: "Products by id",
          data,
        });
      }
    });
  }

  static AddNewProducts(req, res) {
    let payload = req.body;
    Products.createNewProducts(payload, (err, data) => {
      if (err) {
        console.log(`Controller error`);
      } else {
        res.json({
          title: "API Backend Toko Buku",
          message: "Koleksi Buku",
          status: 200,
          data,
        });
      }
    });
  }

  static updateProductsById(req, res) {
    let payload = req.body;
    let id = req.params.id;

    Products.updateNewProducts(id, payload, (err, data) => {
      if (err) {
        console.log("Error:", err);
      } else {
        res.json("Data yang diubah =>", data);
      }
    });
  }

  static deleteProductsById(req, res) {
    const payload = req.body;
    const id = req.params.id;
    Products.deleteProducts(id, payload, (err, data) => {
      if (err) {
        console.log(err, null);
      } else {
        console.log("Data dihapus....", res);
      }
    });
  }
}
module.exports = { ProductController };
