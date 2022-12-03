const express = require("express");

const Routes = express.Router();

Routes.get("/", (req, res, next) => {
  res.send("<h1>Hello from express</h1>");
});

module.exports = Routes;
