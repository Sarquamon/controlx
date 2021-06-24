const { Op } = require("sequelize");
const Empleados = require("../../models/Empleados");

const findOneEmpleado = (curp, empleadoID = null) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Empleados.findOne({
        attributes: ["ID_EMPLEADO"],
        where: {
          [Op.or]: [{ CURP: curp || null }, { ID_EMPLEADO: empleadoID }],
        },
      });
      return resolve(result);
    } catch (e) {
      console.log("\nError retrieving information: \n", e);
      return reject("\nError retrieving information: \n", e);
    }
  });
};

const findAllEmpleados = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Empleados.findAll();
      if (result.length > 0) {
        resolve(result);
      } else {
        resolve(false);
      }
    } catch (e) {
      console.log("\nError retrieving information findAllEmpleados: \n", e);
      return reject("\nError retrieving information findAllEmpleados: \n", e);
    }
  });
};

module.exports = {
  findOneEmpleado,
  findAllEmpleados,
};
