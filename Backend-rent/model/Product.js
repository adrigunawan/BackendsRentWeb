"use strict";

const sql = require("../config/database");

class Products {
  constructor(id_products, lokasi, luas, harga) {
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
        let rawData = JSON.parse(JSON.stringify(res));
        let products = [];
        let product;

        rawData.forEach((eachData) => {
          product = new Products(eachData.id_products, eachData.lokasi, eachData.luas, eachData.harga);
          products.push(product);
        });
        console.log("Data product =>", rawData);
        result(null, products);
      }
    });
  }

  static showProductById(id, result) {
    let sqlQuery = `SELECT * FROM products WHERE id_products = ${id}`;
    sql.query(sqlQuery, (err, res) => {
      if (err) {
        console.log("Error:", err);
      } else {
        let rawData = JSON.parse(JSON.stringify(res));
        let products = [];
        let product;

        rawData.forEach((eachData) => {
          product = new Products(eachData.id_products, eachData.lokasi, eachData.luas, eachData.harga);
          products.push(product);
        });
        console.log("Data product by id =>", rawData);
        result(null, products);
      }
    });
  }

  static createNewProducts(data, result) {
    let sqlQuery = `INSERT INTO products SET ?`;
    sql.query(sqlQuery, data, (err, res) => {
      if (err) {
        console.log("ini err", err);
        result(err, null);
      } else {
        result(res, "Data ditambahkan.....");
      }
    });
  }

  static updateNewProducts(id, data, result) {
    let updatePayload = data;
    let sqlQuery = `UPDATE products SET ? WHERE id_products = ${id}`;
    sql.query(sqlQuery, updatePayload, (err, res) => {
      if (err) throw err;
      result("Data Berhasil diubah...", res);
    });
  }

  static deleteProducts(id, data, result) {
    const deletePayload = data;
    const sqlQuery = `DELETE FROM products WHERE id_products = ${id}`;
    sql.query(sqlQuery, deletePayload, (err, res) => {
      if (err) throw err;
      result("Data berhasil dihapus =>");
    });
  }
}

module.exports = { Products };
