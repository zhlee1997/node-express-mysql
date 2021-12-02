const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node_complete", "root", "leezonghan19", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
