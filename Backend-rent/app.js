"use strict";

require("dotenv").config;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { router } = require("./routes/router");
const PORT = process.env.PORT || 4000;
const originalCors = {
  host: `http://localhost:${PORT}`,
};

app.use(cors(originalCors));
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use("/", router);

app.listen(PORT, () => console.log("listening on port", PORT));
