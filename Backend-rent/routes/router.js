"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    title: "Halo bang ?",
    message: "Halo bang",
    status: 200,
  })
})

module.exports = router;