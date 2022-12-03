const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop");
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>page not found</h1>");
});
app.listen(3000);
