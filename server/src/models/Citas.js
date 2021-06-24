const Sequelize = require("sequelize");
const conn = require("../config/sqlconn");

const Citas = conn.define(
  "T_CITAS",
  {
    ID_CITA: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    NOMBRE: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    TELEFONO: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    SERVICIO: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    PRECIO: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    FECHACITA: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    HORACITA: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = Citas;
