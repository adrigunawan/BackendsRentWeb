"use strict";

require("dotenv").config();

const mysql = require("mysql");
const DBconfig = require("./db.config");

const connectDB = mysql.createConnection({
  host: DBconfig.HOST,
  user: DBconfig.USER,
  passowrd: DBconfig.PASSWORD,
  database: DBconfig.DB,
});

connectDB.connect((err) => {
  if (err) throw err;
  console.log("Database connected....");
});

module.exports = connectDB;
