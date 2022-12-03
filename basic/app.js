const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop");
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);
