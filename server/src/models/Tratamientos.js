const Sequelize = require("sequelize");
const conn = require("../config/sqlconn");

const Tratamientos = conn.define(
  "T_TRATAMIENTOS",
  {
    ID_TRATAMIENTO: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    NOMBRE: {
      type: Sequelize.STRING(100),
      unique: true,
      allowNull: false,
    },
    DESCRIPCION: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    PRODUCTO: {
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

module.exports = Tratamientos;
