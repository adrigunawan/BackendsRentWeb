"use strict";

require("dotenv").config();

const mysql = require("mysql");
const db = require("./db.config");

const connectDB = mysql.createConnection({
  host: db.HOST,
  port: db.PORT,
  user: db.USER,
  passowrd: db.PASSWORD,
  database: db.DB,
});

connectDB.connect((err) => {
  if (err) throw err;
  console.log("Database connected....");
});

module.exports = connectDB;
