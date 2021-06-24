const Sequelize = require("sequelize");
const conn = require("../config/sqlconn");

const Empleados = conn.define(
  "T_EMPLEADOS",
  {
    ID_EMPLEADO: {
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
    PHONE: {
      type: Sequelize.STRING(50),
      unique: false,
      allowNull: false,
    },
    FIRST_NAME: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    LAST_NAME: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    RFC: {
      type: Sequelize.STRING(100),
      unique: true,
      allowNull: false,
    },
    ADDRESS: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = Empleados;
