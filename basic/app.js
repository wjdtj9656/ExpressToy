const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");

const app = express();

const rootDir = require("./util/path");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop");
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
app.listen(3000);
