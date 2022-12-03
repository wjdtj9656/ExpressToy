const path = require("path");

const express = require("express");

const Routes = express.Router();

const rootDir = require("../util/path");
Routes.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = Routes;
