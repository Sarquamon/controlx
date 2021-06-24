const Sequelize = require("sequelize");
const conn = require("../config/sqlconn");

const Clientes = conn.define(
  "T_CLIENTES",
  {
    ID_CLIENTE: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    CURP: {
      type: Sequelize.STRING(100),
      unique: true,
      allowNull: false,
    },
    FIRST_NAME: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    PHONE: {
      type: Sequelize.STRING(50),
      unique: false,
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = Clientes;
