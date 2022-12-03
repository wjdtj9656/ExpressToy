const express = require("express");

const Router = express.Router();

Router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product"method="post"><input type="text" name="title"><button>submit</button></form>'
  );
});
Router.post("/product", (req, res, next) => {
  console.log(req.body);
  console.log(res.body);
  res.redirect("/");
});

module.exports = Router;
