"use strict";

const sql = require("../config/database");

class Products {
  constructor(id_products, lokasi, harga, luas) {
    this.id_products = id_products;
    this.lokasi = lokasi;
    this.harga = harga;
    this.luas = luas;
  }

  static showAllProduct(result) {
    let sqlQuery = `SELECT * FROM products`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log(null, err);
      } else {
        let rawData = res;
        let products = [];
        let product;

        rawData.forEach((eachData) => {
          product = new Products(eachData.id_products, eachData.lokasi, eachData.luas, eachData.harga);
          products.push(product);
        });
        console.log("Data product =>", res);
        result(null, products);
      }
    });
  }
}

module.exports = { Products };
