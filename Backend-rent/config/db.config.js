"use strict";
require("dotenv").config;

module.exports = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  USER: process.env.USER,
  PASSWORD: process.env.PASSOWRD,
  DB: process.env.DB,
};
