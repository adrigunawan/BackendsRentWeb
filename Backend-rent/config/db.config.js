"use strict";
require("dotenv").config;

module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSOWRD,
  DB: process.env.DB,
};
