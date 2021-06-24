const Sequelize = require("sequelize");
const conn = require("../config/sqlconn");

const Productos = conn.define(
  "T_PRODUCTOS",
  {
    ID_PRODUCTO: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    MARCA: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    NOMBRE: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    PRECIO: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = Productos;
