const Sequelize = require("sequelize");

const sequelize = new Sequelize("express", "root", "ssafy", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
